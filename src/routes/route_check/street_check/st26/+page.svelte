<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={10}
  label="Effective Width for Cyclists"
  cases={[
    [
      "2",
      "<p>Recommended desirable minimum widths from LTN 1/20 are maintained or exceeded for cycle facilities and buffers throughout whole route.</p>",
    ],
    [
      "1",
      "<p>Recommended desirable minimum widths from LTN 1/20 are maintained for cycle facilities and buffers throughout the whole route, except at pinch points where absolute minimum widths recommended in LTN 1/20 are maintained.</p>",
    ],
    [
      "0",
      "<p>At pinch points, cycle facility widths and/or buffers are below the absolute minimums recommended in LTN 1/20.</p>",
    ],
    ["N/A", ""],
  ]}
>
  <p>Effective width for cyclists (when not mixed with motor traffic).</p>
  <p>Mode: Cycling</p>
</Question>
