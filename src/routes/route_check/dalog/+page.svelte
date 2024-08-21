<script lang="ts">
  import { encodeDalog } from "./da_log";
  import { state } from "../data";
  import { SecondaryButton, TextArea } from "govuk-svelte";
  import ConvertToXlsx from "../results_export/ConvertToXlsx.svelte";
  import { generatePdfReport } from "./pdf_report";
  import pdfUrl from "$lib/assets/design_review_form.pdf?url";

  // TODO Need to escape " in the values, then
  $: values = encodeDalog($state)
    .map((pair) => `"${pair[1]}"`)
    .join("\t");

  async function makePdf() {
    try {
      await generatePdfReport(pdfUrl, $state);
    } catch (err) {
      window.alert(err);
    }
  }
</script>

<div class="govuk-width-container">
  <ConvertToXlsx />

  <div>
    <SecondaryButton on:click={makePdf}>Generate PDF report</SecondaryButton>
  </div>

  <p>
    This page is for internal use only. The values below are TSV (tab-separated
    values), copyable into Excel.
  </p>

  <TextArea label="TSV output" value={values} />
</div>
