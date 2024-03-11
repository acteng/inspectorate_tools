<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={1}
  label="Porosity - Cycling"
  cases={[
    [
      4,
      "The area is fully porous for cyclists: More than one gateway per area side.",
    ],
    [3, "The area is porous for cyclists: One gateway per area side."],
    [
      2,
      "The area is semi-porous for cyclists: At least two gateways into the area.",
    ],
    [
      1,
      "The area is partially porous for cyclists: At least one gateway into the area.",
    ],
    [0, "There are no gateways into the area"],
  ]}
>
  <p>(How easy it is to get into the area as a cyclist)</p>
  <p>
    A gateway for cycling is an intervention that enables safe and accessible
    access into an area for cyclists. Typically, this will be a controlled
    crossing facility but it could also be another form of crossing, including
    bridges and underpasses.
  </p>
</Question>
