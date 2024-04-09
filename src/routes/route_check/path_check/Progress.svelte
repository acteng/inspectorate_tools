<script lang="ts">
  import GenericProgress from "../GenericProgress.svelte";

  export let currentIdx: number;

  let sections = [
    {
      section: "Accessibility",
      pages: [
        "Barriers",
        "Steps",
        "Gradient",
        "Tactile Information and Signal Equipment",
        "Ability to Turn Around",
      ],
    },
    {
      section: "Comfort",
      pages: [
        "Width of Shared Use Spaces",
        "Width of Walking and Wheeling Spaces",
        "Width of Cycling Spaces",
        "Width of Horse Riding Spaces",
        "Shared Use Surface",
        "Walking and Wheeling Surface",
        "Cycling Surface",
        "Horse Riding Surface",
        "Suitability of Crossings",
        "Accessibility of Access Points",
        "Drainage",
      ],
    },
    {
      section: "Directness",
      pages: [
        "Deviation of Path Against Straight Line",
        "Deviation of Path Against Nearest Alternative Route",
        "Crossing Locations",
        "Delay at Crossings",
      ],
    },
    {
      section: "Attractiveness",
      pages: [
        "Places to Rest",
        "Places to Shelter",
        "Lighting",
        "Cycle Parking",
        "Impact of Users on Each Other",
      ],
    },
    {
      section: "Cohesion",
      pages: [
        "Ease of Navigation",
        "Wayfinding",
        "Proximity to Destinations",
        "Quality of Connections",
        "Connectivity with Other Horse Riding Routes",
      ],
    },
  ];
</script>

<GenericProgress
  {sections}
  startIdx={17}
  {currentIdx}
  scorecardKey="pathCheck"
  urlBase="/route_check/path_check/pa"
/>
