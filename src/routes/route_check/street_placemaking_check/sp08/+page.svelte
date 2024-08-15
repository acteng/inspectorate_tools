<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={8}
  cases={[
    [
      "2",
      "<p>The street network is accessible and its layout helps users navigate the area without the need for maps or signage.</p><p>Users can see where they are going and know how to get there.</p>",
    ],
    [
      "1",
      "<p>The street network helps users find their way in some situations.</p><p>Users may need to refer to maps or signage at times while moving through the area.</p>",
    ],
    [
      "0",
      "<p>The street network is complex or there are connectivity issues.</p><p>Maps or signage are needed to help navigate the area.</p>",
    ],
  ]}
>
  <p>Street network impact on wayfinding.</p>
</Question>
