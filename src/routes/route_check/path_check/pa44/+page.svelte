<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={28}
  cases={[
    [
      "2",
      "<p>The route is within 400m of at least one public transport interchange and at least one other destination.</p>",
    ],
    [
      "1",
      "<p>The route is within 400m of a public transport interchange or other destination.</p>",
    ],
    [
      "0",
      "<p>The route is not within 400m of any public transport interchanges or other destinations.</p>",
    ],
  ]}
>
  <p>
    Description: Route links to public transport interchanges and other
    destinations.
  </p>
  <p>Other destinations could include:</p>
  <ul>
    <li>Local high streets</li>
    <li>Schools and colleges</li>
    <li>Hospitals and healthcare</li>
    <li>Access to green and blue spaces</li>
    <li>Viewing points</li>
    <li>Tourist destinations, etc.</li>
    <p>Mode: Walking / Wheeling / Cycling</p>
  </ul>
</Question>
