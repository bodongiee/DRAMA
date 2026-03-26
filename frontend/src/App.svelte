<script>
  import RobotViewer from './components/RobotViewer.svelte'
  import JointTable from './components/JointTable.svelte'
  import HandViewer from './components/HandViewer.svelte'
  import TrajectoryPanel from './components/TrajectoryPanel.svelte'
  import LoadTrajectory from './components/LoadTrajectory.svelte'
  import ControlJoints from './components/ControlJoints.svelte'
  import { showGround, showGrid, showJointInfo, autoRotate, activeTab, joints, robotJointDefs, showHPlane, hPlaneHeight, hPlaneOpacity } from './stores/robot.js'

  let showHandViewer = false

  $: allJoints = $robotJointDefs.map(j => [j.name, $joints[j.name] || 0])
  $: baseJoints = allJoints.filter(([k]) => !k.startsWith('arm_l_') && !k.startsWith('arm_r_') && !k.startsWith('finger_l_') && !k.startsWith('finger_r_'))
  $: armLeftJoints = allJoints.filter(([k]) => k.startsWith('arm_l_'))
  $: armRightJoints = allJoints.filter(([k]) => k.startsWith('arm_r_'))
  $: handLeftJoints = allJoints.filter(([k]) => k.startsWith('finger_l_'))
  $: handRightJoints = allJoints.filter(([k]) => k.startsWith('finger_r_'))
</script>

