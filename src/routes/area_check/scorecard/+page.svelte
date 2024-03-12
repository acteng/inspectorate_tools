<script lang="ts">
  import { Breadcrumbs, ExternalLink } from "$lib";
  import Progress from "./Progress.svelte";
  import { state } from "../data";

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

  <Progress />
</div>
