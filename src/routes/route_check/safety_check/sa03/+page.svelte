<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={2}
  label="Lane Widths"
  cases={[
    [
      "C",
      "Cyclists are mixed with traffic in lanes between 3.25m and 3.9m wide.   Or, cyclists are in unprotected cycle lanes and the combined width of the cycle lane and adjacent traffic lane is between 3.25m and 3.9m.",
    ],
    [
      "0",
      "Cyclists are mixed with traffic in lanes less than 3.25m wide or over 3.9m wide.  Or, cyclists are in unprotected cycle lanes and the combined width of the cycle lane and adjacent traffic lane is under 3.25m or over 3.9m.   Or cyclists are mixed with traffic on busy urban streets with no centre line.  Or, there are speed cushions present.",
    ],
    [
      "1",
      "Cyclists are in cycle lanes with light protection or stepped cycle tracks under 1.8m wide (single direction).  Or, cyclists are in a protected bidirectional cycle facility under 2.5m wide.  Or, cyclists are mixed with traffic on quiet urban streets with no centre line.",
    ],
    ["2", "Cyclists are protected from motor traffic or off-road entirely."],
  ]}
>
  <p>Effect of lane widths on conflict between cyclists and motor traffic</p>
</Question>
