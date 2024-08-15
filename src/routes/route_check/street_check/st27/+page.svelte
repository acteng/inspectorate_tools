<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={11}
  cases={[
    [
      "2",
      "<p>Deviation factor against straight line or shortest alternative less than 1.2.</p>",
    ],
    [
      "1",
      "<p>Deviation factor against straight line or shortest alternative 1.2-1.4.</p>",
    ],
    [
      "0",
      "<p>Deviation factor against straight line or shortest alternative greater than 1.4.</p>",
    ],
  ]}
>
  <p>Deviation of cycle route against straight line or shortest alternative.</p>
  <p>Mode: Cycling</p>
</Question>
