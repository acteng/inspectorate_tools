import csv
import sys


def html(x):
    y = ""
    is_list = False
    for line in x.split("\n"):
        # Skip empty lines
        if not line:
            continue

        if line.startswith("• "):
            if not is_list:
                y += "<ul>"
                is_list = True
            y += "<li>"
            y += line.removeprefix("• ")
            y += "</li>"
        else:
            if is_list:
                is_list = False
                y += "</ul>"

            y += "<p>"
            y += line.strip()
            y += "</p>"

    return y


# Manually copy from Excel. This is a one-off script; the source of truth
# becomes the Svelte files, which need to be manually edited to improve
# formatting.
with open(sys.argv[1]) as tsv:
    idx = 1
    for row in csv.DictReader(
        tsv,
        fieldnames=[
            "Metric",
            "Mode",
            "ID",
            "Description",
            "Critical",
            "Red",
            "Amber",
            "Green",
        ],
    ):
        if not row["Mode"]:
            continue

        with open(row["ID"].lower() + "/+page.svelte", "w") as f:
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
            f.write("""    ["C", "{}"],\n""".format(html(row["Critical"])))
            f.write("""  ]}\n""")
            f.write(""">\n""")

            f.write("""  {}\n""".format(html(row["Description"])))
            f.write("""  <p>Mode: {}</p>\n""".format(row["Mode"]))
            f.write("""</Question>\n""")
            idx += 1
