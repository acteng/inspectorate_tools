<script lang="ts">
  import { ExternalLink } from "$lib";
  import Question from "../Question.svelte";
</script>

<Question idx={10}>
  <div slot="description">
    <h2>
      Does the travel plan outline ambitious mode share targets and measures to
      embed active travel, alongside appropriate monitoring and remedial
      strategies?
    </h2>
  </div>
  <div slot="shortfalls">
    <p>
      A ‘full’, ‘framework’ or ‘interim’ travel plan has not been submitted as
      appropriate (a framework travel plan is generally only appropriate for
      commercial developments where the end user is unknown, while an interim
      travel plan can be acceptable where the split of uses is not yet
      confirmed).
    </p>
    <p>Where the appropriate travel plan has been submitted:</p>
    <ul>
      <li>
        targets for active travel mode share lack ambition or do not align with
        the government’s vision in Gear Change (or any adopted local targets)
        that half of all journeys in towns and cities shall be walked, wheeled
        or cycled by 2030.
      </li>
      <li>
        there is an absence of travel plan targets for all uses proposed within
        the application site as appropriate
      </li>
      <li>
        the travel plan does not provide sufficient detail on the active travel
        and public transport infrastructure to be provided or improved (both on
        and off-site) or how its use will be embedded by initiatives and
        incentives to be secured through planning conditions and obligations, or
      </li>
      <li>
        there are no details of effective and influential actions to be taken if
        targets are not met, with the intention for these to be secured and
        monitored (if triggered) through planning conditions and obligations
      </li>
    </ul>
  </div>
  <div slot="guidance">
    <ul>
      <li>
        <ExternalLink
          href="https://www.gov.uk/government/publications/national-planning-policy-framework--2"
        >
          National Planning Policy Framework: 114, 117
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
          href="https://www.sportengland.org/guidance-and-support/facilities-and-planning/design-and-cost-guidance/active-design"
        >
          Active Design (Sport England): 2.4
        </ExternalLink>
      </li>
    </ul>
  </div>
</Question>
