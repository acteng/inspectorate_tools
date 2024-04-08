# Developer guide

This is a fairly standard Sveltekit project. It's completely client-side, using the static adaptor. User state is auto-synced to browser local storage.

`npm i`, then `npm run dev` to develop locally.

## Design decisions: data-driven vs code

This project involves creating the next version of 3 Excel tools. Once ready, this codebase will become the source of truth for these tools. Changes to the tools won't be done in Excel. For this reason, there are some `codegen.py` scripts in this repo designed to be used only _once_, to quickly copy over parts of the Excel tools.

There are many metrics defined in the different tools that follow a similar structure. It's possible to express all of these with a config file, then generate Sveltekit pages from this data. But instead, each metric is defined explicitly as a Sveltekit page file. Why?

- Metric descriptions aren't just strings; they need list formatting, hyperlinks, and other things much easier to express with HTML in a Svelte component.
- Some metrics have special cases -- like the path check's extra question about horse riders or the double score for personal security metrics. Complexity would creep into an attempt to use config pretty quickly.

There's lots of inherent repetition in this codebase, due to the similarity between parts of the tools. Before trying to refactor copies of components like `Question.svelte` and `Progress.svelte`, it's useful to consider if the extra indirection will be easier to maintain or not.
