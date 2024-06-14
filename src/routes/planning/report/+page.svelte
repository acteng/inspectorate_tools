<script lang="ts">
  import { state } from "../data";
  import { criteria } from "../lists";
</script>

<div class="govuk-width-container">
  <table>
    <caption class="govuk-table__caption govuk-table__caption--m">
      Application details
    </caption>
    {#each [["Site address", $state.summary.siteAddress], ["Local authority reference", $state.summary.localAuthorityReference], ["ATE reference", $state.summary.ateReference], ["Local planning authority", $state.summary.localPlanningAuthority], ["Local highway authority", $state.summary.localHighwayAuthority], ["Completed by", $state.summary.completedBy], ["Date", $state.summary.date], ["Application type", $state.summary.applicationType], ["Summary of proposal", $state.summary.proposalSummary]] as [key, value]}
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
      <tr>
        <td>{idx + 1}. {criterion}</td>
        <td>{$state.ratings[idx]}</td>
        <td>{$state.appraiserComments[idx]}</td>
        <td>{$state.localGuidance[idx]}</td>
      </tr>
    {/each}
  </table>
</div>
