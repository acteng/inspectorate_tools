<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={12}
  label="Street Clutter"
  cases={[
    [
      "2",
      "No redundant street furniture, advertising or temporary signage. Footways are clear from obstruction and signage clutter is minimal.",
    ],
    [
      "1",
      "Some redundant street furniture, advertising and temporary advertising. Some signage clutter.",
    ],
    [
      "0",
      "Lots of redundant street furniture, advertising, and temporary signage causing obstructions. Signage clutter contributing to visual overload.",
    ],
  ]}
>
  <p>Impact of street clutter on place and movement.</p>
</Question>
