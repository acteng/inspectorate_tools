<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question idx={5}>
  <div slot="description">
    <p>
      Are all buildings within 400m of a high-frequency bus stop or 800m of a
      rail/light rail station or tram stop, with appropriate facilities, using
      well-designed routes?
    </p>
  </div>
  <div slot="shortfalls">
    <p>
      There are no public transport nodes with a regular service (this will
      differ between urban and rural areas) within the recommended distances.
    </p>
    <p>
      Local bus stops do not have good natural surveillance or do not provide
      seating, lighting, shelter, real-time passenger information and raised bus
      boarders or specialist kerbs. Local rail stations do not provide
      sufficient cycle parking, including spaces for non-standard cycles.
    </p>
    <p>
      Footpaths/ways to public transport nodes do not conform to the National
      Design Guide standards of being safe, direct, convenient and accessible
      for people of all abilities, which includes but is not limited to routes
      that:
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
        <a
          href="https://www.gov.uk/government/publications/national-planning-policy-framework--2"
        >
          National Planning Policy Framework: 8, 74, 85, 87, 108, 116
        </a>
      </li>
      <li>
        <a
          href="https://www.gov.uk/government/publications/national-design-guide"
        >
          National Design Guide: 81
        </a>
      </li>
      <li>
        <a
          href="https://www.gov.uk/government/publications/national-model-design-code"
        >
          National Model Design Code: 59i-ii (Part 1); M.1.ii, M.2 (Part 2)
        </a>
      </li>
      <li>
        <a
          href="https://www.sportengland.org/guidance-and-support/facilities-and-planning/design-and-cost-guidance/active-design"
        >
          Active Design (Sport England): Principles 2, 3
        </a>
      </li>
      <li>
        <a
          href="https://www.ciht.org.uk/knowledge-resource-centre/resources/streets-and-transport-in-the-urban-environment/"
        >
          Buses in Urban Developments (CIHT): A.4.1-A.4.5, B.2.3, B.7.2
        </a>
      </li>
      <li>
        <a
          href="https://www.gov.uk/government/publications/inclusive-mobility-making-transport-accessible-for-passengers-and-pedestrians"
        >
          Inclusive Mobility: Chapter 9
        </a>
      </li>
      <li>
        <a
          href="https://www.gov.uk/government/publications/bus-user-priority-ltn-124"
        >
          LTN 1/24;
        </a>
      </li>
    </ul>
  </div>
</Question>
