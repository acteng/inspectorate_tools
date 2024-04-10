<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={2}
  label="Conflict at Roundabouts and Signal Junctions"
  cases={[
    [
      "2",
      "All pedestrian and cyclist movements are separated from all motor traffic movements at roundabouts and/or signal controlled junctions.",
    ],
    [
      "1",
      "The principal pedestrian and cyclist movements are separated from motor traffic movements at roundabouts and/or signal controlled junctions.",
    ],
    [
      "0",
      "The principal pedestrian and/or cyclist movements are in conflict with motor traffic movements at roundabouts and/or signal controlled junctions.",
    ],
    ["C", ">2,500vpd cut across main walking, wheeling or cycling streams."],
  ]}
>
  <p>
    Pedestrian and cyclist conflict with motor traffic at roundabouts and
    signal-controlled junctions
  </p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
