<script lang="ts">
  import MovementAssesment from "./MovementAssessment.svelte";
</script>

<h3>Generic Guidance</h3>
<MovementAssesment
  junctionType={"Any type of junction"}
  cycleMovement={"Any movement"}
  scoreZeroBullets={[
    "Cycle movement in potential conflict with heavy motor traffic flow",
    "Cycle movement mixed with or crossing traffic with 85th percentile speed exceeding 60kph, or where vehicles accelerate rapidly.",
    "Necessary to cross more than one traffic lane (without refuge or protection) to complete cycle movement unless traffic flows are low.",
    "Cycle movementcrosses wide junctionentry or exit: e.g. withmerge or diverge taper or slip lane.",
    "Pinch points on junction entry or exit (lane width 3.2m-3.9m).",
    "Cycle movement affected by very poor surface quality utility reinstatement, gully positioning, debris.",
  ]}
  scoreOneBullets={[
    "Cycle movement in potential conflict with moderate traffic flow.",
    "Cycle lanes through junction meeting appropriate desirable minimum width requirements for the movement under consideration.",
    "Raised table at junction crossed by traffic in potential conflict with cycle movement.",
    "Cycle movement made by transiting onto section of shared use footway.",
  ]}
  scoreTwoBullets={[
    "Low traffic speed and volume in mixed traffic environment (e.g. accessonly streets in a residential area).",
    "Cycle movement separated physically and/or in time from motor traffic and also separated from pedestrians.",
    "Cycle movement bypasses junction completely, including via good quality grade separation",
  ]}
/>
