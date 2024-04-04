<script lang="ts">
  import { Breadcrumbs } from "$lib";
  import Progress from "./Progress.svelte";
</script>

<div class="govuk-prose">
  <Breadcrumbs
    links={[
      ["Tools", "/"],
      ["Route check tool", "/route_check"],
    ]}
    current="Safety Check"
  />

  <Progress currentIdx={-1} />
</div>
