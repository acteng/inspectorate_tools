<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question idx={6}>
  <div slot="description">
    <p>
      Does the application include proposals to enhance local active travel and
      public transport infrastructure?
    </p>
  </div>
  <div slot="shortfalls">
    <p>
      The application fails to identify necessary, directly related and
      proportionate improvements or contributions to:
    </p>
    <ul>
      <li>
        footpaths/ways in line with the design standards identified in criteria
        3 and 5
      </li>
      <li>
        cycling routes in line with LTN 1/20 standards identified in criteria 4,
        or
      </li>
      <li>
        public transport infrastructure (where this is not provided on-site)
        that may include: new or extended services; seating, lighting, shelter,
        real-time passenger information and raised bus boarders or specialist
        kerbs at bus stops; and secure cycle parking with pumps and repair tools
        at rail stations and mobility hubs
      </li>
    </ul>
    <p>
      The application fails to identify the mechanism to secure identified
      improvements and the trigger point(s) for delivery or payment.
    </p>
    <p>
      Proposed road/junction improvements do not prioritise pedestrian and
      cycling movements, including appropriate crossings.
    </p>
  </div>
  <div slot="guidance">
    <ul>
      <li>
        <a
          href="https://www.gov.uk/government/publications/national-planning-policy-framework--2"
        >
          National Planning Policy Framework: 108, 112, 114, 116
        </a>
      </li>
      <li>
        <a
          href="https://www.gov.uk/government/publications/national-model-design-code"
        >
          National Model Design Code: 59i-ii, 64iv-vi (Part 1); M.1.ii, M.2, U.3
          (Part 2)
        </a>
      </li>
      <li>
        <a
          href="https://www.gov.uk/guidance/travel-plans-transport-assessments-and-statements"
        >
          Planning Practice Guidance: Planning Obligations
        </a>
      </li>
      <li>
        <a
          href="https://www.gov.uk/government/publications/cycle-infrastructure-design-ltn-120"
        >
          LTN 1/20: 14.3.12
        </a>
      </li>
    </ul>
  </div>
</Question>
