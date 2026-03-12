/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import PageHeader from './components/PageHeader';
import VisaGuide from './VisaGuide';
import SuccessStories from './SuccessStories';
import PostJob from './PostJob';
import TalentSolutions from './TalentSolutions';
import Pricing from './Pricing';
import Blog from './Blog';
import BlogPost from './BlogPost';
import Contact from './Contact';
import ProgressiveCarouselDemo from './components/ui/demo';
import TimelineDemo from './components/ui/timeline-demo';
import InfiniteSliderBasic from './components/ui/infinite-slider-demo';
import HeroDemo from './components/ui/hero-demo';
import TestimonialsComponent from './components/Testimonials';
import { blogPosts } from './data/blogPosts';
import {
  Search, 
  Briefcase, 
  MapPin, 
  PlaneTakeoff, 
  Handshake, 
  Home as HomeIcon, 
  GraduationCap, 
  Globe,
  Mail,
  Phone,
  MessageSquare,
  Menu,
  ChevronDown,
  X,
  Filter,
  Users,
  CheckCircle2,
  FileText,
  Map,
  BookOpen,
  Code2,
  Database,
  Cloud,
  PenTool,
  Sparkles,
  Utensils,
  Sprout,
  Car,
  Wrench,
  Shield,
  Send
} from "lucide-react";

