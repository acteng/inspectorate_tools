<script lang="ts">
  import GenericProgress from "../GenericProgress.svelte";

  export let currentIdx: number;

  let sections = [
    {
      section: "Safety",
      pages: [
        "Conflict at Side Roads and Priority Junctions",
        "Conflict at Roundabouts and Signal Junctions",
        "Lane Widths",
        "Trip Hazards",
        "Kerbside Activity",
        "Provision of Crossings",
        "Standard of Crossings",
        "Motor Traffic Speed",
        "Motor Traffic Volume",
        "Pedestrian Crossing Speed",
        "Footway Widths",
        "Effective Width next to Tram Lines",
        "Crossing Angle of Tram/Train Rails",
        "Cycling Surface and Maintenance Defects",
        "Walking/Wheeling Surface and Maintenance Defects",
        "Guard Railing",
      ],
    },
  ];
</script>

<GenericProgress
  {sections}
  startIdx={1}
  {currentIdx}
  scorecardKey="safetyCheck"
  urlBase="/route_check/safety_check/sa"
/>
