/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Lock, 
  Settings, 
  Activity, 
  Database, 
  ChevronRight, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X,
  Search,
  Bell,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  Users,
  Target,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { Page, Service, BlogPost, FAQItem } from './types';

// --- DATA ---

const SERVICES: Service[] = [
  { id: '1', title: 'Advanced Firewall', description: 'Next-generation protection for your digital perimeter.', iconName: 'shield' },
  { id: '2', title: 'Network Protection', description: 'Proactive defense against unauthorized access attempts.', iconName: 'lock' },
  { id: '3', title: 'Backup Systems', description: 'Automated data redundancy and instant recovery solutions.', iconName: 'database' },
  { id: '4', title: 'Access Control', description: 'Biometric and multi-factor authentication systems for your premises.', iconName: 'settings' },
  { id: '5', title: 'IT Monitoring', description: '24/7 infrastructure surveillance and real-time threat detection.', iconName: 'activity' },
];

const BLOG_POSTS: BlogPost[] = [
  { id: '1', title: 'Cybersecurity Trends for SMEs in 2026', excerpt: 'How small businesses are adapting to increasingly complex digital threats.', date: 'April 15, 2026', category: 'Insights', image: 'https://picsum.photos/seed/cyber1/800/600' },
  { id: '2', title: 'The Importance of Proactive Defense', excerpt: 'Why waiting for an attack is a strategy destined for failure.', date: 'April 02, 2026', category: 'Best Practices', image: 'https://picsum.photos/seed/cyber2/800/600' },
  { id: '3', title: 'Zero Trust Architecture Explained', excerpt: 'A simple guide for non-technical retail and manufacturing owners.', date: 'March 20, 2026', category: 'Tutorial', image: 'https://picsum.photos/seed/cyber3/800/600' },
];

const FAQS: FAQItem[] = [
  { question: "Why do SMEs need dedicated cybersecurity?", answer: "SMEs are often targeted because they typically have fewer defenses. We provide enterprise-grade security tailored to small business budgets." },
  { question: "What is proactive monitoring?", answer: "Instead of reacting after a breach, we use AI to detect anomalies and stop threats before they enter your network." },
  { question: "How long does implementation take?", answer: "Most our modular solutions can be deployed within 1-2 weeks depending on your current infrastructure complexity." },
  { question: "Can you assist with industry compliance?", answer: "Yes, our systems are designed to meet strict retail and manufacturing data protection standards." },
];

// --- COMPONENTS ---

const Nav = ({ activePage, setPage }: { activePage: Page, setPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const links: { id: Page, label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'blog', label: 'News' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bento-card rounded-none border-x-0 border-t-0 border-b-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setPage('home')}
        >
          <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
            <Shield className="w-6 h-6 text-accent-blue" />
          </div>
          <span className="font-bold text-xl tracking-tight text-text-slate">
            TechTrend<span className="text-accent-blue font-medium">Solutions</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => setPage(link.id)}
              className={`text-sm font-medium transition-colors hover:text-accent-blue ${
                activePage === link.id ? 'text-accent-blue' : 'text-text-muted'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => setPage('contact')}
            className="px-5 py-2.5 bg-primary text-white font-bold rounded-full text-sm hover:bg-accent-blue transition-all hover:scale-105 active:scale-95"
          >
            Get Free Audit
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-text-slate" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-cyber-black border-b border-white/5 p-6 flex flex-col gap-4"
          >
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => { setPage(link.id); setIsOpen(false); }}
                className={`text-lg font-medium text-left ${
                  activePage === link.id ? 'text-accent-blue' : 'text-text-muted'
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setPage }: { setPage: (p: Page) => void }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-cyber-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-6 h-6 text-accent-blue" />
            <span className="font-bold text-xl text-text-slate">TechTrend</span>
          </div>
          <p className="text-text-muted text-sm leading-relaxed mb-6">
            Pioneering digital innovative cybersecurity for SMEs since 2015. 
            Protecting Danish businesses with tailored infrastructure solutions.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-cyber-dark rounded-full text-text-muted hover:text-accent-blue transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-cyber-dark rounded-full text-text-muted hover:text-accent-blue transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-text-slate font-bold mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            <li><button onClick={() => setPage('home')} className="text-text-muted text-sm hover:text-accent-blue transition-colors">Home</button></li>
            <li><button onClick={() => setPage('services')} className="text-text-muted text-sm hover:text-accent-blue transition-colors">Services</button></li>
            <li><button onClick={() => setPage('about')} className="text-text-muted text-sm hover:text-accent-blue transition-colors">About Us</button></li>
            <li><button onClick={() => setPage('blog')} className="text-text-muted text-sm hover:text-accent-blue transition-colors">Knowledge Base</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-text-slate font-bold mb-6">Support</h4>
          <ul className="flex flex-col gap-3">
            <li><button onClick={() => setPage('faq')} className="text-text-muted text-sm hover:text-accent-blue transition-colors">FAQ</button></li>
            <li><button onClick={() => setPage('contact')} className="text-text-muted text-sm hover:text-accent-blue transition-colors">Contact</button></li>
            <li><a href="#" className="text-text-muted text-sm hover:text-accent-blue transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-text-muted text-sm hover:text-accent-blue transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-1">
          <h4 className="text-text-slate font-bold mb-6">Our Newsletter</h4>
          <p className="text-text-muted text-sm mb-4">Stay updated with the latest in cybersecurity trends.</p>
          {subscribed ? (
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4" /> Thank you!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address"
                required
                className="bg-cyber-dark border border-white/10 rounded-lg px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit"
                className="bg-primary text-white font-bold px-4 py-2 rounded-lg text-sm hover:bg-accent-blue transition-colors"
              >
                Join
              </button>
            </form>
          )}
          <p className="text-[10px] text-slate-500 mt-2 italic">Join our 650+ monthly readers.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-xs">© 2026 TechTrend Solutions ApS. All rights reserved.</p>
        <p className="text-slate-500 text-xs">Innovation for SMEs | Made in Denmark</p>
      </div>
    </footer>
  );
};

