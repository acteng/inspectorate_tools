<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={2}
  label="Conflict at Roundabouts and Signal Junctions"
  cases={[
    [
      "2",
      "<p>All pedestrian and cyclist movements are separated from all motor traffic movements at roundabouts and/or signal controlled junctions.</p>",
    ],
    [
      "1",
      "<p>The principal pedestrian and cyclist movements are separated from motor traffic movements at roundabouts and/or signal controlled junctions.</p>",
    ],
    [
      "0",
      "<p>The principal pedestrian and/or cyclist movements are in conflict with motor traffic movements at roundabouts and/or signal controlled junctions.</p>",
    ],
    [
      "C",
      "<p>>2,500vpd cut across main walking, wheeling or cycling streams.</p>",
    ],
  ]}
>
  <p>
    Pedestrian and cyclist conflict with motor traffic at roundabouts and
    signal-controlled junctions
  </p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
