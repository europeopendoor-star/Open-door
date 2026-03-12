import re
with open('src/App.tsx', 'r') as f:
  c = f.read()

print(c.find("const FindJobs"))
print(c.find("const Employers"))
