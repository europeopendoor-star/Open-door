import PageHeader from './components/PageHeader';
import { Shield, FileCheck, Info, CheckCircle2 } from 'lucide-react';

const VisaGuide = () => (
  <div className="min-h-screen bg-white">
    <PageHeader
      title="Visa & Immigration Guide"
      subtitle="Simplifying your path to working in Europe"
      bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000"
    />
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
        <div>
          <h2 className="font-display text-4xl mb-6">Navigating the bureaucracy</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Europe offers incredible opportunities, but the visa process can be daunting. We break it down into manageable steps and provide direct support for the most common work permits.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Legal Compliance</h3>
                <p className="text-gray-600 text-sm">We ensure all applications meet the strict legal requirements of each country.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Document Verification</h3>
                <p className="text-gray-600 text-sm">Our team reviews your documents before submission to prevent delays.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
          <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
            <Info className="w-5 h-5 text-primary" /> Key Requirements
          </h3>
          <ul className="space-y-4">
            {[
              "Valid passport with at least 6 months validity",
              "Job offer contract from a European employer",
              "Proof of professional qualifications (degrees/certs)",
              "Health insurance coverage",
              "Proof of accommodation"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                <CheckCircle2 className="w-4 h-4 text-accent-lime" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="font-display text-3xl mb-12 text-center">Common Visa Types</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          {
            title: "EU Blue Card",
            desc: "For highly skilled non-EU citizens. Allows you to work in most EU countries.",
            features: ["Fast-track processing", "Family reunification", "Path to permanent residence"]
          },
          {
            title: "Tech Visa / Startup Visa",
            desc: "Specific to tech talent and entrepreneurs. Available in countries like France, Portugal, and Estonia.",
            features: ["Lower salary thresholds", "Simplified procedure", "Valid for 3-5 years"]
          },
          {
            title: "Digital Nomad Visa",
            desc: "For remote workers employed by companies outside the country of residence.",
            features: ["Work from anywhere", "Tax benefits in some regions", "Renewable annually"]
          }
        ].map((visa, i) => (
          <div key={i} className="border border-gray-200 p-8 rounded-2xl hover:border-primary transition-colors">
            <h3 className="font-bold text-xl text-primary mb-4">{visa.title}</h3>
            <p className="text-gray-600 text-sm mb-6 h-20">{visa.desc}</p>
            <ul className="space-y-3">
              {visa.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 bg-accent-lime rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default VisaGuide;
