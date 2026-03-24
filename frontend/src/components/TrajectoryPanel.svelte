<script>
  import { onDestroy } from 'svelte'
  import * as THREE from 'three'
  import { robotScene, trajectory } from '../stores/robot.js'

  const items = [
    { key: 'controller_l', label: 'Controller', side: 'Left',  color: '#ff6b6b', hex: 0xff6b6b },
    { key: 'controller_r', label: 'Controller', side: 'Right', color: '#4fa3f7', hex: 0x4fa3f7 },
    { key: 'eef_l',        label: 'End Effector', side: 'Left',  color: '#57cc99', hex: 0x57cc99 },
    { key: 'eef_r',        label: 'End Effector', side: 'Right', color: '#f2cc8f', hex: 0xf2cc8f },
  ]

  let visible = { controller_l: false, controller_r: false, eef_l: false, eef_r: false }
  let markers = {}   // key -> THREE.Group
  let scene = null

  const AXIS_LEN  = 0.048   // 0.08 * 0.6
  const AXIS_HEAD = 0.012   // arrow head length
  const AXIS_W    = 0.005   // arrow head width
  const SPHERE_R  = 0.009   // 0.015 * 0.6

  const AX = new THREE.Vector3(1, 0, 0)
  const AY = new THREE.Vector3(0, 1, 0)
  const AZ = new THREE.Vector3(0, 0, 1)
  const ORIGIN = new THREE.Vector3(0, 0, 0)

  function createMarker(hex) {
    const group = new THREE.Group()

    // 구체
    group.add(new THREE.Mesh(
      new THREE.SphereGeometry(SPHERE_R, 16, 16),
      new THREE.MeshStandardMaterial({ color: hex, emissive: hex, emissiveIntensity: 0.6 })
    ))

    // 커스텀 화살표 축 (X=빨강, Y=초록, Z=파랑)
    group.add(new THREE.ArrowHelper(AX, ORIGIN, AXIS_LEN, 0xff2222, AXIS_HEAD, AXIS_W))
    group.add(new THREE.ArrowHelper(AY, ORIGIN, AXIS_LEN, 0x22dd44, AXIS_HEAD, AXIS_W))
    group.add(new THREE.ArrowHelper(AZ, ORIGIN, AXIS_LEN, 0x2288ff, AXIS_HEAD, AXIS_W))

    return group
  }

  function syncMarker(key, pose) {
    if (!scene) return
    const on = visible[key] && !!pose

    if (!on) {
      if (markers[key]) { scene.remove(markers[key]); delete markers[key] }
      return
    }
    if (!markers[key]) {
      const item = items.find(i => i.key === key)
      markers[key] = createMarker(item.hex)
      scene.add(markers[key])
    }
    // [x, y, z, qw, qx, qy, qz] → Three.js Quaternion(x, y, z, w)
    markers[key].position.set(pose.x, pose.y, pose.z)
    markers[key].quaternion.set(pose.qx, pose.qy, pose.qz, pose.qw)
  }

  // scene 또는 trajectory가 바뀔 때마다 모든 마커 동기화
  $: if (scene !== undefined) {
    for (const { key } of items) syncMarker(key, $trajectory[key])
  }

  const unsubScene = robotScene.subscribe(s => { scene = s })

  onDestroy(() => {
    unsubScene()
    if (scene) Object.values(markers).forEach(m => scene.remove(m))
    markers = {}
  })

  function toggle(key) {
    visible = { ...visible, [key]: !visible[key] }
    syncMarker(key, $trajectory[key])
  }

  function fmt(v) { return (v ?? 0).toFixed(3) }
  function fmtQ(v) { return (v ?? 0).toFixed(2) }
</script>

