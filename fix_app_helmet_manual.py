with open("src/App.tsx", 'r') as file:
    content = file.read()

# Home
content = content.replace(
    "const Home = () => {\n  \n  \n  return (\n    <>",
    "const Home = () => {\n  \n  \n  return (\n    <>\n      <Helmet>\n        <title>OpenDoor - Relocate & Work in Europe</title>\n        <meta name=\"description\" content=\"OpenDoor connects top international talent with leading European employers. Find jobs with visa sponsorship.\" />\n      </Helmet>"
)

# Employers
content = content.replace(
    "const Employers = () => {\n  \n\n  return (\n    <div",
    "const Employers = () => {\n  \n\n  return (\n    <>\n      <Helmet>\n        <title>Hire International Talent - OpenDoor Employers</title>\n        <meta name=\"description\" content=\"Partner with OpenDoor to hire skilled international professionals. We handle sourcing, vetting, and relocation.\" />\n      </Helmet>\n      <div"
)

# Now FindJobs. We need to find its return statement.
# FindJobs has a huge body. Let's find `return (\n    <div className="min-h-screen bg-white">`
# Actually let's search for `  return (\n    <div className="min-h-screen bg-gray-50">\n      <PageHeader`

content = content.replace(
    "  return (\n    <div className=\"min-h-screen bg-gray-50\">\n      <PageHeader",
    "  return (\n    <>\n      <Helmet>\n        <title>Find Tech Jobs in Europe with Visa Sponsorship | OpenDoor</title>\n        <meta name=\"description\" content=\"Search for software engineering, IT, and tech jobs in Europe offering visa sponsorship and relocation assistance.\" />\n      </Helmet>\n      <div className=\"min-h-screen bg-gray-50\">\n      <PageHeader"
)

with open("src/App.tsx", 'w') as file:
    file.write(content)
