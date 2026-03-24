<script>
  import { joints, robotJointDefs } from '../stores/robot.js'

  function naturalSort(a, b) {
    return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' })
  }

  $: subCategories = [
    { name: 'BASE',        joints: $robotJointDefs.filter(j => !j.name.startsWith('arm_l_') && !j.name.startsWith('arm_r_') && !j.name.startsWith('finger_l_') && !j.name.startsWith('finger_r_')) },
    { name: 'ARM - Left',  joints: $robotJointDefs.filter(j => j.name.startsWith('arm_l_')) },
    { name: 'ARM - Right', joints: $robotJointDefs.filter(j => j.name.startsWith('arm_r_')) },
    { name: 'Hand - Left', joints: $robotJointDefs.filter(j => j.name.startsWith('finger_l_')) },
    { name: 'Hand - Right',joints: $robotJointDefs.filter(j => j.name.startsWith('finger_r_')) },
  ]
    .filter(c => c.joints.length > 0)
    .map(c => ({ ...c, joints: [...c.joints].sort(naturalSort) }))

  let expandedWorker = false
  let expandedLimits = false
  let expandedSub = {}

  function toggleSub(key) {
    expandedSub[key] = !expandedSub[key]
  }
</script>

<div class="categories">
  <!-- Worker -->
  <div class="category-section">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <h4 class="category-header" on:click={() => expandedWorker = !expandedWorker}>
      Worker <span class="unit">rad</span>
      <span class="toggle-icon">{expandedWorker ? '-' : '+'}</span>
    </h4>
    {#if expandedWorker}
      <div class="sub-list">
        {#each subCategories as sub}
          {@const key = 'w_' + sub.name}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <div class="sub-header" on:click={() => toggleSub(key)}>
            {sub.name}
            <span class="toggle-icon">{expandedSub[key] ? '-' : '+'}</span>
          </div>
          {#if expandedSub[key]}
            <table>
              <thead><tr><th>Joint</th><th>Value</th></tr></thead>
              <tbody>
                {#each sub.joints as joint}
                  <tr>
                    <td class="name">{joint.name}</td>
                    <td class="val">{($joints[joint.name] ?? 0).toFixed(3)}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          {/if}
        {/each}
      </div>
    {/if}
  </div>

  <!-- Limits -->
  <div class="category-section">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <h4 class="category-header" on:click={() => expandedLimits = !expandedLimits}>
      Limits
      <span class="toggle-icon">{expandedLimits ? '-' : '+'}</span>
    </h4>
    {#if expandedLimits}
      <div class="sub-list">
        {#each subCategories as sub}
          {@const key = 'l_' + sub.name}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <div class="sub-header" on:click={() => toggleSub(key)}>
            {sub.name}
            <span class="toggle-icon">{expandedSub[key] ? '-' : '+'}</span>
          </div>
          {#if expandedSub[key]}
            <table>
              <thead><tr><th>Joint</th><th>Type</th><th>Min / Max</th></tr></thead>
              <tbody>
                {#each sub.joints as joint}
                  <tr>
                    <td class="name">{joint.name}</td>
                    <td class="type">{joint.type}</td>
                    <td class="range">
                      {joint.min !== null ? `${joint.min.toFixed(2)} / ${joint.max.toFixed(2)}` : '—'}
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          {/if}
        {/each}
      </div>
    {/if}
  </div>

  {#if $robotJointDefs.length === 0}
    <div class="empty">Robot not loaded yet...</div>
  {/if}
</div>

<style>
  .categories {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .category-section {
    background: rgba(255, 255, 255, 0.025);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    overflow: hidden;
  }

  .category-header {
    margin: 0;
    font-size: 0.85em;
    color: var(--primary-color);
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 8px 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    user-select: none;
    transition: color 0.2s;
    background: rgba(79, 163, 247, 0.06);
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }

  .category-header:hover {
    color: #fff;
  }

  .toggle-icon {
    margin-left: auto;
    font-size: 1.2em;
    line-height: 1;
    font-weight: normal;
    color: #888;
  }

  .unit {
    font-weight: normal;
    color: #444;
    font-size: 0.9em;
    text-transform: none;
  }

  .sub-list {
    display: flex;
    flex-direction: column;
    padding: 4px 0;
  }

  .sub-header {
    font-size: 0.78em;
    color: var(--primary-color);
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 5px 12px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    transition: color 0.2s;
  }

  .sub-header:hover {
    color: #fff;
  }

  table { width: 100%; border-collapse: collapse; }
  th, td { padding: 6px 12px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.03); }
  th { font-size: 0.7em; color: #444; font-weight: 500; }

  td.name  { font-size: 0.78em; color: #666; font-family: 'Courier New', monospace; }
  td.type  { font-size: 0.75em; color: #4a4a66; }
  td.range { font-size: 0.75em; color: #4a4a66; font-family: monospace; }

  td.val {
    font-size: 0.82em;
    color: var(--accent-green);
    font-family: 'Courier New', monospace;
    font-weight: bold;
    text-align: right;
  }

  tr:last-child td { border-bottom: none; }

  .empty {
    color: #444;
    font-size: 0.82em;
    text-align: center;
    padding: 20px;
  }
</style>
