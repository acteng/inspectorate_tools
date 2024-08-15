<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={23}
  cases={[
    [
      "2",
      "<p>Inclusion of roadside tredges or selective planting.</p><p>Or, a buffer of at least 2m between sources of pollution and pedestrians and cyclists.</p>",
    ],
    [
      "1",
      "<p>0.5-2m buffer between sources of pollution and pedestrians and cyclists.</p><p>Or, there is a cycle facility at least 2m wide between the footway and carriageway.</p>",
    ],
    [
      "0",
      "<p>No roadside tredges or selective planting.</p><p>Or, a buffer of less than 0.5m between sources of pollution and pedestrians and cyclists.</p>",
    ],
  ]}
>
  <p>Proximity to PM10 & NOX concentration.</p>
</Question>
