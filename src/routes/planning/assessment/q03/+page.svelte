<script lang="ts">
  import { ExternalLink } from "$lib";
  import Question from "../Question.svelte";
</script>

<Question idx={3}>
  <div slot="description">
    <p>
      Are most buildings within 800m from a range of amenities (such as primary
      schools, parks, play areas, food shops, cafes and community buildings)
      using well-designed routes?
    </p>
  </div>
  <div slot="shortfalls">
    <p>
      Trip lengths to key amenities as presented in application documents are
      based on straight-line distances from site boundaries or main access
      points.
    </p>
    <p>
      There are few everyday amenities within the recommended distance from most
      buildings using safe and accessible routes for pedestrians.
    </p>
    <p>
      Footpaths/ways to local amenities do not conform to the National Design
      Guide standards of being safe, direct, convenient and accessible for
      people of all abilities, which includes but is not limited to routes that:
    </p>
    <ul>
      <li>
        have a minimum width of 2m, with limited pinch points no less than 1.5m
      </li>
      <li>are step-free</li>
      <li>have a smooth, even surface</li>
      <li>have seating at regular intervals</li>
      <li>are uncluttered</li>
      <li>have good natural surveillance and clear lines of sight</li>
      <li>have street lighting</li>
      <li>have wayfinding, and</li>
      <li>
        have crossing points suitable for the speed and traffic flow of the
        road(s)
      </li>
    </ul>
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
          href="https://www.ciht.org.uk/media/4460/ciht_-_designing_for_walking_document_v2_singles.pdf"
        >
          Designing for Walking (CIHT)
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
          href="https://www.gov.uk/government/publications/manual-for-streets"
        >
          Manual for Streets: 4.4
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
