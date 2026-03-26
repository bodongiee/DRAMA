<script>
  import { onDestroy } from 'svelte'
  import { get } from 'svelte/store'
  import * as THREE from 'three'
  import { robotScene, trajectory, activated, isRecording, startRecording, stopRecording, trailResetToken, trailAdjust, suppressTrail } from '../stores/robot.js'

  const items = [
    { key: 'controller_l', label: 'Controller',   side: 'Left',  color: '#ff6b6b', hex: 0xff6b6b, activeSide: 'left'  },
    { key: 'controller_r', label: 'Controller',   side: 'Right', color: '#4fa3f7', hex: 0x4fa3f7, activeSide: 'right' },
    { key: 'eef_l',        label: 'End Effector', side: 'Left',  color: '#57cc99', hex: 0x57cc99, activeSide: 'left'  },
    { key: 'eef_r',        label: 'End Effector', side: 'Right', color: '#f2cc8f', hex: 0xf2cc8f, activeSide: 'right' },
  ]

  function itemColor(item) { return $activated[item.activeSide] ? item.color : '#ffffff' }
  function itemHex(item)   { return $activated[item.activeSide] ? item.hex   : 0xffffff  }

  let visible = { controller_l: false, controller_r: false, eef_l: false, eef_r: false }
  let markers = {}   // key -> THREE.Group  (현재 위치 마커)
  let trails  = {}   // key -> { positions, colors, count, pts: THREE.Points }
  let scene   = null

  const AXIS_LEN  = 0.048
  const AXIS_HEAD = 0.012
  const AXIS_W    = 0.005
  const SPHERE_R  = 0.009
  const MAX_TRAIL = 100_000   // 보관할 최대 점 수 (circular buffer) — 100Hz 기준 약 17분

  const AX     = new THREE.Vector3(1, 0, 0)
  const AY     = new THREE.Vector3(0, 1, 0)
  const AZ     = new THREE.Vector3(0, 0, 1)
  const ORIGIN = new THREE.Vector3(0, 0, 0)

  // ── 현재 위치 마커 (구체 + 축) ──────────────────────────────
  function createMarker(hex) {
    const group = new THREE.Group()
    group.add(new THREE.Mesh(
      new THREE.SphereGeometry(SPHERE_R, 16, 16),
      new THREE.MeshStandardMaterial({ color: hex, emissive: hex, emissiveIntensity: 0.6 })
    ))
    group.add(new THREE.ArrowHelper(AX, ORIGIN, AXIS_LEN, 0xff2222, AXIS_HEAD, AXIS_W))
    group.add(new THREE.ArrowHelper(AY, ORIGIN, AXIS_LEN, 0x22dd44, AXIS_HEAD, AXIS_W))
    group.add(new THREE.ArrowHelper(AZ, ORIGIN, AXIS_LEN, 0x2288ff, AXIS_HEAD, AXIS_W))
    return group
  }

  function syncMarker(key, pose, hex) {
    if (!scene) return
    const on = visible[key] && !!pose
    if (!on) {
      if (markers[key]) { scene.remove(markers[key]); delete markers[key] }
      return
    }
    if (!markers[key]) {
      markers[key] = createMarker(hex ?? items.find(i => i.key === key).hex)
      scene.add(markers[key])
    }
    markers[key].position.set(pose.x, pose.y, pose.z)
    markers[key].quaternion.set(pose.qx, pose.qy, pose.qz, pose.qw)
  }

  // activated 변경 시 마커 색상 재생성 (색상만 바꿔야 하므로 delete 후 재생성)
  function rebuildMarkers(act) {
    for (const item of items) {
      const hex = act[item.activeSide] ? item.hex : 0xffffff
      if (markers[item.key]) { scene?.remove(markers[item.key]); delete markers[item.key] }
      syncMarker(item.key, get(trajectory)[item.key], hex)
    }
  }

  // ── 궤적 트레일 (Points, circular buffer) ──────────────────
  function ensureTrail(key) {
    if (trails[key]) return
    const positions = new Float32Array(MAX_TRAIL * 3)
    const colors    = new Float32Array(MAX_TRAIL * 3)
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color',    new THREE.BufferAttribute(colors,    3))
    geo.setDrawRange(0, 0)
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.008, vertexColors: true }))
    scene?.add(pts)
    trails[key] = { positions, colors, count: 0, pts }
  }

  function addTrailPoint(key, pose, hex) {
    if (!scene) return
    ensureTrail(key)
    const t = trails[key]
    const i = t.count % MAX_TRAIL
    t.positions[i*3]   = pose.x
    t.positions[i*3+1] = pose.y
    t.positions[i*3+2] = pose.z
    t.colors[i*3]   = ((hex >> 16) & 0xff) / 255
    t.colors[i*3+1] = ((hex >>  8) & 0xff) / 255
    t.colors[i*3+2] = (hex         & 0xff) / 255
    t.count++
    t.pts.geometry.setDrawRange(0, Math.min(t.count, MAX_TRAIL))
    t.pts.geometry.attributes.position.needsUpdate = true
    t.pts.geometry.attributes.color.needsUpdate    = true
  }

  // ── Subscriptions ────────────────────────────────────────────
  // trajectory 변경: 트레일 점 추가 + 마커 위치 갱신
  // (robot.js에서 activated → trajectory 순으로 업데이트하므로
  //  get(activated)는 이미 최신 값)
  const unsubTraj = trajectory.subscribe(traj => {
    for (const item of items) {
      const pose = traj[item.key]
      if (!pose) continue
      const hex = get(activated)[item.activeSide] ? item.hex : 0xffffff
      if (!get(suppressTrail)) addTrailPoint(item.key, pose, hex)
      syncMarker(item.key, pose, hex)
    }
  })

  // activated 변경: 마커 색상만 교체 (트레일은 건드리지 않음)
  let prevAct = { left: false, right: false }
  const unsubActivated = activated.subscribe(act => {
    if (act.left === prevAct.left && act.right === prevAct.right) return
    prevAct = act
    rebuildMarkers(act)
  })

  const unsubScene = robotScene.subscribe(s => {
    scene = s
    if (s) {
      for (const t of Object.values(trails)) s.add(t.pts)
    }
  })

  // trail 전체 초기화
  const unsubReset = trailResetToken.subscribe(() => {
    for (const t of Object.values(trails)) {
      t.count = 0
      t.pts.geometry.setDrawRange(0, 0)
      t.pts.geometry.attributes.position.needsUpdate = true
    }
  })

  // trail 점 개수 조정 (역방향 이동 시 음수 delta로 제거)
  const unsubAdjust = trailAdjust.subscribe(deltas => {
    if (!deltas) return
    for (const [key, delta] of Object.entries(deltas)) {
      if (!trails[key] || delta === 0) continue
      trails[key].count = Math.max(0, trails[key].count + delta)
      trails[key].pts.geometry.setDrawRange(0, Math.min(trails[key].count, MAX_TRAIL))
      trails[key].pts.geometry.attributes.position.needsUpdate = true
    }
  })

  onDestroy(() => {
    unsubScene()
    unsubTraj()
    unsubActivated()
    unsubReset()
    unsubAdjust()
    if (scene) {
      Object.values(markers).forEach(m => scene.remove(m))
      Object.values(trails).forEach(t => scene.remove(t.pts))
    }
    markers = {}
    trails  = {}
  })

  function toggle(key) {
    visible = { ...visible, [key]: !visible[key] }
    const item = items.find(i => i.key === key)
    syncMarker(key, $trajectory[key], itemHex(item))
  }

  function fmt(v)  { return (v ?? 0).toFixed(3) }
  function fmtQ(v) { return (v ?? 0).toFixed(2) }

  // ── Recording ────────────────────────────────────────────────
  let filename = ''

  function getDefaultFilename() {
    const now = new Date()
    const pad = n => String(n).padStart(2, '0')
    return `${now.getFullYear()}_${pad(now.getMonth()+1)}_${pad(now.getDate())}_${pad(now.getHours())}_${pad(now.getMinutes())}.json`
  }

  function handleRecord() {
    filename = getDefaultFilename()
    startRecording()
  }

  function handleStop() {
    const data = stopRecording()
    const name = filename.trim() || getDefaultFilename()
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href     = url
    a.download = name
    a.click()
    URL.revokeObjectURL(url)
  }
