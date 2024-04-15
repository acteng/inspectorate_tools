<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={5}
  label="Permeability - Walking and Wheeling"
  cases={[
    [
      4,
      "All walking and wheeling routes have all of the features from the list above.",
    ],
    [
      3,
      "There are more than two walking and wheeling routes with all of the features from the list above.",
    ],
    [
      2,
      "There are two walking and wheeling routes with all of the features from the list above.",
    ],
    [
      1,
      "There is one walking and wheeling route with all of the features from the list above.",
    ],
    [
      0,
      "There are no walking and wheeling routes with the features from the list above.",
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
    <li>Acceptable footway camber (≤2.5%).</li>
    <li>Minimal street clutter.</li>
    <li>Appropriate street lighting.</li>
  </ul>
</Question>
