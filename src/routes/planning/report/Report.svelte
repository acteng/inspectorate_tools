<script lang="ts">
  import { state } from "../data";
  import { criteria, getColoursForRating } from "../lists";
  import { DefaultButton } from "govuk-svelte";
  import { base } from "$app/paths";

  function openReportInNewTab() {
    window.open(`${base}/planning/report/printable`, "_blank").focus();
  }
</script>

<div class="govuk-width-container">
  <slot />
  <table>
    <caption class="govuk-table__caption govuk-table__caption--m">
      Application details
    </caption>
    {#each [["Summary of proposal", $state.summary.proposalSummary], ["Application type", $state.summary.applicationType], ["Site address", $state.summary.siteAddress], ["Local planning authority", $state.summary.localPlanningAuthority], ["Local highway authority", $state.summary.localHighwayAuthority], ["Local authority reference (if available)", $state.summary.localAuthorityReference], ["ATE reference (if available)", $state.summary.ateReference], ["Completed by (User and Organisation)", $state.summary.completedBy], ["Date", $state.summary.date]] as [key, value]}
      <tr>
        <th>{key}</th>
        <td>{value}</td>
      </tr>
    {/each}
  </table>

  <table>
    <caption class="govuk-table__caption govuk-table__caption--m">
      Assessment report
    </caption>
    <tr>
      <th>Criterion</th>
      <th>Rating</th>
      <th>Appraiser Comments</th>
      <th>Relevant Policy & Guidance</th>
    </tr>
    {#each criteria as criterion, idx}
      {@const [backgroundColor, color] = getColoursForRating(
        $state.ratings[idx],
      )}
      <tr>
        <td style:min-width="125px">{idx + 1}. {criterion}</td>
        <td style:background={backgroundColor} style:color>
          {$state.ratings[idx]}
        </td>
        <td>{$state.appraiserComments[idx]}</td>
        <td>{$state.localGuidance[idx]}</td>
      </tr>
    {/each}
  </table>
</div>
</div>
