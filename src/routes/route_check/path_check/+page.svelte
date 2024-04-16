<script lang="ts">
  import { Breadcrumbs } from "$lib";
  import Progress from "./Progress.svelte";
</script>

<Breadcrumbs
  links={[
    ["Tools", "/"],
    ["Route check tool", "/route_check"],
  ]}
  current="Path Check"
/>

<p>TODO: Special horse question</p>

<Progress currentIdx={-1} />
