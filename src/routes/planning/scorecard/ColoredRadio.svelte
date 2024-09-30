<script lang="ts">
  import { v4 as uuidv4 } from "uuid";

  // A list of [value, label, background color, font color] representing the choices
  export let choices: [string, string, string, string][];
  export let value: string;

  let id = uuidv4();
</script>

<div class="govuk-grid-row">
  <div class="govuk-grid-column-one-quarter">
    <!-- svelte-ignore a11y-label-has-associated-control TODO Splitting the radio -->
    <label class="govuk-label govuk-label--s">Rating</label>
  </div>
  <div class="govuk-grid-column-three-quarters">
    <!-- Empty -->
  </div>
</div>

{#each choices as [thisValue, thisLabel, thisBackgroundColor, thisFontColour]}
  <div class="govuk-grid-row" style="margin-bottom: 1em;">
    <div class="govuk-grid-column-one-quarter">
      <div class="govuk-radios__item">
        <input
          class="govuk-radios__input"
          id={id + thisValue}
          type="radio"
          value={thisValue}
          bind:group={value}
        />
        <label class="govuk-label govuk-radios__label" for={id + thisValue}>
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
      class="govuk-grid-column-three-quarters"
      style="border-left: 5px solid {thisBackgroundColor}"
    >
      <p>{thisLabel}</p>
    </div>
  </div>
{/each}
