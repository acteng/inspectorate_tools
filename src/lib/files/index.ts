import { downloadBinaryFile } from "$lib";
import JSZip from "jszip";
import { get, type Writable } from "svelte/store";

export { default as FileManager } from "./FileManager.svelte";
export { default as ExportFile } from "./ExportFile.svelte";

export class LocalStorageFiles<StateType> {
  // This is used both to organize local storage keys and to determine the
  // starter page to redirect to. Should be of the form "foo/"
  prefix: string;
  // Generate an empty copy of the state.
  emptyState: () => StateType;
  // This may also backfill fields to repair any problems. Should throw an exception if the file state has some unrecoverable problem.
  validate: (state: StateType) => void;
  // For valid state, returns a one-liner summary to show in the list of files.
  describe: (state: StateType) => string;
  state: Writable<StateType>;
  // A key into local storage, excluding prefix
  currentFile: Writable<string>;

  // The caller should treat this like a singleton and only create once per app lifetime. This constructor has some side-effects:
  // - initially loading the last opened file (or starting a new blank file)
  // - setting up store subscriptions to automatically save to local storage
  // - downloading a backup .zip daily
  constructor(
    prefix: string,
    emptyState: () => StateType,
    validate: (state: StateType) => void,
    describe: (state: StateType) => string,
    state: Writable<StateType>,
    currentFile: Writable<string>,
  ) {
    this.prefix = prefix;
    this.emptyState = emptyState;
    this.validate = validate;
    this.describe = describe;
    this.state = state;
    this.currentFile = currentFile;

    this.initialLoad();

    this.state.subscribe((value) => {
      let file = get(this.currentFile);
      if (file) {
        window.localStorage.setItem(this.key(file), JSON.stringify(value));
      }
    });

    this.currentFile.subscribe((value) => {
      if (value) {
        window.localStorage.setItem(this.key("last-opened-file"), value);
      }
    });

    if (typeof window == "undefined") {
      console.log(
        "Running outside of a browser, in test mode -- not loading from local storage",
      );
      return;
    }

    // This class is constructed on every page of an app. So every unique day a
    // user interacts with the app, download a backup .zip. This
    // mitigates the problem of a user accidentally clearing browser data
    // and losing work.
    let today = getDateString();
    let lastBackup = window.localStorage.getItem(this.key("last-backup")) ?? "";
    if (today != lastBackup) {
      this.exportAll();
    }
  }

  // Returns the full local storage key for a file.
  key(file: string): string {
    return `${this.prefix}${file}`;
  }

  // Loads a file from local storage. Throws an exception if the stored state is missing or invalid.
  loadFile(file: string): StateType {
    console.log(`Loading ${file}`);
    let json = window.localStorage.getItem(this.key(file));
    if (!json) {
      throw new Error(`Key not in local storage: ${file}`);
    }
    let state = JSON.parse(json);
    this.validate(state);
    return state;
  }

  // Returns a sorted list of all filenames in local storage.
  getFileList(): string[] {
    let list = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      let key = window.localStorage.key(i)!;
      if (
        key.startsWith(this.prefix) &&
        key != this.key("last-opened-file") &&
        key != this.key("last-backup")
      ) {
        list.push(key.slice(this.prefix.length));
      }
    }
    list.sort();
    return list;
  }

  // Save a new file and return the updated file list
  saveAndGetFileList(filename: string, state: StateType): string[] {
    window.localStorage.setItem(this.key(filename), JSON.stringify(state));
    return this.getFileList();
  }

  describeFile(filename: string): string {
    let json = window.localStorage.getItem(this.key(filename));
    if (!json) {
      return "Error: missing";
    }
    try {
      let state = JSON.parse(json);
      this.validate(state);
      // Compare structurally
      if (JSON.stringify(state) == JSON.stringify(this.emptyState())) {
        return "Empty";
      }
      return this.describe(state);
    } catch (_) {
      return "Error: invalid or broken file";
    }
  }

  // Create and download a .zip with all JSON files
  async exportAll() {
    let name = `${this.prefix.slice(0, -1)}_backup_${getDateString()}`;
    let zip = new JSZip();
    let folder = zip.folder(name)!;

    for (let file of this.getFileList()) {
      folder.file(`${file}.json`, window.localStorage.getItem(this.key(file))!);
    }

    let bytes = await zip.generateAsync({ type: "arraybuffer" });
    downloadBinaryFile(bytes, `${name}.zip`);

    window.localStorage.setItem(this.key("last-backup"), getDateString());
  }

  // Initially set the currentFile and state store, based on the last opened file. If there is no last file, leaves both stores alone.
  private initialLoad() {
    if (typeof window == "undefined") {
      console.log(
        "Running outside of a browser, in test mode -- not loading from local storage",
      );
      return;
    }

    console.log(`Initial load; trying to open last opened file`);
    let lastFile = window.localStorage.getItem(this.key("last-opened-file"));
    if (lastFile) {
      try {
        let x = this.loadFile(lastFile);
        this.currentFile.set(lastFile);
        this.state.set(x);
        return;
      } catch (error) {
        window.alert(
          `The last opened file ${lastFile} has a problem: ${error}`,
        );
      }
    }

    console.log(`Not starting with any file`);
  }
}

export function downloadGeneratedFile(filename: string, textInput: string) {
  let element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(textInput),
  );
  element.setAttribute("download", filename);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

// DD_MM_YYYY
function getDateString(): string {
  let today = new Date();
  let day = today.getDate().toString().padStart(2, "0");
  let month = (today.getMonth() + 1).toString().padStart(2, "0");
  return `${day}_${month}_${today.getFullYear()}`;
}
