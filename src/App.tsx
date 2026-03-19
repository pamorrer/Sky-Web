/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Zap, 
  Search, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  Instagram, 
  Linkedin, 
  MessageSquare,
  ChevronRight,
  Star,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Processo', href: '#processo' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-sky-dark/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-sky-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-2xl font-display font-bold tracking-tight text-white">Sky<span className="text-sky-primary">Web</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-400 hover:text-sky-primary transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contato" className="px-5 py-2.5 bg-sky-primary hover:bg-sky-accent text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-sky-primary/20">
            Solicitar orçamento
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-sky-dark border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-slate-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contato" 
              className="w-full py-4 bg-sky-primary text-white rounded-xl text-center font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solicitar orçamento
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/djwp1njjr/video/upload/v1773929897/3129957-uhd_3840_2160_25fps_2_tap5rq.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-[32px] md:text-[50px] lg:text-[60px] font-display font-bold leading-[1.1] text-white mb-6">
            Crie sites e landing pages que <span className="text-sky-primary">geram clientes</span> todos os dias
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Criamos experiências digitais estratégicas para transformar visitantes em vendas.
          </p>
          <div className="flex justify-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contato" 
              className="px-10 py-4 bg-sky-primary hover:bg-sky-accent text-white rounded-full font-bold text-lg transition-all shadow-2xl shadow-sky-primary/30"
            >
              Solicitar orçamento
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white/40 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

