<script lang="ts">
  import { Breadcrumbs, YesNo, pairs } from "$lib";
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
    $state.policyConflictLog = [
      ...$state.policyConflictLog,
      {
        id: "TODO",
        conflict: "",
        stage: "",
        point: "",
        locationName: "",
        resolved: "",
        notes: "",
      },
    ];
  }

  function deleteConflict(idx: number) {
    // TODO Modal
    if (window.confirm("Delete this entry?")) {
      $state.policyConflictLog.splice(idx, 1);
      $state.policyConflictLog = $state.policyConflictLog;
    }
  }
</script>

<div class="govuk-prose">
  <Breadcrumbs
    links={[
      ["Tools", "/"],
      ["Route check tool", "/route_check"],
    ]}
    current="Policy Conflict Log"
  />

  <SecondaryButton on:click={add}>Add</SecondaryButton>

  {#each $state.policyConflictLog as conflict, idx}
    <CollapsibleCard label={conflict.id} open>
      <WarningButton on:click={() => deleteConflict(idx)}>Delete</WarningButton>

      <Select
        label="Policy Conflict"
        emptyOption
        choices={[
          ["1", "1 - Cyclists are not separated from pedestrians"],
          ["2", '2 - Barriers, steps, or "Cyclist Dismount" signs are present'],
          ["3", "3 - The route is not direct, logical and intuitive"],
          ["4", "4 - Inappropriate surface materials"],
          ["5", "5 - Appropriate lighting is not provided"],
          [
            "6",
            "6 - Routes miss opportunities to join together with other facilities as a network",
          ],
        ]}
        bind:value={conflict.conflict}
      />

      <Select
        label="Stage"
        emptyOption
        choices={pairs(["Existing", "Design"])}
        bind:value={conflict.stage}
      />

      <TextInput label="Location" bind:value={conflict.point} />

      <TextInput label="Location Name" bind:value={conflict.locationName} />

      <YesNo label="Resolved by Design" bind:value={conflict.resolved} />

      <TextArea label="Commentary & Feedback" bind:value={conflict.notes} />
    </CollapsibleCard>
  {/each}
</div>
