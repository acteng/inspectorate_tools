<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={29}
  label="Quality of Connections"
  cases={[
    [
      "2",
      "<p>Walking, wheeling and cycling connections are accessible and offer a high level of service.</p>",
    ],
    [
      "1",
      "<p>Walking, wheeling and cycling connections are accessible and offer a medium level of service.</p>",
    ],
    [
      "0",
      "<p>Walking, wheeling and cycling connections are inaccessible or offer a low level of service.</p>",
    ],
    ["N/A", ""],
  ]}
>
  <p>
    Quality of connections to public transport interchanges or other
    destinations.
  </p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