// --- PAGE VIEWS ---

const Home = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">
    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-[repeat(3,minmax(240px,auto))] gap-4">
      {/* Hero Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:col-span-2 md:row-span-2 bento-card hero-gradient !p-10"
      >
        <div className="cyber-pattern" />
        <div>
          <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-accent-blue text-[10px] font-bold uppercase tracking-widest rounded-md mb-6">
            Trusted by 500+ SMEs
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1] text-gradient">
            Next-Gen<br />Cybersecurity<br />for Modern B2B
          </h1>
          <p className="text-text-muted text-base md:text-lg max-w-sm mb-10 leading-relaxed font-light">
            Strategic protection for retail and manufacturing. We don't just secure—we scale your defense.
          </p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setPage('services')}
            className="px-6 py-3 bg-text-slate text-cyber-black font-bold rounded-full text-sm hover:scale-105 transition-transform"
          >
            View Solutions
          </button>
          <button 
            onClick={() => setPage('about')}
            className="px-6 py-3 bg-transparent border border-text-muted text-text-slate font-bold rounded-full text-sm hover:bg-slate-800 transition-colors"
          >
            Our Story
          </button>
        </div>
      </motion.div>

      {/* Services Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="md:col-span-1 md:row-span-2 bento-card bg-cyber-dark"
      >
        <div className="card-title">Core Services</div>
        <div className="flex flex-col gap-6 mt-4">
          {SERVICES.slice(0, 3).map((service, i) => (
            <div key={service.id} className={`${i < 2 ? 'border-b border-white/5 pb-6' : ''}`}>
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-accent-blue mb-3">
                {service.iconName === 'shield' && <Shield className="w-4 h-4" />}
                {service.iconName === 'lock' && <Lock className="w-4 h-4" />}
                {service.iconName === 'database' && <Database className="w-4 h-4" />}
              </div>
              <div className="font-bold text-sm mb-1">{service.title}</div>
              <div className="text-[11px] text-text-muted leading-relaxed">{service.description}</div>
            </div>
          ))}
        </div>
        <button 
          onClick={() => setPage('services')}
          className="mt-6 text-[11px] font-bold text-accent-blue uppercase tracking-widest hover:translate-x-1 transition-transform inline-flex items-center gap-1"
        >
          All Solutions <ChevronRight className="w-3 h-3" />
        </button>
      </motion.div>

      {/* News Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="md:col-span-1 md:row-span-1 bento-card"
      >
        <div className="card-title">Industry News</div>
        <div className="mt-4">
          <div className="font-bold text-sm mb-2 leading-snug">{BLOG_POSTS[0].title}</div>
          <p className="text-[11px] text-text-muted">{BLOG_POSTS[0].excerpt}</p>
        </div>
        <button 
          onClick={() => setPage('blog')}
          className="text-[11px] font-bold text-accent-blue uppercase tracking-widest mt-4"
        >
          Read Full Story →
        </button>
      </motion.div>

      {/* Impact Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="md:col-span-1 md:row-span-1 bento-card"
      >
        <div className="card-title">Our Impact</div>
        <div className="mt-4">
          <div className="text-4xl font-extrabold text-text-slate">7+</div>
          <div className="text-[11px] text-text-muted mt-1">Expert Team Members</div>
        </div>
        <p className="text-[12px] text-text-slate/80 leading-relaxed mt-4">
          Founded in 2015 by Jonathan & Camilla to bridge the security gap for SMEs.
        </p>
      </motion.div>

      {/* Contact Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="md:col-span-2 md:row-span-1 bento-card bg-gradient-to-r from-primary/10 to-blue-900/10"
      >
        <div className="card-title">Secure Your Lead</div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-2">
          <div>
            <h2 className="text-2xl font-bold">Start with a Newsletter</h2>
            <p className="text-text-muted text-sm mt-1">Join 650+ pros receiving weekly cyber insights.</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <input 
              type="text" 
              placeholder="Email address" 
              className="bg-cyber-black border border-slate-700/50 rounded-lg px-4 py-2.5 text-xs text-white flex-grow sm:w-44 focus:outline-none focus:border-primary"
            />
            <button className="px-5 py-2.5 bg-primary text-white font-bold rounded-lg text-xs hover:bg-accent-blue transition-colors">
              Join
            </button>
          </div>
        </div>
      </motion.div>

      {/* FAQ Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="md:col-span-2 md:row-span-1 bento-card"
      >
        <div className="card-title">Common Questions</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
          <div>
            <div className="font-bold text-sm mb-1">{FAQS[0].question}</div>
            <p className="text-[11px] text-text-muted leading-relaxed">{FAQS[0].answer}</p>
          </div>
          <div>
            <div className="font-bold text-sm mb-1">{FAQS[1].question}</div>
            <p className="text-[11px] text-text-muted leading-relaxed">{FAQS[1].answer}</p>
          </div>
        </div>
        <button 
          onClick={() => setPage('faq')}
          className="text-[11px] font-bold text-accent-blue uppercase mt-4 inline-flex items-center gap-1"
        >
          More FAQs <ChevronRight className="w-3 h-3" />
        </button>
      </motion.div>
    </div>
  </div>
);

const ServicesPage = () => (
  <div className="pt-32 pb-32 max-w-7xl mx-auto px-6">
    <div className="text-center mb-24">
      <h1 className="text-5xl md:text-7xl font-black mb-8 text-text-slate tracking-tighter">Our Infrastructure <span className="text-gradient italic">Intelligence</span></h1>
      <p className="max-w-2xl mx-auto text-text-muted text-lg md:text-xl font-light">
        We provide a proactive approach to product development, relying heavily on customer collaboration and real-world feedback.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {SERVICES.map((s, i) => (
        <motion.div 
          key={s.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bento-card p-10 group hover:border-accent-blue/50 transition-all flex gap-8 items-start"
        >
          <div className="p-4 bg-primary/10 rounded-2xl text-accent-blue group-hover:scale-110 transition-transform shrink-0">
            {s.iconName === 'shield' && <Shield className="w-8 h-8" />}
            {s.iconName === 'lock' && <Lock className="w-8 h-8" />}
            {s.iconName === 'database' && <Database className="w-8 h-8" />}
            {s.iconName === 'settings' && <Settings className="w-8 h-8" />}
            {s.iconName === 'activity' && <Activity className="w-8 h-8" />}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-text-slate">{s.title}</h3>
            <p className="text-text-muted leading-relaxed mb-6 text-sm">
              {s.description} Built specifically for the high-demand environments of retail logistics and manufacturing workflows.
            </p>
            <ul className="space-y-3">
              {['24/7 Monitoring', 'Compliance Ready', 'Zero-Latency Setup'].map(feat => (
                <li key={feat} className="flex items-center gap-2 text-[10px] font-mono text-text-muted uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {feat}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Trust Section */}
    <div className="mt-32 p-12 bento-card bg-cyber-dark/80 text-center">
      <h3 className="text-3xl font-bold mb-6 text-text-slate">Need a tailored solution?</h3>
      <p className="text-text-muted mb-8 max-w-xl mx-auto">We don't believe in one-size-fits-all. Our engineers work with you to map your unique risks.</p>
      <button className="px-8 py-4 bg-primary text-white font-black rounded-full hover:bg-accent-blue transition-all">Book Technical Consultation</button>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="pt-32 pb-32 max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
      <div>
        <span className="text-accent-blue font-bold tracking-widest uppercase text-[10px] mb-4 block">Since 2015</span>
        <h1 className="text-5xl md:text-7xl font-black mb-8 text-text-slate tracking-tighter leading-none">Born from <span className="text-gradient italic">Vision.</span><br /> Driven by Growth.</h1>
        <p className="text-text-muted text-lg mb-6 leading-relaxed font-light">
          Founded by Jonathan and Camilla, TechTrend Solutions began with a singular mission: to democratize elite cybersecurity for Danish SMEs. 
        </p>
        <p className="text-text-muted text-lg mb-10 leading-relaxed font-light">
          What started as a startup is now a robust team of 7 experts, including dedicated interns who are the future of our digital defense. We pride ourselves on adaptation and innovation.
        </p>
        <div className="grid grid-cols-3 gap-8 border-t border-white/5 pt-8">
          <div>
            <div className="text-3xl font-bold text-text-slate mb-1">2015</div>
            <div className="text-[10px] text-text-muted font-mono uppercase">Established</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-text-slate mb-1">7</div>
            <div className="text-[10px] text-text-muted font-mono uppercase">Experts</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-text-slate mb-1">100+</div>
            <div className="text-[10px] text-text-muted font-mono uppercase">Clients</div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-[4/5] rounded-[32px] overflow-hidden bento-card p-0">
          <img src="https://picsum.photos/seed/office-team/800/1000" alt="Team" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-text-slate font-bold text-xl mb-2">Jonathan & Camilla</h3>
            <p className="text-text-muted text-sm">Founders & Visionaries</p>
          </div>
        </div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[60px] -z-10" />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bento-card p-12">
        <Cpu className="w-10 h-10 text-accent-blue mb-8" />
        <h2 className="text-3xl font-bold mb-6 text-text-slate">Innovation at Core</h2>
        <p className="text-text-muted leading-relaxed">
          We don't just use technology—we shape it. By staying at the forefront of digital trends, we ensure our SME partners are never left behind in the tech race.
        </p>
      </div>
      <div className="bento-card p-12">
        <Target className="w-10 h-10 text-accent-blue mb-8" />
        <h2 className="text-3xl font-bold mb-6 text-text-slate">Strategic Partnership</h2>
        <p className="text-text-muted leading-relaxed">
          We position ourselves not as a vendor, but as a strategic arm of your business. Your security is our reputation.
        </p>
      </div>
    </div>
  </div>
);

