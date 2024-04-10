<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={11}
  label="Deviation of Cycle Route"
  cases={[
    [
      "2",
      "Deviation factor against straight line or shortest alternative less than 1.2.",
    ],
    [
      "1",
      "Deviation factor against straight line or shortest alternative 1.2-1.4.",
    ],
    [
      "0",
      "Deviation factor against straight line or shortest alternative greater than 1.4.",
    ],
  ]}
>
  <p>Deviation of cycle route against straight line or shortest alternative.</p>
  <p>Mode: Cycling</p>
</Question>
