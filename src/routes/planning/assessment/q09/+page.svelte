<script lang="ts">
  import { ExternalLink } from "$lib";
  import Question from "../Question.svelte";
</script>

<Question idx={9}>
  <div slot="description">
    <h2>
      Does the application provide the requisite amount and quality of cycle
      parking and trip-end facilities?
    </h2>
  </div>
  <div slot="shortfalls">
    <p>
      Cycle parking is not provided in accordance with up-to-date local
      standards, or Section 11 of LTN 1/20 in the absence of such. Details of
      accessibility, parking types and dimensions, security arrangements or
      lighting as appropriate is not provided (highly accessible cycle parking
      is essential for people with sensory and/or information processing
      differences and disabled cyclists who may be unable to walk very far or
      navigate a change in levels).
    </p>
    <p>
      For workplaces, public buildings (including those used for leisure and
      recreation) larger retail developments and other developments with
      communal parking:
    </p>
    <ul>
      <li>
        internal cycle stores cannot be accessed from building frontages, are
        not step-free or require passing through more than two sets of doors
      </li>
      <li>
        a proportion of cycle parking (typically 5%) is not provided for
        non-standard cycles to accommodate people with mobility impairments,
        which is contrary to paragraph 11.3.2 of LTN 1/20 (Table 11-2 also
        advises on bay lengths and access aisle widths for larger cycles using
        Sheffield stands), or
      </li>
      <li>
        high-quality facilities including showers, lockers, changing rooms and
        drying areas are not provided for cyclists in non-residential settings
        (see Section 11.7 of LTN 1/20, BREEAM guidance and any local standards)
      </li>
    </ul>
    <p>
      The quantum and quality of the cycle parking and trip-end facilities
      proposed does not align with travel plan targets for cycling or
      application objectives to deliver a sustainable form of development.
    </p>
  </div>
  <div slot="guidance">
    <ul>
      <li>
        <ExternalLink
          href="https://www.gov.uk/government/publications/national-planning-policy-framework--2"
        >
          National Planning Policy Framework: 114, 116
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://www.gov.uk/government/publications/national-design-guide"
        >
          National Design Guide: 85
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://www.gov.uk/government/publications/national-model-design-code"
        >
          National Model Design Code: 59iv (Part 1); M.3.ii (Part 2)
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://www.sportengland.org/guidance-and-support/facilities-and-planning/design-and-cost-guidance/active-design"
        >
          Active Design (Sport England): 7.1, 8.2
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://www.gov.uk/government/publications/inclusive-mobility-making-transport-accessible-for-passengers-and-pedestrians"
        >
          Inclusive Mobility: 7.4
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://www.gov.uk/government/publications/cycle-infrastructure-design-ltn-120"
        >
          LTN 1/20: Chapter 11
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://www.gov.uk/government/publications/manual-for-streets"
        >
          Manual for Streets: 8.2
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://www.gov.uk/government/publications/manual-for-streets-2"
        >
          Manual for Streets 2: 2.5.4
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://www.bsigroup.com/en-GB/insights-and-media/insights/brochures/pas-6463-design-for-the-mind-neurodiversity-and-the-built-environment/"
        >
          PAS 6463: 5.2.3
        </ExternalLink>
      </li>
    </ul>
  </div>
</Question>