const BlogPage = () => (
  <div className="pt-32 pb-32 max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
      <div>
        <h1 className="text-5xl font-black text-white mb-4 tracking-tight">TechTrend <span className="text-gradient italic">Dispatch</span></h1>
        <p className="text-text-muted text-lg">Insights and trends for the modern digital business.</p>
      </div>
      <div className="relative group">
        <input 
          type="text" 
          placeholder="Search articles..." 
          className="bg-cyber-dark border border-white/5 rounded-full py-3 px-10 text-sm w-full md:w-64 focus:outline-none focus:border-primary transition-all"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {BLOG_POSTS.map(post => (
        <article key={post.id} className="group cursor-pointer">
          <div className="aspect-[16/10] rounded-[24px] overflow-hidden mb-6 relative border border-white/5">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase rounded-full">
              {post.category}
            </div>
          </div>
          <p className="text-text-muted text-[10px] font-mono mb-3 uppercase tracking-widest">{post.date}</p>
          <h2 className="text-xl font-bold text-text-slate mb-4 group-hover:text-accent-blue transition-colors leading-snug">
            {post.title}
          </h2>
          <p className="text-text-muted text-sm mb-6 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>
          <button className="flex items-center gap-2 text-xs font-bold text-text-slate group-hover:gap-4 transition-all uppercase tracking-widest">
            Read More <ChevronRight className="w-4 h-4 text-accent-blue" />
          </button>
        </article>
      ))}
    </div>
  </div>
);

