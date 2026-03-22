import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from './components/PageHeader';
import { Shield, FileCheck, Info, CheckCircle2, FileText, Globe, Plane, Users, CheckSquare } from 'lucide-react';
import { Badge } from './components/ui/Badge';
const VisaGuide = () => {

  const [activeTab, setActiveTab] = useState(0);

  const visaTypes = [
    {
      id: "eu-blue-card",
      title: "EU Blue Card",
      icon: <Globe className="w-5 h-5" />,
      desc: "For highly skilled non-EU citizens. Allows you to work and live in most EU countries.",
      features: ["Fast-track processing", "Family reunification", "Path to permanent residence"],
      requirements: [
        "University degree or equivalent qualification",
        "Binding job offer or work contract for at least 1 year",
        "Salary meeting the minimum threshold for the specific country",
        "Health insurance coverage"
      ]
    },
    {
      id: "tech-visa",
      title: "Tech / Startup Visa",
      icon: <Plane className="w-5 h-5" />,
      desc: "Specific to tech talent and entrepreneurs. Available in countries like France, Portugal, and Estonia.",
      features: ["Lower salary thresholds", "Simplified procedure", "Valid for 3-5 years"],
      requirements: [
        "Job offer from a certified tech company or startup",
        "Relevant technical skills and experience",
        "Proof of sufficient funds (varies by country)"
      ]
    },
    {
      id: "digital-nomad",
      title: "Digital Nomad Visa",
      icon: <Users className="w-5 h-5" />,
      desc: "For remote workers employed by companies outside the country of residence.",
      features: ["Work from anywhere", "Tax benefits in some regions", "Renewable annually"],
      requirements: [
        "Proof of remote employment outside the host country",
        "Minimum monthly income requirement (varies significantly)",
        "Clean criminal record"
      ]
    }
  ];

  const steps = [
    {
      title: "Document Collection",
      desc: "Gather all necessary paperwork including your passport, degree certificates, and health insurance.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Employer Sponsorship",
      desc: "Your future employer initiates the process by providing the employment contract and sponsorship letter.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Application Submission",
      desc: "Submit your application to the embassy or consulate in your home country.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Visa Approval & Travel",
      desc: "Receive your entry visa, book your flights, and travel to your new home.",
      icon: <Plane className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Visa & Relocation Guide - OpenDoor Europe</title>
        <meta name="description" content="Comprehensive visa and relocation guide for non-EU professionals moving to Europe." />
      </Helmet>
      <div className="min-h-screen bg-white">
      <PageHeader
        title="Visa & Immigration Guide"
        subtitle="Simplifying your path to working in Europe"
        bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Introduction Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="new" className="mb-4">Expert Guidance</Badge>
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-gray-900">Navigating the bureaucracy</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Europe offers incredible opportunities, but the visa process can be daunting. We break it down into manageable steps and provide direct support for the most common work permits, ensuring a smooth transition for you and your family.
            </p>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Shield className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">Legal Compliance</h3>
                  <p className="text-gray-600">We ensure all applications meet the strict legal requirements of each specific EU country.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-accent-lime/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                  <FileCheck className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">Document Verification</h3>
                  <p className="text-gray-600">Our team meticulously reviews your documents before submission to prevent delays or rejections.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h3 className="font-display text-2xl mb-8 flex items-center gap-3 text-gray-900">
                <CheckSquare className="w-8 h-8 text-primary" /> General Checklist
              </h3>
              <ul className="space-y-6">
                {[
                  "Valid passport with at least 6 months validity",
                  "Job offer contract from a European employer",
                  "Proof of professional qualifications (degrees/certs)",
                  "Health insurance coverage",
                  "Proof of accommodation"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-700 font-medium">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-accent-lime/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-4 bg-primary/5 rounded-2xl border border-primary/10 flex gap-4 items-start">
                <Info className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-sm text-gray-600">Requirements vary significantly by country. Our experts will provide a tailored checklist for your specific destination.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-gray-50/50">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">The Process</Badge>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Step-by-Step Journey</h2>
          <p className="text-gray-600 text-lg">A clear roadmap from your home country to your new desk in Europe.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
              className="relative group"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200 -z-10 group-hover:bg-primary/30 transition-colors"></div>
              )}
              <div className="bg-white w-24 h-24 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center mx-auto mb-8 relative z-10 group-hover:-translate-y-2 transition-transform duration-300 group-hover:shadow-md group-hover:border-primary/20">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm">
                  {i + 1}
                </div>
                <div className="text-gray-400 group-hover:text-primary transition-colors">
                  {step.icon}
                </div>
              </div>
              <div className="text-center px-4">
                <h3 className="font-bold text-xl mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Visa Types Tabs */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Common Visa Types</h2>
          <p className="text-gray-600 text-lg">Explore the most frequent pathways our candidates take.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden">
          <div className="flex flex-col sm:flex-row border-b border-gray-100 bg-gray-50/50">
            {visaTypes.map((visa, index) => (
              <button
                key={visa.id}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-6 px-6 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors ${
                  activeTab === index
                    ? 'text-primary bg-white shadow-[0_-2px_0_0_currentColor_inset]'
                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                {visa.icon} {visa.title}
              </button>
            ))}
          </div>

          <div className="p-8 md:p-12 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-10 text-center">
                  <h3 className="font-display text-3xl mb-4 text-primary">{visaTypes[activeTab].title}</h3>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">{visaTypes[activeTab].desc}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="font-bold text-lg mb-6 flex items-center gap-2 text-gray-900 border-b pb-2">
                      <Shield className="w-5 h-5 text-accent-lime" /> Benefits
                    </h4>
                    <ul className="space-y-4">
                      {visaTypes[activeTab].features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-6 flex items-center gap-2 text-gray-900 border-b pb-2">
                      <FileCheck className="w-5 h-5 text-accent-lime" /> Specific Requirements
                    </h4>
                    <ul className="space-y-4">
                      {visaTypes[activeTab].requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default VisaGuide;
