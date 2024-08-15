<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={4}
  cases={[
    [
      "2",
      "<p>Mixed use buildings overlook the path throughout day and night.</p><p>There are many people using or moving through the space.</p>",
    ],
    [
      "1",
      "<p>Surrounding buildings do not completely overlook the path throughout day and night.</p><p>There are some people using or moving through the space.</p>",
    ],
    [
      "0",
      "<p>Few buildings overlook the path.</p><p>There is little activity from people using or moving through the space.</p>",
    ],
  ]}
>
  <p>
    Description: Natural surveillance from the surrounding environment
    throughout the day and night.
  </p>
</Question>
