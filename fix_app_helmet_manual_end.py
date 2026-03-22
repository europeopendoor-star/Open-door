import re

with open("src/App.tsx", 'r') as file:
    content = file.read()

# Employers needs closing </>
# Let's find end of Employers
# Find `  );\n};` that follows Employers component body
# The Employers component ends right before `export default function App() {`
end_emp_idx = content.find("export default function App() {")
# let's look for `  );\n};\n` before that
last_paren = content.rfind("  );\n};", 0, end_emp_idx)
if last_paren != -1:
    content = content[:last_paren] + "    </>\n" + content[last_paren:]

# FindJobs needs closing </>
# It ends right before `const Employers = () => {`
end_jobs_idx = content.find("const Employers = () => {")
last_paren_jobs = content.rfind("  );\n};", 0, end_jobs_idx)
if last_paren_jobs != -1:
    content = content[:last_paren_jobs] + "    </>\n" + content[last_paren_jobs:]

# Home is already in <> </>

if "import { Helmet } from 'react-helmet-async';" not in content:
    content = "import { Helmet } from 'react-helmet-async';\n" + content

with open("src/App.tsx", 'w') as file:
    file.write(content)
