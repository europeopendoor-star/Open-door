with open("src/Pricing.tsx", "r") as f:
    content = f.read()

# Only keep the first set of imports and the new component logic
content_lines = content.split('\n')
import_lines = []
code_lines = []
seen_imports = set()

for line in content_lines:
    if line.startswith("import"):
        if line not in seen_imports:
            import_lines.append(line)
            seen_imports.add(line)
    elif "export default Pricing" in line:
        pass # Handle at the end
    else:
        code_lines.append(line)

new_content = "\n".join(import_lines) + "\n\n" + "\n".join(code_lines) + "\nexport default Pricing;\n"

with open("src/Pricing.tsx", "w") as f:
    f.write(new_content)
