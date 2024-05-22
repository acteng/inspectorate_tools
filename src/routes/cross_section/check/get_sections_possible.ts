export function getSectionsPossibleHtml(
  available: number,
  preferredTotals: [number, number],
  compromisedTotals: [number, number],
) {
  let sections: [string, [number, number]][] = [
    ["Preferred", preferredTotals],
    ["Compromised", compromisedTotals],
  ];

  return (
    getOptionPossibleHtml(
      "Preferred",
      available,
      preferredTotals[0],
      preferredTotals[1],
    ) +
    getOptionPossibleHtml(
      "Compromised",
      available,
      compromisedTotals[0],
      compromisedTotals[1],
    )
  );
}

function getOptionPossibleHtml(
  label: string,
  available: number,
  desirableTotal: number,
  absoluteTotal: number,
) {
  let labelLine: string = `${label} cross sections possible:`;
  let descriptionOfSpace = "";
  if (available >= desirableTotal) {
    descriptionOfSpace =
      '<strong class="govuk-tag govuk-tag--green">Desirable Minimum</strong>';
  } else if (available > absoluteTotal) {
    descriptionOfSpace =
      '<strong class="govuk-tag govuk-tag--yellow">Absolute Minimum</strong>';
  } else {
    descriptionOfSpace =
      '<strong class="govuk-tag govuk-tag--red">Insufficient Space</strong>';
  }
  return `<p>${labelLine}${descriptionOfSpace}</p>`;
}