<div class="traj-list">
  {#each items as item}
    {@const pose = $trajectory[item.key]}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="traj-card" class:active={visible[item.key]} style="--c: {item.color}"
         on:click={() => toggle(item.key)}>
      <div class="card-head">
        <div class="card-label-wrap">
          <span class="card-side">{item.side}</span>
          <span class="card-label">{item.label}</span>
        </div>
        <div class="toggle-dot" class:on={visible[item.key]}></div>
      </div>

      {#if pose}
        <div class="coords">
          <div class="coord-row">
            <span class="axis x">X</span><span class="val">{fmt(pose.x)}</span>
            <span class="axis y">Y</span><span class="val">{fmt(pose.y)}</span>
            <span class="axis z">Z</span><span class="val">{fmt(pose.z)}</span>
          </div>
          <div class="coord-row quat">
            <span class="axis q">Qw</span><span class="val">{fmtQ(pose.qw)}</span>
            <span class="axis q">Qx</span><span class="val">{fmtQ(pose.qx)}</span>
            <span class="axis q">Qy</span><span class="val">{fmtQ(pose.qy)}</span>
            <span class="axis q">Qz</span><span class="val">{fmtQ(pose.qz)}</span>
          </div>
        </div>
      {:else}
        <div class="no-data">No data</div>
      {/if}

    </div>
  {/each}

  {#if Object.values(visible).some(v => v)}
    <div class="axis-legend">
      <span class="legend-item ax-x"><span class="legend-swatch"></span>X</span>
      <span class="legend-item ax-y"><span class="legend-swatch"></span>Y</span>
      <span class="legend-item ax-z"><span class="legend-swatch"></span>Z</span>
    </div>
  {/if}
</div>

<style>
  .traj-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .traj-card {
    background: rgba(255, 255, 255, 0.025);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-left: 3px solid var(--c);
    padding: 10px 14px;
    cursor: pointer;
    transition: background 0.15s;
    user-select: none;
  }

  .traj-card:hover {
    background: rgba(255, 255, 255, 0.04);
  }

  .traj-card.active {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--c);
    box-shadow: 0 0 0 1px color-mix(in srgb, var(--c) 20%, transparent);
  }

  .card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .card-label-wrap {
    display: flex;
    align-items: baseline;
    gap: 6px;
  }

  .card-side {
    font-size: 0.72em;
    color: var(--c);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .card-label {
    font-size: 0.8em;
    color: #888;
  }

  .toggle-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #333;
    border: 1px solid #444;
    transition: background 0.2s, border-color 0.2s;
    flex-shrink: 0;
  }

  .toggle-dot.on {
    background: var(--c);
    border-color: var(--c);
    box-shadow: 0 0 6px var(--c);
  }

  .coords {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .coord-row {
    display: flex;
    gap: 10px;
    font-family: 'Courier New', monospace;
    font-size: 0.8em;
    color: #ccc;
    align-items: baseline;
  }

  .coord-row.quat {
    font-size: 0.73em;
    color: #666;
  }

  .axis {
    font-style: normal;
    font-size: 0.85em;
    min-width: 14px;
    text-align: right;
  }
  .axis.x { color: #e06c75; }
  .axis.y { color: #98c379; }
  .axis.z { color: #61afef; }
  .axis.q { color: #555; }

  .val {
    min-width: 48px;
  }

  .no-data {
    font-size: 0.75em;
    color: #333;
    font-style: italic;
  }

  .axis-legend {
    display: flex;
    gap: 12px;
    margin-top: 4px;
    padding: 8px 14px;
    border-radius: 8px;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.05);
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.68em;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .legend-swatch {
    width: 18px;
    height: 3px;
    border-radius: 2px;
    display: inline-block;
  }

  .ax-x { color: #ff2222; }
  .ax-x .legend-swatch { background: #ff2222; box-shadow: 0 0 4px #ff2222; }

  .ax-y { color: #22dd44; }
  .ax-y .legend-swatch { background: #22dd44; box-shadow: 0 0 4px #22dd44; }

  .ax-z { color: #2288ff; }
  .ax-z .legend-swatch { background: #2288ff; box-shadow: 0 0 4px #2288ff; }
</style>
