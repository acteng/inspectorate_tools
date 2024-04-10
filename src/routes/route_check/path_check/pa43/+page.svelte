<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={27}
  label="Wayfinding"
  cases={[
    [
      "2",
      "Signage on the route is regular and consistent, creating legible links between the path and surrounding routes at access points.  Information on nearby destinations is provided.",
    ],
    [
      "1",
      "Signage on the route is regular and consistent, creating legible links between the path and surrounding routes at access points.  However, information on nearby destinations is not provided or is limited.",
    ],
    [
      "0",
      "Signage on the route is confusing or missing in places. Links between the path and surrounding routes at access points are not legible.",
    ],
  ]}
>
  <p>Effectiveness of signage on wayfinding.</p>
  <p>Mode: All Active Modes</p>
</Question>
