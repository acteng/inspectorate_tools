<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={16}
  label="Drainage"
  cases={[
    [
      "0",
      "The path is occasionally inaccessible or unpassable due to the presence of water.",
    ],
    ["1", "The path is occasionally narrowed due to the presence of water."],
    [
      "2",
      "The path is passable even during extreme weather events, with a minimum clear width of 3m maintained at all times.",
    ],
  ]}
>
  <p>Effect of drainage and water on user experience.</p>
  <p>Mode: All Active Modes</p>
</Question>
