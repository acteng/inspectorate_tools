<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={8}
  cases={[
    [4, "<p>The area has an average mesh density of 250m.</p>"],
    [3, "<p>The area has an average mesh density of 251-400m.</p>"],
    [2, "<p>The area has an average mesh density of 401-800m.</p>"],
    [1, "<p>The area has an average mesh density of 801-1400m.</p>"],
    [0, "<p>The area has an average mesh density which exceeds 1400m.</p>"],
  ]}
>
  <p>
    (How tight or loose the cycling network is. This is measured by the average
    distance between routes of a similar quality).
  </p>
  <p>
    Quality cycle routes and high-quality crossings are those which follow LTN
    1/20 guidance and have no critical issues as defined in ATE's Route Check.
    Please refer to the User Manual for further information.
  </p>
</Question>
