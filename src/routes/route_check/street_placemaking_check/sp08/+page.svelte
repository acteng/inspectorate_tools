<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={8}
  label="Street Network Layout"
  cases={[
    [
      "0",
      "The street network is complex or there are connectivity issues.  Maps or signage are needed to help navigate the area.",
    ],
    [
      "1",
      "The street network helps users find their way in some situations.  Users may need to refer to maps or signage at times while moving through the area.",
    ],
    [
      "2",
      "The street network is accessible and its layout helps users navigate the area without the need for maps or signage.  Users can see where they are going and know how to get there.",
    ],
  ]}
>
  <p>Street network impact on wayfinding.</p>
</Question>
