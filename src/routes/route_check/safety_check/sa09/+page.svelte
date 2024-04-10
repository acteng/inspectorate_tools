<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={9}
  label="Motor Traffic Volume"
  cases={[
    [
      "2",
      "<200 vehicles in the busiest hour.  Or, cyclists are protected from motor traffic or off-road entirely and controlled crossings are provided for pedestrians wherever needed.",
    ],
    [
      "1",
      "200-499 vehicles in the busiest hour.  And, less than 2% of traffic is HGVs.",
    ],
    [
      "0",
      "500-1,000 vehicles in the busiest hour.  Or, 2-5% of traffic is HGVs where there are 200-499 vehicles in the busiest hour.",
    ],
    [
      "C",
      ">1,000 vehicles in the busiest hour.  Or, over 5% of traffic is HGVs where there are over 500 vehicles in the busiest hour.",
    ],
  ]}
>
  <p>
    Volume of motor traffic at the busiest hour (where cyclists are not
    protected or pedestrians cross uncontrolled)
  </p>
  <p>Mode: Walking / Wheeling / Cycling</p>
</Question>
