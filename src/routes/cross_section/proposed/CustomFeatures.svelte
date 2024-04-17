<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import {
    TextInput,
    NumberInput,
    SecondaryButton,
    WarningButton,
  } from "govuk-svelte";
  import { state } from "../data";

  function add() {
    $state.proposed.customFeatures[uuidv4()] = { name: "", width: 0 };
    $state.proposed.customFeatures = $state.proposed.customFeatures;
  }

  function deleteFeature(id: string) {
    let name = $state.proposed.customFeatures[id].name;
    if ($state.proposed.desirableMinimumCrossSection.includes(`custom_${id}`)) {
      window.alert(
        `The ${name} custom feature is used in the Desirable Minimum Cross-Section. Remove it below before deleting.`,
      );
      return;
    }
    if ($state.proposed.absoluteMinimumCrossSection.includes(`custom_${id}`)) {
      window.alert(
        `The ${name} custom feature is used in the Absolute Minimum Cross-Section. Remove it below before deleting.`,
      );
      return;
    }
    delete $state.proposed.customFeatures[id];
    $state.proposed.customFeatures = $state.proposed.customFeatures;
  }

  // TODO Validations on input fields
</script>

<SecondaryButton on:click={add}>Add</SecondaryButton>

{#each Object.keys($state.proposed.customFeatures) as id (id)}
  <div style="display: flex; justify-content: space-between">
    <TextInput
      label="Name"
      bind:value={$state.proposed.customFeatures[id].name}
    />
    <NumberInput
      label="Minimum width (m)"
      width={3}
      min={0}
      bind:value={$state.proposed.customFeatures[id].width}
    />
    <WarningButton on:click={() => deleteFeature(id)}>Delete</WarningButton>
  </div>
{/each}
