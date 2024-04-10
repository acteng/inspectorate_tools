<script lang="ts">
  import { v4 as uuidv4 } from "uuid";

  // A label for the entire group of radio buttons
  export let legend: string;
  // A list of [value, label, color] representing the choices
  export let choices: [string, string, string, string][];

  // The current value
  export let value: string;

  let id = uuidv4();
</script>

<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend govuk-label--s">
      {legend}
    </legend>
    <div class="govuk-radios" data-module="govuk-radios">
      {#each choices as [thisValue, thisLabel, thisBackgroundColor, thisFontColour]}
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input"
            id={id + thisValue}
            type="radio"
            bind:group={value}
            value={thisValue}
            on:change
          />

          <label class="govuk-label govuk-radios__label" for={id + thisValue}>
            <span
              class="option-value"
              style:background={thisBackgroundColor}
              style:color={thisFontColour}
            >
              {thisValue}
            </span>
            <span class="option-text">{thisLabel}</span>
          </label>
        </div>
      {/each}
    </div>
  </fieldset>
</div>

<style>
  span.option-value {
    padding: 8px;
    border-radius: 20px;
  }
  span.option-text {
    text-align: center;
  }
  label {
    display: flex;
    align-items: center;
  }
</style>
