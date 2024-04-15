<script lang="ts">
  import Question from "../Question.svelte";
</script>

<Question
  idx={10}
  label="Perimeter Treatment Design"
  cases={[
    [
      16,
      "The effects of displaced traffic around the perimeter of the filtered area are fully mitigated. Junction treatments, traffic calming, bus gates, protected cycle facilities, side road treatments and green infrastructure are present wherever needed along the perimeter.",
    ],
    [
      12,
      "The effects of displaced traffic around the perimeter of the filtered area are mostly mitigated. Junction treatments, traffic calming, bus gates, protected cycle facilities, side road treatments and green infrastructure are present in most places where they are needed along the perimeter.",
    ],
    [
      8,
      "The effects of displaced traffic around the perimeter of the filtered area are partly mitigated. Junction treatments, traffic calming, bus gates, protected cycle facilities, side road treatments and green infrastructure are present in places along the perimeter.",
    ],
    [
      4,
      "The effects of displaced traffic around the perimeter of the filtered area are partly mitigated and there are sensitive receptors (e.g. schools, nurseries, hospitals) along the perimeter. Junction treatments, traffic calming, bus gates, protected cycle facilities, side road treatments and green infrastructure are present in places along the perimeter.",
    ],
    [
      0,
      "There are no measures to mitigate the effects of displaced traffic around the perimeter of the filtered area. There are no (or few) plans for junction treatments, traffic calming, bus gates, protected cycle facilities, side road treatments and green infrastructure along the perimeter.",
    ],
  ]}
>
  <p>Potential issues associated with displaced traffic</p>
  <ul class="govuk-list">
    <li>Speeding</li>
    <li>Road safety</li>
    <li>Congestion & air quality</li>
    <li>Delays to public transport</li>
  </ul>
</Question>
