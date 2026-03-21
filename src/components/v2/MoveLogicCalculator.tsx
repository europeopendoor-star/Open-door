import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  Wallet, 
  Home, 
  Zap, 
  Info, 
  ArrowRight, 
  ChevronRight,
  Euro,
  Globe
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';

interface ComparisonData {
  label: string;
  current: number;
  europe: number;
  color: string;
}

const MoveLogicCalculator = () => {
  const [currentSalary, setCurrentSalary] = useState(60000);
  const [targetSalary, setTargetSalary] = useState(85000);
  const [lifestyle, setLifestyle] = useState('moderate'); // simple, moderate, premium

  const calculations = useMemo(() => {
    // Simplified tax and cost of living logic for demonstration
    const currentTaxRate = 0.30;
    const europeTaxRate = 0.35; // Blue Card average
    
    const currentRent = lifestyle === 'simple' ? 1200 : lifestyle === 'moderate' ? 2000 : 3500;
    const europeRent = lifestyle === 'simple' ? 1000 : lifestyle === 'moderate' ? 1600 : 2800; // Average across Berlin/AMS
    
    const currentMonthly = (currentSalary * (1 - currentTaxRate)) / 12;
    const europeMonthly = (targetSalary * (1 - europeTaxRate)) / 12;
    
    const currentSavings = currentMonthly - currentRent - 800; // 800 for groceries/misc
    const europeSavings = europeMonthly - europeRent - 700; // 700 for groceries/misc (Europe often has better public services)

    const data: ComparisonData[] = [
      { label: 'Net Monthly', current: Math.round(currentMonthly), europe: Math.round(europeMonthly), color: '#3B82F6' },
      { label: 'Living Costs', current: Math.round(currentRent + 800), europe: Math.round(europeRent + 700), color: '#EF4444' },
      { label: 'Potential Savings', current: Math.round(currentSavings), europe: Math.round(europeSavings), color: '#10B981' },
    ];

    return {
      data,
      yearlySavingsDiff: Math.round((europeSavings - currentSavings) * 12),
      percentIncrease: Math.round(((europeSavings - currentSavings) / Math.abs(currentSavings || 1)) * 100)
    };
  }, [currentSalary, targetSalary, lifestyle]);

  return (
    <div className="bg-white dark:bg-primary/5 rounded-[3rem] border border-gray-100 dark:border-white/10 overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Input Panel */}
        <div className="lg:col-span-5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-white/10 bg-gray-50/50 dark:bg-white/5">
          <div className="flex items-center gap-2 text-accent-lime font-bold text-xs uppercase tracking-widest mb-8">
            <Zap className="w-4 h-4" /> MoveLogic ROI Engine
          </div>
          
          <h2 className="text-3xl font-display text-primary dark:text-white mb-8">
            Analyze your <br/> <span className="text-gray-400">financial migration.</span>
          </h2>

          <div className="space-y-10">
            {/* Current Salary Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-tight">Current Gross Salary (USD/EUR)</label>
                <span className="text-2xl font-display text-primary dark:text-white">${currentSalary.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="20000" 
                max="250000" 
                step="5000"
                value={currentSalary}
                onChange={(e) => setCurrentSalary(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary dark:accent-accent-lime"
              />
            </div>

            {/* Target Salary Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-tight">Estimated European Offer</label>
                <span className="text-2xl font-display text-accent-lime">€{targetSalary.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="30000" 
                max="200000" 
                step="5000"
                value={targetSalary}
                onChange={(e) => setTargetSalary(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent-lime"
              />
            </div>

            {/* Lifestyle Toggle */}
            <div className="space-y-4">
              <label className="text-sm font-bold text-gray-500 uppercase tracking-tight">Expected Lifestyle</label>
              <div className="grid grid-cols-3 gap-2 bg-white dark:bg-primary/20 p-1.5 rounded-2xl border border-gray-200 dark:border-white/10">
                {['simple', 'moderate', 'premium'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setLifestyle(level)}
                    className={`py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                      lifestyle === level 
                        ? 'bg-primary dark:bg-white text-white dark:text-primary shadow-lg' 
                        : 'text-gray-400 hover:text-gray-600 dark:hover:text-white'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-accent-lime/10 rounded-3xl border border-accent-lime/20">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-accent-lime rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-primary/70 font-medium leading-relaxed">
                  A move to Europe could increase your yearly savings potential by <span className="font-bold text-primary">€{calculations.yearlySavingsDiff.toLocaleString()}</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col">
          <div className="flex justify-between items-start mb-12">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Comparison Forecast</p>
              <h3 className="text-2xl font-display text-primary dark:text-white">Monthly Breakdown</h3>
            </div>
            <div className="bg-gray-50 dark:bg-white/5 px-4 py-2 rounded-full border border-gray-100 dark:border-white/10">
              <span className="text-xs font-bold text-gray-500 flex items-center gap-2">
                <Globe className="w-3 h-3" /> EU Blue Card Estimates
              </span>
            </div>
          </div>

          <div className="h-80 w-full mb-12">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={calculations.data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                <XAxis 
                  dataKey="label" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fontWeight: 600, fill: '#94a3b8' }} 
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-primary dark:bg-white p-4 rounded-2xl shadow-2xl border-none">
                          <p className="text-xs font-bold text-white/50 dark:text-primary/50 uppercase mb-3">{payload[0].payload.label}</p>
                          <div className="space-y-2">
                            <div className="flex justify-between gap-8 items-center text-white dark:text-primary">
                              <span className="text-xs font-medium">Current Destination:</span>
                              <span className="font-bold font-display">${payload[0].value?.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between gap-8 items-center text-accent-lime font-bold">
                              <span className="text-xs">Propelled Outcome:</span>
                              <span className="font-display">€{payload[0].payload.europe?.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="europe" radius={[8, 8, 0, 0]} barSize={40}>
                  {calculations.data.map((entry, index) => (
                    <Cell key={`cell-europe-${index}`} fill={entry.color} fillOpacity={1} />
                  ))}
                </Bar>
                <Bar dataKey="current" radius={[8, 8, 0, 0]} barSize={40}>
                  {calculations.data.map((entry, index) => (
                    <Cell key={`cell-current-${index}`} fill={entry.color} fillOpacity={0.2} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
            <div className="p-6 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 group hover:border-accent-lime transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-2xl bg-white dark:bg-primary shadow-sm flex items-center justify-center text-primary dark:text-white">
                  <Wallet className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-accent-lime uppercase tracking-widest">{calculations.percentIncrease > 0 ? '+' : ''}{calculations.percentIncrease}%</span>
                </div>
              </div>
              <h4 className="text-lg font-bold text-primary dark:text-white mb-1">Savings Impact</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Calculated based on average living expenses in tech hubs like Berlin & Amsterdam.</p>
            </div>

            <div className="p-6 rounded-3xl bg-primary text-white group hover:bg-primary/90 transition-all cursor-pointer">
              <div className="flex justify-between items-center mb-6">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <Euro className="w-6 h-6 text-accent-lime opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-lg font-bold mb-1">View Full Report</h4>
              <p className="text-xs text-white/60 mb-4 leading-relaxed">Get a breakdown of taxes, healthcare, and social contributions for your profile.</p>
              <div className="flex items-center gap-1 text-accent-lime text-[10px] font-bold tracking-widest uppercase">
                Explore pathways <ChevronRight className="w-3 h-3 mt-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoveLogicCalculator;
