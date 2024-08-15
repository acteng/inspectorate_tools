<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={13}
  cases={[
    [
      "2",
      '<p>Grass (or other material rated "excellent" in Table 5.29 of DMRB CD 143) is provided.</p>',
    ],
    [
      "1",
      '<p>A bound and porous surface or other material rated "good" in Table 5.29 of DMRB CD 143.</p>',
    ],
    [
      "0",
      '<p>Sealed surface, e.g. asphalt or other material rated "reasonable" in Table 5.29 of DMRB CD 143.</p>',
    ],
    ["N/A", ""],
  ]}
>
  <p>
    Description: Type of dedicated equestrian surface material (e.g. trotting
    strips).
  </p>
  <p>Mode: Horse Riding</p>
</Question>
