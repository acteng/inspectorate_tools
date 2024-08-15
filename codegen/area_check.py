import csv
import re
from common import *


questions = []
with open("inputs/area-check.csv") as inputFile:
    for row in csv.DictReader(
        inputFile,
        fieldnames=[
            "Metric",
            "Score",
            "Answer",
        ],
    ):
        if not row["Score"]:
            continue

        if row["Metric"]:
            # The label is the first line of the metric. To deal with random
            # newlines, turn into HTML first, then mangle that
            metric = html(row["Metric"])
            pattern = r"<p>(.*?)</p>"
            matched = re.search(pattern, metric)
            label = matched.group(1)
            description = re.sub(pattern, "", metric, count=1)

            questions.append(
                {
                    "Description": description,
                    "Cases": [],
                }
            )

        questions[-1]["Cases"].append([row["Score"], row["Answer"]])

for idx, question in enumerate(questions):
    with open(
        "../src/routes/area_check/scorecard/q" + "%02d" % (idx + 1) + "/+page.svelte",
        "w",
    ) as f:
        f.write("""<script lang="ts">\n""")
        f.write("""import Question from "../Question.svelte";\n""")
        f.write("""</script>\n""")
        f.write("""\n""")

        f.write("""<Question\n""")
        f.write("  idx={" + str(idx + 1) + "}\n")

        f.write("""  cases={[\n""")
        for score, answer in question["Cases"]:
            f.write("""    [{}, "{}"],\n""".format(score, html(answer)))
        f.write("""  ]}\n""")
        f.write(""">\n""")

        f.write("""  {}\n""".format(question["Description"]))
        f.write("""</Question>\n""")
        idx += 1
