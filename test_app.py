import re

with open("src/App.tsx", "r") as f:
    content = f.read()

content = re.sub(
    r"return matchesSearch && matchesLocationTerm && matchesRole && matchesLocationCheckbox && matchesVisa && matchesRelocation;\n  \}\);",
    r"return matchesSearch && matchesLocationTerm && matchesRole && matchesLocationCheckbox && matchesVisa && matchesRelocation;\n  }, [searchTerm, locationTerm, selectedRoles, selectedLocations, visaSupport, relocation]);",
    content
)

with open("src/App.tsx", "w") as f:
    f.write(content)
