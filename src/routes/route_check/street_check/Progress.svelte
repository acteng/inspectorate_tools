<script lang="ts">
  import GenericProgress from "../GenericProgress.svelte";

  export let currentIdx: number;

  let sections = [
    {
      section: "Accessibility",
      pages: [
        "Gradient",
        "Tactile Information and Signal Equipment",
        "Barriers",
        "Bus Stops",
        "Wheelchair Access",
        "Access to Taxis and Blue Badge Parking",
        "Access to Toilets",
      ],
    },
    {
      section: "Comfort",
      pages: [
        "Cycling Surface Material",
        "Walking/Wheeling Surface Material",
        "Effective Width for Cyclists",
      ],
    },
    {
      section: "Directness",
      pages: [
        "Deviation of Cycle Route",
        "Pedestrian Crossing Locations",
        "Cyclist Delay at Junctions",
        "Cyclist Delay on Links",
        "Pedestrian Delay at Junctions",
        "Pedestrian Delay at Standalone Signal Crossings",
      ],
    },
    {
      section: "Attractiveness",
      pages: [
        "Wayfinding",
        "Places to Rest",
        "Places to Shelter",
        "Lighting",
        "Cycle Parking",
        "Impact of Cycling on Walking",
      ],
    },
    {
      section: "Cohesion",
      pages: [
        "Impact of Motor Traffic on Pedestrians and Cyclists",
        "Transitions for Cyclists",
        "Route Continuity ",
        "Consistency of Route",
      ],
    },
  ];
</script>

<GenericProgress
  {sections}
  startIdx={17}
  {currentIdx}
  scorecardKey="streetCheck"
  urlBase="/route_check/street_check/st"
/>
