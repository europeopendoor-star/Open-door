with open("src/App.tsx", "r") as f:
    content = f.read()

content = content.replace("  }, [searchTerm, locationTerm, selectedRoles, selectedLocations, visaSupport, relocation]);", "  }), [searchTerm, locationTerm, selectedRoles, selectedLocations, visaSupport, relocation]);")

with open("src/App.tsx", "w") as f:
    f.write(content)
