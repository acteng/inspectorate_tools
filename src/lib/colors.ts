export let backgroundAndFontCombinations = {
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
  C: backgroundAndFontCombinations.critical,
  "0": backgroundAndFontCombinations.red,
  "1": backgroundAndFontCombinations.amber,
  "2": backgroundAndFontCombinations.green,
  "N/A": backgroundAndFontCombinations.notApplicable,
};
