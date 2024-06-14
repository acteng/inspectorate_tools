<script lang="ts">
  import { base } from "$app/paths";
  import { ExternalLink } from "$lib";
</script>

<p>
  This is an experimental version of a <ExternalLink
    href="https://www.gov.uk/government/publications/active-travel-england-scheme-review-tools"
  >
    scheme review tool
  </ExternalLink>.
</p>

<ol>
  <li><a href="{base}/area_check/summary">Summary of Scheme</a></li>
  <li>
    <a href="{base}/area_check/traffic_mitigation">Traffic Mitigation Check</a>
  </li>
  <li><a href="{base}/area_check/scorecard">Area Scorecard</a></li>
  <li><a href="{base}/area_check/results">Results & Commentary</a></li>
</ol>
