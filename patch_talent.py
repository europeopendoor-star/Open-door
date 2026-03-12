import re

with open('src/TalentSolutions.tsx', 'r') as f:
    content = f.read()

replacement = """import PageHeader from './components/PageHeader';
import { Link } from 'react-router-dom';
import { Globe, Briefcase, Users, CheckCircle2, Building, ShieldCheck, Zap, LineChart, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from './components/ui/Badge';

const TalentSolutions = () => (
  <div className="min-h-screen bg-white">
    <PageHeader
      title="Talent Solutions"
      subtitle="Strategic hiring for the modern enterprise"
      bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
    />

    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gray-100">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <Badge variant="new" className="mb-4">Enterprise Grade</Badge>
        <h2 className="font-display text-4xl md:text-5xl mb-6">Comprehensive Global Hiring</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We don't just send you CVs. We build your remote engineering hubs, handle employer-of-record services, and ensure compliance across 50+ jurisdictions so you can focus on your product.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-6xl mx-auto">
        {/* Large Feature 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-2 bg-gray-50 p-10 md:p-12 rounded-[2.5rem] border border-gray-100 hover:border-primary/20 transition-colors group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-700"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-3xl mb-4 text-gray-900">Employer of Record (EOR)</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
              Hire talent in countries where you don't have a legal entity. We handle payroll, taxes, and mandatory local benefits compliantly.
            </p>
            <ul className="space-y-3">
              {['100% compliant local contracts', 'Automated global payroll', 'Benefits administration'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-accent-lime" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Small Feature 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="col-span-1 bg-primary text-white p-10 rounded-[2.5rem] relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800')] opacity-10 mix-blend-overlay bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20">
              <Briefcase className="w-8 h-8 text-accent-lime" />
            </div>
            <h3 className="font-bold text-2xl mb-4">Contractor Management</h3>
            <p className="text-white/80 leading-relaxed flex-grow">
              Compliant contracts, milestone tracking, and one-click payments for your international freelancers and contractors.
            </p>
          </div>
        </motion.div>

        {/* Small Feature 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-1 bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:border-primary/20 transition-colors group"
        >
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
            <Users className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-2xl mb-4 text-gray-900">RPO Services</h3>
          <p className="text-gray-600 leading-relaxed">
             End-to-end management of your recruitment funnel, from sourcing to onboarding, acting as your internal talent team.
          </p>
        </motion.div>

        {/* Large Feature 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="col-span-1 md:col-span-2 bg-gray-50 p-10 md:p-12 rounded-[2.5rem] border border-gray-100 hover:border-primary/20 transition-colors group relative overflow-hidden flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="flex-1 relative z-10">
            <div className="inline-flex items-center gap-2 bg-accent-lime/20 text-primary font-bold px-4 py-2 rounded-full text-xs uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" /> Legal & Compliance
            </div>
            <h3 className="font-bold text-3xl mb-4 text-gray-900">Risk-Free Global Operations</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Navigate complex international labor laws with confidence. Our legal team stays ahead of regulatory changes so you don't have to.
            </p>
            <Link to="/contact" className="text-primary font-bold hover:underline inline-flex items-center gap-2">
              Learn about our compliance framework <Zap className="w-4 h-4" />
            </Link>
          </div>
          <div className="w-full md:w-1/3 flex-shrink-0 relative">
             <div className="absolute inset-0 bg-primary/5 rounded-[2rem] transform rotate-6 scale-105"></div>
             <div className="bg-white p-6 rounded-[2rem] shadow-lg relative border border-gray-100 z-10">
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-50">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600"><CheckCircle2 className="w-5 h-5"/></div>
                  <div><p className="text-xs text-gray-400 font-bold uppercase">Status</p><p className="font-bold text-gray-900">Compliant</p></div>
                </div>
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-50">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><FileText className="w-5 h-5"/></div>
                  <div><p className="text-xs text-gray-400 font-bold uppercase">Contracts</p><p className="font-bold text-gray-900">Localized</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600"><LineChart className="w-5 h-5"/></div>
                  <div><p className="text-xs text-gray-400 font-bold uppercase">Taxes</p><p className="font-bold text-gray-900">Automated</p></div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Remote Hub Section */}
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary text-white rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-16 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-lime/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="flex-1 relative z-10">
          <Badge variant="new" className="mb-6 bg-white/10 text-white border border-white/20">Scale Rapidly</Badge>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">Build your remote engineering hub</h2>
          <p className="text-white/80 text-xl mb-10 leading-relaxed font-medium">
            Looking to hire 10+ engineers? We can set up a dedicated, fully-managed remote development center for you in a cost-effective location like Nairobi or Lagos.
          </p>
          <ul className="space-y-5 mb-10">
             <li className="flex items-center gap-4 text-lg font-medium"><div className="w-8 h-8 rounded-full bg-accent-lime/20 flex items-center justify-center flex-shrink-0"><CheckCircle2 className="w-5 h-5 text-accent-lime" /></div> Office space procurement & branding</li>
             <li className="flex items-center gap-4 text-lg font-medium"><div className="w-8 h-8 rounded-full bg-accent-lime/20 flex items-center justify-center flex-shrink-0"><CheckCircle2 className="w-5 h-5 text-accent-lime" /></div> High-end equipment & secure IT setup</li>
             <li className="flex items-center gap-4 text-lg font-medium"><div className="w-8 h-8 rounded-full bg-accent-lime/20 flex items-center justify-center flex-shrink-0"><CheckCircle2 className="w-5 h-5 text-accent-lime" /></div> Dedicated local HR & Operations manager</li>
          </ul>
          <Link to="/contact" className="bg-accent-lime text-primary px-10 py-4 rounded-full font-bold hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2">
            Talk to an Expert <Zap className="w-5 h-5" />
          </Link>
        </div>

        <div className="w-full md:w-1/3 lg:w-2/5 relative z-10">
           <div className="aspect-square bg-white/10 rounded-[3rem] flex items-center justify-center backdrop-blur-md border border-white/20 relative group">
             <div className="absolute inset-0 bg-gradient-to-tr from-accent-lime/20 to-transparent rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             <Building className="w-40 h-40 text-white group-hover:scale-110 transition-transform duration-500" />

             {/* Floating UI Elements */}
             <div className="absolute -left-8 top-20 bg-white text-gray-900 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <Users className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Team Size</p>
                  <p className="font-bold">25 Engineers</p>
                </div>
             </div>

             <div className="absolute -right-8 bottom-20 bg-white text-gray-900 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
                <Zap className="w-6 h-6 text-accent-lime" />
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Velocity</p>
                  <p className="font-bold">+140%</p>
                </div>
             </div>
           </div>
        </div>
      </motion.div>
    </section>
  </div>
);

export default TalentSolutions;"""

with open('src/TalentSolutions.tsx', 'w') as f:
    f.write(replacement)
