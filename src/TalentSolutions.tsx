import PageHeader from './components/PageHeader';
import { Link } from 'react-router-dom';
import { Globe, Briefcase, Users, CheckCircle2, Building } from 'lucide-react';

const TalentSolutions = () => (
  <div className="min-h-screen bg-white">
    <PageHeader
      title="Talent Solutions"
      subtitle="Strategic hiring for the modern enterprise"
      bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
    />
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h2 className="font-display text-4xl mb-8">Comprehensive Global Hiring</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We don't just send you CVs. We build your remote engineering hubs, handle employer-of-record services, and ensure compliance across 50+ jurisdictions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        <div className="bg-gray-50 p-10 rounded-[2.5rem] hover:bg-primary hover:text-white transition-all duration-300 group">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
            <Globe className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-bold text-2xl mb-4">Employer of Record</h3>
          <p className="text-gray-600 group-hover:text-white/80 leading-relaxed">
            Hire talent in countries where you don't have a legal entity. We handle payroll, taxes, and benefits.
          </p>
        </div>
        <div className="bg-gray-50 p-10 rounded-[2.5rem] hover:bg-primary hover:text-white transition-all duration-300 group">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-bold text-2xl mb-4">Contractor Management</h3>
          <p className="text-gray-600 group-hover:text-white/80 leading-relaxed">
            Compliant contracts and payments for your international freelancers and contractors.
          </p>
        </div>
        <div className="bg-gray-50 p-10 rounded-[2.5rem] hover:bg-primary hover:text-white transition-all duration-300 group">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-bold text-2xl mb-4">Recruitment Process Outsourcing</h3>
          <p className="text-gray-600 group-hover:text-white/80 leading-relaxed">
             End-to-end management of your recruitment funnel, from sourcing to onboarding.
          </p>
        </div>
      </div>

      <div className="bg-primary text-white rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl mb-6">Build your remote hub</h2>
          <p className="text-white/80 text-lg mb-8">
            Looking to hire 10+ engineers? We can set up a dedicated remote development center for you in a cost-effective location.
          </p>
          <ul className="space-y-4 mb-8">
             <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="w-5 h-5 text-accent-lime" /> Office space procurement</li>
             <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="w-5 h-5 text-accent-lime" /> Equipment & IT setup</li>
             <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="w-5 h-5 text-accent-lime" /> Local HR & Operations manager</li>
          </ul>
          <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-block">
            Talk to an Expert
          </Link>
        </div>
        <div className="w-full md:w-1/3">
           <div className="aspect-square bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
             <Building className="w-32 h-32 text-white/80" />
           </div>
        </div>
      </div>
    </section>
  </div>
);

export default TalentSolutions;
