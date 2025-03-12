import { authorityNames } from "./authority_names/authority_names";

const additionalAuthorities = [
  "Scotland",
  "Wales",
  "London Borough of Barking and Dagenham",
  "London Borough of Barnet",
  "London Borough of Bexley",
  "London Borough of Brent",
  "London Borough of Bromley",
  "London Borough of Camden",
  "London Borough of Croydon",
  "London Borough of Ealing",
  "London Borough of Enfield",
  "London Borough of Hackney",
  "London Borough of Hammersmith and Fulham",
  "London Borough of Haringey",
  "London Borough of Harrow",
  "London Borough of Havering",
  "London Borough of Hillingdon",
  "London Borough of Hounslow",
  "London Borough of Islington",
  "Royal Borough of Kingston upon Thames",
  "Royal Borough of Greenwich",
  "Royal Borough of Kensington and Chelsea",
  "London Borough of Lambeth",
  "London Borough of Lewisham",
  "London Borough of Merton",
  "London Borough of Newham",
  "London Borough of Redbridge",
  "London Borough of Richmond upon Thames",
  "London Borough of Southwark",
  "London Borough of Sutton",
  "London Borough of Tower Hamlets",
  "London Borough of Waltham Forest",
  "London Borough of Wandsworth",
  "Westminster City Council",
];

export let authorities = ["N/A", ...[...authorityNames, ...additionalAuthorities].sort()];

export let transportOrCombinedAuthorities = [
  "Not applicable",
  "Cambridgeshire and Peterborough Combined Authority",
  "Greater Manchester Combined Authority",
  "Greater London Authority",
  "Liverpool City Region Combined Authority",
  "North East Joint Transport Committee",
  "South Yorkshire Mayoral Combined Authority",
  "Tees Valley Combined Authority",
  "West Midlands Combined Authority",
  "West of England Combined Authority",
  "West Yorkshire Combined Authority",
  "York and North Yorkshire Combined Authority",
];

export let regions = [
  "East of England",
  "East Midlands",
  "London",
  "North East",
  "North West",
  "South East",
  "South West",
  "West Midlands",
  "Yorkshire and the Humber",
];

export let fundingProgrammes = [
  "Active Travel Fund",
  "Capability Fund",
  "City Region Sustainable Transport Settlements",
  "Levelling Up Fund",
  "Major Road Network",
  "Transforming Cities Fund",
  "Road Investment Strategy ",
  "Housing Infrastructure Fund",
  "National Cycle Network",
];

export let designStages = [
  "Feasibility",
  "Preliminary",
  "Outline design",
  "Detailed design",
  "Strategic business case",
  "Pre-outline business case",
  "Outline business case",
  "Final business case",
  "Built",
  "ATE Inspection",
];
