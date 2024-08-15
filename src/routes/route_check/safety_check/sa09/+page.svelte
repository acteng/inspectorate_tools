<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={9}
  cases={[
    [
      "2",
      "<p>&lt;200 vehicles in the busiest hour.</p><p>Or, cyclists are protected from motor traffic or off-road entirely and controlled crossings are provided for pedestrians wherever needed.</p>",
    ],
    [
      "1",
      "<p>200-499 vehicles in the busiest hour.</p><p>And, less than 2% of traffic is HGVs.</p>",
    ],
    [
      "0",
      "<p>500-1,000 vehicles in the busiest hour.</p><p>Or, 2-5% of traffic is HGVs where there are 200-499 vehicles in the busiest hour.</p>",
    ],
    [
      "C",
      "<p>&gt;1,000 vehicles in the busiest hour.</p><p>Or, over 5% of traffic is HGVs where there are over 500 vehicles in the busiest hour.</p>",
    ],
  ]}
>
  <p>
    Description: Volume of motor traffic at the busiest hour (where cyclists are
    not protected or pedestrians cross uncontrolled)
  </p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
