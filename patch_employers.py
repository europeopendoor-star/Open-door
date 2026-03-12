import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

replacement = """const Employers = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Hire Global Talent"
        subtitle="Access a curated pool of pre-vetted international professionals"
        bgImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000"
      />
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gray-100">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="new" className="mb-4">Why OpenDoor</Badge>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Scale your team without the growing pains</h2>
          <p className="text-gray-600 text-lg">We bridge the gap between Europe's tech shortage and Africa's emerging talent pool, handling everything from sourcing to relocation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: Users,
              title: "Pre-vetted Candidates",
              desc: "Every candidate passes a rigorous 4-step screening process covering technical skills, cultural fit, and English proficiency."
            },
            {
              icon: FileText,
              title: "End-to-End Visa Support",
              desc: "Our legal experts handle the entire visa and relocation process, ensuring a smooth transition with 98% approval rates."
            },
            {
              icon: CheckCircle2,
              title: "90-Day Guarantee",
              desc: "We stand by our placements. If a hire doesn't work out within the first 90 days, we'll find a replacement at zero cost."
            }
          ].map((feature, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
              className="bg-white p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-20 h-20 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <feature.icon className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gray-100">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="font-display text-4xl md:text-5xl mb-6">Tap into a thriving tech ecosystem</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              East Africa is home to some of the fastest-growing tech hubs globally. Our candidates bring diverse perspectives, strong technical foundations, and an unmatched drive to succeed in European markets.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-4 border-accent-lime pl-4">
                <p className="text-4xl font-display text-primary mb-2">50k+</p>
                <p className="text-gray-500 font-bold text-sm uppercase">Active Tech Talents</p>
              </div>
              <div className="border-l-4 border-accent-lime pl-4">
                <p className="text-4xl font-display text-primary mb-2">95%</p>
                <p className="text-gray-500 font-bold text-sm uppercase">Retention Rate</p>
              </div>
              <div className="border-l-4 border-accent-lime pl-4">
                <p className="text-4xl font-display text-primary mb-2">4-6</p>
                <p className="text-gray-500 font-bold text-sm uppercase">Weeks to Hire</p>
              </div>
              <div className="border-l-4 border-accent-lime pl-4">
                <p className="text-4xl font-display text-primary mb-2">GMT+3</p>
                <p className="text-gray-500 font-bold text-sm uppercase">Timezone Alignment</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
             <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -m-6 -z-10 transform -rotate-3"></div>
             <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" alt="Tech hub" className="rounded-[2.5rem] shadow-2xl object-cover h-[500px] w-full" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-lime/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl mb-6">Ready to expand your team?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Join hundreds of European companies hiring top international talent through OpenDoor.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-accent-lime text-primary px-10 py-4 rounded-full font-bold hover:bg-white transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                Schedule a Demo
              </Link>
              <Link to="/post-job" className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-colors backdrop-blur-sm">
                Post a Job
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};"""

pattern = re.compile(r'const Employers = \(\) => \((.*?)\);', re.DOTALL)
new_content = re.sub(pattern, replacement + "\n\n", content)

with open('src/App.tsx', 'w') as f:
    f.write(new_content)
