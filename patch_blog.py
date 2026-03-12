import re

with open('src/Blog.tsx', 'r') as f:
    content = f.read()

replacement = """import { useState } from 'react';
import PageHeader from './components/PageHeader';
import { Link } from 'react-router-dom';
import { FileText, Search, ArrowRight, Download, Filter, TrendingUp } from 'lucide-react';
import { blogPosts } from './data/blogPosts';
import { motion, AnimatePresence } from 'framer-motion';

const Blog = () => {
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCountry = selectedCountry === 'All' || post.country === selectedCountry;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.metaDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCountry && matchesSearch;
  });

  const featuredPost = blogPosts[0]; // Assuming first is newest/featured

  const countries = ['All', 'Uganda', 'Kenya', 'Tanzania', 'South Sudan', 'Rwanda'];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <PageHeader
        title="Insights & Guides"
        subtitle="Expert advice for your international career journey"
        bgImage="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-24 px-6 max-w-7xl mx-auto">

        {/* Featured Post (Only show if no search/filter is active) */}
        {selectedCountry === 'All' && searchQuery === '' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-24"
          >
            <div className="flex items-center gap-2 text-accent-lime font-bold text-sm uppercase tracking-wider mb-6 px-4">
              <TrendingUp className="w-4 h-4" /> Featured Article
            </div>
            <Link to={`/blog/${featuredPost.slug}`} className="group block">
              <div className="bg-white rounded-[2.5rem] p-4 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                <div className="w-full lg:w-1/2 aspect-[4/3] rounded-[2rem] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <span className="bg-white/90 backdrop-blur-md text-primary font-bold px-4 py-2 rounded-full text-xs uppercase tracking-wider shadow-sm">
                      {featuredPost.country}
                    </span>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-4 lg:p-8">
                  <div className="flex items-center gap-4 text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                    <span>{featuredPost.publishedDate}</span>
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 group-hover:text-primary transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {featuredPost.metaDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold group-hover:bg-primary/90 transition-colors">
                    Read Full Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 md:p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center mb-16 gap-6 sticky top-24 z-30">
          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <Filter className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2" />
            <div className="flex gap-2 min-w-max pr-4">
              {countries.map(country => (
                <button
                  key={country}
                  onClick={() => setSelectedCountry(country)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                    selectedCountry === country
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full md:w-72 flex-shrink-0 group">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-full focus:outline-none transition-all text-gray-900"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-primary transition-colors" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Main Article Grid */}
          <div className="w-full lg:w-2/3">
            <div className="flex items-center justify-between mb-8 px-2">
              <h2 className="font-display text-3xl text-gray-900">
                {searchQuery !== '' ? 'Search Results' : selectedCountry === 'All' ? 'Latest Articles' : `Articles for ${selectedCountry}`}
              </h2>
              <span className="text-sm font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {filteredPosts.length} posts
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <AnimatePresence>
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((article, i) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      key={article.slug}
                    >
                      <Link
                        to={`/blog/${article.slug}`}
                        className="bg-white rounded-[2rem] p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group block h-full flex flex-col"
                      >
                        <div className="w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden relative mb-6">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur-sm text-primary font-bold px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider shadow-sm">
                              {article.country}
                            </span>
                          </div>
                        </div>
                        <div className="px-2 flex-grow flex flex-col">
                          <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                            <span>{article.publishedDate}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>{article.readTime}</span>
                          </div>
                          <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
                            {article.metaDescription}
                          </p>
                          <div className="pt-4 border-t border-gray-50 flex items-center text-primary font-bold text-sm">
                            Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-1 sm:col-span-2 text-center py-20 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm"
                  >
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="w-10 h-10 text-gray-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
                    <p className="text-gray-500 mb-6 max-w-sm mx-auto">We couldn't find any articles matching your search criteria.</p>
                    <button
                      onClick={() => {setSelectedCountry('All'); setSearchQuery('');}}
                      className="bg-gray-100 text-gray-700 font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      Clear all filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 space-y-8 sticky top-48 h-fit">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h3 className="font-bold text-xl mb-6 text-gray-900 flex items-center gap-2">
                Popular Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Visa Process', 'Relocation', 'Tech Jobs', 'Culture', 'Remote Work', 'Salary Guide', 'Healthcare', 'Engineering'].map(tag => (
                  <span key={tag} className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:border-primary/30 hover:bg-primary/5 hover:text-primary cursor-pointer transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-[2.5rem] shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24 transition-transform group-hover:scale-150 duration-700"></div>
                <div className="relative z-10">
                  <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                    Free Resources
                  </h3>
                  <p className="text-white/70 text-sm mb-6">Download our comprehensive guides.</p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer group/item border border-white/10">
                      <div className="bg-white/20 p-3 rounded-xl text-accent-lime group-hover/item:scale-110 transition-transform"><FileText className="w-5 h-5" /></div>
                      <div className="flex-grow">
                        <p className="font-bold text-sm text-white">Relocation Checklist</p>
                        <p className="text-xs text-white/60">PDF • 2.4 MB</p>
                      </div>
                      <Download className="w-4 h-4 text-white/40 group-hover/item:text-white transition-colors" />
                    </li>
                    <li className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer group/item border border-white/10">
                      <div className="bg-white/20 p-3 rounded-xl text-accent-lime group-hover/item:scale-110 transition-transform"><FileText className="w-5 h-5" /></div>
                      <div className="flex-grow">
                        <p className="font-bold text-sm text-white">Salary Report 2024</p>
                        <p className="text-xs text-white/60">PDF • 5.1 MB</p>
                      </div>
                      <Download className="w-4 h-4 text-white/40 group-hover/item:text-white transition-colors" />
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;"""

pattern = re.compile(r'const Blog = \(\) => \{.*?(?=const Contact = \(\) => \()', re.DOTALL)
new_content = re.sub(pattern, replacement + "\n\n", content)

with open('src/Blog.tsx', 'w') as f:
    f.write(new_content)
