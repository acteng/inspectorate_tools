<script lang="ts">
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
        National Planning Policy Framework: 8, 74, 87, 96, 97, 108, 112, 114,
        116
      </li>
      <li>National Design Guide: 82, 83, 119</li>
      <li>
        National Model Design Code: 59ii, 64iv-vi (Part 1); M.2, U.3 (Part 2)
      </li>
      <li>Active Design (Sport England): Principles 2, 3</li>
      <li>Designing for Walking (CIHT)</li>
      <li>Inclusive Mobility</li>
      <li>Manual for Streets: 4.4</li>
      <li>PAS 6463</li>
    </ul>
  </div>
</Question>
