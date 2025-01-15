<script lang="ts">
  import { ExternalLink } from "$lib";
  import Question from "../Question.svelte";
</script>

<Question idx={4}>
  <div slot="description">
    <p>
      Are a range of local amenities, and town centres, railway stations,
      employment areas and the National Cycle Network as appropriate, accessible
      for cyclists using well-designed routes?
    </p>
  </div>
  <div slot="shortfalls">
    <p>
      Cycle routes relied on by the development are not coherent, direct, safe,
      comfortable or attractive in line with the five core design principles and
      geometric requirements in LTN 1/20 (see Sections 4.2 and 5). This may be
      due to physical features, steps, steep gradients or surface quality; or
      the absence of ramps, lighting or appropriate crossing facilities.
    </p>
    <p>
      The development relies on shared use routes in full or intermittently,
      which conflict with the government’s clear position in Gear Change (p. 17,
      21 and 41) and paragraph 1.6.1 (2) in LTN 1/20 that cycles must be treated
      as vehicles and not as pedestrians.
    </p>
    <p>
      There is insufficient protection from motor traffic in accordance with the
      suitability and segregation standards in LTN 1/20 (see Figure 4.1 and
      Section 6) such that some potential cyclists would be excluded.
    </p>
  </div>
  <div slot="guidance">
    <ul>
      <li>
        <ExternalLink
          href="https://www.gov.uk/government/publications/national-planning-policy-framework--2"
        >
          National Planning Policy Framework: 8, 74, 87, 96, 97, 108, 112, 114,
          116
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://www.gov.uk/government/publications/national-design-guide"
        >
          National Design Guide: 82, 83, 119
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://www.gov.uk/government/publications/national-model-design-code"
        >
          National Model Design Code: 59ii, 64iv-vi (Part 1); M.2, U.3 (Part 2)
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://www.sportengland.org/guidance-and-support/facilities-and-planning/design-and-cost-guidance/active-design"
        >
          Active Design (Sport England): Principles 2, 3
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://www.gov.uk/government/publications/inclusive-mobility-making-transport-accessible-for-passengers-and-pedestrians"
        >
          Inclusive Mobility
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://www.gov.uk/government/publications/cycle-infrastructure-design-ltn-120"
        >
          LTN 1/20
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://www.bsigroup.com/en-GB/insights-and-media/insights/brochures/pas-6463-design-for-the-mind-neurodiversity-and-the-built-environment/"
        >
          PAS 6463
        </ExternalLink>
      </li>
    </ul>
  </div>
</Question>
