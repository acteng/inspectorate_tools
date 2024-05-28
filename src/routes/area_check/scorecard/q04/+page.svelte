<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={4}
  label="Crossings - Cycling"
  cases={[
    [
      4,
      "<p>Controlled crossing facilities for cyclists on the perimeter of the area are present wherever required, and they all follow LTN 1/20 guidance and, where applicable, recommendations in the 'Crossing Selector Tool'*.</p>",
    ],
    [
      3,
      "<p>Controlled crosing facilities for cyclists on the perimeter of the area are present wherever required, and they follow LTN 1/20 guidance. Some of these cycle crossings comply with recommendations in the 'Crossing Selector Tool'* where applicable.</p>",
    ],
    [
      2,
      "<p>Some controlled crossing facilities for cyclists on the perimeter of the area are present, but they are mostly toucan crossings.</p>",
    ],
    [
      1,
      "<p>Crossing facilities for cyclists on the perimeter of the area are uncontrolled.</p>",
    ],
    [
      0,
      "<p>There are no crossing facilities for cyclists on the perimeter of the area.</p>",
    ],
  ]}
>
  <p>
    *The 'Crossing Selector Tool' is another tool developed by Active Travel
    England to check that any cycle crossing designs are suitable for their
    context.
  </p>
</Question>
