export type ManualSection = {
  sectionName: string;
  elements: Element[];
};

type Element = string | Figure;

type Figure = {
  routeToImage: string;
  number: number;
  explanation: string;
};
