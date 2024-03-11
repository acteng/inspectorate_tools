<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={5}
  label="Permeability - Cycling"
  cases={[
    [
      4,
      "There are more than two quality cycle routes through the area. Each route starts and ends with high-quality crossings into adjacent neighbourhoods or other routes.",
    ],
    [
      3,
      "There are two quality cycle routes through the area. Both routes start and end with high-quality crossings into adjacent neighbourhoods or other routes.",
    ],
    [
      2,
      "There is one quality cycle route through the area. The route starts and ends with high-quality crossings into adjacent neighbourhoods or other routes.",
    ],
    [
      1,
      "There is one quality cycle route through the area which will use more than one street. The route starts and ends with crossings into adjacent neighbourhoods or other routes.",
    ],
    [
      0,
      "There are no cycle routes through the area which start and end with high-quality crossings into adjacent neighbourhoods or other routes.",
    ],
  ]}
>
  <p>(How easy it is to get through the area as a cyclist)</p>
  <p>
    Quality cycle routes and high-quality crossings are those which follow LTN
    1/20 guidance and have no critical issues as defined in ATE's Route Check.
    Please refer to the User Manual for further information.
  </p>
</Question>
