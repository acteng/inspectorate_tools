<script lang="ts">
  import { TextArea } from "govuk-svelte";
  import { v4 as uuidv4 } from "uuid";

  // A list of [value, label, background color, font color] representing the choices
  export let choices: [string, string, string, string][];

  // The current value
  export let existingValue: string;
  export let proposedValue: string;
  export let existingNotes: string;
  export let proposedNotes: string;

  let id = uuidv4();
</script>

<div class="govuk-grid-row">
  <div class="govuk-grid-column-one-quarter">
    <!-- svelte-ignore a11y-label-has-associated-control TODO Splitting the radio -->
    <label class="govuk-label govuk-label--s">
      Score for existing infrastructure
    </label>
  </div>
  <div class="govuk-grid-column-one-quarter">
    <!-- svelte-ignore a11y-label-has-associated-control TODO Splitting the radio -->
    <label class="govuk-label govuk-label--s">
      Score for proposed infrastructure
    </label>
  </div>
  <div class="govuk-grid-column-one-half">
    <!-- No third column -->
  </div>
</div>

{#each choices as [thisValue, thisLabel, thisBackgroundColor, thisFontColour], i}
  <div class="govuk-grid-row">
    <div class="govuk-grid-column-one-quarter">
      <div class="govuk-radios__item">
        <input
          class="govuk-radios__input"
          id={id + thisValue + "-existing"}
          type="radio"
          value={thisValue}
          bind:group={existingValue}
        />
        <label
          class="govuk-label govuk-radios__label"
          for={id + thisValue + "-existing"}
        >
          <span
            class="govuk-tag"
            style:background={thisBackgroundColor}
            style:color={thisFontColour}
          >
            {thisValue}
          </span>
        </label>
      </div>
    </div>

    <div class="govuk-grid-column-one-quarter">
      <div class="govuk-radios__item">
        <input
          class="govuk-radios__input"
          id={id + thisValue + "-proposed"}
          type="radio"
          value={thisValue}
          bind:group={proposedValue}
        />
        <label
          class="govuk-label govuk-radios__label"
          for={id + thisValue + "-proposed"}
        >
          <span
            class="govuk-tag"
            style:background={thisBackgroundColor}
            style:color={thisFontColour}
          >
            {thisValue}
          </span>
        </label>
      </div>
    </div>

    <div
      class="govuk-grid-column-one-half"
      style="border-left: 5px solid {thisBackgroundColor}"
    >
      {@html thisLabel}
    </div>
  </div>
{/each}

<div class="govuk-grid-row">
  <div class="govuk-grid-column-one-quarter">
    <TextArea
      label="Notes to justify given score for existing infrastructure"
      bind:value={existingNotes}
      rows={8}
    />
  </div>
  <div class="govuk-grid-column-one-quarter">
    <TextArea
      label="Notes to justify given score for proposed infrastructure"
      bind:value={proposedNotes}
      rows={8}
    />
  </div>
  <div class="govuk-grid-column-one-half">
    <!-- No third column -->
  </div>
</div>
