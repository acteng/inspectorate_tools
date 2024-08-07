import csv

authorities = []
combinedAuthorities = set()
regions = set()
with open("inputs/authority-relations.csv") as inputFile:
    for row in csv.DictReader(inputFile):
        if row["Authority Type"] != "National Park":
            ca = row["Combined Authority"]
            region = row["ATE Region"]
            authorities.append((row["Authority Name"], ca, region))
            if ca:
                combinedAuthorities.add(ca)
            if region:
                regions.add(region)

print("export let authorities = [")
print("""  ["N/A", "", ""],""")
for row in sorted(list(set(authorities))):
    print("""  ["{}", "{}", "{}"],""".format(*row))
print("];\n")

print("export let transportOrCombinedAuthorities = [")
print("""  "Not applicable",""")
for x in sorted(list(combinedAuthorities)):
    print("""  "{}",""".format(x))
print("];\n")

print("export let regions = [")
for x in sorted(list(regions)):
    print("""  "{}",""".format(x))
print("];\n")
