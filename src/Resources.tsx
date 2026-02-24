import PageHeader from './components/PageHeader';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const Resources = () => (
  <div className="min-h-screen bg-white">
    <PageHeader
      title="Resources & Insights"
      subtitle="Guides, articles, and tools for your international career"
      bgImage="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=2000"
    />
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-2/3 space-y-12">
          <h2 className="font-display text-3xl mb-8">Latest Articles</h2>
          {[
            {
              title: "The Ultimate Guide to the EU Blue Card",
              excerpt: "Everything you need to know about eligibility, application process, and benefits.",
              date: "Oct 12, 2023",
              readTime: "10 min read",
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400"
            },
            {
              title: "Cost of Living Comparison: Berlin vs. Amsterdam",
              excerpt: "A detailed breakdown of rent, groceries, and entertainment costs in two major tech hubs.",
              date: "Sep 28, 2023",
              readTime: "8 min read",
              img: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&q=80&w=400"
            },
            {
              title: "How to Ace Your Technical Interview in Europe",
              excerpt: "Cultural nuances and technical expectations you should be aware of.",
              date: "Sep 15, 2023",
              readTime: "6 min read",
              img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400"
            }
          ].map((article, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-8 group cursor-pointer border-b border-gray-100 pb-12 last:border-0">
              <div className="w-full sm:w-64 h-48 rounded-2xl overflow-hidden flex-shrink-0">
                <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="font-bold text-2xl mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link to={`/blog/post-${i}`} className="text-primary font-bold text-sm uppercase tracking-wider hover:opacity-70">Read More</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/3">
          <div className="bg-gray-50 p-8 rounded-3xl mb-8">
            <h3 className="font-bold text-xl mb-6">Popular Topics</h3>
            <div className="flex flex-wrap gap-2">
              {['Visa Process', 'Relocation', 'Tech Jobs', 'Culture', 'Remote Work', 'Salary Guide'].map(tag => (
                <span key={tag} className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-xs font-bold text-gray-600 hover:border-primary hover:text-primary cursor-pointer transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-3xl">
             <h3 className="font-bold text-xl mb-4">Downloadable Guides</h3>
             <ul className="space-y-4">
               <li className="flex items-center gap-3 pb-4 border-b border-white/10 last:border-0 last:pb-0 cursor-pointer hover:opacity-80">
                 <div className="bg-white/10 p-2 rounded-lg"><FileText className="w-5 h-5" /></div>
                 <div>
                   <p className="font-bold text-sm">Relocation Checklist</p>
                   <p className="text-xs text-white/60">PDF • 2.4 MB</p>
                 </div>
               </li>
               <li className="flex items-center gap-3 pb-4 border-b border-white/10 last:border-0 last:pb-0 cursor-pointer hover:opacity-80">
                 <div className="bg-white/10 p-2 rounded-lg"><FileText className="w-5 h-5" /></div>
                 <div>
                   <p className="font-bold text-sm">Salary Report 2024</p>
                   <p className="text-xs text-white/60">PDF • 5.1 MB</p>
                 </div>
               </li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Resources;
