export { default as FileManager } from "./FileManager.svelte";

// It's the caller's responsibility to subscribe to the two stores and store in local storage.
export class LocalStorageFiles<StateType> {
  // This is used both to organize local storage keys and to determine the
  // starter page to redirect to. Should be of the form "foo/"
  prefix: string;
  // Generate an empty copy of the state.
  emptyState: () => StateType;
  // Should throw an exception if the file state has some problem.
  validate: (state: StateType) => void;

  constructor(
    prefix: string,
    emptyState: () => StateType,
    validate: (state: StateType) => void,
  ) {
    this.prefix = prefix;
    this.emptyState = emptyState;
    this.validate = validate;
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

  // Returns an unused filename.
  newFilename(): string {
    let fileList = this.getFileList();
    for (let n = 1; n <= fileList.length + 1; n++) {
      let file = `untitled${n}`;
      if (!fileList.includes(file)) {
        return file;
      }
    }
    throw new Error("Couldn't make a new filename; this shouldn't be possible");
  }

  // Returns a sorted list of all filenames in local storage.
  getFileList(): string[] {
    let list = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      let key = window.localStorage.key(i)!;
      if (key.startsWith(this.prefix) && key != this.key("last-opened-file")) {
        list.push(key.slice(this.prefix.length));
      }
    }
    list.sort();
    return list;
  }

  /*// Initially set the currentFile and state store, based on the last opened file or starting a new one.
  initialLoad() {
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

    console.log(`Starting with a new file`);
    let file = this.newFilename();
    this.currentFile.set(file);
    this.state.set(this.emptyState());
  }*/
}