const AuthorityMarquee = () => {
  return (
    <div className="sky-marquee-container">
      <div className="sky-marquee-track">
        <div className="sky-marquee-group">
          <span>• Alta Conversão</span>
          <span>• Design Profissional</span>
          <span>• SEO Otimizado</span>
          <span>• Entrega Rápida</span>
          <span>• Foco em Vendas</span>
        </div>

        <div className="sky-marquee-group">
          <span>• Alta Conversão</span>
          <span>• Design Profissional</span>
          <span>• SEO Otimizado</span>
          <span>• Entrega Rápida</span>
          <span>• Foco em Vendas</span>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Monitor className="text-sky-primary" size={32} />,
      title: "Sites Profissionais",
      desc: "Sites institucionais modernos, rápidos e totalmente responsivos para sua empresa."
    },
    {
      icon: <Zap className="text-sky-primary" size={32} />,
      title: "Landing Pages",
      desc: "Páginas de alta conversão focadas em transformar visitantes em leads qualificados."
    },
    {
      icon: <Search className="text-sky-primary" size={32} />,
      title: "Otimização SEO",
      desc: "Apareça nas primeiras páginas do Google e seja encontrado por quem procura seus serviços."
    },
    {
      icon: <Smartphone className="text-sky-primary" size={32} />,
      title: "Design Responsivo",
      desc: "Experiência perfeita em qualquer dispositivo: desktop, tablet ou smartphone."
    }
  ];

  return (
    <section id="servicos" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">Nossos Serviços</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Soluções digitais completas para posicionar sua marca como autoridade no mercado.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl hover:border-sky-primary/30 transition-all group"
            >
              <div className="mb-6 p-4 bg-sky-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Differentials = () => {
  const diffs = [
    { title: "Design focado em vendas", desc: "Não criamos apenas sites bonitos, criamos ferramentas de vendas." },
    { title: "Estratégia + tecnologia", desc: "Unimos o melhor do marketing estratégico com as tecnologias mais rápidas." },
    { title: "Sites ultra rápidos", desc: "Performance otimizada para garantir que nenhum cliente desista por lentidão." },
    { title: "Suporte contínuo", desc: "Acompanhamento pós-entrega para garantir que tudo funcione perfeitamente." }
  ];

  return (
    <section id="diferenciais" className="py-32 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8">Por que escolher a Sky Web?</h2>
          <div className="space-y-8">
            {diffs.map((diff, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-sky-primary/20 flex items-center justify-center text-sky-primary">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{diff.title}</h4>
                  <p className="text-slate-400">{diff.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square glass rounded-full flex items-center justify-center p-12">
            <div className="text-center">
              <div className="text-6xl font-display font-bold text-sky-primary mb-2">100%</div>
              <div className="text-xl text-white font-medium">Foco em Resultados</div>
            </div>
          </div>
          {/* Floating stats */}
          <div className="absolute top-0 right-0 glass p-4 rounded-2xl shadow-xl">
            <div className="text-sky-primary font-bold">+300% ROI</div>
          </div>
          <div className="absolute bottom-10 left-0 glass p-4 rounded-2xl shadow-xl">
            <div className="text-sky-primary font-bold">SEO Rank #1</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { title: "E-commerce Premium", category: "Site Profissional", img: "https://picsum.photos/seed/shop/600/400" },
    { title: "SaaS Dashboard", category: "Landing Page", img: "https://picsum.photos/seed/app/600/400" },
    { title: "Agência de Viagens", category: "Site Institucional", img: "https://picsum.photos/seed/travel/600/400" },
    { title: "Clínica Estética", category: "Landing Page", img: "https://picsum.photos/seed/beauty/600/400" },
    { title: "Consultoria Financeira", category: "Site Profissional", img: "https://picsum.photos/seed/finance/600/400" },
    { title: "App de Delivery", category: "Landing Page", img: "https://picsum.photos/seed/food/600/400" }
  ];

  return (
    <section id="portfolio" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">Nosso Portfólio</h2>
            <p className="text-slate-400">Conheça alguns dos projetos que transformaram negócios.</p>
          </div>
          <a href="#contato" className="text-sky-primary font-bold flex items-center gap-2 hover:underline">
            Ver todos os projetos <ChevronRight size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6">
                <img 
                  src={project.img} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="text-white">
                    <div className="text-sm font-medium text-sky-primary mb-1">{project.category}</div>
                    <div className="text-xl font-bold">{project.title}</div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-sky-primary transition-colors">{project.title}</h3>
              <p className="text-slate-500">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { number: "01", title: "Planejamento", desc: "Analisamos seu negócio, público e objetivos para traçar a melhor estratégia." },
    { number: "02", title: "Design", desc: "Criamos um layout exclusivo e focado na experiência do seu usuário." },
    { number: "03", title: "Desenvolvimento", desc: "Transformamos o design em um site rápido, seguro e otimizado." },
    { number: "04", title: "Entrega", desc: "Lançamos seu site e acompanhamos os primeiros resultados de perto." }
  ];

  return (
    <section id="processo" className="py-32 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">Como Funciona</h2>
          <p className="text-slate-400">Um processo transparente e eficiente para garantir o sucesso do seu projeto.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="text-5xl font-display font-semibold text-sky-primary mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-6 text-white/10">
                  <ChevronRight size={40} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const feedbacks = [
    { name: "Ricardo Silva", role: "CEO na TechSolutions", text: "A Sky Web entregou uma landing page que triplicou nossa taxa de conversão em apenas um mês. O design é impecável.", rating: 5 },
    { name: "Mariana Costa", role: "Marketing Manager", text: "Profissionalismo do início ao fim. O site ficou rápido e exatamente como imaginamos. Recomendo muito!", rating: 5 },
    { name: "André Santos", role: "Fundador da FitLife", text: "Excelente trabalho de SEO. Hoje estamos na primeira página do Google para nossas principais palavras-chave.", rating: 5 }
  ];

  return (
    <section id="depoimentos" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">O que dizem nossos clientes</h2>
          <p className="text-slate-400">A satisfação de quem já confiou na Sky Web.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {feedbacks.map((f, i) => (
            <div key={i} className="glass p-10 rounded-3xl relative">
              <Quote className="absolute top-8 right-8 text-sky-primary/20" size={40} />
              <div className="flex gap-1 mb-6">
                {[...Array(f.rating)].map((_, i) => <Star key={i} size={16} className="fill-sky-primary text-sky-primary" />)}
              </div>
              <p className="text-lg text-slate-300 italic mb-8 leading-relaxed">"{f.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sky-primary/20 flex items-center justify-center font-bold text-sky-primary">
                  {f.name[0]}
                </div>
                <div>
                  <div className="font-bold text-white">{f.name}</div>
                  <div className="text-sm text-slate-500">{f.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="py-32 relative overflow-hidden bg-[#0A0A0A]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-8">Pronto para ter um site que <span className="text-gradient">realmente vende?</span></h2>
            <p className="text-xl text-slate-400 mb-12">Não perca mais tempo com sites amadores. Vamos construir a presença digital que sua empresa merece.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-sky-primary">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">WhatsApp</div>
                  <div className="text-lg font-bold">+55 (11) 99999-9999</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-sky-primary">
                  <Instagram size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Instagram</div>
                  <div className="text-lg font-bold">@skyweb.digital</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-10 rounded-3xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">Nome Completo</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-sky-primary outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">E-mail Corporativo</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-sky-primary outline-none transition-all" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400">Mensagem</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-sky-primary outline-none transition-all" placeholder="Conte-nos sobre seu projeto..."></textarea>
              </div>
              <button className="w-full py-4 bg-sky-primary hover:bg-sky-accent text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-sky-primary/20">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-sky-dark">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sky-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-xl font-display font-bold text-white">Sky<span className="text-sky-primary">Web</span></span>
        </div>
        
        <div className="text-slate-500 text-sm">
          © 2026 Sky Web Digital. Todos os direitos reservados.
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-sky-primary transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-sky-primary transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-sky-primary transition-colors"><MessageSquare size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <AuthorityMarquee />
      <Services />
      <Differentials />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <MessageSquare size={32} />
      </a>
    </div>
  );
}