const NavDropdown = ({ title, items }: { title: string, items: { label: string, href: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 hover:text-white text-white/90 transition-colors py-2 font-medium">
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 bg-white text-gray-800 rounded-xl shadow-xl py-3 min-w-[220px] border border-gray-100 overflow-hidden z-50 mt-2"
          >
            {items.map((item, i) => (
              <Link
                key={i}
                to={item.href}
                className="block px-5 py-2.5 hover:bg-gray-50 text-sm font-medium transition-colors text-gray-600 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <nav className="absolute top-0 w-full z-50 px-4 py-4 md:px-6 md:py-6 border-b border-white/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 md:gap-8">
          <Link className="font-display text-xl md:text-2xl text-white tracking-wide" to="/">OpenDoor</Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-white/90 items-center">
            <Link className="hover:text-white transition-colors" to="/jobs">Find Jobs</Link>
            <NavDropdown
              title="Candidates"
              items={[
                { label: "Relocation", href: "/relocation" },
                { label: "Visa Guide", href: "/visa-guide" },
                { label: "Success Stories", href: "/success-stories" }
              ]}
            />
            <NavDropdown
              title="Employers"
              items={[
                { label: "Post a Job", href: "/post-job" },
                { label: "Talent Solutions", href: "/talent-solutions" },
                { label: "Pricing", href: "/pricing" }
              ]}
            />
            <Link className="hover:text-white transition-colors" to="/blog">Blog</Link>
            <Link className="hover:text-white transition-colors" to="/about">About Us</Link>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm font-medium text-white">
          <a className="hidden sm:block hover:text-white/70 transition-colors" href="#en" onClick={(e) => e.preventDefault()}>EN</a>
          <a className="hidden sm:block hover:text-white/70 transition-colors" href="#search" onClick={(e) => e.preventDefault()}>SEARCH</a>
          <a className="hidden md:block bg-white text-primary px-4 py-1.5 md:px-5 md:py-2 rounded-full hover:bg-gray-100 transition-colors font-semibold" href="#login" onClick={(e) => e.preventDefault()}>LOG IN</a>
          <button 
            className="md:hidden text-white p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-md border-b border-white/10 py-6 px-6 flex flex-col gap-6 md:hidden shadow-2xl overflow-y-auto max-h-[80vh]"
          >
            <div className="flex flex-col gap-2">
              <Link className="text-white text-lg font-medium hover:text-white/70 transition-colors py-2 border-b border-white/10" to="/jobs" onClick={() => setIsMenuOpen(false)}>Find Jobs</Link>

              {/* Candidates Section */}
              <div className="border-b border-white/10 pb-2">
                <button
                  onClick={() => toggleSection('candidates')}
                  className="flex justify-between items-center w-full text-white text-lg font-medium py-2 hover:text-white/70 transition-colors"
                >
                  Candidates
                  <ChevronDown className={`w-5 h-5 transition-transform ${openSection === 'candidates' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openSection === 'candidates' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 flex flex-col gap-3 pb-2"
                    >
                      <Link className="text-white/80 text-base hover:text-white" to="/relocation" onClick={() => setIsMenuOpen(false)}>Relocation</Link>
                      <Link className="text-white/80 text-base hover:text-white" to="/visa-guide" onClick={() => setIsMenuOpen(false)}>Visa Guide</Link>
                      <Link className="text-white/80 text-base hover:text-white" to="/success-stories" onClick={() => setIsMenuOpen(false)}>Success Stories</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Employers Section */}
              <div className="border-b border-white/10 pb-2">
                <button
                  onClick={() => toggleSection('employers')}
                  className="flex justify-between items-center w-full text-white text-lg font-medium py-2 hover:text-white/70 transition-colors"
                >
                  Employers
                  <ChevronDown className={`w-5 h-5 transition-transform ${openSection === 'employers' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openSection === 'employers' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 flex flex-col gap-3 pb-2"
                    >
                      <Link className="text-white/80 text-base hover:text-white" to="/post-job" onClick={() => setIsMenuOpen(false)}>Post a Job</Link>
                      <Link className="text-white/80 text-base hover:text-white" to="/talent-solutions" onClick={() => setIsMenuOpen(false)}>Talent Solutions</Link>
                      <Link className="text-white/80 text-base hover:text-white" to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link className="text-white text-lg font-medium hover:text-white/70 transition-colors py-2 border-b border-white/10" to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link className="text-white text-lg font-medium hover:text-white/70 transition-colors py-2 border-b border-white/10" to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <div className="flex gap-6">
                <a className="text-white/70 font-medium hover:text-white transition-colors" href="#en" onClick={(e) => e.preventDefault()}>EN</a>
                <a className="text-white/70 font-medium hover:text-white transition-colors" href="#search" onClick={(e) => e.preventDefault()}>SEARCH</a>
              </div>
              <a className="bg-white text-primary px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-bold text-center mt-2" href="#login" onClick={(e) => e.preventDefault()}>LOG IN</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


const Hero = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/jobs?search=${encodeURIComponent(jobTitle)}&location=${encodeURIComponent(location)}`);
  };

  return (
    <header className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          alt="European Cityscape"
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=2000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-32 md:pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl md:text-8xl text-white mb-6 leading-tight drop-shadow-lg"
        >
          Unlock Your <br/>
          <span className="italic font-light">Career in Europe</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-white/90 text-sm md:text-base tracking-widest uppercase mb-12 font-medium"
        >
          Premier Recruitment for International Talent & Global Companies
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-2xl md:rounded-full max-w-3xl mx-auto flex flex-col md:flex-row gap-2"
        >
          <div className="flex-1 relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Briefcase className="w-5 h-5 text-white/70 group-focus-within:text-white" />
            </div>
            <input
              className="w-full bg-transparent border-none text-white placeholder-white/70 focus:ring-0 pl-12 py-3 rounded-full text-sm outline-none"
              placeholder="Job title or keywords"
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div className="w-px bg-white/20 hidden md:block"></div>
          <div className="flex-1 relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <MapPin className="w-5 h-5 text-white/70 group-focus-within:text-white" />
            </div>
            <input
              className="w-full bg-transparent border-none text-white placeholder-white/70 focus:ring-0 pl-12 py-3 rounded-full text-sm outline-none"
              placeholder="Country or City"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button onClick={handleSearch} className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg md:min-w-[140px] flex items-center justify-center gap-2">
            <Search className="w-4 h-4" />
            Search Jobs
          </button>
        </motion.div>
      </div>
    </header>
  );
};

const Values = () => (
  <section className="pt-16 pb-8 px-6 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
      <h2 className="font-display text-5xl md:text-6xl text-primary leading-tight">
        Top values <br/> for you
      </h2>
      <div className="md:pt-4">
        <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-2">
          Start Your European Journey
        </p>
        <p className="text-gray-600 max-w-md leading-relaxed">
          Enjoy exclusive perks and seamless experiences from day one. We bridge the gap between your talent and Europe's top employers.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
      {[
        { icon: PlaneTakeoff, title: "Visa Sponsorship", desc: "Navigating complex bureaucracy so you don't have to. Full legal support for work permits." },
        { icon: Handshake, title: "Direct Matching", desc: "Connect directly with hiring managers. No middlemen, no hidden steps, instant feedback." },
        { icon: HomeIcon, title: "Relocation Support", desc: "Housing assistance, bank setup, and cultural onboarding to help you settle in quickly." },
        { icon: GraduationCap, title: "Career Coaching", desc: "Expert advice on CV tailoring for European standards and interview preparation." }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group border-t border-gray-200 pt-6"
        >
          <div className="mb-4 text-primary">
            <item.icon className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-primary group-hover:text-gray-600 transition-colors">{item.title}</h3>
          <p className="text-sm text-gray-500 mb-4">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const JobCards = () => (
  <section className="pt-8 pb-8 px-6 max-w-7xl mx-auto mb-8">
    <div className="flex flex-col md:flex-row justify-between items-start mb-12">
      <div className="max-w-2xl">
        <h2 className="font-display text-5xl md:text-6xl text-primary mb-6">Featured Opportunities</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Curated roles for international talent. We handle the connections; you handle the adventure. Explore top-tier positions across Europe with visa sponsorship.
        </p>
      </div>
      <Link className="text-sm font-bold border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity" to="/jobs">VIEW ALL JOBS</Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { title: "Senior React Engineer", location: "Berlin, DE", salary: "€75k - €95k", badge: "VISA SPONSORSHIP", badgeColor: "bg-accent-gold", tag: "Engineering", tagIcon: Briefcase, img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" },
        { title: "Product Designer", location: "Amsterdam, NL", salary: "€65k - €85k", badge: "RELOCATION", badgeColor: "bg-accent-coral text-white", tag: "Design", tagIcon: MapPin, img: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80&w=800" },
        { title: "Full Stack Developer", location: "Barcelona, ES", salary: "€55k - €70k", badge: "4.9 RATING", badgeColor: "bg-accent-lime", tag: "Hybrid", tagIcon: HomeIcon, img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80&w=800" }
      ].map((job, i) => (
        <div key={i} className="group cursor-pointer">
          <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative">
            {job.badge && (
              <span className={`absolute top-4 right-4 ${job.badgeColor} text-primary text-[10px] font-bold px-2 py-1 rounded-sm z-10 tracking-wider`}>
                {job.badge}
              </span>
            )}
            <img 
              alt={job.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src={job.img}
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4">
              <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                <job.tagIcon className="w-3 h-3 text-primary" />
                <span className="text-primary text-[10px] font-bold tracking-tight">{job.tag}</span>
              </div>
            </div>
          </div>
          <h3 className="font-bold text-lg text-primary mb-1">{job.title}</h3>
          <p className="text-sm text-gray-500 font-medium">{job.location} • <span className="text-gray-400">{job.salary}</span></p>
        </div>
      ))}
    </div>
  </section>
);

const Insights = () => (
  <section className="max-w-7xl mx-auto px-6 pb-24">
    <div className="flex flex-col md:flex-row justify-between items-start mb-16 border-b border-gray-100 pb-12">
      <h2 className="font-display text-5xl md:text-6xl text-primary leading-none">
        Relocation Insights <br/> & Stories
      </h2>
      <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase max-w-[240px] mt-6 md:mt-0 leading-relaxed">
        REAL STORIES FROM PROFESSIONALS WHO MADE THE MOVE, PLUS GUIDES ON VISAS, TAXES, AND CULTURE.
      </p>
    </div>
    
    {blogPosts.slice(0, 3).map((article, i) => (
      <motion.div 
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        className="group flex flex-col md:flex-row gap-10 items-center mb-20 last:mb-0"
      >
        <div className="w-full md:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden flex-shrink-0">
          <img 
            alt={article.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            src={article.image}
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-4xl md:text-5xl text-primary mb-4 leading-tight">
            {article.title}
          </h3>
          <p className="text-gray-500 text-[11px] font-bold tracking-wider mb-6 leading-relaxed max-w-2xl">
            {article.metaDescription}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-accent-lime px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase">
              {article.country}
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase">
              {article.readTime}
            </span>
          </div>
          <Link to={`/blog/${article.slug}`} className="text-[11px] font-bold text-primary uppercase tracking-widest border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity">READ STORY</Link>
        </div>
      </motion.div>
    ))}
  </section>
);

const Footer = () => (
  <footer className="bg-primary text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <h2 className="font-display text-3xl mb-6">OpenDoor</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Connecting global talent with European opportunities. Your bridge to a new life and career abroad.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm tracking-wider uppercase">For Candidates</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link className="hover:text-white transition-colors" to="/jobs">Browse Jobs</Link></li>
            <li><Link className="hover:text-white transition-colors" to="/visa-guide">Visa Guide</Link></li>
            <li><Link className="hover:text-white transition-colors" to="/success-stories">Success Stories</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm tracking-wider uppercase">For Employers</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link className="hover:text-white transition-colors" to="/post-job">Post a Job</Link></li>
            <li><Link className="hover:text-white transition-colors" to="/talent-solutions">Talent Solutions</Link></li>
            <li><Link className="hover:text-white transition-colors" to="/pricing">Pricing</Link></li>
            <li><Link className="hover:text-white transition-colors" to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm tracking-wider uppercase">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>europeopendoor@gmail.com</li>
            <li>+4915210755401</li>
            <li>Berlin, Germany</li>
            <li><Link className="hover:text-white transition-colors" to="/contact">Contact Form</Link></li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors" href="/" aria-label="Website">
              <Globe className="w-4 h-4" />
            </a>
            <a className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors" href="mailto:europeopendoor@gmail.com" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
            <a className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors" href="tel:+4915210755401">
              <Phone className="w-4 h-4" />
            </a>
            <a className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors" href="https://wa.me/4915210755401" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2024 OpenDoor Europe. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a className="hover:text-white" href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
          <a className="hover:text-white" href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const Partners = () => (
  <section className="py-12 border-b border-gray-100 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 mb-8">
      <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase text-center">Trusted by industry leaders across Europe</p>
    </div>
    <div className="w-full flex items-center justify-center">
      <InfiniteSliderBasic />
    </div>
  </section>
);

const CityExplorer = () => (
  <section className="pt-8 pb-24 px-6 max-w-7xl mx-auto mb-24">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
      <div className="max-w-xl">
        <h2 className="font-display text-5xl md:text-6xl text-primary mb-6">Explore Destinations</h2>
        <p className="text-gray-600 text-lg">Discover the best cities for your next career move based on real-time data and expat feedback.</p>
      </div>
      <Link className="text-sm font-bold border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity" to="/jobs">VIEW ALL CITIES</Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { name: "Berlin", country: "Germany", jobs: "1,240+", cost: "Moderate", img: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80&w=800" },
        { name: "Amsterdam", country: "Netherlands", jobs: "850+", cost: "High", img: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&q=80&w=800" },
        { name: "Stockholm", country: "Sweden", jobs: "620+", cost: "High", img: "https://images.unsplash.com/photo-1509339022327-1e1e25360a41?auto=format&fit=crop&q=80&w=800" }
      ].map((city, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -10 }}
          className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
        >
          <img 
            alt={city.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            src={city.img}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-white/70 text-xs font-bold tracking-widest uppercase mb-1">{city.country}</p>
            <h3 className="text-white font-display text-4xl mb-4">{city.name}</h3>
            <div className="flex gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
                <p className="text-white text-[10px] font-bold">{city.jobs} Jobs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
                <p className="text-white text-[10px] font-bold">{city.cost} Cost</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-primary text-white overflow-hidden mb-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="font-display text-5xl md:text-7xl mb-12 leading-tight">What our <br/> <span className="italic font-light">pioneers say</span></h2>
          <div className="space-y-12">
            {[
              { name: "Elena Rodriguez", role: "UX Designer at Spotify", text: "OpenDoor didn't just find me a job; they found me a new life in Stockholm. The visa support was flawless.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
              { name: "Marcus Chen", role: "Backend Engineer at Zalando", text: "Moving to Berlin seemed impossible until I connected with OpenDoor. They handled everything from interview prep to housing.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <img alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-white/20" src={t.img} referrerPolicy="no-referrer" />
                <div>
                  <p className="text-lg text-white/80 italic mb-4">"{t.text}"</p>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden rotate-3 scale-95 opacity-50 absolute -top-12 -right-12 border border-white/20">
            <img alt="Lifestyle" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800" referrerPolicy="no-referrer" />
          </div>
          <div className="aspect-[4/5] rounded-3xl overflow-hidden -rotate-3 relative z-10 border border-white/20 shadow-2xl">
            <img alt="Lifestyle" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="pt-8 pb-24 px-6 max-w-7xl mx-auto mb-24">
      <div className="bg-accent-lime rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-4 border-primary rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-primary rounded-full"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl text-primary mb-8">Stay ahead of the curve</h2>
          <p className="text-primary/70 text-lg mb-12">Get weekly insights on the European job market, visa updates, and exclusive relocation guides delivered to your inbox.</p>

          {isSubscribed ? (
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-sm">
               <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Send className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-2xl text-primary mb-2">You're Subscribed!</h3>
               <p className="text-primary/70 mb-6">Thanks for joining our community. Keep an eye on your inbox.</p>
               <button
                 onClick={() => setIsSubscribed(false)}
                 className="text-primary font-bold hover:underline text-sm uppercase tracking-wider"
               >
                 Subscribe another email
               </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/50 backdrop-blur-sm border-2 border-primary/10 rounded-full px-8 py-4 text-primary placeholder-primary/40 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-white font-bold px-10 py-4 rounded-full hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm">Subscribe</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => (
  <section className="max-w-4xl mx-auto px-6 mb-24">
    <h2 className="font-display text-4xl mb-12 text-center">Common questions</h2>
    <div className="space-y-4">
      {[
        { q: "Do I need a visa before applying?", a: "Not necessarily. Many of our partner companies offer visa sponsorship. We'll guide you through the requirements for each role." },
        { q: "Is OpenDoor free for candidates?", a: "Yes! Our services are completely free for job seekers. We are paid by the companies that hire you." },
        { q: "Which countries do you cover?", a: "We currently focus on major tech hubs in Germany, Netherlands, Sweden, Spain, and France, but we're expanding rapidly." }
      ].map((item, i) => (
        <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
          <h3 className="font-bold text-lg mb-2">{item.q}</h3>
          <p className="text-gray-600">{item.a}</p>
        </div>
      ))}
    </div>
  </section>
);

const Home = () => (
  <>
    <Hero />
    <Partners />
    <Values />
    <JobCards />
    <CityExplorer />
    <TestimonialsComponent />
    <ProgressiveCarouselDemo />
    <Insights />
    <Newsletter />
    <FAQ />
  </>
);

const JOBS = [
  { title: "Senior React Engineer", company: "TechCorp GmbH", location: "Berlin, Germany", salary: "€75k - €95k", tags: ['Visa Sponsorship', 'Hybrid', 'React'], image: "https://loremflickr.com/200/200/software?lock=1" },
  { title: "Product Designer", company: "Creative Studio", location: "Amsterdam, Netherlands", salary: "€65k - €85k", tags: ['Relocation', 'On-site', 'Figma'], image: "https://loremflickr.com/200/200/design?lock=2" },
  { title: "Backend Developer (Go)", company: "FinTech AB", location: "Stockholm, Sweden", salary: "€70k - €90k", tags: ['Visa Sponsorship', 'Remote', 'Go'], image: "https://loremflickr.com/200/200/coding?lock=3" },
  { title: "Data Scientist", company: "AI Solutions", location: "Paris, France", salary: "€60k - €80k", tags: ['Visa Sponsorship', 'Python', 'ML'], image: "https://loremflickr.com/200/200/data?lock=4" },
  { title: "DevOps Engineer", company: "Cloud Systems", location: "Barcelona, Spain", salary: "€55k - €75k", tags: ['Relocation', 'AWS', 'K8s'], image: "https://loremflickr.com/200/200/server?lock=5" },
  { title: "Frontend Lead", company: "E-commerce Inc", location: "Berlin, Germany", salary: "€85k - €110k", tags: ['Visa Sponsorship', 'Vue.js', 'Lead'], image: "https://loremflickr.com/200/200/frontend?lock=6" },
  { title: "UX Researcher", company: "UserFirst", location: "Amsterdam, Netherlands", salary: "€55k - €75k", tags: ['Relocation', 'Research'], image: "https://loremflickr.com/200/200/research?lock=7" },
  { title: "Cloud Architect", company: "Enterprise IT", location: "Stockholm, Sweden", salary: "€80k - €100k", tags: ['Relocation Pkg', 'On-site', 'AWS'], image: "https://loremflickr.com/200/200/cloud?lock=8" },
  { title: "Janitor", company: "CleanSpace GmbH", location: "Berlin, Germany", salary: "€28k - €32k", tags: ['Visa Sponsorship', 'On-site'], image: "https://loremflickr.com/200/200/janitor?lock=9" },
  { title: "Housekeeper", company: "Grand Hotel", location: "Paris, France", salary: "€26k - €30k", tags: ['Accommodation', 'Shift Work'], image: "https://loremflickr.com/200/200/housekeeper?lock=10" },
  { title: "Room Attendant", company: "Luxury Stay", location: "Rome, Italy", salary: "€24k - €28k", tags: ['Tips', 'Full-time'], image: "https://loremflickr.com/200/200/hotel?lock=11" },
  { title: "Office Cleaner", company: "CorpClean", location: "London, UK", salary: "£22k - £26k", tags: ['Part-time', 'Evening'], image: "https://loremflickr.com/200/200/office,cleaner?lock=12" },
  { title: "Laundry Attendant", company: "PureWash", location: "Munich, Germany", salary: "€25k - €29k", tags: ['Training Provided', 'Day Shift'], image: "https://loremflickr.com/200/200/laundry?lock=13" },
  { title: "Kitchen Steward", company: "Gourmet Bistro", location: "Lyon, France", salary: "€27k - €31k", tags: ['Meals Included', 'Busy'], image: "https://loremflickr.com/200/200/kitchen?lock=14" },
  { title: "Dishwasher", company: "City Restaurant", location: "Barcelona, Spain", salary: "€23k - €26k", tags: ['Entry Level', 'Urgent'], image: "https://loremflickr.com/200/200/dishwasher?lock=15" },
  { title: "Waste Collector", company: "EcoServices", location: "Amsterdam, Netherlands", salary: "€30k - €36k", tags: ['Union', 'Early Shift'], image: "https://loremflickr.com/200/200/waste?lock=16" },
  { title: "Sanitation Worker", company: "Public Works", location: "Brussels, Belgium", salary: "€29k - €34k", tags: ['Government', 'Benefits'], image: "https://loremflickr.com/200/200/sanitation?lock=17" },
  { title: "Groundskeeper", company: "University Campus", location: "Dublin, Ireland", salary: "€28k - €33k", tags: ['Outdoor', 'Seasonal'], image: "https://loremflickr.com/200/200/groundskeeper?lock=18" },
  { title: "Gardener", company: "Royal Parks", location: "London, UK", salary: "£26k - £32k", tags: ['Creative', 'Outdoor'], image: "https://loremflickr.com/200/200/garden?lock=19" },
  { title: "Car Wash Attendant", company: "Sparkle Auto", location: "Milan, Italy", salary: "€22k - €25k", tags: ['Tips', 'Flexible'], image: "https://loremflickr.com/200/200/carwash?lock=20" },
  { title: "Maintenance Assistant", company: "Property Fix", location: "Berlin, Germany", salary: "€32k - €38k", tags: ['Visa Sponsorship', 'Tools Provided'], image: "https://loremflickr.com/200/200/maintenance?lock=21" },
  { title: "Facility Attendant", company: "Sports Complex", location: "Madrid, Spain", salary: "€25k - €29k", tags: ['Weekend', 'Gym Access'], image: "https://loremflickr.com/200/200/facility?lock=22" },
  { title: "Public Area Attendant", company: "Shopping Mall", location: "Warsaw, Poland", salary: "PLN 40k - 50k", tags: ['Shift Work', 'Indoor'], image: "https://loremflickr.com/200/200/cleaner?lock=23" },
  { title: "Building Caretaker", company: "Residential Block", location: "Vienna, Austria", salary: "€30k - €35k", tags: ['Accommodation', 'Full-time'], image: "https://loremflickr.com/200/200/building?lock=24" },
  { title: "Pest Control Assistant", company: "NoPests", location: "Lisbon, Portugal", salary: "€26k - €31k", tags: ['Training', 'Travel'], image: "https://loremflickr.com/200/200/pestcontrol?lock=25" },
  { title: "Street Sweeper", company: "City Council", location: "Prague, Czechia", salary: "CZK 500k - 600k", tags: ['Public Sector', 'Pension'], image: "https://loremflickr.com/200/200/street?lock=26" },
  { title: "Factory Cleaner", company: "AutoPlant", location: "Stuttgart, Germany", salary: "€30k - €36k", tags: ['Night Shift', 'Bonus'], image: "https://loremflickr.com/200/200/factory?lock=27" },
  { title: "Hospital Cleaner", company: "Central Hospital", location: "Zurich, Switzerland", salary: "CHF 50k - 60k", tags: ['Healthcare', 'Sterile'], image: "https://loremflickr.com/200/200/hospital?lock=28" },
];


const getJobIcon = (title: string) => {
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes('engineer') || lowerTitle.includes('developer') || lowerTitle.includes('architect') || lowerTitle.includes('stack')) {
    return <Code2 className="w-8 h-8 text-primary" />;
  }
  if (lowerTitle.includes('designer')) {
    return <PenTool className="w-8 h-8 text-primary" />;
  }
  if (lowerTitle.includes('data') || lowerTitle.includes('analyst')) {
    return <Database className="w-8 h-8 text-primary" />;
  }
  if (lowerTitle.includes('cloud') || lowerTitle.includes('devops')) {
    return <Cloud className="w-8 h-8 text-primary" />;
  }
  if (lowerTitle.includes('cleaner') || lowerTitle.includes('janitor') || lowerTitle.includes('housekeeper') || lowerTitle.includes('attendant') || lowerTitle.includes('sweeper') || lowerTitle.includes('caretaker') || lowerTitle.includes('waste') || lowerTitle.includes('sanitation')) {
    return <Sparkles className="w-8 h-8 text-primary" />;
  }
  if (lowerTitle.includes('kitchen') || lowerTitle.includes('dishwasher') || lowerTitle.includes('steward') || lowerTitle.includes('cook')) {
    return <Utensils className="w-8 h-8 text-primary" />;
  }
  if (lowerTitle.includes('gardener') || lowerTitle.includes('groundskeeper')) {
    return <Sprout className="w-8 h-8 text-primary" />;
  }
  if (lowerTitle.includes('driver') || lowerTitle.includes('mechanic') || lowerTitle.includes('auto') || lowerTitle.includes('car')) {
    return <Car className="w-8 h-8 text-primary" />;
  }
  if (lowerTitle.includes('maintenance') || lowerTitle.includes('fix')) {
    return <Wrench className="w-8 h-8 text-primary" />;
  }
  if (lowerTitle.includes('security')) {
    return <Shield className="w-8 h-8 text-primary" />;
  }

  return <Briefcase className="w-8 h-8 text-primary" />;
};

const FindJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [visaSupport, setVisaSupport] = useState(false);
  const [relocation, setRelocation] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    const loc = params.get('location');

    if (search) setSearchTerm(search);
    if (loc) setLocationTerm(loc);
  }, [location.search]);

  const toggleRole = (role: string) => {
    setSelectedRoles(prev =>
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    );
  };

  const toggleLocation = (loc: string) => {
    setSelectedLocations(prev =>
      prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setLocationTerm("");
    setSelectedRoles([]);
    setSelectedLocations([]);
    setVisaSupport(false);
    setRelocation(false);
  };

  const filteredJobs = JOBS.filter(job => {
    // Search Term Filter
    const matchesSearch = searchTerm === "" ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    // Location Term Filter (from Hero)
    const matchesLocationTerm = locationTerm === "" ||
      job.location.toLowerCase().includes(locationTerm.toLowerCase());

    // Role Filter
    const jobRole = (() => {
      const t = job.title.toLowerCase();
      if (t.includes('engineer') || t.includes('developer')) return 'Engineering';
      if (t.includes('designer')) return 'Design';
      if (t.includes('product')) return 'Product';
      if (t.includes('data')) return 'Data';
      if (t.includes('marketing')) return 'Marketing';
      return 'Other';
    })();
    const matchesRole = selectedRoles.length === 0 || selectedRoles.includes(jobRole);

    // Location Checkbox Filter
    const matchesLocationCheckbox = selectedLocations.length === 0 ||
      selectedLocations.some(loc => job.location.includes(loc));

    // Visa & Relocation
    const matchesVisa = !visaSupport || job.tags.some(t => t.toLowerCase().includes('visa'));
    const matchesRelocation = !relocation || job.tags.some(t => t.toLowerCase().includes('relocation'));

    return matchesSearch && matchesLocationTerm && matchesRole && matchesLocationCheckbox && matchesVisa && matchesRelocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Find Your Next Role"
        subtitle="Explore opportunities across Europe with visa sponsorship"
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      />
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="font-bold text-lg flex items-center gap-2">
                  <Filter className="w-5 h-5" /> Filters
                </h3>
                <button onClick={clearFilters} className="text-xs font-bold text-primary hover:underline">Clear All</button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-sm mb-3">Role Type</h4>
                  <div className="space-y-2">
                    {['Engineering', 'Design', 'Product', 'Data', 'Marketing'].map(role => (
                      <label key={role} className="flex items-center gap-2 cursor-pointer group">
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            className="peer h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                            checked={selectedRoles.includes(role)}
                            onChange={() => toggleRole(role)}
                          />
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-primary transition-colors">{role}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-3">Location</h4>
                  <div className="space-y-2">
                    {['Germany', 'Netherlands', 'Sweden', 'Spain', 'France'].map(loc => (
                      <label key={loc} className="flex items-center gap-2 cursor-pointer group">
                         <input
                            type="checkbox"
                            className="peer h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                            checked={selectedLocations.includes(loc)}
                            onChange={() => toggleLocation(loc)}
                          />
                        <span className="text-sm text-gray-600 group-hover:text-primary transition-colors">{loc}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-3">Visa Support</h4>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="peer h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                      checked={visaSupport}
                      onChange={(e) => setVisaSupport(e.target.checked)}
                    />
                    <span className="text-sm text-gray-600 group-hover:text-primary transition-colors">Visa Sponsorship</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer mt-2 group">
                    <input
                      type="checkbox"
                      className="peer h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                      checked={relocation}
                      onChange={(e) => setRelocation(e.target.checked)}
                    />
                    <span className="text-sm text-gray-600 group-hover:text-primary transition-colors">Relocation Package</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by job title, company, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm transition-shadow"
                />
              </div>
            </div>

            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row gap-6 items-start sm:items-center group">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/5 transition-colors">
                      {getJobIcon(job.title)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-primary mb-2 group-hover:text-primary/80 transition-colors">{job.title}</h3>
                      <p className="text-sm text-gray-500 mb-4">{job.company} • {job.location} • {job.salary}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map(tag => (
                          <span key={tag} className={`${tag.toLowerCase().includes('visa') || tag.toLowerCase().includes('relocation') ? 'bg-accent-lime/20 text-primary' : 'bg-gray-100 text-gray-600'} px-3 py-1 rounded-full text-xs font-bold`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/4915210755401?text=Hi,%20I'm%20interested%20in%20applying%20for%20the%20${encodeURIComponent(job.title)}%20position.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto border-2 border-primary text-primary px-6 py-2 rounded-full font-bold hover:bg-primary hover:text-white transition-colors text-center inline-block">
                      Apply
                    </a>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">No jobs found</h3>
                  <p className="text-gray-500 mb-6">We couldn't find any positions matching your current filters.</p>
                  <button onClick={clearFilters} className="text-primary font-bold hover:underline">Clear all filters</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Employers = () => (
  <div className="min-h-screen bg-white">
    <PageHeader 
      title="Hire Global Talent" 
      subtitle="Access a curated pool of pre-vetted international professionals"
      bgImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000"
    />
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-xl mb-4">Pre-vetted Candidates</h3>
          <p className="text-gray-600">Every candidate is screened for technical skills, cultural fit, and English proficiency.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-xl mb-4">Visa Support</h3>
          <p className="text-gray-600">We handle the entire visa and relocation process, ensuring a smooth transition.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-xl mb-4">Guaranteed Match</h3>
          <p className="text-gray-600">If a hire doesn't work out within the first 90 days, we'll find a replacement for free.</p>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-[3rem] p-12 text-center">
        <h2 className="font-display text-4xl mb-6">Ready to expand your team?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Join hundreds of European companies hiring top international talent through OpenDoor.</p>
        <Link to="/contact" className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors inline-block">
          Schedule a Demo
        </Link>
      </div>
    </section>
  </div>
);

const Relocation = () => (
  <div className="min-h-screen bg-white">
    <PageHeader 
      title="Seamless Relocation" 
      subtitle="We handle the logistics so you can focus on your new life"
      bgImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000"
    />
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-24">
        <h2 className="font-display text-4xl md:text-5xl mb-6 text-center">The Relocation Process</h2>
        <TimelineDemo />
      </div>
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

const AboutUs = () => (
  <div className="min-h-screen bg-white">
    <PageHeader 
      title="Our Mission" 
      subtitle="Breaking down borders to connect talent with opportunity"
      bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
    />
    <section className="py-24 px-6 max-w-4xl mx-auto text-center">
      <h2 className="font-display text-4xl md:text-5xl mb-8">We believe talent is global, but opportunity is not.</h2>
      <p className="text-gray-600 text-lg leading-relaxed mb-12">
        Founded in 2020, OpenDoor was born out of the frustration of navigating complex immigration systems and fragmented job markets. We set out to build a platform that not only connects brilliant minds with innovative companies but also removes the friction of international relocation.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-gray-100 py-12 mb-16">
        <div>
          <p className="font-display text-4xl text-primary mb-2">50+</p>
          <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Countries</p>
        </div>
        <div>
          <p className="font-display text-4xl text-primary mb-2">2k+</p>
          <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Placements</p>
        </div>
        <div>
          <p className="font-display text-4xl text-primary mb-2">300+</p>
          <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Partners</p>
        </div>
        <div>
          <p className="font-display text-4xl text-primary mb-2">98%</p>
          <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Visa Success</p>
        </div>
      </div>
      
      <h3 className="font-display text-3xl mb-12">Our Leadership</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {[
          { name: "Sarah Jenkins", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
          { name: "David Chen", role: "Head of Operations", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
          { name: "Amira Hassan", role: "VP of Partnerships", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" }
        ].map((person, i) => (
          <div key={i}>
            <img src={person.img} alt={person.name} className="w-32 h-32 rounded-full object-cover mx-auto mb-4" referrerPolicy="no-referrer" />
            <h4 className="font-bold text-lg">{person.name}</h4>
            <p className="text-sm text-gray-500">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-white">
    <PageHeader 
      title={title} 
      subtitle="Coming soon"
      bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
    />
    <section className="py-24 px-6 max-w-4xl mx-auto text-center">
      <h2 className="font-display text-4xl mb-8">We are working on this page.</h2>
      <p className="text-gray-600 text-lg">Please check back later.</p>
    </section>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<FindJobs />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/relocation" element={<Relocation />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/visa-guide" element={<VisaGuide />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/talent-solutions" element={<TalentSolutions />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
