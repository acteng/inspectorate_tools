import authorityAliasToNameMap from "./authorityAliasMap.json";
import authorityNames from "./authorityNameList.json";

export { authorityAliasToNameMap };

export { authorityNames };

export function validateAuthorityName(authorityName: string): string {
  if (!authorityNames.includes(authorityName)) {
    // @ts-expect-error because we're using a json file ts isn't happy for us to assume this can accessed this way
    let authorityNameObject = authorityAliasToNameMap[authorityName];
    if (!authorityNameObject) {
      return "";
    } else {
      return authorityNameObject.fullName;
    }
  }
  return authorityName;
}
