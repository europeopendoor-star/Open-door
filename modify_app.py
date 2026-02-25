import sys

with open("src/App.tsx", "r") as f:
    content = f.read()

# Desktop Replacement
old_desktop = """            <NavDropdown
              title="Candidates"
              items={[
                { label: "Find Jobs", href: "/jobs" },
                { label: "Relocation", href: "/relocation" },
                { label: "Visa Guide", href: "/visa-guide" },
                { label: "Success Stories", href: "/success-stories" }
              ]}
            />
            <NavDropdown
              title="Employers"
              items={[
                { label: "Post a Job", href: "/post-job" },
                { label: "Talent Solutions", href: "/talent-solutions" },
                { label: "Pricing", href: "/pricing" },
                { label: "Blog", href: "/blog" }
              ]}
            />"""

new_desktop = """            <Link className="hover:text-white transition-colors" to="/jobs">Find Jobs</Link>
            <NavDropdown
              title="Candidates"
              items={[
                { label: "Relocation", href: "/relocation" },
                { label: "Visa Guide", href: "/visa-guide" },
                { label: "Success Stories", href: "/success-stories" }
              ]}
            />
            <NavDropdown
              title="Employers"
              items={[
                { label: "Post a Job", href: "/post-job" },
                { label: "Talent Solutions", href: "/talent-solutions" },
                { label: "Pricing", href: "/pricing" }
              ]}
            />
            <Link className="hover:text-white transition-colors" to="/blog">Blog</Link>"""

if old_desktop not in content:
    print("Desktop block not found!")
    sys.exit(1)

content = content.replace(old_desktop, new_desktop)

# Mobile Replacement
old_mobile = """              {/* Candidates Section */}
              <div className="border-b border-white/10 pb-2">
                <button
                  onClick={() => toggleSection('candidates')}
                  className="flex justify-between items-center w-full text-white text-lg font-medium py-2 hover:text-white/70 transition-colors"
                >
                  Candidates
                  <ChevronDown className={`w-5 h-5 transition-transform ${openSection === 'candidates' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openSection === 'candidates' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 flex flex-col gap-3 pb-2"
                    >
                      <Link className="text-white/80 text-base hover:text-white" to="/jobs" onClick={() => setIsMenuOpen(false)}>Find Jobs</Link>
                      <Link className="text-white/80 text-base hover:text-white" to="/relocation" onClick={() => setIsMenuOpen(false)}>Relocation</Link>
                      <Link className="text-white/80 text-base hover:text-white" to="/visa-guide" onClick={() => setIsMenuOpen(false)}>Visa Guide</Link>
                      <Link className="text-white/80 text-base hover:text-white" to="/success-stories" onClick={() => setIsMenuOpen(false)}>Success Stories</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Employers Section */}
              <div className="border-b border-white/10 pb-2">
                <button
                  onClick={() => toggleSection('employers')}
                  className="flex justify-between items-center w-full text-white text-lg font-medium py-2 hover:text-white/70 transition-colors"
                >
                  Employers
                  <ChevronDown className={`w-5 h-5 transition-transform ${openSection === 'employers' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openSection === 'employers' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 flex flex-col gap-3 pb-2"
                    >
                      <Link className="text-white/80 text-base hover:text-white" to="/post-job" onClick={() => setIsMenuOpen(false)}>Post a Job</Link>
                      <Link className="text-white/80 text-base hover:text-white" to="/talent-solutions" onClick={() => setIsMenuOpen(false)}>Talent Solutions</Link>
                      <Link className="text-white/80 text-base hover:text-white" to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                      <Link className="text-white/80 text-base hover:text-white" to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link className="text-white text-lg font-medium hover:text-white/70 transition-colors py-2 border-b border-white/10" to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>"""

new_mobile = """              <Link className="text-white text-lg font-medium hover:text-white/70 transition-colors py-2 border-b border-white/10" to="/jobs" onClick={() => setIsMenuOpen(false)}>Find Jobs</Link>

              {/* Candidates Section */}
              <div className="border-b border-white/10 pb-2">
                <button
                  onClick={() => toggleSection('candidates')}
                  className="flex justify-between items-center w-full text-white text-lg font-medium py-2 hover:text-white/70 transition-colors"
                >
                  Candidates
                  <ChevronDown className={`w-5 h-5 transition-transform ${openSection === 'candidates' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openSection === 'candidates' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 flex flex-col gap-3 pb-2"
                    >
                      <Link className="text-white/80 text-base hover:text-white" to="/relocation" onClick={() => setIsMenuOpen(false)}>Relocation</Link>
                      <Link className="text-white/80 text-base hover:text-white" to="/visa-guide" onClick={() => setIsMenuOpen(false)}>Visa Guide</Link>
                      <Link className="text-white/80 text-base hover:text-white" to="/success-stories" onClick={() => setIsMenuOpen(false)}>Success Stories</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Employers Section */}
              <div className="border-b border-white/10 pb-2">
                <button
                  onClick={() => toggleSection('employers')}
                  className="flex justify-between items-center w-full text-white text-lg font-medium py-2 hover:text-white/70 transition-colors"
                >
                  Employers
                  <ChevronDown className={`w-5 h-5 transition-transform ${openSection === 'employers' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openSection === 'employers' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 flex flex-col gap-3 pb-2"
                    >
                      <Link className="text-white/80 text-base hover:text-white" to="/post-job" onClick={() => setIsMenuOpen(false)}>Post a Job</Link>
                      <Link className="text-white/80 text-base hover:text-white" to="/talent-solutions" onClick={() => setIsMenuOpen(false)}>Talent Solutions</Link>
                      <Link className="text-white/80 text-base hover:text-white" to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link className="text-white text-lg font-medium hover:text-white/70 transition-colors py-2 border-b border-white/10" to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link className="text-white text-lg font-medium hover:text-white/70 transition-colors py-2 border-b border-white/10" to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>"""

if old_mobile not in content:
    print("Mobile block not found!")
    sys.exit(1)

content = content.replace(old_mobile, new_mobile)

with open("src/App.tsx", "w") as f:
    f.write(content)

print("Successfully modified src/App.tsx")
