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
  <!-- First column -->
  <div class="govuk-grid-column-one-third" style="border: 1px solid black">
    <div class="govuk-form-group">
      <fieldset class="govuk-fieldset">
        <legend class="govuk-fieldset__legend govuk-label--s">
          Score for existing infrastructure
        </legend>
        <div class="govuk-radios" data-module="govuk-radios">
          {#each choices as [thisValue, thisLabel, thisBackgroundColor, thisFontColour], i}
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
                  style:background={thisBackgroundColor}
                  style:color={thisFontColour}
                >
                  {thisValue}
                </span>
              </label>
            </div>
            <hr />
          {/each}
        </div>
      </fieldset>
    </div>

    <TextArea
      label="Notes to justify given score for existing infrastructure"
      bind:value={existingNotes}
    />
  </div>

  <!-- Second column -->
  <div class="govuk-grid-column-one-third" style="border: 1px solid black">
    <div class="govuk-form-group">
      <fieldset class="govuk-fieldset">
        <legend class="govuk-fieldset__legend govuk-label--s">
          Score for proposed infrastructure
        </legend>
        <div class="govuk-radios" data-module="govuk-radios">
          {#each choices as [thisValue, thisLabel, thisBackgroundColor, thisFontColour], i}
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
                  style:background={thisBackgroundColor}
                  style:color={thisFontColour}
                >
                  {thisValue}
                </span>
              </label>
            </div>
            <hr />
          {/each}
        </div>
      </fieldset>
    </div>

    <TextArea
      label="Notes to justify given score for proposed infrastructure"
      bind:value={proposedNotes}
    />
  </div>

  <!-- Third column -->
  <div class="govuk-grid-column-one-third" style="border: 1px solid black">
    {#each choices as [thisValue, thisLabel, thisBackgroundColor, thisFontColour], i}
      {@html thisLabel}
      <hr />
    {/each}
  </div>
</div>
