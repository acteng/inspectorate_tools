import fs from "fs";
import { HTMLElement } from "node-html-parser";
import { parse } from "node-html-parser";

const inputPath =
  process.argv[2] || "./ate-area-check-tool-user-manual-converted.html";
const outputPath = process.argv[3] || "output.json";

const htmlString = fs.readFileSync(inputPath).toString();

const doc = parse(htmlString);

const elements = doc.getElementsByTagName("*");

function range(min: number, max: number) {
  var len = max - min + 1;
  var arr = new Array(len);
  for (var i = 0; i < len; i++) {
    arr[i] = min + i;
  }
  return arr;
}

const sections: Section[] = [];

const filteredElements = elements.filter((element) => {
  return element.rawTagName !== "table";
});

for (const i of range(0, filteredElements.length - 1)) {
  const elem = filteredElements[i];
  if (
    elem["rawTagName"] === "li" &&
    elem.rawAttrs.startsWith("data-list-text") &&
    elem.rawAttrs.endsWith('."')
  ) {
    sections.push({
      name: elem.childNodes[1].text,
      elements: rectifySubsections(getSubsections(elem)),
    });
  }
}

fs.writeFileSync(outputPath, JSON.stringify(sections));

type Section = {
  name: string;
  elements: string[];
};

type Subsection = {
  content: string;
};

function getSubsections(elem: HTMLElement): Subsection[][] {
  if (
    elem["rawTagName"] === "li" &&
    elem.rawAttrs.startsWith("data-list-text") &&
    !elem.rawAttrs.endsWith('."')
  ) {
    return [reduceChildrenTo(elem, getLeafNodes)];
  } else if (elem.childNodes.length === 0) {
    return [];
  }
  return reduceChildrenTo(elem, getSubsections);
}

function getLeafNodes(elem: HTMLElement): Subsection[] {
  if (elem.childNodes.length === 0) {
    return [{ content: elem.innerText }];
  }

  return reduceChildrenTo(elem, getLeafNodes);
}

function reduceChildrenTo<Type>(
  elem: HTMLElement,
  func: (elem: HTMLElement) => Type[],
) {
  return Array.from(elem.childNodes).reduce(
    (accumulator: Type[], childElem) => {
      const childNodes: Type[] = func(childElem as HTMLElement);
      return accumulator.concat(childNodes);
    },
    [],
  );
}

function rectifySubsections(subsectionss: Subsection[][]): string[] {
  const reducedSubsections: Subsection[] = subsectionss.map(
    (subsections: Subsection[]) => {
      return subsections.reduce(
        (accumulator, subsection): Subsection => {
          accumulator.content = accumulator.content + subsection.content;
          return accumulator;
        },
        {
          content: "",
        },
      );
    },
  );

  return reducedSubsections.map((subsection) => {
    subsection.content = subsection.content.replace(/(\r\n|\n|\r|\t)/gm, "");
    subsection.content = reduceWhiteSpace(subsection.content);

    return subsection.content;
  });
}

function reduceWhiteSpace(str: string): string {
  let result = str;
  while (result.indexOf("  ") !== -1) {
    result = result.replace("  ", " ");
  }

  return result;
}
