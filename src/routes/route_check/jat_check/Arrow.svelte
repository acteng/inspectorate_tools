<script lang="ts">
  export let color: string;

  // TODO rotation

  // TODO straight, left, right

  // TODO proper arrow shapes
</script>

<svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
  <polygon points="15,0 0,30 30,30" fill={color} />
</svg>

<style>
  polygon:hover {
    border: 1px solid black; /* TODO not working */
    cursor: pointer;
  }
</style>
