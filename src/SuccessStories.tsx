import { Helmet } from 'react-helmet-async';
import PageHeader from './components/PageHeader';
import { InfiniteMovingCards } from './components/ui/infinite-moving-cards';
import { motion } from 'framer-motion';
import { Quote, TrendingUp, Users, MapPin } from 'lucide-react';
const testimonials = [
  {
    name: "Ana Silva",
    title: "Product Designer @ Spotify",
    location: "Stockholm, Sweden",
    quote: "The relocation support was an absolute lifesaver. They didn't just help me with my visa; they helped me find an apartment and settle in. I felt completely supported throughout the entire process.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Raj Patel",
    title: "Data Scientist @ Zalando",
    location: "Berlin, Germany",
    quote: "Efficient, transparent, and friendly. OpenDoor took the stress out of moving continents. Highly recommended for any tech professional looking to make the leap to Europe.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Sarah Chen",
    title: "Marketing Manager @ Delivery Hero",
    location: "Berlin, Germany",
    quote: "Moving with my family was stressful, but OpenDoor made it seamless. They handled everything from school applications for the kids to navigating the local tax system. Incredible service.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Dmitry Volkov",
    title: "DevOps Engineer @ Klarna",
    location: "Stockholm, Sweden",
    quote: "The visa guidance was spot on. I got my Blue Card approved in record time. The team really knows their stuff when it comes to European immigration laws.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Elena Rossi",
    title: "Frontend Dev @ Booking.com",
    location: "Amsterdam, Netherlands",
    quote: "I love my new life in Amsterdam. Thanks OpenDoor for making it happen! The whole journey from the first interview to getting my BSN number was incredibly smooth.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "James Wilson",
    title: "Product Manager @ Adyen",
    location: "Amsterdam, Netherlands",
    quote: "Professional service from start to finish. The best recruitment agency I've worked with. They truly care about the long-term success of the candidates they place.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  }
];

const SuccessStories = () => {


  return (
  <>
      <Helmet>
        <title>Success Stories - OpenDoor Europe</title>
        <meta name="description" content="Read inspiring success stories from professionals who successfully relocated to Europe." />
      </Helmet>
      <div className="min-h-screen bg-white">
    <PageHeader
      title="Success Stories"
      subtitle="Real people, real journeys, real impact"
      bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
    />

    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-primary text-white rounded-[3rem] p-8 md:p-16 lg:p-24 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-lime/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-accent-lime/20 border border-accent-lime/30 text-accent-lime font-bold px-4 py-2 rounded-full text-sm mb-8 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4" /> FEATURED STORY
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">From Lagos to Berlin: A Developer's Dream</h2>
            <div className="relative">
              <Quote className="absolute -top-4 -left-6 w-12 h-12 text-white/10" />
              <p className="text-white/90 text-xl mb-10 leading-relaxed font-medium pl-6 border-l-4 border-accent-lime/50">
                "I always wanted to work in Europe, but the visa process seemed impossible. OpenDoor not only found me a great job but handled all the paperwork. Now I'm leading a team at a top fintech company, and my family is thriving here."
              </p>
            </div>
            <div className="flex items-center gap-6 bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10 w-fit">
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200" alt="Tobi" className="w-20 h-20 rounded-full border-4 border-white/20 object-cover" referrerPolicy="no-referrer" />
              <div>
                <p className="font-bold text-xl text-white">Tobi Adegoke</p>
                <p className="text-accent-lime font-medium">Senior Backend Engineer @ N26</p>
                <p className="text-white/60 text-sm flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" /> Berlin, Germany
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-accent-lime/20 to-transparent rounded-3xl transform rotate-6 scale-105 z-0"></div>
             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Team meeting" className="rounded-3xl relative z-10 shadow-2xl border border-white/10 object-cover h-[500px] w-full" referrerPolicy="no-referrer" />
          </div>
        </div>
      </motion.div>
    </section>

    {/* Infinite Moving Cards Section */}
    <section className="py-24 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
          <Users className="w-8 h-8" />
        </div>
        <h2 className="font-display text-4xl md:text-5xl mb-6">Join thousands of successful candidates</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">Hear directly from the professionals who have taken the leap and built a new life in Europe with our help.</p>
      </div>

      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <InfiniteMovingCards
          items={testimonials.slice().reverse()}
          direction="left"
          speed="slow"
          className="mt-8"
        />
      </div>
    </section>
  </div>
    </>
  );
};

export default SuccessStories;