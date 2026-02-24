import PageHeader from './components/PageHeader';

const SuccessStories = () => (
  <div className="min-h-screen bg-white">
    <PageHeader
      title="Success Stories"
      subtitle="Real people, real journeys, real impact"
      bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
    />
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="bg-primary text-white rounded-[3rem] p-12 md:p-24 mb-24 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="inline-block bg-accent-lime text-primary font-bold px-4 py-2 rounded-full text-sm mb-6">FEATURED STORY</div>
            <h2 className="font-display text-4xl md:text-5xl mb-6">From Lagos to Berlin: A Developer's Dream</h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              "I always wanted to work in Europe, but the visa process seemed impossible. OpenDoor not only found me a great job but handled all the paperwork. Now I'm leading a team at a top fintech company."
            </p>
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200" alt="Tobi" className="w-16 h-16 rounded-full border-2 border-white/20" referrerPolicy="no-referrer" />
              <div>
                <p className="font-bold text-lg">Tobi Adegoke</p>
                <p className="text-white/60 text-sm">Senior Backend Engineer @ N26</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Team meeting" className="rounded-3xl rotate-3 shadow-2xl border-4 border-white/10" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            name: "Ana Silva",
            role: "Product Designer @ Spotify",
            location: "Stockholm, Sweden",
            quote: "The relocation support was a lifesaver. They even helped me find an apartment!",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
          },
          {
            name: "Raj Patel",
            role: "Data Scientist @ Zalando",
            location: "Berlin, Germany",
            quote: "Efficient, transparent, and friendly. Highly recommended for any tech professional.",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
          },
          {
            name: "Sarah Chen",
            role: "Marketing Manager @ Delivery Hero",
            location: "Berlin, Germany",
            quote: "Moving with my family was stressful, but OpenDoor made it seamless.",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
          },
           {
            name: "Dmitry Volkov",
            role: "DevOps Engineer @ Klarna",
            location: "Stockholm, Sweden",
            quote: "The visa guidance was spot on. I got my Blue Card approved in record time.",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
          },
          {
            name: "Elena Rossi",
            role: "Frontend Dev @ Booking.com",
            location: "Amsterdam, Netherlands",
            quote: "I love my new life in Amsterdam. Thanks OpenDoor for making it happen!",
            img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
          },
          {
            name: "James Wilson",
            role: "Product Manager @ Adyen",
            location: "Amsterdam, Netherlands",
            quote: "Professional service from start to finish. The best recruitment agency I've worked with.",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
          }
        ].map((story, i) => (
          <div key={i} className="bg-gray-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <img src={story.img} alt={story.name} className="w-14 h-14 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <h4 className="font-bold text-lg leading-tight">{story.name}</h4>
                <p className="text-gray-500 text-xs uppercase tracking-wide">{story.location}</p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-6">"{story.quote}"</p>
            <p className="text-xs font-bold text-primary bg-primary/5 inline-block px-3 py-1 rounded-full">{story.role}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default SuccessStories;
