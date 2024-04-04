<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={11}
  label="Footway Widths"
  cases={[
    [
      "C",
      "Where the footway is next to the carriageway, there is: • <1m clear footway width on any footway • <1.5m clear footway width for over 6m • 1m-2m clear footway width with a Pedestrian Comfort Level of D-E  Or there is no footway.",
    ],
    [
      "0",
      "Where the footway is next to the carriageway, there is: • <2m clear footway width but pedestrian comfort is good (PCL of A-C) • 2m-3m clear footway width and pedestrian comfort is poor (PCL of D-E).  Where the footway is not next to the carriageway, the clear footway width is <1.5m.",
    ],
    [
      "1",
      "Where the footway is next to the carriageway, there is: • 2m-3m clear footway width and pedestrian comfort is good (PCL of A-C). • >3m clear footway width and pedestrian comfort is poor (PCL of D-E).  Where the footway is not next to the carriageway, the clear footway width is 1.5m-3m.",
    ],
    [
      "2",
      ">3m clear footway width and pedestrian comfort is good (PCL of A-C).",
    ],
  ]}
>
  <p>
    Clear walking and wheeling spaces free of permanent obstructions and
    furniture, reducing risk of pedestrians walking in the carriageway.
  </p>
</Question>
