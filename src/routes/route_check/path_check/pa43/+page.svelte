<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={27}
  label="Wayfinding"
  cases={[
    [
      "2",
      "<p>Signage on the route is regular and consistent, creating legible links between the path and surrounding routes at access points.</p><p>Information on nearby destinations is provided.</p>",
    ],
    [
      "1",
      "<p>Signage on the route is regular and consistent, creating legible links between the path and surrounding routes at access points.</p><p>However, information on nearby destinations is not provided or is limited.</p>",
    ],
    [
      "0",
      "<p>Signage on the route is confusing or missing in places. Links between the path and surrounding routes at access points are not legible.</p>",
    ],
  ]}
>
  <p>Effectiveness of signage on wayfinding.</p>
  <p>Mode: All Active Modes</p>
</Question>
