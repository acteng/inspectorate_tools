<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={5}
  cases={[
    [
      4,
      "<p>All walking and wheeling routes have all of the features from the list above.</p>",
    ],
    [
      3,
      "<p>There are more than two walking and wheeling routes with all of the features from the list above.</p>",
    ],
    [
      2,
      "<p>There are two walking and wheeling routes with all of the features from the list above.</p>",
    ],
    [
      1,
      "<p>There is one walking and wheeling route with all of the features from the list above.</p>",
    ],
    [
      0,
      "<p>There are no walking and wheeling routes with the features from the list above.</p>",
    ],
  ]}
>
  <p>(How easy it is to get through the area as a pedestrian)</p>
  <p>
    Suitable routes for walking and wheeling are only those which satisfy all
    conditions in the following list:
  </p>
  <ul>
    <li>Smooth and sealed footway surfaces.</li>
    <li>
      Dropped kerbs with suitable gradients and appropriate tactile paving
      surfaces at crossing locations.
    </li>
    <li>
      Suitable footway widths as defined in DfT’s Inclusive Mobility guidance.
    </li>
    <li>Suitable tactile paving surfaces.</li>
    <li>Acceptable footway camber (&le;2.5%).</li>
    <li>Minimal street clutter.</li>
    <li>Appropriate street lighting.</li>
  </ul>
</Question>
