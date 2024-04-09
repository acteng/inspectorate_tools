<script lang="ts">
  import GenericProgress from "../GenericProgress.svelte";

  export let currentIdx: number;

  let sections = [
    {
      section: "Social activity",
      pages: [
        "Street Engagement for Children",
        "Social Space",
        "Diversity of Activities",
      ],
    },
    {
      section: "Personal security",
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
        "Street Network Layout",
        "Place and Movement",
        "Impact of Street Design on Behaviour",
        "Enforcement of Loading and Parking",
        "Street Clutter",
        "Consistency of Materials and Street Furniture",
        "Visual Interest",
        "Cultural Significance",
        "Street Features that Support Walking, Wheeling and Cycling",
      ],
    },
    {
      section: "Environment",
      pages: [
        "Drainage and Water",
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
  scorecardKey="streetPlacemakingCheck"
  urlBase="/route_check/street_placemaking_check/sp"
/>
