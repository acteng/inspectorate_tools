export { default as ClickableCard } from "./ClickableCard.svelte";
export { default as DateInput } from "./DateInput.svelte";
export { default as FancyRadio } from "./FancyRadio.svelte";
export { default as ExternalLink } from "./ExternalLink.svelte";
export { default as Loading } from "./Loading.svelte";
export { default as Modal } from "./Modal.svelte";
export { default as PrevNext } from "./PrevNext.svelte";
export { default as YesNo } from "./YesNo.svelte";

export function pairs(list: string[]): [string, string][] {
  return list.map((x) => [x, x]);
}

// Capitalise the first letter of each word
export function capitaliseWords(words: string): string {
  return words
    .split(" ")
    .map((word) =>
      word.length > 0 ? word[0].toUpperCase() + word.substr(1) : word,
    )
    .join(" ");
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

export function stripSuffix(value: string, suffix: string): string {
  return value.endsWith(suffix) ? value.slice(0, -suffix.length) : value;
}

export function downloadBinaryFile(bytes: ArrayBuffer, filename: string) {
  let blob = new Blob([bytes], { type: "application/octet-stream" });
  let url = URL.createObjectURL(blob);

  let link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Format dates as YYYY-MM-DD for <input type="date">. Amazingly there seems to be no easier way than this.
export function dateToString(date: Date): string {
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}
