<script lang="ts">
  import { ExternalLink } from "$lib";
  import Question from "../Question.svelte";
</script>

<Question idx={1}>
  <div slot="description">
    <p>
      Does the application appropriately forecast all day trips to, from and
      within the site by walking, wheeling and cycling?
    </p>
  </div>
  <div slot="shortfalls">
    <p>
      Source data is not representative of the proposed development, is
      out-of-date or is confined to commuting journeys only.
    </p>
    <p>
      Forecasted trip generation is limited to motor vehicle traffic or peak
      hours only.
    </p>
    <p>
      Future year forecasts do not realise the potential of the development to
      support a greater number of walking, wheeling and cycling journeys or do
      not align with the government’s vision in Gear Change (or any adopted
      local targets) that half of all journeys in towns and cities shall be
      walked, wheeled or cycled by 2030.
    </p>
  </div>
  <div slot="guidance">
    <ul>
      <li>
        <ExternalLink
          href="https://www.gov.uk/government/publications/national-planning-policy-framework--2"
        >
          National Planning Policy Framework: 108, 114, 117
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://www.gov.uk/guidance/travel-plans-transport-assessments-and-statements"
        >
          Planning Practice Guidance: Travel Plans, Transport Assessments and
          Statements
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://www.gov.uk/government/publications/cycle-infrastructure-design-ltn-120"
        >
          LTN 1/20: 14.3.6
        </ExternalLink>
      </li>
    </ul>
  </div>
</Question>
