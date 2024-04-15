<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import { onMount } from "svelte";

  // A list of [value, label, color] representing the choices
  export let choices: [string, string, string, string][];
  let numberOfChoices = 0;

  // The current value
  export let existingValue: string;
  export let proposedValue: string;
  export let existingNotes: string;
  export let proposedNotes: string;

  let beforeId = uuidv4();
  let afterId = uuidv4();

  onMount(async () => {
    numberOfChoices = choices.length;
  });
</script>

<div class="govuk-radios fancy-radio-grid" data-module="govuk-radios">
  <h3 style="grid-column:1/2; grid-row:1/2">
    Score for existing infrastructure:
  </h3>
  <h3 style="grid-column:2/3; grid-row:1/2">
    Score for proposed infrastructure:
  </h3>

  {#each choices as [thisValue, thisLabel, thisBackgroundColor, thisFontColour], i}
    <div
      class="govuk-radios__item"
      style="grid-row:{i + 2}/{i + 3}; grid-column:1/2"
    >
      <input
        class="govuk-radios__input"
        id={beforeId + thisValue}
        type="radio"
        value={thisValue}
        bind:group={existingValue}
      />

      <label class="govuk-label govuk-radios__label" for={beforeId + thisValue}>
        <span
          class="option-value"
          style:background={thisBackgroundColor}
          style:color={thisFontColour}
        >
          {thisValue}
        </span>
      </label>
    </div>
  {/each}

  {#each choices as [thisValue, thisLabel, thisBackgroundColor, thisFontColour], i}
    <div
      class="govuk-radios__item"
      style="grid-row:{i + 2}/{i + 3}; grid-column:2/3"
    >
      <input
        class="govuk-radios__input"
        id={afterId + thisValue}
        type="radio"
        value={thisValue}
        bind:group={proposedValue}
      />

      <label class="govuk-label govuk-radios__label" for={afterId + thisValue}>
        <span
          class="option-value"
          style:background={thisBackgroundColor}
          style:color={thisFontColour}
        >
          {thisValue}
        </span>
      </label>
    </div>
  {/each}

  {#each choices as [thisValue, thisLabel, thisBackgroundColor, thisFontColour], i}
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
    style="grid-row:{numberOfChoices + 2}/{numberOfChoices +
      3}; grid-column:1/2"
  >
    Notes to justify given score for existing infrastructure:
  </label>
  <label
    for="proposed-comments-box"
    class="govuk-font"
    style="grid-row:{numberOfChoices + 2}/{numberOfChoices +
      3}; grid-column:2/3"
  >
    Notes to justify given score for proposed infrastructure:
  </label>

  <div />
  <input
    id="existing-comments-box"
    class="govuk-textarea comments-box"
    style="grid-row:{numberOfChoices + 3}/{numberOfChoices +
      4}; grid-column:1/2"
    bind:value={existingNotes}
  />
  <input
    id="proposed-comments-box"
    class="govuk-textarea comments-box"
    style="grid-row:{numberOfChoices + 3}/{numberOfChoices +
      4}; grid-column:2/3"
    bind:value={proposedNotes}
  />
</div>

<style>
  .row {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 60vw;
  }
  span.option-value {
    padding: 8px;
    height: 24px;
    border-radius: 20px;
    margin-right: 5px;
  }
  span.option-text {
    text-align: center;
  }
  label {
    display: flex;
  }
  .govuk-form-group {
    width: 60vw;
  }
  .radio-controls {
    display: flex;
    justify-content: space-between;
    min-width: 212px;
    width: 30vw;
  }
  .govuk-radios__item {
    min-width: 106px;
    margin-bottom: 10px;
    align-content: flex-start;
  }

  .fancy-radio-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr) 2fr;
    grid-template-rows: repeat(var(--numberOfChoices) + 2, 1fr) 3fr;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }

  .govuk-font {
    font-family: "GDS Transport", arial, sans-serif;
  }

  .comments-box {
    height: 100%;
  }
</style>
