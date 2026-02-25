import PageHeader from './components/PageHeader';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => (
  <div className="min-h-screen bg-white">
    <PageHeader
      title="Simple, Transparent Pricing"
      subtitle="Invest in your team's future with confidence"
      bgImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000"
    />
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Startup",
            price: "15%",
            desc: "of first year base salary",
            features: ["No upfront fees", "90-day guarantee", "Standard visa support", "Dedicated account manager"],
            cta: "Get Started",
            link: "/post-job",
            highlight: false
          },
          {
            title: "Growth",
            price: "20%",
            desc: "of first year base salary",
            features: ["Premium candidate sourcing", "Full relocation concierge", "Spouse visa support", "180-day guarantee", "Custom onboarding plan"],
            cta: "Most Popular",
            link: "/post-job",
            highlight: true
          },
          {
            title: "Enterprise",
            price: "Custom",
            desc: "volume-based pricing",
            features: ["Employer of Record setup", "Remote hub creation", "Dedicated recruitment team", "Unlimited placements", "Executive search"],
            cta: "Contact Sales",
            link: "/contact",
            highlight: false
          }
        ].map((tier, i) => (
          <div key={i} className={`rounded-[2.5rem] p-10 flex flex-col ${tier.highlight ? 'bg-primary text-white shadow-2xl scale-105 z-10' : 'bg-gray-50 text-primary'}`}>
            <h3 className="font-bold text-2xl mb-4">{tier.title}</h3>
            <div className="mb-6">
              <span className="font-display text-5xl md:text-6xl">{tier.price}</span>
              <p className={`text-sm mt-2 ${tier.highlight ? 'text-white/60' : 'text-gray-500'}`}>{tier.desc}</p>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              {tier.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-3 font-medium text-sm">
                  <CheckCircle2 className={`w-5 h-5 ${tier.highlight ? 'text-accent-lime' : 'text-primary'}`} />
                  {feature}
                </li>
              ))}
            </ul>
            <Link to={tier.link} className={`w-full py-4 rounded-xl font-bold transition-colors text-center block ${tier.highlight ? 'bg-accent-lime text-primary hover:bg-white' : 'bg-primary text-white hover:bg-primary/90'}`}>
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center max-w-3xl mx-auto">
        <h3 className="font-bold text-2xl mb-4">Frequently Asked Questions</h3>
        <div className="space-y-6 text-left mt-12">
           <div className="border-b border-gray-200 pb-6">
             <h4 className="font-bold text-lg mb-2">When do I pay?</h4>
             <p className="text-gray-600">For our Startup and Growth plans, implementation is strictly contingency-based. You only pay once your new hire starts their first day.</p>
           </div>
           <div className="border-b border-gray-200 pb-6">
             <h4 className="font-bold text-lg mb-2">What if the candidate leaves?</h4>
             <p className="text-gray-600">We offer a guarantee period (90-180 days depending on the plan). If the candidate leaves or is let go within this period, we replace them for free.</p>
           </div>
        </div>
      </div>
    </section>
  </div>
);

export default Pricing;
