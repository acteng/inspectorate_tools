export { default as Breadcrumbs } from "./Breadcrumbs.svelte";
export { default as FancyRadio } from "./FancyRadio.svelte";
export { default as Geocoder } from "./Geocoder.svelte";
export { default as ExternalLink } from "./ExternalLink.svelte";
export { default as PrevNext } from "./PrevNext.svelte";
export { default as WarningText } from "./WarningText.svelte";
export { default as YesNo } from "./YesNo.svelte";

export function pairs(list: string[]): [string, string][] {
  return list.map((x) => [x, x]);
}

export function repeatCloned<T>(length: number, x: T): T[] {
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(JSON.parse(JSON.stringify(x)));
  }
  return result;
}

export function sum(list: number[]): number {
  return list.reduce((total, x) => total + x, 0);
}
