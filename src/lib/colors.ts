let backgroundAndFontCombinations = {
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
};

export let greenAmberRedCritical = [
  backgroundAndFontCombinations.green,
  backgroundAndFontCombinations.amber,
  backgroundAndFontCombinations.red,
  backgroundAndFontCombinations.critical,
];
export let greenAmberRed = [
  backgroundAndFontCombinations.green,
  backgroundAndFontCombinations.amber,
  backgroundAndFontCombinations.red,
];
