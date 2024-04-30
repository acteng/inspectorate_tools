<script lang="ts">
  export let color: string;
  // TODO The rotated result goes out of bounds at most angles
  export let angle: number;

  // TODO straight, left, right

  // TODO proper arrow shapes
</script>

<svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
  <polygon
    points="15,0 0,30 30,30"
    fill={color}
    transform="rotate({angle}, 15, 15)"
  />
</svg>

<style>
  polygon:hover {
    stroke: black;
    stroke-width: 3px;
    cursor: pointer;
  }
</style>
