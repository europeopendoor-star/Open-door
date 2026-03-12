import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

replacement = """const FindJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [visaSupport, setVisaSupport] = useState(false);
  const [relocation, setRelocation] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    const loc = params.get('location');

    if (search) setSearchTerm(search);
    if (loc) setLocationTerm(loc);
  }, [location.search]);

  const toggleRole = (role: string) => {
    setSelectedRoles(prev =>
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    );
  };

  const toggleLocation = (loc: string) => {
    setSelectedLocations(prev =>
      prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setLocationTerm("");
    setSelectedRoles([]);
    setSelectedLocations([]);
    setVisaSupport(false);
    setRelocation(false);
  };

  const filteredJobs = JOBS.filter(job => {
    // Search Term Filter
    const matchesSearch = searchTerm === "" ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    // Location Term Filter (from Hero)
    const matchesLocationTerm = locationTerm === "" ||
      job.location.toLowerCase().includes(locationTerm.toLowerCase());

    // Role Filter
    const jobRole = (() => {
      const t = job.title.toLowerCase();
      if (t.includes('engineer') || t.includes('developer')) return 'Engineering';
      if (t.includes('designer')) return 'Design';
      if (t.includes('product')) return 'Product';
      if (t.includes('data')) return 'Data';
      if (t.includes('marketing')) return 'Marketing';
      return 'Other';
    })();
    const matchesRole = selectedRoles.length === 0 || selectedRoles.includes(jobRole);

    // Location Checkbox Filter
    const matchesLocationCheckbox = selectedLocations.length === 0 ||
      selectedLocations.some(loc => job.location.includes(loc));

    // Visa & Relocation
    const matchesVisa = !visaSupport || job.tags.some(t => t.toLowerCase().includes('visa'));
    const matchesRelocation = !relocation || job.tags.some(t => t.toLowerCase().includes('relocation'));

    return matchesSearch && matchesLocationTerm && matchesRole && matchesLocationCheckbox && matchesVisa && matchesRelocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Find Your Next Role"
        subtitle="Explore opportunities across Europe with visa sponsorship"
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      />
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 sticky top-24">
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                 <h3 className="font-bold text-lg flex items-center gap-2">
                  <Filter className="w-5 h-5 text-primary" /> Filters
                </h3>
                <button onClick={clearFilters} className="text-xs font-bold text-gray-500 hover:text-primary transition-colors">Clear All</button>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold text-sm mb-4 text-gray-900 uppercase tracking-wider">Role Type</h4>
                  <div className="space-y-3">
                    {['Engineering', 'Design', 'Product', 'Data', 'Marketing'].map(role => (
                      <label key={role} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            className="peer h-5 w-5 rounded-md border-gray-300 text-primary focus:ring-primary/20 transition-all"
                            checked={selectedRoles.includes(role)}
                            onChange={() => toggleRole(role)}
                          />
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-primary transition-colors font-medium">{role}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-4 text-gray-900 uppercase tracking-wider">Location</h4>
                  <div className="space-y-3">
                    {['Germany', 'Netherlands', 'Sweden', 'Spain', 'France'].map(loc => (
                      <label key={loc} className="flex items-center gap-3 cursor-pointer group">
                         <input
                            type="checkbox"
                            className="peer h-5 w-5 rounded-md border-gray-300 text-primary focus:ring-primary/20 transition-all"
                            checked={selectedLocations.includes(loc)}
                            onChange={() => toggleLocation(loc)}
                          />
                        <span className="text-sm text-gray-600 group-hover:text-primary transition-colors font-medium">{loc}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-4 text-gray-900 uppercase tracking-wider">Perks</h4>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="peer h-5 w-5 rounded-md border-gray-300 text-primary focus:ring-primary/20 transition-all"
                        checked={visaSupport}
                        onChange={(e) => setVisaSupport(e.target.checked)}
                      />
                      <span className="text-sm text-gray-600 group-hover:text-primary transition-colors font-medium flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent-lime" />
                        Visa Sponsorship
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="peer h-5 w-5 rounded-md border-gray-300 text-primary focus:ring-primary/20 transition-all"
                        checked={relocation}
                        onChange={(e) => setRelocation(e.target.checked)}
                      />
                      <span className="text-sm text-gray-600 group-hover:text-primary transition-colors font-medium flex items-center gap-2">
                        <Map className="w-4 h-4 text-primary" />
                        Relocation Package
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-8 relative z-10 group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="text-gray-400 group-focus-within:text-primary transition-colors w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search by job title, company, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border-2 border-transparent group-hover:border-primary/20 focus:border-primary rounded-2xl pl-12 pr-4 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-lg"
              />
            </div>

            <div className="space-y-6">
              <AnimatePresence>
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job, i) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                      key={job.title + i}
                      className="bg-white p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 transition-all cursor-pointer flex flex-col sm:flex-row gap-6 items-start sm:items-center group"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/5 transition-colors group-hover:scale-105 duration-300">
                        {getJobIcon(job.title)}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="font-bold text-xl sm:text-2xl text-gray-900 group-hover:text-primary transition-colors">{job.title}</h3>
                          {i < 3 && <Badge variant="new">New</Badge>}
                          {job.title.includes('Senior') && <Badge variant="hot">Hot</Badge>}
                        </div>
                        <p className="text-sm sm:text-base text-gray-500 mb-4 font-medium flex items-center flex-wrap gap-2">
                          <span className="text-gray-900">{job.company}</span>
                          <span className="text-gray-300">•</span>
                          <span>{job.location}</span>
                          <span className="text-gray-300">•</span>
                          <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{job.salary}</span>
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.tags.map(tag => (
                            <span key={tag} className={`px-3 py-1 rounded-full text-xs font-bold ${
                              tag.toLowerCase().includes('visa') ? 'bg-accent-lime/20 text-primary border border-accent-lime/30' :
                              tag.toLowerCase().includes('relocation') ? 'bg-primary/10 text-primary border border-primary/20' :
                              'bg-gray-50 text-gray-600 border border-gray-100'
                            }`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="w-full sm:w-auto mt-4 sm:mt-0 flex flex-col gap-2">
                        <a
                          href={`https://wa.me/4915210755401?text=Hi,%20I'm%20interested%20in%20applying%20for%20the%20${encodeURIComponent(job.title)}%20position.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all text-center"
                        >
                          Apply Now
                        </a>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-3xl p-16 text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                  >
                    <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="w-10 h-10 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">No jobs found</h3>
                    <p className="text-gray-500 mb-8 max-w-md mx-auto text-lg">We couldn't find any positions matching your current filters. Try adjusting your search criteria.</p>
                    <button onClick={clearFilters} className="bg-gray-100 text-gray-700 font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors">
                      Clear all filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};"""

pattern = re.compile(r'const FindJobs = \(\) => \{.*?(?=const Employers = \(\) => \{)', re.DOTALL)
new_content = re.sub(pattern, replacement + "\n\n", content)

with open('src/App.tsx', 'w') as f:
    f.write(new_content)
