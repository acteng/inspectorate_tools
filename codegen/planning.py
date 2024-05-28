import csv
from common import *


with open("inputs/planning.csv") as inputFile:
    idx = 1
    for row in csv.DictReader(
        inputFile,
    ):
        with open(
            "../src/routes/planning/scorecard/" + "q%02d" % idx + "/+page.svelte",
            "w",
        ) as f:
            f.write("""<script lang="ts">\n""")
            f.write("""import Question from "../Question.svelte";\n""")
            f.write("""</script>\n""")
            f.write("""\n""")

            f.write("""<Question\n""")
            f.write("  idx={" + str(idx) + "}\n")
            f.write("""  label="{}"\n""".format(row["Criterion"].strip()))
            f.write(""">\n""")

            f.write(
                """  <div slot="description">{}</div>\n""".format(
                    html(row["Description"])
                )
            )
            f.write(
                """  <div slot="shortfalls">{}</div>\n""".format(
                    html(row["Common Shortfalls"])
                )
            )
            f.write(
                """  <div slot="guidance">{}</div>\n""".format(
                    html(row["Policy & Guidance"])
                )
            )

            f.write("""</Question>\n""")
            idx += 1
