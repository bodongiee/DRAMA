<script>
  import { robotJointDefs, joints, manualMode, setJointAngle } from '../stores/robot.js'

  // 슬라이더 로컬 값 (manual 모드일 때 WebSocket과 독립)
  let localValues = {}

  // 조인트 정의 로드 시 초기값 설정
  $: $robotJointDefs.forEach(j => {
    if (!(j.name in localValues)) {
      localValues[j.name] = $joints[j.name] ?? 0
    }
  })

  // 3D 뷰어에서 직접 클릭/드래그하여 조인트를 움직였을 때 슬라이더도 즉각 동기화되도록 수정
  $: localValues = { ...localValues, ...$joints }

  function handleSlider(name, e) {
    const val = parseFloat(e.target.value)
    localValues[name] = val
    localValues = localValues
    setJointAngle(name, val)
  }

  function handleNumberInput(name, value, min, max) {
    let val = parseFloat(value)
    if (isNaN(val)) val = 0
    val = Math.max(min, Math.min(max, val)) // 한계값(limit) 벗어나지 않도록 제한
    localValues[name] = val
    localValues = localValues
    setJointAngle(name, val)
  }

  function resetJoint(name, e) {
    e.preventDefault()
    localValues[name] = 0
    localValues = localValues
    setJointAngle(name, 0)
  }

  $: categories = [
    { name: 'BASE', joints: $robotJointDefs.filter(j => !j.name.startsWith('arm_l_') && !j.name.startsWith('arm_r_') && !j.name.startsWith('finger_l_') && !j.name.startsWith('finger_r_')) },
    { name: 'ARM - Left', joints: $robotJointDefs.filter(j => j.name.startsWith('arm_l_')) },
    { name: 'ARM - Right', joints: $robotJointDefs.filter(j => j.name.startsWith('arm_r_')) },
    { name: 'Hand - Left', joints: $robotJointDefs.filter(j => j.name.startsWith('finger_l_')) },
    { name: 'Hand - Right', joints: $robotJointDefs.filter(j => j.name.startsWith('finger_r_')) }
  ].filter(c => c.joints.length > 0);

  let expandedCategories = {}
  function toggleCategory(name) {
    expandedCategories[name] = !expandedCategories[name]
  }
</script>

<div class="control-header">
  <label class="manual-toggle">
    <input type="checkbox" bind:checked={$manualMode} />
    <span class="toggle-track">
      <span class="toggle-thumb"></span>
    </span>
    <span class="toggle-label">
      {$manualMode ? 'Manual Mode — Robot sync paused' : 'Manual Mode'}
    </span>
  </label>
</div>

<div class="pose-categories">
  {#each categories as category}
    <div class="category-section">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <h4 class="category-header" on:click={() => toggleCategory(category.name)}>
        {category.name}
        <span class="toggle-icon">{expandedCategories[category.name] ? '-' : '+'}</span>
      </h4>
      {#if expandedCategories[category.name]}
        <div class="joint-list">
          {#each category.joints as joint}
            {@const limit = Math.max(Math.abs(joint.min ?? -3.14), Math.abs(joint.max ?? 3.14))}
            {@const min = -limit}
            {@const max = limit}
            {@const val = localValues[joint.name] ?? 0}
            <div class="joint-row">
              <div class="joint-meta">
                <span class="joint-name">{joint.name}</span>
                <input
                  type="number"
                  class="joint-val-input"
                  {min} {max} step="0.001"
                  value={val.toFixed(3)}
                  disabled={!$manualMode}
                  on:change={e => handleNumberInput(joint.name, e.target.value, min, max)}
                />
              </div>
              <div class="slider-wrap">
                <span class="limit">{min.toFixed(2)}</span>
                <input
                  type="range"
                  {min} {max}
                  step="0.001"
                  value={val}
                  disabled={!$manualMode}
                  on:input={e => handleSlider(joint.name, e)}
                  on:dblclick={e => resetJoint(joint.name, e)}
                  title="더블클릭으로 초기화"
                />
                <span class="limit">{max.toFixed(2)}</span>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  {/each}

  {#if $robotJointDefs.length === 0}
    <div class="empty">Robot not loaded yet...</div>
  {/if}
</div>

<style>
  .control-header {
    padding: 6px 2px 10px;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    margin-bottom: 4px;
    flex-shrink: 0;
  }

  /* Toggle switch */
  .manual-toggle {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    user-select: none;
  }

  .manual-toggle input { display: none; }

  .toggle-track {
    width: 36px;
    height: 20px;
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
    position: relative;
    transition: background 0.2s;
    flex-shrink: 0;
    border: 1px solid rgba(255,255,255,0.1);
  }

  .manual-toggle input:checked ~ .toggle-track {
    background: rgba(79, 163, 247, 0.7);
    border-color: rgba(79, 163, 247, 0.4);
  }

  .toggle-thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 14px;
    height: 14px;
    background: #888;
    border-radius: 50%;
    transition: left 0.2s, background 0.2s;
  }

  .manual-toggle input:checked ~ .toggle-track .toggle-thumb {
    left: 18px;
    background: #fff;
  }

  .toggle-label {
    font-size: 0.78em;
    color: #555;
    transition: color 0.2s;
  }

  .manual-toggle:has(input:checked) .toggle-label {
    color: var(--primary-color);
  }

  /* Categories Styling */
  .pose-categories {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .category-header {
    margin: 0 0 8px 0;
    font-size: 0.85em;
    color: var(--primary-color);
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 4px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    transition: color 0.2s;
  }

  .category-header:hover {
    color: #fff;
  }

  .toggle-icon {
    font-size: 1.2em;
    line-height: 1;
    font-weight: normal;
    color: #888;
  }

  /* Joint list */
  .joint-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .joint-row {
    padding: 6px 4px;
    border-radius: 6px;
    transition: background 0.15s;
  }

  .joint-row:hover {
    background: rgba(255,255,255,0.025);
  }

  .joint-meta {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 4px;
  }

  .joint-name {
    font-size: 0.78em;
    color: #666;
    font-family: 'Courier New', monospace;
  }

  .joint-val-input {
    font-size: 0.82em;
    color: var(--accent-green);
    font-family: 'Courier New', monospace;
    font-weight: bold;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 4px;
    width: 65px;
    text-align: right;
    outline: none;
    -moz-appearance: textfield;
  }

  .joint-val-input:disabled {
    color: var(--accent-green);
    -webkit-text-fill-color: var(--accent-green);
    opacity: 1;
  }

  .joint-val-input::-webkit-outer-spin-button,
  .joint-val-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .slider-wrap {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .limit {
    font-size: 0.68em;
    color: #3a3a44;
    width: 32px;
    text-align: center;
    flex-shrink: 0;
    font-family: monospace;
  }

  input[type="range"] {
    flex: 1;
    height: 3px;
    appearance: none;
    -webkit-appearance: none;
    background: rgba(255,255,255,0.1);
    border-radius: 2px;
    outline: none;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  input[type="range"]:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
    box-shadow: 0 0 6px rgba(79, 163, 247, 0.5);
  }

  input[type="range"]:disabled::-webkit-slider-thumb {
    background: #444;
    box-shadow: none;
  }

  input[type="range"]::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--primary-color);
    border: none;
    cursor: pointer;
  }

  .empty {
    color: #444;
    font-size: 0.82em;
    text-align: center;
    padding: 20px;
  }
</style>
