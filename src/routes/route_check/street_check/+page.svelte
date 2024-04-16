<script lang="ts">
  import { Breadcrumbs } from "$lib";
  import Progress from "./Progress.svelte";
</script>

<Breadcrumbs
  links={[
    ["Tools", "/"],
    ["Route check tool", "/route_check"],
  ]}
  current="Street Check"
/>

<Progress currentIdx={-1} />
