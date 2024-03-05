<script lang="ts">
  import { ExternalLink } from "$lib";
  import Question from "./Question.svelte";
  import { base } from "$app/paths";

  // TODO Include bold in the choices
</script>

<div class="govuk-prose">
  <div class="govuk-breadcrumbs">
    <ol class="govuk-breadcrumbs__list">
      <li class="govuk-breadcrumbs__list-item">
        <a class="govuk-breadcrumbs__link" href="{base}/">Tools</a>
      </li>
      <li class="govuk-breadcrumbs__list-item">
        <a class="govuk-breadcrumbs__link" href="{base}/area_check">
          Area check tool
        </a>
      </li>
      <li class="govuk-breadcrumbs__list-item">Area Scorecard</li>
    </ol>
  </div>

  <Question
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
      A gateway for walking and wheeling is an intervention that enables safe
      and accessible access into an area for pedestrians. Typically, this will
      be a controlled crossing facility but it could also be another form of
      crossing, including bridges and underpasses.
    </p>
  </Question>

  <Question
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

  <Question
    label="Crossings - Walking and Wheeling"
    cases={[
      [
        4,
        "Crossing facilities for pedestrians on the perimeter of the area are controlled, and are present in all places where there are desire lines.",
      ],
      [
        3,
        "Crossing facilities for pedestrianson the perimeter of the area are controlled, and are present in most places where there are desire lines.",
      ],
      [
        2,
        "Crossing facilities for pedestrians on the perimeter of the area are controlled, and are present in some places where there are desire lines.",
      ],
      [
        1,
        "Crossing facilities for pedestrians on the perimeter of the area are uncontrolled.",
      ],
      [
        0,
        "There are no crossing facilities for pedestrians on the perimeter of the area",
      ],
    ]}
  />

  <Question
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
      </ExternalLink> is another tool developed by Active Travel England to check
      that any cycle crossing designs are suitable for their context.
    </p>
  </Question>

  <Question
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

  <Question
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
</div>
