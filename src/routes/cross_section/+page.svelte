<script lang="ts">
  import { ExternalLink } from "$lib";
  import { base } from "$app/paths";
</script>

<div class="govuk-prose">
  <div class="govuk-breadcrumbs">
    <ol class="govuk-breadcrumbs__list">
      <li class="govuk-breadcrumbs__list-item">
        <a class="govuk-breadcrumbs__link" href="{base}/">Tools</a>
      </li>
      <li class="govuk-breadcrumbs__list-item">Route cross-section tool</li>
    </ol>
  </div>
  <hr />

  <p>
    This is an experimental version of a <ExternalLink
      href="https://www.gov.uk/government/publications/active-travel-england-design-assistance-tools"
    >
      design assistance tool
    </ExternalLink>.
  </p>

  <ol>
    <li>Summary of Scheme</li>
    <li><a href="{base}/cross_section/proposed">Proposed Cross-Sections</a></li>
    <li>Cross-Sections Check</li>
    <li>ATE Summary</li>
  </ol>
</div>
