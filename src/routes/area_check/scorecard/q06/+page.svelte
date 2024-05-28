<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={6}
  label="Permeability - Cycling"
  cases={[
    [
      4,
      "<p>There are more than two quality cycle routes through the area</p><p>Each route starts and ends with high-quality crossings into adjacent neighbourhoods or other routes.</p>",
    ],
    [
      3,
      "<p>There are two quality cycle routes through the area</p><p>Both routes start and end with high-quality crossings into adjacent neighbourhoods or other routes.</p>",
    ],
    [
      2,
      "<p>There is one quality cycle route through the area.</p><p>The route starts and ends with high-quality crossings into adjacent neighbourhoods or other routes.</p>",
    ],
    [
      1,
      "<p>There is one quality cycle route through the area which will use more than one street.</p><p>The route starts and ends with crossings into adjacent neighbourhoods or other routes.</p>",
    ],
    [
      0,
      "<p>There are no cycle routes through the area which start and end with high-quality crossings into adjacent neighbourhoods or other routes.</p>",
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
