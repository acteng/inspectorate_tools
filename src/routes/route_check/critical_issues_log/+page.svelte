<script lang="ts">
  import Form from "./Form.svelte";
  import MapEntry from "./MapEntry.svelte";
  import { YesNo, pairs } from "$lib";
  import {
    WarningButton,
    CollapsibleCard,
    Select,
    TextInput,
    TextArea,
    SecondaryButton,
  } from "govuk-svelte";
  import { state } from "../data";

  function add() {
    $state.criticalIssues = [
      ...$state.criticalIssues,
      {
        id: "TODO",
        criticalIssue: "",
        stage: "",
        point: [0, 0],
        locationName: "",
        resolved: "",
        notes: "",
      },
    ];
  }

  function deleteIssue(idx: number) {
    // TODO Modal
    if (window.confirm("Delete this entry?")) {
      $state.criticalIssues.splice(idx, 1);
      $state.criticalIssues = $state.criticalIssues;
    }
  }
</script>

<SecondaryButton on:click={add}>Add</SecondaryButton>

{#each $state.criticalIssues as issue, idx}
  <CollapsibleCard label={issue.id}>
    <WarningButton on:click={() => deleteIssue(idx)}>Delete</WarningButton>

    <Form {idx} />
  </CollapsibleCard>
{/each}

<MapEntry />
