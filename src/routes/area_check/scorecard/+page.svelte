<script lang="ts">
  import { Breadcrumbs } from "$lib";
  import Progress from "./Progress.svelte";

  // TODO Include bold in the choices
</script>

<div class="govuk-prose">
  <Breadcrumbs
    links={[
      ["Tools", "/"],
      ["Area check tool", "/area_check"],
    ]}
    current="Area Scorecard"
  />

  <Progress currentIdx={-1} />
</div>
