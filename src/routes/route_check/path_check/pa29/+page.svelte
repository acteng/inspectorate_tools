<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={13}
  label="Horse Riding Surface"
  cases={[
    [
      "2",
      'Grass (or other material rated "excellent" in Table 5.29 of DMRB CD 143) is provided.',
    ],
    [
      "1",
      'A bound and porous surface or other material rated "good" in Table 5.29 of DMRB CD 143.',
    ],
    [
      "0",
      'Sealed surface, e.g. asphalt or other material rated "reasonable" in Table 5.29 of DMRB CD 143.',
    ],
  ]}
>
  <p>Type of dedicated equestrian surface material (e.g. trotting strips).</p>
  <p>Mode: Horse Riding</p>
</Question>
