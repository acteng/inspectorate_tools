import csv
import json


authorityAliasMap = {}
authorityNames = []
authorityIDsProcessed = {}

with open("inputs/authority_aliases.csv") as inputFile:
    for row in csv.DictReader(
        inputFile,
        fieldnames=[
            "authority ID",
            "authority full name",
            "authority alias",
            "associated transport authority",
            "associated transport authority ONS region"
        ],
    ):
        authorityAlias = row["authority alias"]
        authorityID = row["authority ID"].replace('\ufeff', '')
        authorityAliasMap[authorityAlias] = {
            "id": authorityID,
            "fullName": row["authority full name"]
        }
        
        if not authorityID in list(authorityIDsProcessed.keys()):
            authorityIDsProcessed[authorityID] = True
            authorityNames.append(row["authority full name"])

        if authorityAlias == "Wychavon District Council":
            print(authorityAlias)
            print(authorityAliasMap[authorityAlias])

print(list(authorityAliasMap.keys()))
with open("inputs/original_list.csv") as inputFile2:
    for row in csv.DictReader(
        inputFile2,
        fieldnames=[
            "name"
        ],
    ):
        name = row["name"]
        if not name in list(authorityAliasMap.keys()):
            print("name not found in keys:" + name)

with open("outputs/authorityAliasMap.json", 'w') as filePath:
    json.dump(authorityAliasMap, filePath)
 
with open("outputs/authorityNameList.json", 'w') as filePath:
    json.dump(authorityNames, filePath)       
    