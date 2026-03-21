import PageHeader from '../components/PageHeader';
import { CheckCircle2, Map, FileText, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import CombinedFeaturedSection from "../components/ui/combined-featured-section";
import MoveLogicCalculator from '../components/v2/MoveLogicCalculator';
import RelocationPulse from '../components/v2/RelocationPulse';
import { useSEO } from '../hooks/useSEO';
const Relocation = () => {
  useSEO({
    title: "Seamless Relocation | Visa & Logistics Support",
    description: "We handle the logistics of moving to Europe, from visa processing to finding a home, so you can focus on your new life and career."
  });

  return (
  <div className="min-h-screen bg-white">
    <PageHeader
      title="Seamless Relocation"
      subtitle="We handle the logistics so you can focus on your new life"
      bgImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000"
    />
    
    <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 mb-24">
      <RelocationPulse />
    </div>

    <div className="max-w-7xl mx-auto px-6 mb-24">
      <MoveLogicCalculator />
    </div>

    <CombinedFeaturedSection />

    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Your journey, fully supported</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Moving to a new country is a massive life event. Our dedicated relocation experts are with you every step of the way, from the moment you sign your offer to your first day in your new city.
          </p>
          <ul className="space-y-4">
            {[
              "Visa application and processing",
              "Flight booking and temporary housing",
              "Bank account setup and tax registration",
              "Local orientation and cultural onboarding"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-accent-lime" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=400" alt="Moving" className="rounded-3xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" alt="Team" className="rounded-3xl w-full h-64 object-cover mt-8" referrerPolicy="no-referrer" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-50 p-8 rounded-3xl">
          <Map className="w-10 h-10 text-primary mb-6" />
          <h3 className="font-bold text-xl mb-4">City Guides</h3>
          <p className="text-gray-600 mb-6">Comprehensive guides to neighborhoods, cost of living, and local amenities.</p>
          <Link to="/blog" className="text-primary font-bold text-sm uppercase tracking-wider hover:opacity-70">Read Guides</Link>
        </div>
        <div className="bg-gray-50 p-8 rounded-3xl">
          <FileText className="w-10 h-10 text-primary mb-6" />
          <h3 className="font-bold text-xl mb-4">Visa Requirements</h3>
          <p className="text-gray-600 mb-6">Detailed breakdowns of visa types and requirements for different EU countries.</p>
          <Link to="/visa-guide" className="text-primary font-bold text-sm uppercase tracking-wider hover:opacity-70">Learn More</Link>
        </div>
        <div className="bg-gray-50 p-8 rounded-3xl">
          <BookOpen className="w-10 h-10 text-primary mb-6" />
          <h3 className="font-bold text-xl mb-4">Expat Community</h3>
          <p className="text-gray-600 mb-6">Connect with other professionals who have made the move through OpenDoor.</p>
          <Link to="/success-stories" className="text-primary font-bold text-sm uppercase tracking-wider hover:opacity-70">Join Network</Link>
        </div>
      </div>
    </section>
  </div>
  );
};

export default Relocation;
