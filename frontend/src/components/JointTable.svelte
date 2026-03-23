<script>
  import { joints, robotJointDefs } from '../stores/robot.js'
</script>

<div class="section">
  <div class="section-title">Live Joint Pose <span class="unit">rad</span></div>
  <table>
    <thead>
      <tr><th>Joint</th><th>Value</th></tr>
    </thead>
    <tbody>
      {#each $robotJointDefs as joint}
        <tr>
          <td class="name">{joint.name}</td>
          <td class="val">{($joints[joint.name] ?? 0).toFixed(3)}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .section {
    background: rgba(255, 255, 255, 0.025);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    overflow: hidden;
    flex-shrink: 0;
  }

  .section-title {
    padding: 8px 12px;
    font-size: 0.75em;
    font-weight: 600;
    color: var(--primary-color);
    letter-spacing: 0.5px;
    text-transform: uppercase;
    border-bottom: 1px solid rgba(255,255,255,0.04);
    background: rgba(79, 163, 247, 0.06);
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .unit {
    font-weight: normal;
    color: #444;
    font-size: 0.9em;
    text-transform: none;
  }

  table { width: 100%; border-collapse: collapse; }
  th, td { padding: 6px 12px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.03); }
  th { font-size: 0.7em; color: #444; font-weight: 500; }

  td.name {
    font-size: 0.78em;
    color: #666;
    font-family: 'Courier New', monospace;
  }

  td.val {
    font-size: 0.82em;
    color: var(--accent-green);
    font-family: 'Courier New', monospace;
    font-weight: bold;
    text-align: right;
  }

  tr:last-child td { border-bottom: none; }
</style>
