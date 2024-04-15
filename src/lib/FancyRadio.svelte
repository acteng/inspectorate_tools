<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import { onMount } from "svelte";

  // A list of [value, label, background color, font color] representing the choices
  export let choices: [string, string, string, string][];

  // The current value
  export let existingValue: string;
  export let proposedValue: string;
  export let existingNotes: string;
  export let proposedNotes: string;

  export let id = uuidv4();
</script>

<div class="govuk-radios fancy-radio-grid" data-module="govuk-radios">
  <div
    class="govuk-font"
    style="grid-column:1/2; grid-row:1/2; font-weight: bold"
  >
    Score for existing infrastructure:
  </div>
  <div
    class="govuk-font"
    style="grid-column:2/3; grid-row:1/2; font-weight: bold"
  >
    Score for proposed infrastructure:
  </div>

  {#each choices as [thisValue, thisLabel, thisBackgroundColor, thisFontColour], i}
    <div
      class="govuk-radios__item"
      style="grid-row:{i + 2}/{i + 3}; grid-column:1/2"
    >
      <input
        class="govuk-radios__input"
        id={`${id}${thisValue}-existing`}
        type="radio"
        value={thisValue}
        bind:group={existingValue}
      />

      <label
        class="govuk-label govuk-radios__label"
        for={`${id}${thisValue}-existing`}
      >
        <span
          class="option-value"
          style:background={thisBackgroundColor}
          style:color={thisFontColour}
        >
          {thisValue}
        </span>
      </label>
    </div>

    <div
      class="govuk-radios__item"
      style="grid-row:{i + 2}/{i + 3}; grid-column:2/3"
    >
      <input
        class="govuk-radios__input"
        id={`${id}${thisValue}-proposed`}
        type="radio"
        value={thisValue}
        bind:group={proposedValue}
      />

      <label
        class="govuk-label govuk-radios__label"
        for={`${id}${thisValue}-proposed`}
      >
        <span
          class="option-value"
          style:background={thisBackgroundColor}
          style:color={thisFontColour}
        >
          {thisValue}
        </span>
      </label>
    </div>

    <div
      class="option-text govuk-font"
      style="grid-row:{i + 2}/{i + 3}; grid-column:3/4"
    >
      {@html thisLabel}
    </div>
  {/each}

  <label
    for="existing-comments-box"
    class="govuk-font"
    style="grid-row:{choices.length + 2}/{choices.length + 3}; grid-column:1/2"
  >
    Notes to justify given score for existing infrastructure:
  </label>
  <label
    for="proposed-comments-box"
    class="govuk-font"
    style="grid-row:{choices.length + 2}/{choices.length + 3}; grid-column:2/3"
  >
    Notes to justify given score for proposed infrastructure:
  </label>

  <div />
  <textarea
    id="existing-comments-box"
    class="govuk-textarea comments-box"
    style="grid-row:{choices.length + 3}/{choices.length + 4}; grid-column:1/2"
    bind:value={existingNotes}
  />
  <textarea
    id="proposed-comments-box"
    class="govuk-textarea comments-box"
    style="grid-row:{choices.length + 3}/{choices.length + 4}; grid-column:2/3"
    bind:value={proposedNotes}
  />
</div>

<style>
  span.option-value {
    padding: 8px;
    height: 24px;
    border-radius: 20px;
    margin-right: 5px;
  }

  .govuk-radios__item {
    min-width: 106px;
    margin-bottom: 10px;
    align-content: flex-start;
  }

  .fancy-radio-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr) 2fr;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    max-height: 80vh;
  }

  .govuk-font {
    font-family: "GDS Transport", arial, sans-serif;
  }

  .comments-box {
    height: 100%;
  }
</style>
