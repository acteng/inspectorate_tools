# Turn an exported Excel string into HTML, handling paragraphs and lists.
# Bold/underlining doesn't show up in the CSV export, so has to be done
# manually later.
def html(x):
    x = x.replace('"', '\\"')

    y = ""
    is_list = False
    for line in x.split("\n"):
        # Skip empty lines
        if not line:
            continue

        if line.startswith("• ") or line.startswith("- "):
            if not is_list:
                y += "<ul>"
                is_list = True
            y += "<li>"
            y += line.removeprefix("• ").removeprefix("- ")
            y += "</li>"
        else:
            if is_list:
                is_list = False
                y += "</ul>"

            y += "<p>"
            y += line.strip()
            y += "</p>"

    return y
