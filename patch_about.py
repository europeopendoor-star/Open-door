import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

replacement = """const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Our Mission"
        subtitle="Breaking down borders to connect talent with opportunity"
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Vision Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gray-100">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <Badge variant="new" className="mb-6">Our Story</Badge>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-gray-900">
              We believe talent is global, but opportunity is not.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded in 2020, OpenDoor was born out of the profound frustration of navigating complex, outdated immigration systems and highly fragmented job markets.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We set out to build a platform that does more than just connect brilliant minds with innovative companies—we actively remove the friction of international relocation, turning a stressful months-long ordeal into a streamlined, exciting journey.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative w-full"
          >
             <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -m-4 md:-m-8 z-0 transform rotate-3"></div>
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team meeting" className="rounded-[2.5rem] relative z-10 shadow-2xl object-cover h-[500px] w-full border border-gray-100" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "50+", label: "Countries Supported", icon: Globe },
              { number: "2k+", label: "Successful Placements", icon: Users },
              { number: "300+", label: "Hiring Partners", icon: Building },
              { number: "98%", label: "Visa Success Rate", icon: CheckCircle2 }
            ].map((stat, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i}
                className="text-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                  <stat.icon className="w-6 h-6" />
                </div>
                <p className="font-display text-4xl lg:text-5xl text-gray-900 mb-2">{stat.number}</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <div className="max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">The Team</Badge>
          <h3 className="font-display text-4xl md:text-5xl mb-6 text-gray-900">Our Leadership</h3>
          <p className="text-gray-600 text-lg">Backed by decades of experience in global mobility, recruitment, and tech scaling.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {[
            { name: "Sarah Jenkins", role: "CEO & Founder", desc: "Former VP of Talent at Deliveroo. Passionate about democratizing access to global tech hubs.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
            { name: "David Chen", role: "Head of Operations", desc: "Ex-Uber mobility lead. Built scaling operations across 3 continents.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
            { name: "Amira Hassan", role: "VP of Partnerships", desc: "10+ years driving strategic B2B recruitment partnerships across Europe.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" }
          ].map((person, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
              className="group"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-accent-lime rounded-full scale-0 group-hover:scale-105 transition-transform duration-500 ease-out z-0"></div>
                <img src={person.img} alt={person.name} className="w-48 h-48 rounded-full object-cover relative z-10 border-4 border-white shadow-xl" referrerPolicy="no-referrer" />
              </div>
              <h4 className="font-bold text-2xl mb-2 text-gray-900">{person.name}</h4>
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-4">{person.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{person.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-primary text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl mb-6">Join our mission</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Whether you're looking to hire top international talent, or you are a professional ready for your next big move—OpenDoor is here to guide you.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                Contact Us
              </Link>
              <Link to="/jobs" className="bg-primary/50 border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-colors backdrop-blur-sm">
                View Open Roles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};"""

pattern = re.compile(r'const AboutUs = \(\) => \((.*?)\);', re.DOTALL)
new_content = re.sub(pattern, replacement + "\n\n", content)

with open('src/App.tsx', 'w') as f:
    f.write(new_content)
