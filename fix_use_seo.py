import re
import glob

files = ["src/App.tsx", "src/Blog.tsx", "src/Contact.tsx", "src/PostJob.tsx", "src/Pricing.tsx", "src/SuccessStories.tsx", "src/TalentSolutions.tsx", "src/VisaGuide.tsx", "src/pages/AboutUs.tsx", "src/pages/Relocation.tsx"]

for f in files:
    with open(f, 'r') as file:
        content = file.read()

    # Remove useSEO imports (already done by sed but just in case)
    content = re.sub(r"import\s+\{\s*useSEO\s*\}\s+from\s+['\"].*?['\"];?\n?", "", content)

    # Remove useSEO hook calls
    # Usually looks like:
    # useSEO({
    #   title: "...",
    #   description: "..."
    # });

    # Let's match useSEO\(\{.*?\}\); where .*? is non-greedy multiline
    content = re.sub(r"useSEO\s*\(\s*\{[^\}]+\}\s*\)\s*;", "", content, flags=re.DOTALL)

    with open(f, 'w') as file:
        file.write(content)
