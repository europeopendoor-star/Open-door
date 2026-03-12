import re

with open("src/Blog.tsx", "r") as f:
    content = f.read()

content = content.replace("import { useState } from 'react';", "import { useState, useMemo } from 'react';")

content = re.sub(
    r"const filteredPosts = blogPosts\.filter\(post => \{",
    r"// ⚡ Bolt: Memoize the filtered posts to prevent O(N) recalculations on every render\n  const filteredPosts = useMemo(() => blogPosts.filter(post => {",
    content
)

content = re.sub(
    r"return matchesCountry && matchesSearch;\n  \}\);",
    r"return matchesCountry && matchesSearch;\n  }), [selectedCountry, searchQuery]);",
    content
)

with open("src/Blog.tsx", "w") as f:
    f.write(content)
