import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

replacement = """const Relocation = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I have to pay for my flight to Europe?",
      answer: "No. For roles with full relocation packages, your flight ticket and initial temporary housing are completely covered by the employer."
    },
    {
      question: "Can I bring my family with me?",
      answer: "Yes! Most European countries offer 'family reunification' or dependent visas. We will guide you through the process of bringing your spouse and children."
    },
    {
      question: "How long does the visa process take?",
      answer: "It typically takes 4 to 8 weeks depending on the destination country and the type of visa (e.g., EU Blue Card vs. standard work permit)."
    },
    {
      question: "What if I don't speak the local language?",
      answer: "All the jobs we source require English proficiency only. While learning the local language is encouraged for daily life, your working language will be English."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Seamless Relocation"
        subtitle="We handle the logistics so you can focus on your new life"
        bgImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Timeline Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gray-100">
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="new" className="mb-4">How It Works</Badge>
            <h2 className="font-display text-4xl md:text-5xl mb-6">The Relocation Process</h2>
            <p className="text-gray-600 text-lg">We've broken down international relocation into a predictable, stress-free science.</p>
          </div>
          <TimelineDemo />
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4">Full Support</Badge>
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-gray-900">Your journey, fully supported</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Moving to a new country is a massive life event. Our dedicated relocation experts are with you every step of the way, from the moment you sign your offer to your first day in your new city.
            </p>
            <ul className="space-y-6">
              {[
                { title: "Visa Processing", desc: "Expert handling of all legal paperwork" },
                { title: "Travel Logistics", desc: "Flights and temporary housing covered" },
                { title: "Local Setup", desc: "Bank accounts, taxes, and registration" },
                { title: "Cultural Onboarding", desc: "City guides and community integration" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent-lime/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl -m-4 -z-10 transform rotate-3"></div>
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=400"
              alt="Moving"
              className="rounded-3xl w-full h-72 object-cover shadow-lg hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
              alt="Team"
              className="rounded-3xl w-full h-72 object-cover mt-12 shadow-lg hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* FAQ & Resources Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-gray-50/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-gray-900">{faq.question}</span>
                    <span className="text-primary font-bold text-xl ml-4">
                      {activeFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-4 text-gray-600 border-t border-gray-50"
                      >
                        <p className="pt-4">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl mb-8">More Resources</h2>
            <div className="space-y-6">
              {[
                { icon: Map, title: "City Guides", desc: "Neighborhoods, cost of living, and local amenities.", link: "/blog", linkText: "Read Guides" },
                { icon: FileText, title: "Visa Requirements", desc: "Breakdowns of visa types and requirements.", link: "/visa-guide", linkText: "Learn More" },
                { icon: BookOpen, title: "Expat Community", desc: "Connect with professionals who have made the move.", link: "/success-stories", linkText: "Join Network" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl flex items-start gap-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.desc}</p>
                    <Link to={item.link} className="text-primary font-bold text-sm uppercase tracking-wider hover:underline inline-flex items-center gap-1">
                      {item.linkText} <span className="text-lg">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};"""

pattern = re.compile(r'const Relocation = \(\) => \((.*?)\);', re.DOTALL)
new_content = re.sub(pattern, replacement + "\n\n", content)

with open('src/App.tsx', 'w') as f:
    f.write(new_content)
