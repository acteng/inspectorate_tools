<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={9}
  label="Motorised Through-Traffic"
  cases={[
    [
      8,
      "<p>The area does not allow any motorised through traffic. However, local access for motor traffic is still maintained for residents and businesses.</p>",
    ],
    [
      6,
      "<p>Most motorised through traffic routes are closed in the area. However, local access for motor traffic is still maintained for residents and businesses.</p><p>There are good reasons why motor traffic through routes are in place, and there are measures to mitigate any potential issues relating to them.</p>",
    ],
    [
      4,
      "<p>Some motorised through traffic routes are closed in the area. However, local access for motor traffic is still maintained for residents and businesses.</p><p>There are good reasons why motor traffic through routes are in place, and there are measures to mitigate any potential issues relating to them.</p>",
    ],
    [
      2,
      "<p>Some motorised through traffic routes are closed in the area. However, local access for motor traffic is still maintained for residents and businesses.</p><p>There are no measures in place to mitigate any potential issues relating to remaining motorised through traffic routes.</p>",
    ],
    [
      0,
      "<p>No restrictions to motorised through traffic routes. Measures will have more of an effect on vehicle speeds than vehicle volumes.</p>",
    ],
  ]}
>
  <p>Potential exemptions may include:</p>
  <ul>
    <li>Buses</li>
    <li>Taxis</li>
    <li>Private hire vehicles</li>
    <li>Emergency services</li>
    <li>Community transport providers</li>
    <li>Blue badge holders</li>
  </ul>
  <p>Please refer to the User Manual for further information.</p>
</Question>
