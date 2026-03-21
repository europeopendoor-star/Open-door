'use client'

import { Activity, ArrowRight, Files, Flower, GalleryVerticalEnd, MapPin } from 'lucide-react'
import DottedMap from 'dotted-map'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts'
import { Card } from '@/components/ui/card'
import * as React from "react"
import { cn } from "@/lib/utils"

export default function CombinedFeaturedSection() {
  const featuredCasestudy = {
    logo: '/opendoor_dark.png',
    company: 'OpenDoor',
    tags: 'Success Story',
    title: 'How we helped 500+ engineers',
    subtitle: 'relocate to Berlin, Amsterdam, and Stockholm with full visa sponsorship and housing support.',
  }

  return (
    <section className="py-24 bg-white dark:bg-primary">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2">

        {/* 1. MAP - Top Left */}
        <div className="relative rounded-none overflow-hidden bg-gray-50 dark:bg-surface-dark border border-gray-100 dark:border-white/10 p-8 min-h-[400px] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-semibold tracking-wider uppercase">
              <MapPin className="w-4 h-4 text-accent-lime" />
              Global Talent Flow
            </div>
            <h3 className="text-3xl font-display text-primary dark:text-white mb-4">
              Connecting worldwide talent to European hubs.{" "}
              <span className="text-gray-400">Real-time visa applications and relocation tracking across the globe.</span>
            </h3>
          </div>

          <div className="relative mt-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 px-4 py-2 bg-primary dark:bg-white text-white dark:text-primary rounded-full text-xs font-bold shadow-xl flex items-center gap-2">
              🌍 Active relocation from Brazil
            </div>
            <Map />
          </div>
        </div>

        {/* ✅ 2. FEATURED CASE STUDY BLOCK - Top Right */}
        <div className="flex flex-col justify-between gap-8 p-8 rounded-none border border-gray-100 dark:border-white/10 bg-white dark:bg-primary border-l-0">
          <div>
            <span className="text-xs flex items-center gap-2 text-gray-400 font-bold tracking-widest uppercase mb-6">
              <GalleryVerticalEnd className="w-4 h-4 text-accent-gold" /> {featuredCasestudy.tags}
            </span>
            <h3 className="text-3xl font-display text-primary dark:text-white mb-4 leading-tight">
              {featuredCasestudy.title}{" "}
              <span className="text-gray-400">{featuredCasestudy.subtitle}</span>
            </h3>
          </div>
          <div className="flex justify-center items-center w-full bg-gray-50 dark:bg-surface-dark rounded-3xl p-8 border border-gray-100 dark:border-white/5">
            <OpenDoorFeaturedMessageCard />
          </div>
        </div>

        {/* 3. CHART - Bottom Left */}
        <div className="rounded-none border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-surface-dark p-8 space-y-6 border-t-0">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-semibold tracking-wider uppercase">
            <Activity className="w-4 h-4 text-accent-coral" />
            Market Insights
          </div>
          <h3 className="text-3xl font-display text-primary dark:text-white mb-4">
            Relocation trends for 2024.{" "}
            <span className="text-gray-400">Monthly growth in successful placements across European tech sectors.</span>
          </h3>
          <div className="h-64 mt-8">
            <MonitoringChart />
          </div>
        </div>

        {/* ✅ 4. ALL FEATURE CARDS - Bottom Right */}
        <div className="grid sm:grid-cols-2 rounded-none bg-white dark:bg-primary border-t-0">
          <FeatureCard
            icon={<Files className="w-4 h-4 text-accent-lime" />}
            image="/relocation-guide.png"
            title="Relocation Guides"
            subtitle="Expert knowledge."
            description="Deep dives into taxes, healthcare, and culture for every major city."
          />
          <FeatureCard
            icon={<Flower className="w-4 h-4 text-accent-gold" />}
            image="/visa-support.png"
            title="Visa Assistance"
            subtitle="Paperwork handled."
            description="Our legal experts manage the entire sponsorship process for you."
          />
        </div>
      </div>
    </section>
  )
}

