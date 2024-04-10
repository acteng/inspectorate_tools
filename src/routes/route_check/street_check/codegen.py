import os
import sys

# Manually copy from Excel. This is a one-off script; the source of truth
# becomes the Svelte files, which need to be manually edited to improve
# formatting.
with open(sys.argv[1]) as tsv:
    idx = 1
    for line in tsv:
        parts = line.strip().split("\t")
        if len(parts) != 8:
            # Blank line or a category
            continue

        [metric, mode, number, description, blank, red, amber, green] = parts

        if not os.path.exists(number.lower()):
            os.makedirs(number.lower())
        with open(number.lower() + "/+page.svelte", "w") as f:
            f.write("""<script lang="ts">\n""")
            f.write("""import Question from "../Question.svelte";\n""")
            f.write("""</script>\n""")
            f.write("""\n""")

            f.write("""<Question\n""")
            f.write("  idx={" + str(idx) + "}\n")
            f.write("""  label="{}"\n""".format(metric))

            f.write("""  cases={[\n""")
            f.write("""    ["2", "{}"],\n""".format(green))
            f.write("""    ["1", "{}"],\n""".format(amber))
            f.write("""    ["0", "{}"],\n""".format(red))
            f.write("""  ]}\n""")
            f.write(""">\n""")

            f.write("""  <p>{}</p>\n""".format(description))
            f.write("""  <p>Mode: {}</p>\n""".format(mode))
            f.write("""</Question>\n""")
            idx += 1
