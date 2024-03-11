<script lang="ts">
  import { ExternalLink } from "$lib";
  import Question from "../Question.svelte";
</script>

<Question
  idx={4}
  label="Crossings - Cycling"
  cases={[
    [
      4,
      "Controlled crossing facilities for cyclists on the perimeter of the area are present wherever required, and they all follow LTN 1/20 guidance and, where applicable, recommendations in the 'Crossing Selector Tool'.",
    ],
    [
      3,
      "Controlled crosing facilities for cyclists on the perimeter of the area are present wherever required, and they follow LTN 1/20 guidance. Some of these cycle crossings comply with recommendations in the 'Crossing Selector Tool' where applicable.",
    ],
    [
      2,
      "Some controlled crossing facilities for cyclists on the perimeter of the area are present, but they are mostly toucan crossings.",
    ],
    [
      1,
      "Crossing facilities for cyclists on the perimeter of the area are uncontrolled.",
    ],
    [
      0,
      "There are no crossing facilities for cyclists on the perimeter of the area.",
    ],
  ]}
>
  <p>
    The <ExternalLink
      href="https://www.gov.uk/government/publications/active-travel-england-design-assistance-tools"
    >
      Crossing Selector Tool
    </ExternalLink> is another tool developed by Active Travel England to check that
    any cycle crossing designs are suitable for their context.
  </p>
</Question>
