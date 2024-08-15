<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={11}
  cases={[
    [
      "2",
      "<p>Good loading and servicing provision, low impact and integrated. Parking enforcement recognised.</p><p>Or, no loading or parking provision necessary.</p>",
    ],
    [
      "1",
      "<p>Reasonable loading, servicing and parking provision in street area where needed.</p>",
    ],
    [
      "0",
      "<p>No designated provision: risk of abuse, pedestrian or cycling movement impacted.</p>",
    ],
  ]}
>
  <p>
    Impact of on-street loading, servicing and parking provision on place and
    movement.
  </p>
</Question>
