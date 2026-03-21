import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Sparkles } from "lucide-react";

const placements = [
  {
    quote: "The move from Sao Paulo to Berlin seemed impossible until I found OpenDoor. The visa sponsorship was handled entirely by their team.",
    name: "Carlos Rivera",
    title: "Senior Android Engineer @ Volvo",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    location: "Berlin, Germany"
  },
  {
    quote: "Relocating with a family is a huge decision. OpenDoor didn't just find me a job; they found us a home in Stockholm.",
    name: "Aisha Hassan",
    title: "Product Designer @ Spotify",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    location: "Stockholm, Sweden"
  },
  {
    quote: "I had multiple offers, but OpenDoor's transparent look into the European tech market helped me choose the right path in Amsterdam.",
    name: "David Chen",
    title: "Backend Lead @ Klarna",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    location: "Amsterdam, Netherlands"
  },
  {
    quote: "The Blue Card process was intimidating, but having a dedicated legal expert made all the difference. Now I'm loving life in Munich.",
    name: "Elena Petrova",
    title: "Data Scientist @ Siemens",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    location: "Munich, Germany"
  },
  {
    quote: "From the first interview to my first day at Zalando, the support was world-class. European tech is lucky to have this bridge.",
    name: "Jordan Smith",
    title: "Full Stack Developer @ Zalando",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    location: "Berlin, Germany"
  }
];

const FoundersCircle = () => {
  return (
    <section className="py-24 bg-white dark:bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider mb-6 border border-primary/10">
              <Sparkles className="w-3 h-3" /> The Network Effect
            </div>
            <h2 className="text-5xl md:text-6xl font-display text-primary dark:text-white mb-6">
              The Founders' <br/> <span className="text-gray-400">Circle.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Join thousands of professionals who have bridged the gap between their global talent and Europe's premier companies. This isn't just a list—it's a movement.
            </p>
          </div>
          <div className="flex flex-col items-end text-right">
             <div className="text-4xl font-display text-primary dark:text-white mb-1">500+</div>
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Relocations This Month</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <InfiniteMovingCards
          items={placements}
          direction="left"
          speed="slow"
          className="mb-8"
        />
        <InfiniteMovingCards
          items={placements.slice().reverse()}
          direction="right"
          speed="normal"
        />
      </div>
    </section>
  );
};

export default FoundersCircle;
