<script lang="ts">
  import { DefaultButton, SecondaryButton, WarningButton } from "govuk-svelte";
  import { v4 as uuidv4 } from "uuid";
  import { state } from "../data";
  import EditCustomFeature from "./EditCustomFeature.svelte";

  let editing: {
    id: string;
    initialName: string;
    initialWidth: number;
  } | null = null;

  function add() {
    editing = {
      id: uuidv4(),
      initialName: "",
      initialWidth: 0,
    };
  }

  function deleteFeature(id: string) {
    let name = $state.proposed.customFeatures[id].name;
    let find = JSON.stringify({ custom: id });
    if (
      $state.proposed.desirableMinimumCrossSection.some(
        (x) => JSON.stringify(x) == find,
      )
    ) {
      window.alert(
        `The ${name} custom feature is used in the Desirable Minimum Cross-Section. Remove it below before deleting.`,
      );
      return;
    }
    if (
      $state.proposed.absoluteMinimumCrossSection.some(
        (x) => JSON.stringify(x) == find,
      )
    ) {
      window.alert(
        `The ${name} custom feature is used in the Absolute Minimum Cross-Section. Remove it below before deleting.`,
      );
      return;
    }
    delete $state.proposed.customFeatures[id];
    $state.proposed.customFeatures = $state.proposed.customFeatures;
  }

  function edit(id: string) {
    editing = {
      id,
      initialName: $state.proposed.customFeatures[id].name,
      initialWidth: $state.proposed.customFeatures[id].width,
    };
  }

  function doneEditing(e: CustomEvent<{ name: string; width: number }>) {
    $state.proposed.customFeatures[editing!.id] = {
      name: e.detail.name,
      width: e.detail.width,
    };
    $state.proposed.customFeatures = $state.proposed.customFeatures;
    editing = null;
  }
</script>

<DefaultButton on:click={add}>Add custom feature</DefaultButton>

{#each Object.keys($state.proposed.customFeatures) as id (id)}
  <div>
    <SecondaryButton on:click={() => edit(id)}>
      <u>{$state.proposed.customFeatures[id].name}</u>
      : {$state.proposed.customFeatures[id].width} m minimum width
    </SecondaryButton>
    <WarningButton on:click={() => deleteFeature(id)}>Delete</WarningButton>
  </div>
{/each}

{#if editing}
  <EditCustomFeature
    initialName={editing.initialName}
    initialWidth={editing.initialWidth}
    on:cancel={() => (editing = null)}
    on:confirm={doneEditing}
  />
{/if}
