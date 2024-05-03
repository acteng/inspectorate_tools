import csv
from common import *

optionals = [
    "20",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "35",
    "36",
    "45",
    "46",
]
modeIndices = {
    "walking": [],
    "wheeling": [],
    "cycling": [],
    "horse": [],
}

with open("inputs/path-check.csv") as inputFile:
    idx = 1
    for row in csv.DictReader(
        inputFile,
        fieldnames=[
            "Metric",
            "Mode",
            "ID",
            "Description",
            "blank",
            "Red",
            "Amber",
            "Green",
        ],
    ):
        if not row["Mode"]:
            continue

        with open(
            "../src/routes/route_check/path_check/"
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
            f.write("""  label="{}"\n""".format(row["Metric"]))

            f.write("""  cases={[\n""")
            f.write("""    ["2", "{}"],\n""".format(html(row["Green"])))
            f.write("""    ["1", "{}"],\n""".format(html(row["Amber"])))
            f.write("""    ["0", "{}"],\n""".format(html(row["Red"])))
            if row["ID"][2:] in optionals:
                f.write("""    ["N/A", ""],\n""")
            f.write("""  ]}\n""")
            f.write(""">\n""")

            f.write("""  {}\n""".format(html(row["Description"])))
            f.write("""  <p>Mode: {}</p>\n""".format(row["Mode"]))
            f.write("""</Question>\n""")

        if "Walking" in row["Mode"] or row["Mode"] == "All Active Modes":
            modeIndices["walking"].append(idx - 1)
        if "Wheeling" in row["Mode"] or row["Mode"] == "All Active Modes":
            modeIndices["wheeling"].append(idx - 1)
        if "Cycling" in row["Mode"] or row["Mode"] == "All Active Modes":
            modeIndices["cycling"].append(idx - 1)
        if "Horse Riding" in row["Mode"] or row["Mode"] == "All Active Modes":
            modeIndices["horse"].append(idx - 1)
        idx += 1

with open("../src/lib/route_check_results/path.ts", "w") as f:
    f.write("export let pathModeIndices = {}\n".format(modeIndices))
