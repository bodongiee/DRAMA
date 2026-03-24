<script>
  import { onMount, onDestroy } from 'svelte'
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import { robotScene, getRobot } from '../stores/robot.js'

  export let side = 'left' // 'left' | 'right'

  let container
  let renderer, camera, controls, animFrameId
  let currentScene = null
  let trackingJoint = null

  const _handPos = new THREE.Vector3()
  const _prevTarget = new THREE.Vector3()
  let needsInitialFocus = true  // 최초 포커스가 필요한지 여부

  // side 변경 시 재설정
  $: if (side) {
    trackingJoint = null
    needsInitialFocus = true
  }

  function resolveTrackingJoint() {
    const robot = getRobot()
    if (!robot) return
    const prefix = side === 'left' ? 'finger_l_' : 'finger_r_'
    const names = Object.keys(robot.joints)
      .filter(n => n.startsWith(prefix))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    trackingJoint = names.length > 0 ? robot.joints[names[0]] : null
  }

  function applyInitialFocus() {
    if (!trackingJoint || !controls) return
    trackingJoint.getWorldPosition(_handPos)
    controls.target.copy(_handPos)
    camera.position.copy(_handPos).add(new THREE.Vector3(0.12, 0.03, 0.12))
    _prevTarget.copy(_handPos)
    controls.update()
  }

  onMount(() => {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    container.appendChild(renderer.domElement)

    camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.01, 100)
    camera.position.set(0.3, 1.2, 0.3)

    controls = new OrbitControls(camera, renderer.domElement)
    controls.target.set(0, 1.0, 0)
    controls.enableDamping = true
    controls.dampingFactor = 0.1
    controls.minDistance = 0.05
    controls.maxDistance = 2.0
    controls.update()

    const unsub = robotScene.subscribe(scene => {
      currentScene = scene
    })

    function animate() {
      animFrameId = requestAnimationFrame(animate)

      // 로봇이 아직 로드 안 됐으면 계속 시도
      if (!trackingJoint) resolveTrackingJoint()

      if (trackingJoint) {
        if (needsInitialFocus) {
          // 최초 1회: 기본 오프셋으로 카메라 포커스
          applyInitialFocus()
          needsInitialFocus = false
        } else {
          // 이후: 손 움직임만큼 카메라를 이동
          trackingJoint.getWorldPosition(_handPos)
          const dx = _handPos.x - _prevTarget.x
          const dy = _handPos.y - _prevTarget.y
          const dz = _handPos.z - _prevTarget.z
          if (Math.abs(dx) + Math.abs(dy) + Math.abs(dz) > 0.0001) {
            controls.target.add({ x: dx, y: dy, z: dz })
            camera.position.add({ x: dx, y: dy, z: dz })
            _prevTarget.copy(_handPos)
          }
        }
      }

      controls.update()
      if (currentScene) renderer.render(currentScene, camera)
    }
    animate()

    const updateSize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    const ro = new ResizeObserver(updateSize)
    ro.observe(container)

    return () => {
      unsub()
      ro.disconnect()
      cancelAnimationFrame(animFrameId)
      controls.dispose()
      renderer.dispose()
    }
  })
</script>

<div class="hand-viewer-wrap">
  <div class="hand-viewer-header">
    <span class="hand-title">{side === 'left' ? 'Hand — Left' : 'Hand — Right'}</span>
  </div>
  <div class="hand-canvas" bind:this={container}></div>
</div>

<style>
  .hand-viewer-wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .hand-viewer-header {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background: rgba(79, 163, 247, 0.07);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    flex-shrink: 0;
  }

  .hand-title {
    font-size: 0.72em;
    color: var(--primary-color);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
  }

  .hand-canvas {
    flex: 1;
    min-height: 0;
  }
</style>
