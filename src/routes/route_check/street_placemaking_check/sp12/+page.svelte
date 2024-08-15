<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={12}
  cases={[
    [
      "2",
      "<p>No redundant street furniture, advertising or temporary signage. Footways are clear from obstruction and signage clutter is minimal.</p>",
    ],
    [
      "1",
      "<p>Some redundant street furniture, advertising and temporary advertising. Some signage clutter.</p>",
    ],
    [
      "0",
      "<p>Lots of redundant street furniture, advertising, and temporary signage causing obstructions. Signage clutter contributing to visual overload.</p>",
    ],
  ]}
>
  <p>Impact of street clutter on place and movement.</p>
</Question>
