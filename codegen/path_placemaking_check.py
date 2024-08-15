import csv
from common import *


with open("inputs/path-placemaking-check.csv") as inputFile:
    idx = 1
    for row in csv.DictReader(
        inputFile,
        fieldnames=[
            "Metric",
            "ID",
            "Description",
            "blank",
            "Red",
            "Amber",
            "Green",
        ],
    ):
        if not row["ID"]:
            continue

        with open(
            "../src/routes/route_check/path_placemaking_check/"
            + row["ID"].lower()
            + "/+page.svelte",
            "w",
        ) as f:
            f.write("""<script lang="ts">\n""")
            f.write("""import Question from "../Question.svelte";\n""")
            f.write("""</script>\n""")
            f.write("""\n""")

            f.write("""<Question\n""")
            f.write("  idx={" + str(idx) + "}\n")

            f.write("""  cases={[\n""")
            f.write("""    ["2", "{}"],\n""".format(html(row["Green"])))
            f.write("""    ["1", "{}"],\n""".format(html(row["Amber"])))
            f.write("""    ["0", "{}"],\n""".format(html(row["Red"])))
            f.write("""  ]}\n""")
            f.write(""">\n""")

            f.write(
                """  {}\n""".format(
                    html(row["Description"], first_paragraph_prefix="Description: ")
                )
            )
            f.write("""</Question>\n""")
            idx += 1
