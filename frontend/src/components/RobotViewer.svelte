<script>
  import { onMount } from 'svelte'
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
  import URDFLoader from 'urdf-loader'
  import { setRobot, initWebSocket, robotJointDefs, showGround, showGrid, autoRotate, activeTab, manualMode, joints, setJointAngle } from '../stores/robot.js'
  let container
  let statusText = 'Loading URDF & OBJ...'
  let loaded = false
  let sceneObj, groundObj, gridObj, axesObj, controlsObj

  onMount(() => {
    // ── Scene ──────────────────────────────────────────────
    const scene = new THREE.Scene()
    sceneObj = scene

    // ── Renderer ───────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.0
    container.appendChild(renderer.domElement)

    // ── Camera ─────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000)
    camera.position.set(1.0, 0.8, 1.0) // 카메라 초기 위치를 더 가깝게 수정

    // ── OrbitControls ──────────────────────────────────────
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.target.set(0, 0.5, 0)
    controls.rotateSpeed = 2.0
    controlsObj = controls
    controls.zoomSpeed = 5.0
    controls.panSpeed = 2.0
    controls.enableDamping = true
    controls.dampingFactor = 0.1
    controls.minDistance = 0.25
    controls.maxDistance = 50
    controls.update()

    // ── Lighting ───────────────────────────────────────────
    const hemiLight = new THREE.HemisphereLight(0x80b0ff, 0x4a3000, 0.5)
    scene.add(hemiLight)

    const dirLight = new THREE.DirectionalLight(0xffffff, Math.PI)
    dirLight.position.set(4, 10, 1)
    dirLight.castShadow = true
    dirLight.shadow.mapSize.set(2048, 2048)
    dirLight.shadow.normalBias = 0.001
    dirLight.shadow.camera.near = 0.1
    dirLight.shadow.camera.far = 50
    dirLight.shadow.camera.left = -5
    dirLight.shadow.camera.right = 5
    dirLight.shadow.camera.top = 5
    dirLight.shadow.camera.bottom = -5
    scene.add(dirLight)

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.4)
    fillLight.position.set(-4, 2, -4)
    scene.add(fillLight)

    // ── Ground ─────────────────────────────────────────────
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(40, 40),
      new THREE.MeshStandardMaterial({ color: 0x2a2a2e, roughness: 0.9, metalness: 0.0 })
    )
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    groundObj = ground
    scene.add(ground)

    // ── 3D Spatial Grid (입체 공간 그리드) ───────────────────
    const gridGroup = new THREE.Group()

    // 1. 바닥 (X-Z 평면)
    const gridXZ = new THREE.GridHelper(10, 20, 0x555555, 0x333333)
    gridXZ.position.set(0, 0.001, 0)
    gridGroup.add(gridXZ)

    // 2. 뒷벽 (X-Y 평면)
    const gridXY = new THREE.GridHelper(10, 20, 0x555555, 0x333333)
    gridXY.rotation.x = Math.PI / 2
    gridXY.position.set(0, 5, -5)
    gridGroup.add(gridXY)

    // 3. 옆벽 (Y-Z 평면)
    const gridYZ = new THREE.GridHelper(10, 20, 0x555555, 0x333333)
    gridYZ.rotation.z = Math.PI / 2
    gridYZ.position.set(-5, 5, 0)
    gridGroup.add(gridYZ)

    gridObj = gridGroup
    scene.add(gridGroup)

    const axes = new THREE.AxesHelper(0.4)
    axesObj = axes
    scene.add(axes)

    // ── URDF Loader ────────────────────────────────────────
    const manager = new THREE.LoadingManager()
    const loader = new URDFLoader(manager)
    const objLoader = new OBJLoader(manager)

    loader.loadMeshCb = function(path, _manager, done) {
      const ext = path.split('.').pop().toLowerCase()
      if (ext === 'obj') {
        objLoader.load(
          path,
          result => done(result),
          undefined,
          err => { console.error('OBJ Load Error:', err); done(null, err) }
        )
      } else {
        done(null, new Error('지원하지 않는 포맷입니다.'))
      }
    }

    loader.load('/robot/ffw_sh5.urdf', robot => {
      robot.rotation.x = -Math.PI / 2
      robot.scale.set(0.6, 0.6, 0.6)

      robot.traverse(child => {
        if (child.isMesh) {
          child.castShadow = true
          child.receiveShadow = true
          if (child.material && child.material.isMeshBasicMaterial) {
            child.material = new THREE.MeshStandardMaterial({
              color: child.material.color,
              roughness: 0.5,
              metalness: 0.3,
            })
          }
        }
      })

      scene.add(robot)
      statusText = 'Robot Loaded'
      loaded = true

      const defs = []
      Object.keys(robot.joints).sort().forEach(name => {
        const joint = robot.joints[name]
        if (joint.jointType === 'fixed') return
        defs.push({
          name,
          type: joint.jointType,
          min: joint.limit ? joint.limit.lower : null,
          max: joint.limit ? joint.limit.upper : null,
        })
      })
      robotJointDefs.set(defs)

      setRobot(robot)
      initWebSocket()
    })

    // ── Raycaster for Joint Selection & Drag ────────────────
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    let selectedJoint = null
    let dragStartPos = { x: 0, y: 0 }

    const onPointerDown = (event) => {
      if ($activeTab !== 'control' || event.button !== 0) return // 좌클릭 및 Control 탭에서만 동작
      
      const rect = container.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(scene.children, true)
      
      if (intersects.length > 0) {
        let obj = intersects[0].object
        while (obj && obj !== scene) {
          // 클릭된 메쉬의 상위 객체를 탐색하며 URDFJoint를 찾음
          if (obj.isURDFJoint && obj.jointType !== 'fixed') {
            selectedJoint = obj
            controls.enabled = false // 조인트 조작 시 카메라 회전 비활성화
            dragStartPos = { x: event.clientX, y: event.clientY }
            if (!$manualMode) manualMode.set(true)
            event.stopPropagation()
            break
          }
          obj = obj.parent
        }
      }
    }

    const onPointerMove = (event) => {
      if (selectedJoint && !controls.enabled) {
        const deltaX = event.clientX - dragStartPos.x
        const deltaY = event.clientY - dragStartPos.y
        dragStartPos = { x: event.clientX, y: event.clientY }

        const sensitivity = 0.01
        const delta = (deltaX - deltaY) * sensitivity 
        let currentVal = $joints[selectedJoint.name] || 0
        let newVal = currentVal + delta

        let min = -3.14, max = 3.14
        if (selectedJoint.limit) {
          min = selectedJoint.limit.lower
          max = selectedJoint.limit.upper
        }
        newVal = Math.max(min, Math.min(max, newVal))
        setJointAngle(selectedJoint.name, newVal)
      }
    }

    const onPointerUp = () => {
      if (selectedJoint) {
        selectedJoint = null
        controls.enabled = true // 카메라 회전 복구
      }
    }

    renderer.domElement.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)

    // ── Animate ────────────────────────────────────────────
    function animate() {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // ── Resize ─────────────────────────────────────────────
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.domElement.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      controls.dispose()
      renderer.dispose()
    }
  })

  // Ground 토글 상태에 따라 Three.js 씬 반응형 업데이트
  $: if (sceneObj) {
    if ($showGround) {
      sceneObj.background = new THREE.Color(0x1a1a1d)
      sceneObj.fog = new THREE.Fog(0x1a1a1d, 18, 40)
      if (groundObj) groundObj.visible = true
      if (axesObj) axesObj.visible = true
    } else {
      sceneObj.background = null
      sceneObj.fog = null
      if (groundObj) groundObj.visible = false
      if (axesObj) axesObj.visible = false
    }
  }

  // Grid 토글 상태에 따라 반응형 업데이트
  $: if (gridObj) {
    gridObj.visible = $showGrid
  }

  // 자동 회전(Auto Rotate) 상태에 따라 반영
  $: if (controlsObj) {
    controlsObj.autoRotate = $autoRotate
    controlsObj.autoRotateSpeed = -2.0 // 회전 속도 (필요시 조절)
  }
</script>

<div class="viewer-container" bind:this={container}></div>

<div class="status-badge" class:hidden={loaded}>
  {statusText}
</div>

<div class="hint-badge">
  드래그: 회전 &nbsp;·&nbsp; 스크롤: 줌 &nbsp;·&nbsp; 우클릭: 이동
</div>

<style>
  .viewer-container {
    width: 100%;
    height: 100%;
    display: block;
  }

  .status-badge {
    position: absolute;
    bottom: 20px;
    left: 20px;
    background: rgba(8, 8, 12, 0.72);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: var(--text-main);
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.78em;
    border: 1px solid rgba(255, 255, 255, 0.1);
    pointer-events: none;
    transition: opacity 0.5s;
    z-index: 10;
  }

  .status-badge.hidden {
    opacity: 0;
  }

  .hint-badge {
    position: absolute;
    bottom: 20px;
    right: 14px;
    color: #444;
    font-size: 0.72em;
    pointer-events: none;
    z-index: 10;
    letter-spacing: 0.3px;
  }

  @media screen and (max-width: 768px) {
    .hint-badge { display: none; }
  }
</style>
