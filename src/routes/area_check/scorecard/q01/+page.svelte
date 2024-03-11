<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={0}
  label="Porosity - Walking and Wheeling"
  cases={[
    [
      4,
      "The area is fully porous for pedestrians: More than one gateway per area side.",
    ],
    [3, "The area is porous for pedestrians: One gateway per area side."],
    [
      2,
      "The area is semi-porous for pedestrians: At least two gateways into the area.",
    ],
    [
      1,
      "The area is partially porous for pedestrians: At least one gateway into the area.",
    ],
    [0, "There are no gateways into the area"],
  ]}
>
  <p>(How easy it is to get into the area as a pedestrian)</p>
  <p>
    A gateway for walking and wheeling is an intervention that enables safe and
    accessible access into an area for pedestrians. Typically, this will be a
    controlled crossing facility but it could also be another form of crossing,
    including bridges and underpasses.
  </p>
</Question>
