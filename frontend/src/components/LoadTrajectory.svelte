<script>
  import { onDestroy } from 'svelte'
  import * as THREE from 'three'
  import { applyStepData, robotScene, suppressTrail, trailAdjust } from '../stores/robot.js'

  // ── File ─────────────────────────────────────────────────────
  let file      = null
  let steps     = []       // array of step objects
  let parseError = false
  let dragging  = false
  let inputEl

  function loadFile(f) {
    if (!f) return
    if (!f.name.endsWith('.json')) { parseError = true; return }
    const reader = new FileReader()
    reader.onload = e => {
      try {
        const data = JSON.parse(e.target.result)
        steps      = Object.values(data)
        file       = f
        parseError = false
        resetPlayback()
        rebuildViz()
      } catch {
        file = null; steps = []; parseError = true
        resetPlayback()
      }
    }
    reader.readAsText(f)
  }

  function onInput(e)  { loadFile(e.target.files[0]) }
  function onDrop(e)   { dragging = false; loadFile(e.dataTransfer.files[0]) }

  // ── Speed ─────────────────────────────────────────────────────
  const speedOptions = [
    { label: 'x0.25', value: 0.25 },
    { label: 'x0.5',  value: 0.5  },
    { label: 'x0.75', value: 0.75 },
    { label: 'Normal', value: 1.0  },
    { label: 'x1.25', value: 1.25 },
    { label: 'x1.5',  value: 1.5  },
    { label: 'x1.75', value: 1.75 },
  ]
  let speed = 1.0

  // ── Playback state ────────────────────────────────────────────
  // 'idle' | 'playing' | 'paused' | 'completed'
  let status      = 'idle'
  let currentStep = 0
  let generation  = 0     // increment to cancel running loop

  const DEFAULT_DT = 10   // ms fallback when no timestamp

  function sleep(ms) {
    return new Promise(r => setTimeout(r, Math.max(0, ms)))
  }

  async function playLoop(gen) {
    while (currentStep < steps.length) {
      if (generation !== gen) return

      applyStepData(steps[currentStep])

      const next = steps[currentStep + 1]
      const cur  = steps[currentStep]
      const rawDt = (next && cur.timestamp != null && next.timestamp != null)
        ? next.timestamp - cur.timestamp
        : DEFAULT_DT
      const delay = rawDt / speed

      await sleep(delay)

      if (generation !== gen) return
      currentStep++
    }

    // completed
    if (generation === gen) {
      status = 'completed'
    }
  }

  function run() {
    if (!steps.length) return
    status = 'playing'
    const gen = ++generation
    playLoop(gen)
  }

  function stop() {
    generation++
    status = 'paused'
  }

  function rewind10() {
    const wasPlaying = status === 'playing'
    generation++
    const target = Math.max(0, currentStep - 10)

    // 10스텝분 trail 점 즉시 제거
    const batch = { controller_l: 0, controller_r: 0, eef_l: 0, eef_r: 0 }
    for (let i = currentStep; i > target; i--) {
      const d = stepDeltas(steps[i])
      for (const k of Object.keys(batch)) batch[k] -= d[k]
    }
    trailAdjust.set(batch)
    trailAdjust.set(null)

    suppressTrail.set(true)
    currentStep = target
    applyStepData(steps[currentStep])
    suppressTrail.set(false)

    if (wasPlaying) {
      status = 'playing'
      playLoop(++generation)
    }
  }

  function resetPlayback() {
    generation++
    status      = 'idle'
    currentStep = 0
  }

  $: controlsVisible = status === 'playing' || status === 'paused' || status === 'completed'
  $: progress = steps.length ? Math.round((currentStep / steps.length) * 100) : 0

  // ── Go to Step ────────────────────────────────────────────────
  let gotoNum = 1
  const BATCH = 200   // steps per yield

  // 각 스텝이 각 key에 trail 점을 몇 개 추가하는지 반환
  function stepDeltas(step) {
    return {
      controller_l: (step?.left?.controller?.length  >= 7) ? 1 : 0,
      controller_r: (step?.right?.controller?.length >= 7) ? 1 : 0,
      eef_l:        (step?.left?.eef?.length         >= 7) ? 1 : 0,
      eef_r:        (step?.right?.eef?.length        >= 7) ? 1 : 0,
    }
  }

  // 앞으로: trail 점 추가하며 이동
  async function fastForwardTo(gen, target) {
    while (currentStep < target) {
      if (generation !== gen) return
      const end = Math.min(currentStep + BATCH, target)
      for (let i = currentStep; i < end; i++) applyStepData(steps[i])
      currentStep = end
      await sleep(0)
    }
    applyStepData(steps[currentStep])
    if (generation === gen) {
      status = currentStep >= steps.length - 1 ? 'completed' : 'paused'
    }
  }

  // 뒤로: trail 점 배치로 제거하며 역방향 이동
  async function fastBackwardTo(gen, target) {
    suppressTrail.set(true)
    while (currentStep > target) {
      if (generation !== gen) { suppressTrail.set(false); return }
      const end = Math.max(currentStep - BATCH, target)

      // 이 배치에서 제거할 trail 점 합산
      const batch = { controller_l: 0, controller_r: 0, eef_l: 0, eef_r: 0 }
      for (let i = currentStep; i > end; i--) {
        const d = stepDeltas(steps[i])
        for (const k of Object.keys(batch)) batch[k] -= d[k]
      }
      trailAdjust.set(batch)
      trailAdjust.set(null)

      currentStep = end
      applyStepData(steps[currentStep])
      await sleep(0)
    }
    suppressTrail.set(false)
    if (generation === gen) {
      status = currentStep >= steps.length - 1 ? 'completed' : 'paused'
    }
  }

  async function gotoStep() {
    if (!steps.length) return
    const target = Math.max(0, Math.min(gotoNum - 1, steps.length - 1))
    generation++
    status = 'playing'
    const gen = ++generation
    if (target < currentStep) await fastBackwardTo(gen, target)
    else                       await fastForwardTo(gen, target)
  }

  // ── Visualize Trajectory ──────────────────────────────────────
  const vizItems = [
    { key: 'controller_l', label: 'Controller',   side: 'Left',  color: '#ff6b6b', hex: 0xff6b6b, activeSide: 'left'  },
    { key: 'eef_l',        label: 'End Effector', side: 'Left',  color: '#57cc99', hex: 0x57cc99, activeSide: 'left'  },
    { key: 'controller_r', label: 'Controller',   side: 'Right', color: '#4fa3f7', hex: 0x4fa3f7, activeSide: 'right' },
    { key: 'eef_r',        label: 'End Effector', side: 'Right', color: '#f2cc8f', hex: 0xf2cc8f, activeSide: 'right' },
  ]

  let vizVisible = { controller_l: false, eef_l: false, controller_r: false, eef_r: false }
  let vizObjects = {}   // key -> THREE.Points
  let scene = null
  const unsubScene = robotScene.subscribe(s => {
    scene = s
    if (s) for (const o of Object.values(vizObjects)) s.add(o)
  })

  function buildPoints(item) {
    const positions = [], colors = []
    for (const step of steps) {
      let arr = null
      if      (item.key === 'controller_l') arr = step.left?.controller
      else if (item.key === 'eef_l')        arr = step.left?.eef
      else if (item.key === 'controller_r') arr = step.right?.controller
      else if (item.key === 'eef_r')        arr = step.right?.eef
      if (!arr || arr.length < 3) continue

      positions.push(arr[0], arr[1], arr[2])
      const isActive = step.activated ? !!step.activated[item.activeSide] : true
      const hex = isActive ? item.hex : 0xffffff
      colors.push(((hex >> 16) & 0xff) / 255, ((hex >> 8) & 0xff) / 255, (hex & 0xff) / 255)
    }
    if (!positions.length) return null
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geo.setAttribute('color',    new THREE.Float32BufferAttribute(colors,    3))
    return new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.008, vertexColors: true }))
  }

  function setViz(key, on) {
    if (vizObjects[key]) { scene?.remove(vizObjects[key]); delete vizObjects[key] }
    if (on) {
      const item = vizItems.find(i => i.key === key)
      const pts  = buildPoints(item)
      if (pts) { vizObjects[key] = pts; scene?.add(pts) }
      else vizVisible = { ...vizVisible, [key]: false }
    }
  }

  function toggleViz(key) {
    vizVisible = { ...vizVisible, [key]: !vizVisible[key] }
    setViz(key, vizVisible[key])
  }

  // 새 파일 로드 시 켜진 항목 재빌드
  function rebuildViz() {
    for (const item of vizItems) setViz(item.key, vizVisible[item.key])
  }

  onDestroy(() => {
    unsubScene()
    if (scene) Object.values(vizObjects).forEach(o => scene.remove(o))
    vizObjects = {}
  })