// ----------------- Feature Card Component -------------------
function FeatureCard({ icon, image, title, subtitle, description }: { icon: React.ReactNode, image: string, title: string, subtitle: string, description: string }) {
  return (
    <div className="relative flex flex-col gap-6 p-8 border border-gray-100 dark:border-white/10 bg-white dark:bg-primary first:border-l-0 transition-colors hover:bg-gray-50 dark:hover:bg-surface-dark group">
      <div className="flex items-center gap-4">
        <div>
          <span className="flex items-center gap-2 text-xs font-bold text-gray-400 tracking-widest uppercase mb-6">
            {icon}
            {title}
          </span>
          <h3 className="text-2xl font-display text-primary dark:text-white mb-2">
            {subtitle}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed font-medium">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-auto flex justify-end">
        <div className="p-3 flex items-center gap-2 border border-gray-200 dark:border-white/10 rounded-full group-hover:-rotate-45 transition-transform duration-300 bg-white dark:bg-primary shadow-sm group-hover:bg-accent-lime group-hover:border-accent-lime">
          <ArrowRight className="w-5 h-5 text-primary" />
        </div>
      </div>
    </div>

  )
}

// ----------------- Map -------------------
const map = new DottedMap({ height: 50, grid: 'diagonal' })
const points = map.getPoints()

const Map = () => (
  <svg viewBox="0 0 100 50" className="w-full h-auto text-primary/10 dark:text-white/10">
    {points.map((point, i) => (
      <circle key={i} cx={point.x} cy={point.y} r={0.12} fill="currentColor" />
    ))}
  </svg>
)

// ----------------- Chart -------------------
const chartData = [
  { month: 'Jan', tech: 120, nonTech: 45 },
  { month: 'Feb', tech: 150, nonTech: 52 },
  { month: 'Mar', tech: 180, nonTech: 48 },
  { month: 'Apr', tech: 240, nonTech: 65 },
  { month: 'May', tech: 310, nonTech: 80 },
  { month: 'Jun', tech: 450, nonTech: 95 },
]

function MonitoringChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorTech" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#9EFF37" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#9EFF37" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorNonTech" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FF7B7D" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#FF7B7D" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
        <XAxis 
          dataKey="month" 
          hide
        />
        <YAxis hide />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#121212', 
            border: 'none', 
            borderRadius: '12px',
            color: '#fff',
            fontSize: '12px',
            fontWeight: 'bold'
          }}
          itemStyle={{ color: '#fff' }}
          cursor={{ stroke: 'rgba(158, 255, 55, 0.2)', strokeWidth: 2 }}
        />
        <Area 
          type="monotone" 
          dataKey="tech" 
          stroke="#9EFF37" 
          strokeWidth={3}
          fillOpacity={1} 
          fill="url(#colorTech)" 
          name="Tech Placements"
        />
        <Area 
          type="monotone" 
          dataKey="nonTech" 
          stroke="#FF7B7D" 
          strokeWidth={3}
          fillOpacity={1} 
          fill="url(#colorNonTech)" 
          name="Other Sectors"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}


interface Message {
  title: string;
  time: string;
  content: string;
  color: string;
}

const messages: Message[] = [
    {
      title: "Visa Sponsorship",
      time: "2m ago",
      content: "New Senior React Role in Berlin with full sponsorship.",
      color: "from-accent-lime to-emerald-500",
    },
    {
      title: "Success Story",
      time: "5m ago",
      content: "Carlos successfully relocated to Amsterdam!",
      color: "from-accent-gold to-orange-500",
    },
    {
      title: "Relocation Guide",
      time: "12m ago",
      content: "Updated 2024 guide for Stockholm housing market.",
      color: "from-accent-coral to-pink-500",
    },
    {
      title: "Direct Interview",
      time: "20m ago",
      content: "Interview request from Volvo for Cloud Engineer.",
      color: "from-blue-400 to-indigo-600",
    },
    {
      title: "Profile Boost",
      time: "45m ago",
      content: "Your profile is now featured to top 50 employers.",
      color: "from-purple-400 to-purple-600",
    },
  ];

const OpenDoorFeaturedMessageCard = () => {
  return (
    <div className="w-full max-w-sm h-[320px] bg-white dark:bg-surface-dark p-4 overflow-hidden relative rounded-2xl">
      {/* Fade shadow overlay */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white dark:from-surface-dark to-transparent z-10"></div>
      
      <div className="space-y-3 relative z-0">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-3 items-start p-4 border border-gray-100 dark:border-white/5 rounded-xl transform transition duration-300 ease-in-out cursor-pointer animate-scaleUp bg-white dark:bg-primary/50 shadow-sm`}
            style={{
              animationDelay: `${i * 300}ms`,
              animationFillMode: "forwards",
              opacity: 0,
            }}
          >
            <div
              className={`w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] rounded-xl bg-gradient-to-br ${msg.color} shadow-lg`}
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-xs font-bold text-primary dark:text-white uppercase tracking-tight">
                {msg.title}
                <span className="text-[10px] text-gray-400 font-medium before:content-['•'] before:mr-1">
                  {msg.time}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium line-clamp-2">
                {msg.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
