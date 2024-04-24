<script lang="ts">
  export let title: string;
  export let existing: number;
  export let proposed: number;
  let netDifference = proposed - existing;
</script>

<div class="header">
  {title}
</div>
<div class="grid-box">{existing}%</div>
<div class="grid-box">{proposed}%</div>
<div class="grid-box">{netDifference}%</div>

<style>
  .header {
    background-color: #006853;
    color: white;
    border: 1px solid white;
    text-align: center;
  }
  .grid-box {
    text-align: center;
    border: 1px solid black;
  }
</style>