</script>

<div class="traj-list">
  {#each items as item}
    {@const pose = $trajectory[item.key]}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="traj-card" class:active={visible[item.key]} style="--c: {itemColor(item)}"
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

  <div class="record-row">
    {#if $isRecording}
      <button class="rec-btn stop" on:click={handleStop}>■ Stop</button>
      <input class="rec-filename" type="text" bind:value={filename} spellcheck="false" />
    {:else}
      <button class="rec-btn record" on:click={handleRecord}>⏺ Record</button>
    {/if}
  </div>
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

  .record-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 4px;
  }

  .rec-btn {
    padding: 6px 14px;
    border-radius: 6px;
    border: 1px solid;
    font-size: 0.78em;
    font-family: inherit;
    cursor: pointer;
    letter-spacing: 0.5px;
    transition: background 0.15s, box-shadow 0.15s;
    white-space: nowrap;
  }

  .rec-btn.record {
    background: rgba(255, 60, 60, 0.12);
    border-color: rgba(255, 60, 60, 0.4);
    color: #ff6b6b;
  }

  .rec-btn.record:hover {
    background: rgba(255, 60, 60, 0.22);
    box-shadow: 0 0 8px rgba(255, 60, 60, 0.3);
  }

  .rec-btn.stop {
    background: rgba(255, 200, 60, 0.12);
    border-color: rgba(255, 200, 60, 0.4);
    color: #ffc83d;
    animation: pulse-rec 1.2s ease-in-out infinite;
  }

  .rec-btn.stop:hover {
    background: rgba(255, 200, 60, 0.22);
  }

  @keyframes pulse-rec {
    0%, 100% { box-shadow: 0 0 0 0 rgba(255, 200, 60, 0); }
    50%       { box-shadow: 0 0 0 4px rgba(255, 200, 60, 0.2); }
  }

  .rec-filename {
    flex: 1;
    min-width: 0;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 4px;
    color: #ccc;
    font-size: 0.75em;
    font-family: 'Courier New', monospace;
    padding: 5px 8px;
    outline: none;
  }

  .rec-filename:focus {
    border-color: rgba(255, 200, 60, 0.4);
  }
</style>
