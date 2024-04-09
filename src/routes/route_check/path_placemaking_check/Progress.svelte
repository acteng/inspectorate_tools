<script lang="ts">
  import GenericProgress from "../GenericProgress.svelte";

  export let currentIdx: number;

  let sections = [
    {
      section: "Social activity",
      pages: ["Engagement for Children", "Social Space", "Points of Interest"],
    },
    {
      section: "Personal security",
      notes:
        "Note: All three personal security metrics below are double weighted when the Path Placemaking score is calculated. This is explained further in the Route Check user manual.",
      pages: [
        "Surveillance and Activity",
        "Forward Visibility and Escape Routes",
        "Visibility of Others",
      ],
    },
    {
      section: "Character and legibility",
      pages: [
        "Maintenance and Upkeep",
        "Consistency of Materials and Path Furniture",
        "Visual Interest",
        "Features to Support Walking, Wheeling and Cycling",
      ],
    },
    {
      section: "Environment",
      pages: [
        "Trees",
        "Planting",
        "Ancillary Features to Support Fauna",
        "Sustainable Materials",
        "Air Pollution - Exposure",
        "Air Pollution - Proximity",
        "Noise Pollution",
        "Light Pollution",
        "Sunlight",
      ],
    },
  ];
</script>

<GenericProgress
  {sections}
  startIdx={1}
  {currentIdx}
  scorecardKey="pathPlacemakingCheck"
  urlBase="/route_check/path_placemaking_check/pp"
/>
