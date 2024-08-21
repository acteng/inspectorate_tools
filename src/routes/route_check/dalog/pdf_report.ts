import { type State } from "../data";
import { PDFDocument } from "pdf-lib";
import { downloadBinaryFile } from "$lib";

export async function generatePdfReport(url: string, state: State) {
  let resp = await fetch(url);
  let bytes = await resp.arrayBuffer();
  let doc = await PDFDocument.load(bytes);
  let form = doc.getForm();

  //// Cover page
  form
    .getTextField("schemeID+name")
    .setText(`${state.summary.schemeReference} - ${state.summary.schemeName}`);
  // TODO conflict-list 2

  //// Summary of scheme
  form
    .getTextField("ATE.Review-date-intro")
    .setText(state.summary.dateDesignReview);
  form
    .getTextField("ATE.Scheme-reference")
    .setText(state.summary.schemeReference);
  form.getTextField("ATE.Scheme-name").setText(state.summary.schemeName);
  form.getTextField("ATE.Scheme-summary").setText(state.summary.schemeSummary);

  // TODO For radios/dropdowns, make sure options match. Handle N/A or other.

  //console.log(form.getRadioGroup("ATE.CA").getOptions());
  //form.getRadioGroup("ATE.CA").select(state.summary.transportOrCombinedAuthority);
  form.getRadioGroup("ATE.CA").select("Choice3");

  // TODO Authority text box missing

  // TODO The names don't match; "North West" vs "North West of England"
  form.getDropdown("ATE.Region").select(state.summary.region);

  // TODO not working
  //form.getRadioGroup("ATE.funding-programme").select(state.summary.fundingProgramme);

  form
    .getTextField("ATE.designstage-otherspecify")
    .setText(state.summary.designStage);
  form
    .getTextField("ATE.Funding-conditions")
    .setText(state.summary.fundingConditions);

  //// Summary of design review outcomes
  form
    .getTextField("ATE.street-check-version")
    .setText("Route Check online-alpha");

  //// Section: Policy conflicts
  for (let pc of state.policyConflictLog) {
    if (pc.resolved == "No") {
      // TODO PO0x typo
      //form.getDropdown("P2.Policy-conflict-template.ATE.Policy-principle");

      //form.getTextField("P2.Policy-conflict-template.ATE.Policy-conflict-ref").setText("TODO");
      form
        .getTextField("P2.Policy-conflict-template.ATE.location-policy")
        .setText(pc.locationName);
      form
        .getTextField("P2.Policy-conflict-template.ATE.lat-long-policy")
        .setText(`${(pc.point[1], pc.point[0])}`);
      form
        .getTextField("P2.Policy-conflict-template.ATE.policy-ATE-comment")
        .setText(pc.notes);

      // TODO How to add multiple?
      break;
    }
  }

  //// Section: Critical issues
  for (let ci of state.criticalIssues) {
    if (ci.resolved == "No") {
      //form.getDropdown("P4.Critical-issue-template.ATE.Critical-issue-list")
      //form.getDropdown("P4.Critical-issue-template.ATE.RAG-ALL")

      //form.getTextField("P4.Critical-issue-template.ATE.critical-issue-ref").setText("TODO");
      form
        .getTextField("P4.Critical-issue-template.ATE.location-critical")
        .setText(ci.locationName);
      form
        .getTextField("P4.Critical-issue-template.ATE.lat-long-critical")
        .setText(`${(ci.point[1], ci.point[0])}`);
      form
        .getTextField(
          "P4.Critical-issue-template.ATE.critical-ATE-inspector-comment",
        )
        .setText(ci.notes);

      // TODO How to add multiple?
      break;
    }
  }

  let outBytes = await doc.save();
  downloadBinaryFile(outBytes, "design_report.pdf");
}
