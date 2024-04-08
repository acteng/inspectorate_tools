<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={4}
  label="Surveillance and Activity"
  cases={[
    [
      "0",
      "Few buildings overlook the path.  There is little activity from people using or moving through the space.",
    ],
    [
      "1",
      "Surrounding buildings do not completely overlook the path throughout day and night.  There are some people using or moving through the space.",
    ],
    [
      "2",
      "Mixed use buildings overlook the path throughout day and night.   There are many people using or moving through the space.",
    ],
  ]}
>
  <p>
    Natural surveillance from the surrounding environment throughout the day and
    night.
  </p>
</Question>
