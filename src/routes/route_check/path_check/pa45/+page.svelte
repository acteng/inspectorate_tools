<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={29}
  label="Quality of Connections"
  cases={[
    [
      "2",
      "Walking, wheeling and cycling connections are accessible and offer a high level of service.",
    ],
    [
      "1",
      "Walking, wheeling and cycling connections are accessible and offer a medium level of service.",
    ],
    [
      "0",
      "Walking, wheeling and cycling connections are inaccessible or offer a low level of service.",
    ],
  ]}
>
  <p>
    Quality of connections to public transport interchanges or other
    destinations.
  </p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
