<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={11}
  cases={[
    [
      "2",
      "<p>More than 3m clear footway width and pedestrian comfort is good (PCL of A-C).</p>",
    ],
    [
      "1",
      "<p>Where the footway is next to the carriageway, there is:</p><ul><li>2m-3m clear footway width and pedestrian comfort is good (PCL of A-C).</li><li>More than 3m clear footway width and pedestrian comfort is poor (PCL of D-E).</li></ul><p>Where the footway is not next to the carriageway, the clear footway width is 1.5m-3m.</p>",
    ],
    [
      "0",
      "<p>Where the footway is next to the carriageway, there is:</p><ul><li>less than 2m clear footway width but pedestrian comfort is good (PCL of A-C)</li><li>2m-3m clear footway width and pedestrian comfort is poor (PCL of D-E).</li></ul><p>Where the footway is not next to the carriageway, the clear footway width is less than 1.5m.</p>",
    ],
    [
      "C",
      "<p>Where the footway is next to the carriageway, there is:</p><ul><li>less than 1m clear footway width on any footway</li><li>less than 1.5m clear footway width for over 6m</li><li>1m-2m clear footway width with a Pedestrian Comfort Level of D-E</li></ul><p>Or there is no footway.</p>",
    ],
  ]}
>
  <p>
    Description: Clear walking and wheeling spaces free of permanent
    obstructions and furniture, reducing risk of pedestrians walking in the
    carriageway.
  </p>
  <p>Mode: Walking / Wheeling</p>
</Question>
