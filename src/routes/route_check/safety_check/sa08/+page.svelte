<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={8}
  label="Motor Traffic Speed"
  cases={[
    ["C", "85th percentile speed is over 30mph."],
    ["0", "85th percentile speed is over 25mph."],
    ["1", "85th percentile speed is between 20mph and 25mph."],
    [
      "2",
      "85th percentile speed is under 20mph.  Or, cyclists are protected from motor traffic or off-road entirely and controlled crossings are provided for pedestrians wherever needed.",
    ],
  ]}
>
  <p>
    85th percentile speed of motor traffic (where cyclists are not protected or
    pedestrians are crossing uncontrolled)
  </p>
</Question>
