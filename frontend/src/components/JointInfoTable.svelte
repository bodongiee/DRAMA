<script>
  import { robotJointDefs } from '../stores/robot.js'
</script>

<div class="section">
  <div class="section-title">Joint Limits</div>
  <table>
    <thead>
      <tr><th>Joint</th><th>Type</th><th>Min / Max</th></tr>
    </thead>
    <tbody>
      {#each [...$robotJointDefs].sort((a, b) => a.name.localeCompare(b.name)) as joint}
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
  }

  table { width: 100%; border-collapse: collapse; }
  th, td { padding: 6px 12px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.03); }
  th { font-size: 0.7em; color: #444; font-weight: 500; }

  td.name  { font-size: 0.78em; color: #666; font-family: 'Courier New', monospace; }
  td.type  { font-size: 0.75em; color: #4a4a66; }
  td.range { font-size: 0.75em; color: #4a4a66; font-family: monospace; }

  tr:last-child td { border-bottom: none; }
</style>
