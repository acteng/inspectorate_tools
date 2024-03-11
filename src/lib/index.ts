export { default as Breadcrumbs } from "./Breadcrumbs.svelte";
export { default as ExternalLink } from "./ExternalLink.svelte";
export { default as WarningText } from "./WarningText.svelte";

export function pairs(list: string[]): [string, string][] {
  return list.map((x) => [x, x]);
}
