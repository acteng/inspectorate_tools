<script lang="ts">
  import { ExternalLink } from "$lib";
  import Question from "./Question.svelte";
  import { base } from "$app/paths";
  import { state } from "../data";

  // TODO Include bold in the choices

  $: totalExisting = sum($state.existingScores.map((x) => parseInt(x)));
  $: totalProposed = sum($state.proposedScores.map((x) => parseInt(x)));

  function sum(list: number[]): number {
    return list.reduce((total, x) => total + x, 0);
  }
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

  <p>Total existing score: {totalExisting}</p>
  <p>Total proposed score: {totalProposed}</p>

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
      A gateway for walking and wheeling is an intervention that enables safe
      and accessible access into an area for pedestrians. Typically, this will
      be a controlled crossing facility but it could also be another form of
      crossing, including bridges and underpasses.
    </p>
  </Question>

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

  <Question
    idx={2}
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
    idx={3}
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
    idx={4}
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

  <Question
    idx={6}
    label="Mesh Density - Walking and Wheeling"
    cases={[
      [4, "The area has an average mesh density of 100m"],
      [3, "The area has an average mesh density of 101-250m"],
      [2, "The area has an average mesh density of 251-400m"],
      [1, "The area has an average mesh density of 401-500m"],
      [0, "The area has an average mesh density which exceeds 500m."],
    ]}
  >
    <p>
      (How tight or loose the pedestrian network is. This is measured by the
      average distance between streets that have suitable pedestrian facilities
      as defined in the permability metric above).
    </p>
  </Question>

  <Question
    idx={7}
    label="Mesh Density - Cycling"
    cases={[
      [4, "The area has an average mesh density of 250m"],
      [3, "The area has an average mesh density of 251-400m"],
      [2, "The area has an average mesh density of 401-800"],
      [1, "The area has an average mesh density of 801-1400m"],
      [0, "The area has an average mesh density which exceeds 1400m."],
    ]}
  >
    <p>
      (How tight or loose the pedestrian network is. This is measured by the
      average distance between streets that have suitable pedestrian facilities
      as defined in the permability metric above).
    </p>
  </Question>

  <Question
    idx={8}
    label="Motorised Through-Traffic"
    cases={[
      [
        8,
        "The area does not allow any motorised through traffic. However, local access for motor traffic is still maintained for residents and businesses.",
      ],
      [
        6,
        "Most motorised through traffic routes are closed in the area. However, local access for motor traffic is still maintained for residents and businesses. There are good reasons why motor traffic through routes are in place, and there are measures to mitigate any potential issues relating to them.",
      ],
      [
        4,
        "Some motorised through traffic routes are closed in the area. However, local access for motor traffic is still maintained for residents and businesses. There are good reasons why motor traffic through routes are in place, and there are measures to mitigate any potential issues relating to them.",
      ],
      [
        2,
        "Some motorised through traffic routes are closed in the area. However, local access for motor traffic is still maintained for residents and businesses. There are no measures in place to mitigate any potential issues relating to remaining motorised through traffic routes.",
      ],
      [
        0,
        "No restrictions to motorised through traffic routes. Measures will have more of an effect on vehicle speeds than vehicle volumes.",
      ],
    ]}
  >
    <p>Potential exemptions may include:</p>
    <ul>
      <li>Buses</li>
      <li>Taxis</li>
      <li>Private hire vehicles</li>
      <li>Emergency services</li>
      <li>Community transport providers</li>
      <li>Blue badge holders</li>
    </ul>
    <p>Please refer to the User Manual for further information.</p>
  </Question>

  <Question
    idx={9}
    label="Perimeter Treatment Design"
    cases={[
      [
        16,
        "The effects of displaced traffic around the perimeter of the filtered area are fully mitigated. Junction treatments, traffic calming, bus gates, protected cycle facilities, side road treatments and green infrastructure are present wherever needed along the perimeter.",
      ],
      [
        12,
        "The effects of displaced traffic around the perimeter of the filtered area are mostly mitigated. Junction treatments, traffic calming, bus gates, protected cycle facilities, side road treatments and green infrastructure are present in most places where they are needed along the perimeter.",
      ],
      [
        8,
        "The effects of displaced traffic around the perimeter of the filtered area are partly mitigated. Junction treatments, traffic calming, bus gates, protected cycle facilities, side road treatments and green infrastructure are present in places along the perimeter.",
      ],
      [
        4,
        "The effects of displaced traffic around the perimeter of the filtered area are partly mitigated and there are sensitive receptors (e.g. schools, nurseries, hospitals) along the perimeter. Junction treatments, traffic calming, bus gates, protected cycle facilities, side road treatments and green infrastructure are present in places along the perimeter.",
      ],
      [
        0,
        "There are no measures to mitigate the effects of displaced traffic around the perimeter of the filtered area. There are no (or few) plans for junction treatments, traffic calming, bus gates, protected cycle facilities, side road treatments and green infrastructure along the perimeter.",
      ],
    ]}
  >
    <p>Potential issues associated with displaced traffic</p>
    <ul>
      <li>Speeding</li>
      <li>Road safety</li>
      <li>Congestion & air quality</li>
      <li>Delays to public transport</li>
    </ul>
  </Question>

  <Question
    idx={10}
    label="Green Infrastructure Design"
    cases={[
      [
        12,
        "There are at least five measures from the list of green infrastructure measures (per square km).",
      ],
      [
        9,
        "There are at least four measures from the list of green infrastructure measures (per square km).",
      ],
      [
        6,
        "There are at least three measures from the list of green infrastructure measures (per square km).",
      ],
      [
        3,
        "There are fewer than three measures from the list of green infrastructure measures (per square km)",
      ],
      [
        0,
        "There are no for green infrastructure measures or there will be an overall net loss in green infratructure.",
      ],
    ]}
  >
    <p>List of green infrastructure measures</p>
    <ul>
      <li>Sustainable drainage systems (SuDS)</li>
      <li>Planters</li>
      <li>Parklets or pocket parks</li>
      <li>Trees</li>
      <li>Soft landscaping e.g. planting of wildflowers/hedges/shrubs</li>
      <li>Community gardens</li>
      <li>Green roofs e.g. on bus stops</li>
      <li>Green walls or screens</li>
      <li>Bug hotels</li>
    </ul>
  </Question>

  <Question
    idx={11}
    label="Other Internal Treatment Design"
    cases={[
      [
        16,
        "There are at least five measures from the list of internal treatments (per square km). Residents involved in the design of one or more of these measures.",
      ],
      [
        12,
        "There are at least three measures from the list of internal treatments (per square km). Residents involved in the design of one or more of these measures.",
      ],
      [
        8,
        "There are at least three measures from the list of internal treatments (per square km). Residents not involved in the design of the measures.",
      ],
      [
        4,
        "There are fewer than three measures from the list of internal treatments (per square km).",
      ],
      [0, "There are no internal treatments."],
    ]}
  >
    <p>List of internal treatments</p>
    <ul>
      <li>Play streets</li>
      <li>School streets</li>
      <li>Cycle parking/hangars</li>
      <li>Resting places e.g. seating</li>
      <li>Raised tables/entries or continuous footways</li>
      <li>New social spaces</li>
      <li>Parklets or pocket parks</li>
      <li>Wayfinding</li>
      <li>Art</li>
      <li>Other (please specify in the scoring justification box)</li>
    </ul>
  </Question>

  <Question
    idx={12}
    label="Engagement Practice"
    cases={[
      [
        16,
        "Resident-led design. Residents have had or are expected to have strong control and decision-making authority in the area. Local accessibility groups have been comprehensively engaged with throughout the process.",
      ],
      [
        12,
        "Collaborative design. Residents have had or are expected to have significant control and decision-making authority in the area. Local accessibility groups have been engaged with throughout the process.",
      ],
      [
        8,
        "Collaborative design. Residents have had or are expected to have some control and decision-making authority in the area. Local accessibility groups have been engaged with on multiple occassions.",
      ],
      [
        4,
        "Residents have been or are expected to be engaged with but this has or will result in little influence in the area. Local accessibility groups have been engaged with once.",
      ],
      [
        0,
        "There has been or is expected to be no or minimal engagement with residents and local accessibility groups.",
      ],
    ]}
  />
</div>
