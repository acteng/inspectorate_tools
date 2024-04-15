<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={3}
  label="Points of Interest"
  cases={[
    [
      "2",
      "<p>Information on local features, flora or fauna is provided.</p><p>Public art has been encouraged or featured.</p>",
    ],
    [
      "1",
      "<p>Some information on local features, flora or fauna is provided.</p><p>Or, public art has been encouraged or featured.</p>",
    ],
    [
      "0",
      "<p>No information on local features, flora or fauna is provided.</p><p>No public art has been encouraged or featured.</p>",
    ],
  ]}
>
  <p>Presence of features which people can engage with, such as:</p>
  <ul class="govuk-list">
    <li>Information on local features, flora and fauna</li>
    <li>Public art</li>
    <li>Heritage features</li>
    <li>Viewpoints</li>
  </ul>
</Question>
