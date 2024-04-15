<script lang="ts">
  import { Breadcrumbs } from "$lib";
  import { base } from "$app/paths";
</script>

<div class="govuk-prose">
  <Breadcrumbs links={[]} current="Tools" />

  <span>Design assistance</span>
  <ul class="govuk-list">
    <li><a href="{base}/cross_section">Route cross section tool</a></li>
  </ul>

  <span>Scheme review</span>
  <ul class="govuk-list">
    <li><a href="{base}/area_check">Area check</a></li>
    <li><a href="{base}/route_check">Route check</a></li>
  </ul>
</div>
