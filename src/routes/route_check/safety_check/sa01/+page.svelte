<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={0}
  label="Conflict at Side Roads and Priority Junctions"
  cases={[
    ["C", ">2,500vpd cut across main walking, wheeling or cycling streams."],
    [
      "0",
      "<2,500vpd cut across main walking, wheeling or cycling streams, but side roads and priority junctions are untreated.",
    ],
    [
      "1",
      "<2,500vpd cut across main walking, wheeling or cycling streams and side roads and priority junctions have entry treatments.",
    ],
    [
      "2",
      "Side roads/priority junctions have entry treatments that offer greater protection for  pedestrian and cycle movements (e.g. exit only, continuous footways, zebra/parallel crossings as appropriate to context).",
    ],
  ]}
>
  <p>
    Pedestrian and cyclist conflict with motor traffic at side roads/priority
    junctions
  </p>
</Question>
