import re

def inject_helmet(filepath, component_name, title, desc):
    with open(filepath, 'r') as f:
        content = f.read()

    # Find the start of the component's return statement
    # e.g., `return (\n    <div`
    # We will search for the first return statement inside the function body

    # Let's find `function ComponentName`
    match = re.search(r'function\s+' + component_name + r'\s*\([^)]*\)\s*\{', content)
    if not match:
        match = re.search(r'const\s+' + component_name + r'\s*=\s*\([^)]*\)\s*=>\s*\{', content)
        if not match:
            print(f"Could not find component {component_name}")
            return

    start_idx = match.end()

    # Find the first `return (` after the start index
    return_match = re.search(r'return\s*\(\s*(<[A-Za-z]+)', content[start_idx:])
    if not return_match:
        print(f"Could not find return for {component_name}")
        return

    abs_return_idx = start_idx + return_match.start()

    # Now we insert Helmet
    helmet_tag = f'<>\n      <Helmet>\n        <title>{title}</title>\n        <meta name="description" content="{desc}" />\n      </Helmet>\n      {return_match.group(1)}'

    content = content[:abs_return_idx] + re.sub(r'return\s*\(\s*(<[A-Za-z]+)', f'return (\n    {helmet_tag}', content[abs_return_idx:], count=1)

    # Now find the matching end of the component to add </>
    # We look for `  );\n}` starting from abs_return_idx
    # This is an approximation
    end_match = re.search(r'(\s*\);\s*\n})', content[abs_return_idx:])
    if end_match:
        abs_end_idx = abs_return_idx + end_match.start()
        content = content[:abs_end_idx] + '    </>\n' + content[abs_end_idx:]

    with open(filepath, 'w') as f:
        f.write(content)
    print(f"Injected Helmet into {component_name} in {filepath}")

inject_helmet("src/App.tsx", "Home", "OpenDoor - Relocate & Work in Europe", "OpenDoor connects top international talent with leading European employers. Find jobs with visa sponsorship.")
inject_helmet("src/App.tsx", "FindJobs", "Find Tech Jobs in Europe with Visa Sponsorship | OpenDoor", "Search for software engineering, IT, and tech jobs in Europe offering visa sponsorship and relocation assistance.")
inject_helmet("src/App.tsx", "Employers", "Hire International Talent - OpenDoor Employers", "Partner with OpenDoor to hire skilled international professionals. We handle sourcing, vetting, and relocation.")
inject_helmet("src/App.tsx", "Relocation", "Relocation Services to Europe | OpenDoor", "Expert relocation assistance to Europe. From visa processing to finding a home, we make moving seamless.")
inject_helmet("src/App.tsx", "AboutUs", "About OpenDoor - Our Mission & Team", "Learn about OpenDoor's mission to bridge the gap between global talent and European tech companies.")
inject_helmet("src/Blog.tsx", "Blog", "Relocation & Career Blog - OpenDoor Europe", "Read our latest articles on working in Europe, visa guides, tech career tips, and relocation success stories.")
