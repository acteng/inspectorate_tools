<script lang="ts">
  export let title: string;
  export let isComplete: boolean;
  export let netDifference: number;
  export let summaryNoun: string;

  let summary =
    netDifference > 0
      ? `The proposed design will likely improve ${summaryNoun}`
      : `The proposed design will likely reduce ${summaryNoun}`;
</script>

<div class="header">
  {title}
</div>
<div class="grid-box">{isComplete}</div>
<div class="grid-box">{netDifference}%</div>
<div class="grid-box">{summary}</div>

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