<div class="app">

  <!-- Full-screen robot viewer -->
  <div class="viewer-bg" class:blurred={$showJointInfo}>
    <RobotViewer />
  </div>

  <!-- Top-left Info Panel -->
  <div class="info-panel">
    <div class="title-block">
      <span class="drama-logo">DRAMA</span>
      <span class="drama-full">Dashboard for Robotic Arm &amp; Manipulator Admin</span>
    </div>

    <!-- Tabs -->
    <div class="control-panel">
      <div class="tab-bar">
        <button class="tab" class:active={$activeTab === 'sync'}
                on:click={() => $activeTab = 'sync'}>
          Sync with Robot
        </button>
        <button class="tab" class:active={$activeTab === 'traj'}
                on:click={() => $activeTab = 'traj'}>
          See Trajectory
        </button>
        <button class="tab" class:active={$activeTab === 'load'}
                on:click={() => $activeTab = 'load'}>
          Load Trajectory
        </button>
        <button class="tab" class:active={$activeTab === 'control'}
                on:click={() => $activeTab = 'control'}>
          Control Joints
        </button>
      </div>
    </div>
  </div>

  <!-- Joint Info Text Overlay -->
  {#if $showJointInfo}
    <div class="joint-info-overlay">
      <!-- Column 1: BASE -->
      <div class="info-column">
        {#if baseJoints.length > 0}
          <div class="info-section">
            <div class="info-header">[BASE]</div>
            {#each baseJoints as [k, v]}
              <div class="info-item">{k}: {(v||0).toFixed(3)}</div>
            {/each}
          </div>
        {/if}
      </div>

      <!-- Column 2: ARM -->
      <div class="info-column">
        {#if armLeftJoints.length > 0}
          <div class="info-section">
            <div class="info-header">[ARM - Left]</div>
            {#each armLeftJoints as [k, v]}
              <div class="info-item">{k}: {(v||0).toFixed(3)}</div>
            {/each}
          </div>
        {/if}
        {#if armRightJoints.length > 0}
          <div class="info-section">
            <div class="info-header">[ARM - Right]</div>
            {#each armRightJoints as [k, v]}
              <div class="info-item">{k}: {(v||0).toFixed(3)}</div>
            {/each}
          </div>
        {/if}
      </div>

      <!-- Column 3: Hand -->
      <div class="info-column">
        {#if handLeftJoints.length > 0}
          <div class="info-section">
            <div class="info-header">[Hand - Left]</div>
            {#each handLeftJoints as [k, v]}
              <div class="info-item">{k}: {(v||0).toFixed(3)}</div>
            {/each}
          </div>
        {/if}
        {#if handRightJoints.length > 0}
          <div class="info-section">
            <div class="info-header">[Hand - Right]</div>
            {#each handRightJoints as [k, v]}
              <div class="info-item">{k}: {(v||0).toFixed(3)}</div>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  {/if}

  <!-- Bottom-left Options -->
  <div class="bottom-left-panel">
    <label class="text-toggle">
      <input type="checkbox" bind:checked={$showJointInfo} />
      Joint Info
    </label>
    <label class="text-toggle">
      <input type="checkbox" bind:checked={showHandViewer} />
      Hand View
    </label>
    <label class="text-toggle">
      <input type="checkbox" bind:checked={$autoRotate} />
      Rotate View
    </label>
    <div class="horizontal-toggles">
      <label class="text-toggle">
        <input type="checkbox" bind:checked={$showGrid} />
        Grid
      </label>
      <label class="text-toggle">
        <input type="checkbox" bind:checked={$showGround} />
        Ground
      </label>
    </div>
    <div class="hplane-row">
      <label class="text-toggle">
        <input type="checkbox" bind:checked={$showHPlane} />
        H-Plane
      </label>
      {#if $showHPlane}
        <input
          class="hplane-input"
          type="number"
          step="0.01"
          bind:value={$hPlaneHeight}
        />
        <span class="hplane-unit">m</span>
        <input
          class="hplane-input"
          type="number"
          min="0" max="1" step="0.01"
          bind:value={$hPlaneOpacity}
        />
        <span class="hplane-unit">opacity</span>
      {/if}
    </div>
  </div>

  <!-- Hand Viewer Panel -->
  {#if showHandViewer}
    <div class="hand-panel">
      <HandViewer side="left" />
      <div class="hand-divider"></div>
      <HandViewer side="right" />
    </div>
  {/if}

  <!-- Right-aligned Content Panel -->
  <div class="right-panel">
    <!-- Content -->
    <div class="tab-body">
      {#if $activeTab === 'sync'}
        <JointTable />
      {:else if $activeTab === 'traj'}
        <TrajectoryPanel />
      {:else if $activeTab === 'load'}
        <LoadTrajectory />
      {:else if $activeTab === 'control'}
        <ControlJoints />
      {/if}
    </div>
  </div>

</div>

<style>
  .app {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #1a1a1d;
  }

  /* ── Full-screen viewer ── */
  .viewer-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    transition: filter 0.3s ease;
  }

  .viewer-bg.blurred {
    filter: blur(5px) brightness(0.7);
  }

  /* ── Top-Left Info Panel ── */
  .info-panel {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 20;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }

  .info-panel > * {
    pointer-events: auto;
  }

  /* ── Left Control Panel (Nav) inside Info Panel ── */
  .control-panel {
    width: 200px;
    z-index: 20;
    background: transparent;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* ── Joint Info Overlay ── */
  .joint-info-overlay {
    position: absolute;
    top: 20px;
    left: 240px;
    z-index: 20;
    pointer-events: none;
    display: flex;
    flex-direction: row;
    gap: 32px;
    color: #ddd;
    font-size: 0.065em;
    font-family: 'Courier New', monospace;
    letter-spacing: 0.3px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  }

  .info-column {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .info-section {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .info-header {
    color: var(--primary-color);
    font-weight: bold;
  }

  .info-item {
    padding-left: 8px;
  }

  /* ── Bottom-Left Panel ── */
  .bottom-left-panel {
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 20;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }

  .horizontal-toggles {
    display: flex;
    gap: 20px;
  }

  .hplane-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .hplane-input {
    width: 60px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 4px;
    color: var(--primary-color);
    font-size: 0.82em;
    font-family: 'Courier New', monospace;
    padding: 2px 6px;
    text-align: right;
    outline: none;
    -moz-appearance: textfield;
  }

  .hplane-input::-webkit-outer-spin-button,
  .hplane-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .hplane-unit {
    font-size: 0.75em;
    color: #555;
    letter-spacing: 0.5px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  }

  .text-toggle {
    cursor: pointer;
    user-select: none;
    font-size: 0.85em;
    color: #888;
    font-family: inherit;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.2s;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  }
  .text-toggle input { display: none; }

  .text-toggle:hover {
    color: #bbb;
  }
  .text-toggle:has(input:checked) {
    color: var(--primary-color);
    font-weight: bold;
  }

  /* ── Right Content Panel ── */
  .right-panel {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 360px;
    max-height: calc(100vh - 40px);
    z-index: 20;
    background: rgba(30, 30, 30, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }

  .title-block {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .drama-logo {
    font-size: 1.8em;
    font-weight: 700;
    color: var(--primary-color);
    letter-spacing: 3px;
    line-height: 1;
  }

  .drama-full {
    font-size: 0.68em;
    color: #444;
    line-height: 1.4;
    letter-spacing: 0.2px;
  }

  /* Categories Styling */
  .pose-categories {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .category-section h4 {
    margin: 0 0 8px 0;
    font-size: 0.85em;
    color: var(--primary-color);
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 4px;
  }

  /* ── Tabs ── */
  .tab-bar {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 4px 0;
    flex-shrink: 0;
  }

  .tab {
    width: 100%;
    padding: 9px 12px;
    background: transparent;
    border: 1px solid transparent;
    color: #4a4a55;
    cursor: pointer;
    border-radius: 6px;
    font-size: 0.82em;
    font-family: inherit;
    text-align: left;
    transition: all 0.15s;
    letter-spacing: 0.2px;
  }

  .tab:hover {
    color: #aaa;
    background: rgba(255, 255, 255, 0.04);
  }

  .tab.active {
    color: var(--text-main);
    background: rgba(79, 163, 247, 0.12);
    border-color: rgba(79, 163, 247, 0.25);
    font-weight: 500;
  }

  /* ── Tab content area ── */
  .tab-body {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 10px 12px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  /* ── Hand Viewer Panel ── */
  .hand-panel {
    position: absolute;
    margin-left: 50px;
    top: 20px;
    left: 230px;
    width: 450px;
    height: calc(100vh - 40px);
    z-index: 20;
    display: flex;
    flex-direction: column;
    background: rgba(18, 18, 22, 0.88);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  }

  .hand-divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.08);
    flex-shrink: 0;
  }

  /* ── Mobile ── */
  @media screen and (max-width: 768px) {
    :global(body, html) { overflow-y: auto; }

    .app {
      height: auto;
      min-height: 100vh;
      overflow: visible;
    }

    .viewer-bg {
      position: relative;
      height: 50vh;
      min-height: 300px;
    }

    .info-panel {
      position: relative;
      top: 0; left: 0;
      padding: 20px;
    }

    .control-panel {
      width: 100%;
      max-height: none;
      border-radius: 0;
      border: none;
      background: transparent;
    }

    .bottom-left-panel {
      position: relative;
      bottom: auto; left: auto;
      margin: 0 20px 20px 20px;
    }

    .right-panel {
      position: relative;
      top: 0; right: auto;
      width: 100%;
      max-height: none;
      border-radius: 0;
      border: none;
      border-top: 1px solid rgba(255,255,255,0.08);
      background: rgba(7, 7, 11, 0.6);
    }

    .tab-bar {
      flex-direction: row;
      flex-wrap: wrap;
    }

    .tab { flex: 1; text-align: center; min-width: 100px; }

    .tab-body { overflow-y: visible; }
  }
</style>
