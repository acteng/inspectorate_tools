export let colors = {
  critical: {
    background: "#232323",
    font: "white",
  },
  red: {
    background: "#b73d25",
    font: "white",
  },
  amber: {
    background: "#ffd833",
    font: "black",
  },
  green: {
    background: "#006853",
    font: "white",
  },
  notApplicable: {
    background: "white",
    font: "black",
  },
};

// Handles cases from all tools
export let scoreToColor = {
  C: colors.critical,
  "0": colors.red,
  "1": colors.amber,
  "2": colors.green,
  "N/A": colors.notApplicable,
  "": { background: "white", font: "black" },
};

export let policyConflictColor = "#0072ba";
