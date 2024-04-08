<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={14}
  label="Suitability of Crossings"
  cases={[
    [
      "0",
      "Not all crossings are suitable for all path users.  Or, crossings selected do not follow LTN 1/20 guidance given the volumes and speeds of traffic on roads being crossed.",
    ],
    [
      "1",
      "All crossings are suitable for all path users given the volumes and speeds of traffic on roads being crossed. ",
    ],
    [
      "2",
      "All crossings are suitable for all path users and go beyond LTN 1/20 guidance to help future proof the route and provide a higher level of service.",
    ],
  ]}
>
  <p>
    Suitability of crossings provided given path users and the volumes and
    speeds of traffic on roads being crossed.
  </p>
  <p>Mode: All Active Modes</p>
</Question>
