<script lang="ts">
  import { ExternalLink } from "$lib";
  import Question from "../Question.svelte";
</script>

<Question idx={7}>
  <div slot="description">
    <h2>
      Does the development prioritise pedestrian and cycle movements within the
      site?
    </h2>
  </div>
  <div slot="shortfalls">
    <p>
      Opportunities have been missed to maximise accessibility for active travel
      modes, including:
    </p>
    <ul>
      <li>
        the development does not provide or safeguard pedestrian and cycling
        connections to neighbouring sites including future phases of development
      </li>
      <li>
        routes for pedestrians and cyclists are not at least as direct – and
        preferably more direct – than the equivalent by car
      </li>
      <li>
        routes are not fully accessible or do not have adjacent accessible
        alternatives (e.g. ramps alongside steps or bound paths next to unbound
        paths)
      </li>
      <li>
        inappropriate or infrequent crossings are proposed (see Inclusive
        Mobility Sections 4.10-4.11, PAS 6463 Section 7.6.2, LTN 1/20 Table
        10-2, Manual for Streets Section 6.3 and Manual for Steets 2 Section
        9.3)
      </li>
      <li>
        pedestrians and cyclists are not prioritised at side road crossing
        points (see LTN 1/20 Figure 10.13)
      </li>
      <li>
        priority junctions have radii that interrupts the pedestrian desire line
        (see Manual for Streets Sections 6.3-6.4 and Manual for Streets 2
        Section 9.4)
      </li>
      <li>
        there are red/zero scores when applying the Junction Assessment Tool in
        LTN 1/20
      </li>
      <li>signalised junctions do not have pedestrian aspects on some arms</li>
      <li>
        where cyclists would mix with motor vehicles, lane widths are between
        3.2m and 3.9m (paragraph 7.2.5 of LTN 1/20 identifies that such widths
        allow motor vehicles to drive alongside a cyclist without a safety
        margin for their comfort and protection)
      </li>
      <li>
        there are unsafe transitions for cyclists when moving between cycleways
        on and off the carriageway, or
      </li>
      <li>
        cycleways within commercial sites are not continuous through to cycle
        parking areas
      </li>
    </ul>
    <p>
      Shared use routes for pedestrians and cyclists are proposed and these do
      not meet the limited situations listed in paragraph 6.5.6 of LTN 1/20.
      Where shared use routes are acceptable, their widths are below 3m (&lt;300
      cyclists per hour) or below 4.5m elsewhere, contrary to LTN 1/20 Table
      6-3.
    </p>
  </div>
  <div slot="guidance">
    <ul>
      <li>
        <ExternalLink
          href="https://www.gov.uk/government/publications/national-planning-policy-framework--2"
        >
          National Planning Policy Framework: 96, 108, 114, 116
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
          National Model Design Code: Figure 11, 59i-ii (Part 1); M.1.i,
          M.1.iii, M.2 (Part 2)
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
          href="https://www.gov.uk/government/publications/cycle-infrastructure-design-ltn-120"
        >
          LTN 1/20
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://www.gov.uk/government/publications/manual-for-streets"
        >
          Manual for Streets: 4.2, 6.3, 6.4
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href="https://www.gov.uk/government/publications/manual-for-streets-2"
        >
          Manual for Streets 2: 9.3, 9.4
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
