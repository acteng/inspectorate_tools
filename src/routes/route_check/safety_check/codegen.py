import csv

# Manually copy from Excel, naming the columns "Metric Mode ID Description
# Critical Red Amber Green" (with tabs). This is a one-off script; the source
# of truth becomes the Svelte files, which need to be manually edited to
# improve formatting.
with open("safety_check.tsv") as tsv:
    idx = 1
    for row in csv.DictReader(tsv, delimiter="	"):
        with open(row["ID"].lower() + "/+page.svelte", "w") as f:
            f.write("""<script lang="ts">\n""")
            f.write("""import Question from "../Question.svelte";\n""")
            f.write("""</script>\n""")
            f.write("""\n""")

            f.write("""<Question\n""")
            f.write("  idx={" + str(idx) + "}\n")
            f.write("""  label="{}"\n""".format(row["Metric"]))

            f.write("""  cases={[\n""")
            f.write("""    ["C", "{}"],\n""".format(row["Critical"]))
            f.write("""    ["0", "{}"],\n""".format(row["Red"]))
            f.write("""    ["1", "{}"],\n""".format(row["Amber"]))
            f.write("""    ["2", "{}"],\n""".format(row["Green"]))
            f.write("""  ]}\n""")
            f.write(""">\n""")

            f.write("""  <p>{}</p>\n""".format(row["Description"]))
            f.write("""</Question>\n""")
            idx += 1
