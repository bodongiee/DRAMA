<script>
  import { trajectory } from '../stores/robot.js'

  function fmt(obj) {
    if (!obj) return { x: '0.000', y: '0.000', z: '0.000' }
    return { x: obj.x.toFixed(3), y: obj.y.toFixed(3), z: obj.z.toFixed(3) }
  }

  const cards = [
    { key: 'vr_l',    label: 'Left End Effector',  sub: 'VR Target',  color: '#ff6b6b' },
    { key: 'vr_r',    label: 'Right End Effector', sub: 'VR Target',  color: '#4fa3f7' },
    { key: 'robot_l', label: 'Left End Effector',  sub: 'Robot Real', color: '#57cc99' },
    { key: 'robot_r', label: 'Right End Effector', sub: 'Robot Real', color: '#f2cc8f' },
  ]
</script>

<div class="traj-list">
  {#each cards as card}
    {@const pos = fmt($trajectory[card.key])}
    <div class="traj-card" style="--c: {card.color}">
      <div class="card-head">
        <span class="card-label">{card.label}</span>
        <span class="card-sub">{card.sub}</span>
      </div>
      <div class="coords">
        <span><em>X</em> {pos.x}</span>
        <span><em>Y</em> {pos.y}</span>
        <span><em>Z</em> {pos.z}</span>
      </div>
    </div>
  {/each}
</div>

<style>
  .traj-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .traj-card {
    background: rgba(255, 255, 255, 0.025);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-left: 3px solid var(--c);
    padding: 10px 14px;
  }

  .card-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 8px;
  }

  .card-label {
    font-size: 0.8em;
    color: #aaa;
    font-weight: 500;
  }

  .card-sub {
    font-size: 0.7em;
    color: var(--c);
    opacity: 0.8;
  }

  .coords {
    display: flex;
    gap: 14px;
    font-family: 'Courier New', monospace;
    font-size: 0.85em;
    color: #ccc;
  }

  .coords em {
    font-style: normal;
    color: #555;
    font-size: 0.85em;
    margin-right: 3px;
  }
</style>
