<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={11}
  label="Enforcement of Loading and Parking"
  cases={[
    [
      "2",
      "Good loading and servicing provision, low impact and integrated. Parking enforcement recognised.   Or, no loading or parking provision necessary.",
    ],
    [
      "1",
      "Reasonable loading, servicing and parking provision in street area where needed. ",
    ],
    [
      "0",
      "No designated provision: risk of abuse, pedestrian or cycling movement impacted.",
    ],
  ]}
>
  <p>
    Impact of on-street loading, servicing and parking provision on place and
    movement.
  </p>
</Question>