const FAQPage = () => (
  <div className="pt-32 pb-32 max-w-3xl mx-auto px-6">
    <div className="text-center mb-20">
      <HelpCircle className="w-12 h-12 text-accent-blue mx-auto mb-6" />
      <h1 className="text-5xl font-black text-text-slate mb-4 tracking-tight">Common <span className="text-gradient italic">Questions</span></h1>
      <p className="text-text-muted">Everything you need to know about SME cybersecurity.</p>
    </div>

    <div className="space-y-6">
      {FAQS.map((faq, i) => (
        <div key={i} className="bento-card p-6 border-white/5">
          <h3 className="text-lg font-bold text-text-slate mb-3">{faq.question}</h3>
          <p className="text-text-muted leading-relaxed text-sm">{faq.answer}</p>
        </div>
      ))}
    </div>

    <div className="mt-20 p-10 bento-card bg-primary/5 flex items-center justify-between gap-8 flex-col sm:flex-row">
      <div className="flex gap-4 items-center">
        <Mail className="w-6 h-6 text-accent-blue" />
        <div>
          <h4 className="text-text-slate font-bold">Have more questions?</h4>
          <p className="text-text-muted text-sm">Our support team is here to help.</p>
        </div>
      </div>
      <button className="px-6 py-3 bg-primary text-white rounded-xl text-sm font-bold hover:bg-accent-blue transition-colors">
        Contact Support
      </button>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="pt-32 pb-32 max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div>
        <h1 className="text-5xl md:text-7xl font-black text-text-slate mb-8 tracking-tighter">Let's Secure <br /><span className="text-gradient italic">Your Business.</span></h1>
        <p className="text-text-muted text-lg mb-12 font-light leading-relaxed">
          Ready to take the next step towards a safer digital future? Fill out the form below or reach out directly to our founders.
        </p>

        <div className="space-y-8">
          <div className="flex gap-6 items-start">
            <div className="p-4 bg-cyber-dark rounded-2xl border border-white/5">
              <Mail className="w-6 h-6 text-accent-blue" />
            </div>
            <div>
              <h4 className="text-text-slate font-bold mb-1">Email Us</h4>
              <p className="text-text-muted">hi@techtrend.dk</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="p-4 bg-cyber-dark rounded-2xl border border-white/5">
              <Phone className="w-6 h-6 text-accent-blue" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">Call Us</h4>
              <p className="text-text-muted">+45 22 33 44 55</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="p-4 bg-cyber-dark rounded-2xl border border-white/5">
              <MapPin className="w-6 h-6 text-accent-blue" />
            </div>
            <div>
              <h4 className="text-text-slate font-bold mb-1">Visit Us</h4>
              <p className="text-text-muted">Innovationsparken 12, <br />2300 København S, Denmark</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bento-card p-10">
        <form className="space-y-6" onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-text-muted tracking-widest">Full Name</label>
              <input type="text" className="w-full bg-cyber-black border border-white/5 p-4 rounded-xl text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-text-muted tracking-widest">Email</label>
              <input type="email" className="w-full bg-cyber-black border border-white/5 p-4 rounded-xl text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@company.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase text-text-muted tracking-widest">Company</label>
            <input type="text" className="w-full bg-cyber-black border border-white/5 p-4 rounded-xl text-white focus:outline-none focus:border-primary transition-colors" placeholder="Tech Manufacturing A/S" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase text-text-muted tracking-widest">Interest</label>
            <select className="w-full bg-cyber-black border border-white/5 p-4 rounded-xl text-white focus:outline-none focus:border-primary transition-colors appearance-none">
              <option>Full Security Audit</option>
              <option>Network Protection</option>
              <option>Backup Solutions</option>
              <option>General Inquiry</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase text-text-muted tracking-widest">Message</label>
            <textarea rows={4} className="w-full bg-cyber-black border border-white/5 p-4 rounded-xl text-white focus:outline-none focus:border-primary transition-colors" placeholder="Tell us about your infrastructure..." />
          </div>
          <button className="w-full py-4 bg-primary text-white font-black rounded-full hover:bg-accent-blue transition-all hover:scale-[1.02] active:scale-[0.98]">
            Send Request
          </button>
        </form>
      </div>
    </div>
  </div>
);

// --- MAIN WRAPPER ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setPage={setCurrentPage} />;
      case 'services': return <ServicesPage />;
      case 'about': return <AboutPage />;
      case 'blog': return <BlogPage />;
      case 'contact': return <ContactPage />;
      case 'faq': return <FAQPage />;
      default: return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cyber-black overflow-x-hidden selection:bg-primary/30">
      <Nav activePage={currentPage} setPage={setCurrentPage} />
      
      <main className="flex-grow relative">
        {/* Background Noise/Grid */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} 
        />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setPage={setCurrentPage} />
    </div>
  );
}
