<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={1}
  cases={[
    [
      "2",
      "<p>Side roads/priority junctions have entry treatments that offer greater protection for  pedestrian and cycle movements (e.g. exit only, continuous footways, zebra/parallel crossings as appropriate to context).</p>",
    ],
    [
      "1",
      "<p>Less than 2,500vpd cut across main walking, wheeling or cycling streams and side roads and priority junctions have entry treatments.</p>",
    ],
    [
      "0",
      "<p>Less than 2,500vpd cut across main walking, wheeling or cycling streams, but side roads and priority junctions are untreated.</p>",
    ],
    [
      "C",
      "<p>More than 2,500vpd cut across main walking, wheeling or cycling streams.</p>",
    ],
    ["N/A", ""],
  ]}
>
  <p>
    Description: Pedestrian and cyclist conflict with motor traffic at side
    roads/priority junctions.
  </p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
