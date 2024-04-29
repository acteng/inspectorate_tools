import { writable, type Writable } from "svelte/store";

// Use this to share between two components, nested under the sidebar and map

export const settingImage = writable(false);
export const imgSrc: Writable<string | null> = writable(null);
export const opacity = writable(100);

export const topLeft = writable({ lng: 0, lat: 0 });
export const bottomRight = writable({ lng: 0, lat: 0 });
