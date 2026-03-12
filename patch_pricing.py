import re

with open('src/Pricing.tsx', 'r') as f:
    content = f.read()

replacement = """import { useState } from 'react';
import PageHeader from './components/PageHeader';
import { CheckCircle2, Building, Star, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "When do I pay?",
      a: "For our Startup and Growth plans, implementation is strictly contingency-based. You pay absolutely nothing upfront. The fee is only due after your new hire successfully starts their first day."
    },
    {
      q: "What if the candidate leaves?",
      a: "We stand firmly behind our placements. We offer a solid guarantee period (90-180 days depending on the plan). If the candidate leaves or is let go for any reason within this period, we will source a replacement for free."
    },
    {
      q: "Are there any hidden relocation fees?",
      a: "No. The fee percentage covers our sourcing, vetting, and visa processing services. The actual cost of flights and temporary housing is paid directly by you to the vendors, but we handle all the logistics and booking."
    },
    {
      q: "Can I upgrade from Startup to Growth later?",
      a: "Yes! If you start on the Startup plan but decide you need the full relocation concierge for a specific candidate, you can upgrade that specific placement to the Growth tier before the offer is signed."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <PageHeader
        title="Simple, Transparent Pricing"
        subtitle="Invest in your team's future with confidence"
        bgImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000"
      />
      <section className="py-24 px-6 max-w-7xl mx-auto">

        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-2 rounded-full border border-gray-200 inline-flex items-center shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${!isAnnual ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Standard Hiring
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 ${isAnnual ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Volume / Retained <span className="bg-accent-lime text-primary px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 items-center">
          {[
            {
              title: "Startup",
              icon: Building,
              price: isAnnual ? "12%" : "15%",
              desc: "of first year base salary",
              features: ["No upfront fees", "90-day guarantee", "Standard visa support", "Dedicated account manager"],
              notIncluded: ["Full relocation concierge", "Spouse visa support"],
              cta: "Post a Job",
              link: "/post-job",
              highlight: false
            },
            {
              title: "Growth",
              icon: Star,
              price: isAnnual ? "16%" : "20%",
              desc: "of first year base salary",
              features: ["Premium candidate sourcing", "Full relocation concierge", "Spouse visa support", "180-day guarantee", "Custom onboarding plan"],
              notIncluded: [],
              cta: "Most Popular",
              link: "/post-job",
              highlight: true
            },
            {
              title: "Enterprise",
              icon: Building,
              price: "Custom",
              desc: "volume-based pricing",
              features: ["Employer of Record setup", "Remote hub creation", "Dedicated recruitment team", "Unlimited placements", "Executive search"],
              notIncluded: [],
              cta: "Contact Sales",
              link: "/contact",
              highlight: false
            }
          ].map((tier, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
              className={`rounded-[2.5rem] p-8 lg:p-10 flex flex-col relative transition-all duration-300 ${tier.highlight ? 'bg-primary text-white shadow-2xl md:-translate-y-4 md:scale-105 z-10 border border-primary/50' : 'bg-white text-gray-900 border border-gray-100 hover:border-primary/20 hover:shadow-xl'}`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-lime text-primary font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider shadow-sm">
                  Recommended
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${tier.highlight ? 'bg-white/10 text-accent-lime' : 'bg-primary/5 text-primary'}`}>
                  <tier.icon className="w-6 h-6" />
                </div>
                <h3 className={`font-display text-2xl ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>{tier.title}</h3>
              </div>

              <div className="mb-8 pb-8 border-b border-opacity-20 border-gray-300">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl lg:text-6xl">{tier.price}</span>
                </div>
                <p className={`text-sm mt-2 font-medium ${tier.highlight ? 'text-white/70' : 'text-gray-500'}`}>{tier.desc}</p>
              </div>

              <div className="flex-1 space-y-6 mb-10">
                <p className={`text-sm font-bold uppercase tracking-wider ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>What's included</p>
                <ul className="space-y-4">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.highlight ? 'text-accent-lime' : 'text-primary'}`} />
                      <span className={tier.highlight ? 'text-white/90' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {tier.notIncluded.length > 0 && (
                  <>
                    <p className="text-sm font-bold uppercase tracking-wider text-gray-400 pt-4">Not included</p>
                    <ul className="space-y-4">
                      {tier.notIncluded.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm">
                          <div className="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <Link to={tier.link} className={`w-full py-4 rounded-full font-bold transition-all text-center block ${tier.highlight ? 'bg-accent-lime text-primary hover:bg-white hover:shadow-lg hover:-translate-y-0.5' : 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5'}`}>
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-display text-4xl mb-4 text-gray-900">Frequently Asked Questions</h3>
            <p className="text-gray-600 text-lg">Everything you need to know about our billing and guarantees.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-primary/30 transition-colors shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left"
                >
                  <span className="font-bold text-gray-900 text-lg flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 ${activeFaq === i ? 'text-primary' : 'text-gray-400'}`} />
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeFaq === i ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {activeFaq === i ? '−' : '+'}
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-6 pt-2 text-gray-600 border-t border-gray-100 ml-8"
                    >
                      <p className="leading-relaxed text-lg">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;"""

pattern = re.compile(r'const Pricing = \(\) => \((.*?)\);', re.DOTALL)
new_content = re.sub(pattern, replacement + "\n\n", content)

with open('src/Pricing.tsx', 'w') as f:
    f.write(new_content)
