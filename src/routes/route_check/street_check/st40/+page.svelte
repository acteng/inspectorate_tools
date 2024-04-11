<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={24}
  label="Transitions for Cyclists"
  cases={[
    [
      "2",
      "<p>Cyclists have dedicated, legible and understandable transitions on and off the route at all key points. Protected cycle facilities are easy to join and leave.</p>",
    ],
    [
      "1",
      "<p>Cyclists can transition on and off the route with minimal disruption to their journey.</p>",
    ],
    [
      "0",
      "<p>Cyclists cannot transition on or off the route without dismounting.</p>",
    ],
  ]}
>
  <p>Ability to transition on and off the route safely and easily.</p>
  <p>Mode: Cycling</p>
</Question>
