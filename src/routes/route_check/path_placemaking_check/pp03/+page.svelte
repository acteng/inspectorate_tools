<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={3}
  label="Points of Interest"
  cases={[
    [
      "0",
      "No information on local features, flora or fauna is provided.  No public art has been encouraged or featured. ",
    ],
    [
      "1",
      "Some information on local features, flora or fauna is provided.  Or, public art has been encouraged or featured. ",
    ],
    [
      "2",
      "Information on local features, flora or fauna is provided.  Public art has been encouraged or featured.",
    ],
  ]}
>
  <p>
    Presence of features which people can engage with, such as: • Information on
    local features, flora and fauna • Public art • Heritage features •
    Viewpoints
  </p>
</Question>
