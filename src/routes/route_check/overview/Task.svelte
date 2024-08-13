<script lang="ts">
  import { base } from "$app/paths";

  export let link: string;
  export let title: string;
  export let taskStatus: "Not yet started" | "In progress" | "Completed";
</script>

<li>
  <a href="{base}/route_check/{link}">{title}</a>
  {#if taskStatus == "Not yet started"}
    <strong class="govuk-tag govuk-tag--blue" style="float: right">
      {taskStatus}
    </strong>
  {:else if taskStatus == "In progress"}
    <strong class="govuk-tag govuk-tag--light-blue" style="float: right">
      {taskStatus}
    </strong>
  {:else if taskStatus == "Completed"}
    <span style="float: right">{taskStatus}</span>
  {/if}
</li>
<hr />
