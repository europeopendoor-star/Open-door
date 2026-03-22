import re

with open("src/App.tsx", 'r') as file:
    content = file.read()

# Remove useSEO imports
content = re.sub(r"import\s+\{\s*useSEO\s*\}\s+from\s+['\"].*?['\"];?\n?", "", content)

# Remove useSEO hook calls
content = re.sub(r"useSEO\s*\(\s*\{[^\}]+\}\s*\)\s*;", "", content, flags=re.DOTALL)

with open("src/App.tsx", 'w') as file:
    file.write(content)
