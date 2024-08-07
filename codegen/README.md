# Code generation scripts

Manually copying dozens of scorecard questions from Excel isn't feasible, so these scripts automate that process. The CSV files are **not** intended to be edited later and the scripts re-run; the source of truth becomes the generated Svelte files. Those files are **manually edited** to adjust wording, add links, introduce formatting, etc. Everything is checked in here just for reference.

The CSV input files were made with LibreOffice, saving each sheet as a CSV with default options. Leading and trailing lines were manually deleted.

`authorities.csv` comes from PowerBI, not the original tools.
