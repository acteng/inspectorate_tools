<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={28}
  label="Proximity to Destinations"
  cases={[
    [
      "0",
      "The route is not within 400m of any public transport interchanges or other destinations.",
    ],
    [
      "1",
      "The route is within 400m of a public transport interchange or other destination.",
    ],
    [
      "2",
      "The route is within 400m of at least one public transport interchange and at least one other destination.",
    ],
  ]}
>
  <p>
    Route links to public transport interchanges and other destinations. Other
    destinations could include: • Local high streets • Schools and colleges •
    Hospitals and healthcare • Access to green and blue spaces • Viewing points
    • Tourist destinations, etc.
  </p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
