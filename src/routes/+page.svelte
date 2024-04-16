<script lang="ts">
  import { Breadcrumbs } from "$lib";
  import { base } from "$app/paths";
</script>

<Breadcrumbs links={[]} current="Tools" />

<span>Design assistance</span>
<ul>
  <li><a href="{base}/cross_section">Route cross section tool</a></li>
</ul>

<span>Scheme review</span>
<ul>
  <li><a href="{base}/area_check">Area check</a></li>
  <li><a href="{base}/route_check">Route check</a></li>
</ul>
