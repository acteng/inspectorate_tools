let critical = "#232323";
let red = "#b73d25";
let amber = "#ffd833";
let green = "#006853";
let fontForCritical = "white";
let fontForRed = "white";
let fontForAmber = "black";
let fontForGreen = "white";

let backgroundAndFontCombinations = {
  critical: {
    background: critical,
    font: fontForCritical,
  },
  red: {
    background: red,
    font: fontForRed,
  },
  amber: {
    background: amber,
    font: fontForAmber,
  },
  green: {
    background: green,
    font: fontForGreen,
  },
};

export let criticalRedAmberGreen = [
  backgroundAndFontCombinations.critical,
  backgroundAndFontCombinations.red,
  backgroundAndFontCombinations.amber,
  backgroundAndFontCombinations.green,
];
export let redAmberGreen = [
  backgroundAndFontCombinations.red,
  backgroundAndFontCombinations.amber,
  backgroundAndFontCombinations.green,
];
