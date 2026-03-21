import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { 
  Users, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Download, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Calendar,
  Building2,
  Mail
} from 'lucide-react';

const candidates = [
  {
    id: 1,
    name: "Carlos Rivera",
    role: "Senior Android Engineer",
    origin: "Brazil",
    visaType: "EU Blue Card",
    status: "Approved",
    progress: 100,
    eta: "Relocated",
    lastUpdate: "2 days ago",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Aisha Hassan",
    role: "Product Designer",
    origin: "Kenya",
    visaType: "Sweden Work Permit",
    status: "In Progress",
    progress: 65,
    eta: "April 15, 2024",
    lastUpdate: "3 hours ago",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "David Chen",
    role: "Backend Lead",
    origin: "China",
    visaType: "Highly Skilled Migrant",
    status: "Document Review",
    progress: 30,
    eta: "May 20, 2024",
    lastUpdate: "1 day ago",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    name: "Elena Petrova",
    role: "Data Scientist",
    origin: "Russia",
    visaType: "EU Blue Card",
    status: "Appointment Set",
    progress: 45,
    eta: "May 5, 2024",
    lastUpdate: "5 hours ago",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
  }
];

const EmployerVisaTracker = () => {
  return (
    <div className="bg-white dark:bg-primary/5 rounded-[2rem] border border-gray-100 dark:border-white/10 shadow-xl overflow-hidden">
      <div className="p-8 border-b border-gray-100 dark:border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-gray-50/50 dark:bg-white/5">
        <div>
          <h3 className="text-xl font-bold text-primary dark:text-white mb-1">Active Sponsorships</h3>
          <p className="text-sm text-gray-500">Track the real-time status of your international hires.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search talent..." 
              className="w-full bg-white dark:bg-primary border border-gray-200 dark:border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <button className="p-2 bg-white dark:bg-primary border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5 text-gray-500" />
          </button>
          <button className="bg-primary text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg hover:bg-primary/90 transition-all flex items-center gap-2">
             <Download className="w-4 h-4" /> Export Report
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50/50 dark:bg-white/5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em]">
              <th className="px-8 py-4">Talent</th>
              <th className="px-6 py-4">Visa Type</th>
              <th className="px-6 py-4">Status & Progress</th>
              <th className="px-6 py-4">Estimated Arrival</th>
              <th className="px-6 py-4">Last Update</th>
              <th className="px-8 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-white/5">
            {candidates.map((person) => (
              <tr key={person.id} className="group hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <img src={person.img} alt={person.name} className="w-12 h-12 rounded-2xl object-cover shadow-sm" />
                    <div>
                      <h4 className="font-bold text-primary dark:text-white text-sm">{person.name}</h4>
                      <p className="text-xs text-gray-500">{person.role} • {person.origin}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-6 text-sm text-gray-700 dark:text-gray-300 font-medium">
                  {person.visaType}
                </td>
                <td className="px-6 py-6">
                  <div className="flex items-center gap-2 mb-2">
                    {person.status === 'Approved' ? (
                      <CheckCircle2 className="w-4 h-4 text-accent-lime" />
                    ) : person.status === 'In Progress' ? (
                      <Clock className="w-4 h-4 text-accent-gold" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-blue-400" />
                    )}
                    <span className="text-xs font-bold uppercase tracking-wider">{person.status}</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ${
                        person.status === 'Approved' ? 'bg-accent-lime' : person.status === 'In Progress' ? 'bg-accent-gold' : 'bg-blue-400'
                      }`}
                      style={{ width: `${person.progress}%` }}
                    />
                  </div>
                </td>
                <td className="px-6 py-6 text-sm font-bold text-primary dark:text-white">
                  {person.eta}
                </td>
                <td className="px-6 py-6 text-xs text-gray-400">
                  {person.lastUpdate}
                </td>
                <td className="px-8 py-6 text-right">
                  <button className="p-2 hover:bg-white dark:hover:bg-primary rounded-lg transition-colors text-gray-400 hover:text-primary">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const EmployerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50/30">
      <PageHeader 
        title="Employer Console"
        subtitle="Manage your global talent pipeline with ease"
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Active Hires', value: '12', icon: Users, color: 'text-blue-500' },
            { label: 'Pending Visas', value: '5', icon: Clock, color: 'text-accent-gold' },
            { label: 'Recently Arrived', value: '3', icon: CheckCircle2, color: 'text-accent-lime' },
            { label: 'Interview Requests', value: '28', icon: Mail, color: 'text-primary' }
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-primary/5 p-6 rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm flex items-center gap-6">
              <div className={`w-14 h-14 rounded-2xl bg-white dark:bg-primary shadow-sm flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-3xl font-display text-primary dark:text-white">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <EmployerVisaTracker />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
           <div className="bg-white dark:bg-primary/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/10 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <Building2 className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Company Policy</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Your relocation support package is currently set to <span className="text-primary font-bold">"Full Premium"</span> for all senior roles. This includes flight reimbursement, 1-month temporary housing, and a 100% visa success guarantee.
              </p>
              <button className="text-primary font-bold text-xs uppercase tracking-widest border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity">
                Edit Policy
              </button>
           </div>

           <div className="bg-primary text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-white/10 transition-colors"></div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <Calendar className="w-8 h-8 text-accent-lime mb-6" />
                  <h3 className="text-2xl font-display mb-4">Relocation Webinar</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-8">
                    Learn about the 2024 changes to the EU Blue Card and Swedish Work Permit systems. Host: OpenDoor Legal Team.
                  </p>
                </div>
                <button className="bg-white text-primary px-8 py-3 rounded-xl font-bold text-sm w-fit hover:bg-accent-lime transition-all">
                  RSVP Now
                </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
export { EmployerVisaTracker };
