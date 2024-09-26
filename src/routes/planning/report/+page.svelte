<script lang="ts">
  import { state } from "../data";
  import { criteria, getColoursForRating } from "../lists";

  const backgroundAndFontColours = $state.ratings.map(getColoursForRating);
</script>

<div class="govuk-width-container">
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
      <tr>
        <td style:min-width={"120px"}>{idx + 1}. {criterion}</td>
        <td
          style:background={getColoursForRating($state.ratings[idx])[2]}
          style:color={getColoursForRating($state.ratings[idx])[3]}
        >
          {$state.ratings[idx]}
        </td>
        <td>{$state.appraiserComments[idx]}</td>
        <td>{$state.localGuidance[idx]}</td>
      </tr>
    {/each}
  </table>
</div>
