import { motion } from 'motion/react';
import { 
  UserCheck, 
  FileText, 
  Plane, 
  Home, 
  CheckCircle2, 
  Clock,
  ChevronRight
} from 'lucide-react';

const steps = [
  {
    id: 'profile',
    title: 'Profile Optimization',
    desc: 'Aligning your CV with European standards.',
    status: 'completed',
    icon: <UserCheck className="w-5 h-5" />,
    color: 'bg-accent-lime'
  },
  {
    id: 'matching',
    title: 'Direct Matching',
    desc: 'Connecting with hiring managers at partner companies.',
    status: 'completed',
    icon: <CheckCircle2 className="w-5 h-5" />,
    color: 'bg-accent-lime'
  },
  {
    id: 'sponsorship',
    title: 'Visa Sponsorship',
    desc: 'Legal paperwork and consulate appointments.',
    status: 'active',
    icon: <FileText className="w-5 h-5" />,
    color: 'bg-accent-gold'
  },
  {
    id: 'relocation',
    title: 'Logistics & Flight',
    desc: 'Flight booking, housing, and city orientation.',
    status: 'pending',
    icon: <Plane className="w-5 h-5" />,
    color: 'bg-gray-200'
  },
  {
    id: 'settling',
    title: 'New Chapter',
    desc: 'Bank setup, tax registration, and local community.',
    status: 'pending',
    icon: <Home className="w-5 h-5" />,
    color: 'bg-gray-200'
  }
];

const RelocationPulse = () => {
  return (
    <div className="py-16 px-8 bg-gray-50/50 dark:bg-white/5 rounded-[3rem] border border-gray-100 dark:border-white/10 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 text-accent-gold text-[10px] font-bold uppercase tracking-wider mb-6 border border-accent-gold/20">
              <Clock className="w-3 h-3" /> Live Journey Status
            </div>
            <h2 className="text-4xl font-display text-primary dark:text-white mb-6">
              Your OpenDoor <br/> <span className="text-gray-400">Relocation Pulse.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We track every legal milestone and logistics step in real-time. You're currently in the <span className="text-primary dark:text-white font-bold underline decoration-accent-gold underline-offset-4">Visa Sponsorship</span> phase.
            </p>
          </div>
          <button className="bg-white dark:bg-primary px-8 py-4 rounded-full shadow-lg border border-gray-100 dark:border-white/10 text-sm font-bold flex items-center gap-2 group hover:shadow-xl transition-all">
            Full Journey Details <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Metro-style Journey Line */}
        <div className="relative pt-12 pb-24">
          {/* Main Track Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-white/10 -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connection Line (Vertical for Mobile) */}
                <div className="absolute left-1/2 top-full w-0.5 h-12 bg-gray-100 md:hidden last:hidden"></div>
                
                {/* Node */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center relative z-20 transition-all duration-500 mb-8 border-4 ${
                  step.status === 'completed' 
                    ? 'bg-accent-lime text-primary border-white dark:border-primary shadow-lg shadow-accent-lime/20' 
                    : step.status === 'active'
                    ? 'bg-white dark:bg-primary text-accent-gold border-accent-gold shadow-xl animate-pulse cursor-pointer'
                    : 'bg-gray-50 dark:bg-surface-dark text-gray-300 border-gray-100 dark:border-white/5'
                }`}>
                  {step.status === 'completed' ? <CheckCircle2 className="w-8 h-8" /> : step.icon}
                  
                  {/* Tooltip for Active State */}
                  {step.status === 'active' && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap">
                      YOU ARE HERE
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-primary"></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="px-4">
                  <h3 className={`font-bold text-lg mb-2 transition-colors ${
                    step.status === 'pending' ? 'text-gray-400 font-medium' : 'text-primary dark:text-white'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[160px] mx-auto">
                    {step.desc}
                  </p>
                </div>

                {/* Progress Filling (Visual Flourish) */}
                {i < steps.length - 1 && (
                  <div className={`absolute top-1/2 left-[calc(50%+32px)] w-[calc(100%-64px)] h-1 hidden md:block -translate-y-[28px] ${
                    steps[i+1].status !== 'pending' ? 'bg-accent-lime' : 'bg-transparent'
                  }`}></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats / Action Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: 'Time Since Approval', value: '14 Days' },
            { label: 'Avg. Completion Time', value: '45 Days' },
            { label: 'Next Call', value: 'Tomorrow, 10:00' }
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-primary/40 p-6 rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm flex flex-col gap-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</span>
              <span className="text-xl font-display text-primary dark:text-white">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelocationPulse;
