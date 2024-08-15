<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={16}
  cases={[
    [
      "2",
      "<p>The path is passable even during extreme weather events, with a minimum clear width of 3m maintained at all times.</p>",
    ],
    [
      "1",
      "<p>The path is occasionally narrowed due to the presence of water.</p>",
    ],
    [
      "0",
      "<p>The path is occasionally inaccessible or unpassable due to the presence of water.</p>",
    ],
  ]}
>
  <p>Effect of drainage and water on user experience.</p>
  <p>Mode: All Active Modes</p>
</Question>
