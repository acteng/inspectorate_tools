First use [this PDF converter](xodo.com/convert-pdf-to-html) to convert a manual pdf into html. The manuals can be found [here](https://www.gov.uk/government/publications/active-travel-england-scheme-review-tools).

Then you can run `npm run --prefix ./ parse_manual {path-to-converted-manual} {path-to-output-to}` e.g. `npm run --prefix ./ parse_manual ./ate-area-check-tool-user-manual-converted.html area-check-content.json`.
NB the `--prefix` is required to ensure we use this package.json rather than the one in the repo's root dir

This will give you the basic content which can then be used, after a bit of finessing, in the tools such as in `tools\src\routes\area_check\manual`
