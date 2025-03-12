import csv
import json


authorityAliasMap = {}
authorityNames = []
authorityNamesProcessed = {}

with open("inputs/authority_aliases.csv") as inputFile:
    for row in csv.DictReader(
        inputFile,
        fieldnames=[
            "authority full name",
            "authority alias",
            "associated transport authority",
            "associated transport authority ONS region"
        ],
    ):
        authorityAlias = row["authority alias"]
        authorityName = row["authority full name"].replace('\ufeff', '')
        authorityAliasMap[authorityAlias] = {
            "fullName": authorityName
        }
        
        if not authorityName in list(authorityNamesProcessed.keys()):
            authorityNamesProcessed[authorityName] = True
            authorityNames.append(authorityName)

# This section exists to ensure that any pre-existing names used are covered by the aliases used.
# If not then you'll have to add them manually by working out which council the alias corresponds to
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

with open("../src/lib/authority_names/authorityAliasMap.json", 'w') as filePath:
    json.dump(authorityAliasMap, filePath)
 
with open("../src/lib/authority_names/authorityNameList.json", 'w') as filePath:
    json.dump(authorityNames, filePath)
    