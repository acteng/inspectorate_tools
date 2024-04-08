<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={16}
  label="Air Pollution - Proximity"
  cases={[
    [
      "0",
      "No roadside tredges or selective planting.   Or, a buffer of less than 0.5m between sources of pollution and pedestrians and cyclists. ",
    ],
    [
      "1",
      "0.5-2m buffer between sources of pollution and pedestrians and cyclists.   Or, there is a cycle facility at least 2m wide between the footway and carriageway.",
    ],
    [
      "2",
      "Inclusion of roadside tredges or selective planting.  And/or, a buffer of at least 2m between sources of pollution and pedestrians and cyclists.",
    ],
  ]}
>
  <p>Proximity to PM10 & NOX concentration.</p>
</Question>