</script>

<div class="load-panel">

  <!-- ── File Upload ── -->
  <div class="section-label">Trajectory File</div>

  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="drop-zone"
    class:dragging
    class:loaded={!!file}
    on:dragover|preventDefault={() => (dragging = true)}
    on:dragleave={() => (dragging = false)}
    on:drop|preventDefault={onDrop}
    on:click={() => inputEl.click()}
  >
    <input bind:this={inputEl} type="file" accept=".json" on:change={onInput} hidden />

    {#if file}
      <div class="file-info">
        <span class="file-icon">📄</span>
        <span class="file-name">{file.name}</span>
        <span class="step-count">{steps.length.toLocaleString()} steps</span>
      </div>
    {:else}
      <div class="drop-hint">
        <span class="drop-icon">⬆</span>
        <span class="drop-text">Drop .json file here<br/>or click to browse</span>
      </div>
    {/if}
  </div>

  {#if parseError}
    <div class="error-msg">Invalid or unreadable .json file.</div>
  {/if}

  <!-- ── Playback Speed ── -->
  <div class="section-label" style="margin-top:16px;">Playback Speed</div>

  <div class="speed-grid">
    {#each speedOptions as s}
      <button
        class="speed-btn"
        class:selected={speed === s.value}
        on:click={() => (speed = s.value)}
      >{s.label}</button>
    {/each}
  </div>

  <!-- ── Play Control ── -->
  <div class="section-label" style="margin-top:16px;">Play Control</div>

  <div class="play-control">

    <!-- RUN / Resume / Completed row -->
    <div class="run-row">
      {#if status === 'completed'}
        <div class="completed-badge">✓ Completed</div>
      {:else}
        <button
          class="run-btn"
          class:active={status === 'playing'}
          disabled={!file || status === 'playing'}
          on:click={run}
        >
          {status === 'paused' ? '▶ Resume' : '▶ Run'}
        </button>
      {/if}

      <!-- Progress -->
      {#if controlsVisible}
        <span class="progress-text">{currentStep} / {steps.length}</span>
      {/if}
    </div>

    <!-- Progress bar -->
    {#if controlsVisible}
      <div class="progress-bar">
        <div class="progress-fill" style="width: {progress}%"></div>
      </div>
    {/if}

    <!-- Sub controls (stop / rewind / reset) -->
    {#if controlsVisible}
      <div class="sub-controls">
        <button class="sub-btn" disabled={status !== 'playing'} on:click={stop}
          title="Pause">⏸ Stop</button>
        <button class="sub-btn" on:click={rewind10}
          title="Rewind 10 steps">-10 Step</button>
        <button class="sub-btn reset" on:click={resetPlayback}
          title="Reset to beginning">Reset</button>
      </div>
    {/if}

    <!-- Go to Step -->
    {#if file}
      <div class="goto-row">
        <input
          class="goto-input"
          type="number"
          min="1"
          max={steps.length}
          bind:value={gotoNum}
        />
        <span class="goto-total">/ {steps.length}</span>
        <button class="goto-btn" on:click={gotoStep}>Go to Step</button>
      </div>
    {/if}

  </div>

  <!-- ── Visualize Trajectory ── -->
  <div class="section-label" style="margin-top:16px;">Visualize Trajectory</div>

  <div class="viz-list">
    {#each vizItems as item}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="viz-card"
        class:active={vizVisible[item.key]}
        class:no-file={!file}
        style="--c: {item.color}"
        on:click={() => file && toggleViz(item.key)}
      >
        <span class="viz-side">{item.side}</span>
        <span class="viz-label">{item.label}</span>
        <div class="toggle-dot" class:on={vizVisible[item.key]}></div>
      </div>
    {/each}
  </div>

</div>

<style>
  .load-panel {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .section-label {
    font-size: 0.7em;
    color: #555;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* ── Drop Zone ── */
  .drop-zone {
    border: 1.5px dashed rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 24px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
    background: rgba(255,255,255,0.02);
    user-select: none;
  }
  .drop-zone:hover, .drop-zone.dragging {
    border-color: rgba(79,163,247,0.5);
    background: rgba(79,163,247,0.05);
  }
  .drop-zone.loaded {
    border-style: solid;
    border-color: rgba(87,204,153,0.4);
    background: rgba(87,204,153,0.04);
  }

  .drop-hint { display: flex; flex-direction: column; align-items: center; gap: 8px; }
  .drop-icon { font-size: 1.4em; color: #444; }
  .drop-text { font-size: 0.78em; color: #555; text-align: center; line-height: 1.6; }

  .file-info { display: flex; flex-direction: column; align-items: center; gap: 6px; }
  .file-icon { font-size: 1.6em; }
  .file-name { font-size: 0.8em; color: #ccc; font-family: 'Courier New', monospace; word-break: break-all; text-align: center; }
  .step-count { font-size: 0.72em; color: #57cc99; letter-spacing: 0.5px; }

  .error-msg { font-size: 0.73em; color: #ff6b6b; padding: 0 4px; }

  /* ── Speed Buttons ── */
  .speed-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
  }
  .speed-btn {
    padding: 7px 4px;
    border-radius: 6px;
    border: 1px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.03);
    color: #666;
    font-size: 0.76em;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.15s;
    letter-spacing: 0.3px;
  }
  .speed-btn:hover {
    border-color: rgba(79,163,247,0.3);
    color: #aaa;
    background: rgba(79,163,247,0.06);
  }
  .speed-btn.selected {
    border-color: rgba(79,163,247,0.6);
    background: rgba(79,163,247,0.15);
    color: #4fa3f7;
    font-weight: 600;
  }

  /* ── Play Control ── */
  .play-control {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .run-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .run-btn {
    flex: 1;
    padding: 9px 12px;
    border-radius: 6px;
    border: 1px solid rgba(87,204,153,0.4);
    background: rgba(87,204,153,0.1);
    color: #57cc99;
    font-size: 0.82em;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.15s;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  .run-btn:hover:not(:disabled) {
    background: rgba(87,204,153,0.2);
    box-shadow: 0 0 10px rgba(87,204,153,0.2);
  }
  .run-btn.active {
    border-color: rgba(87,204,153,0.8);
    animation: pulse-run 1.4s ease-in-out infinite;
  }
  .run-btn:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
  @keyframes pulse-run {
    0%, 100% { box-shadow: 0 0 0 0 rgba(87,204,153,0); }
    50%       { box-shadow: 0 0 0 5px rgba(87,204,153,0.15); }
  }

  .completed-badge {
    flex: 1;
    padding: 9px 12px;
    border-radius: 6px;
    border: 1px solid rgba(79,163,247,0.4);
    background: rgba(79,163,247,0.08);
    color: #4fa3f7;
    font-size: 0.82em;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.5px;
  }

  .progress-text {
    font-size: 0.72em;
    color: #555;
    font-family: 'Courier New', monospace;
    white-space: nowrap;
  }

  /* ── Progress Bar ── */
  .progress-bar {
    height: 3px;
    border-radius: 2px;
    background: rgba(255,255,255,0.06);
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    border-radius: 2px;
    background: #57cc99;
    transition: width 0.1s linear;
  }

  /* ── Sub Controls ── */
  .sub-controls {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 6px;
  }
  .sub-btn {
    padding: 7px 6px;
    border-radius: 6px;
    border: 1px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.03);
    color: #666;
    font-size: 0.74em;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.15s;
    white-space: nowrap;
  }
  .sub-btn:hover:not(:disabled) {
    border-color: rgba(255,255,255,0.15);
    color: #aaa;
    background: rgba(255,255,255,0.06);
  }
  .sub-btn:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }
  .sub-btn.reset {
    border-color: rgba(255,107,107,0.2);
    color: #804040;
  }
  .sub-btn.reset:hover:not(:disabled) {
    border-color: rgba(255,107,107,0.4);
    color: #ff6b6b;
    background: rgba(255,107,107,0.06);
  }

  /* ── Go to Step ── */
  .goto-row {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .goto-input {
    width: 64px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 4px;
    color: #ccc;
    font-size: 0.78em;
    font-family: 'Courier New', monospace;
    padding: 5px 8px;
    text-align: right;
    outline: none;
    -moz-appearance: textfield;
  }
  .goto-input::-webkit-outer-spin-button,
  .goto-input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
  .goto-input:focus { border-color: rgba(79,163,247,0.4); }

  .goto-total {
    font-size: 0.72em;
    color: #444;
    font-family: 'Courier New', monospace;
    white-space: nowrap;
  }

  .goto-btn {
    flex: 1;
    padding: 6px 10px;
    border-radius: 6px;
    border: 1px solid rgba(79,163,247,0.35);
    background: rgba(79,163,247,0.08);
    color: #4fa3f7;
    font-size: 0.76em;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.15s;
    letter-spacing: 0.3px;
  }
  .goto-btn:hover {
    background: rgba(79,163,247,0.16);
    box-shadow: 0 0 8px rgba(79,163,247,0.2);
  }

  /* ── Visualize Trajectory ── */
  .viz-list {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .viz-card {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    border-radius: 7px;
    border: 1px solid rgba(255,255,255,0.05);
    border-left: 3px solid var(--c);
    background: rgba(255,255,255,0.02);
    cursor: pointer;
    transition: background 0.15s;
    user-select: none;
  }
  .viz-card:hover:not(.no-file) {
    background: rgba(255,255,255,0.04);
  }
  .viz-card.active {
    background: rgba(255,255,255,0.05);
    border-color: var(--c);
    box-shadow: 0 0 0 1px color-mix(in srgb, var(--c) 20%, transparent);
  }
  .viz-card.no-file {
    cursor: not-allowed;
    opacity: 0.35;
  }

  .viz-side {
    font-size: 0.72em;
    color: var(--c);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    min-width: 32px;
  }
  .viz-label {
    flex: 1;
    font-size: 0.78em;
    color: #777;
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
</style>
