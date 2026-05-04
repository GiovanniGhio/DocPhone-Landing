'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    // Remove the # and get the element
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);
    
    if (element) {
      // Close menu first
      setIsOpen(false);
      // Scroll to element with offset for fixed header
      setTimeout(() => {
        const headerHeight = 80; // Approximate header height
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }, 50);
    }
  };

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Demo', href: '#demo' },
    { name: 'Módulos', href: '#modulos' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Preguntas', href: '#faq' },
  ];

  const whatsappUrl = 'https://wa.me/5493777717778?text=Hola,%20estoy%20interesado%20en%20DocPhone';

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50"
    >
      {/* Pill container — floats centered with margin top */}
      <div className="mx-auto px-4 pt-4">
        <div
          className="max-w-5xl mx-auto rounded-2xl transition-all duration-500"
          style={{
            background: isScrolled
              ? 'rgba(255,255,255,0.92)'
              : 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: isScrolled
              ? '0 4px 32px rgba(37,99,235,0.10), 0 1px 0 rgba(255,255,255,0.9) inset, 0 0 0 1px rgba(37,99,235,0.10)'
              : '0 2px 20px rgba(37,99,235,0.07), 0 0 0 1px rgba(37,99,235,0.07)',
          }}
        >
          <nav className="px-5 py-3">
            <div className="flex justify-between items-center">

              {/* Logo */}
              <a href="#inicio" className="flex items-center gap-3 group">
                {/* Logo mark — white bg so transparent PNG shows correctly */}
                <div className="relative flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #ffffff 60%, #eff6ff)',
                      boxShadow: '0 0 0 1.5px rgba(37,99,235,0.18), 0 2px 8px rgba(37,99,235,0.12)',
                    }}
                  >
                    <Image
                      src="/images/icons/logoDocphonee.png"
                      alt="DocPhone logo"
                      width={34}
                      height={34}
                      style={{ width: 'auto', height: 'auto' }}
                      className="object-contain"
                    />
                  </div>
                  {/* Subtle glow on hover */}
                  <div
                    className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.18), transparent 70%)', filter: 'blur(6px)' }}
                  />
                </div>

                {/* Wordmark */}
                <div className="leading-none">
                  <span
                    className="block text-[17px] font-bold tracking-tight"
                    style={{
                      background: 'linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    DocPhone
                  </span>
                  <span className="block text-[10px] font-medium tracking-widest uppercase" style={{ color: '#93c5fd', marginTop: '1px' }}>
                    by MedBot
                  </span>
                </div>
              </a>

              {/* Desktop nav */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 group"
                    style={{ color: '#374151' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#1d4ed8')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#374151')}
                  >
                    <span
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ background: 'rgba(37,99,235,0.06)' }}
                    />
                    <span className="relative">{item.name}</span>
                  </a>
                ))}
              </div>

              {/* CTA button */}
              <div className="hidden md:block">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
                    boxShadow: '0 2px 12px rgba(37,99,235,0.3), inset 0 1px 0 rgba(255,255,255,0.15)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(37,99,235,0.45), inset 0 1px 0 rgba(255,255,255,0.15)';
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 12px rgba(37,99,235,0.3), inset 0 1px 0 rgba(255,255,255,0.15)';
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                  }}
                >
                  Contactar
                </a>
              </div>

              {/* Mobile burger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200"
                style={{ background: isOpen ? 'rgba(37,99,235,0.1)' : 'transparent', color: '#374151' }}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile dropdown */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="overflow-hidden md:hidden"
                >
                  <div className="pt-3 pb-1 flex flex-col gap-1 border-t mt-3" style={{ borderColor: 'rgba(37,99,235,0.1)' }}>
                    {navItems.map((item, i) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150 cursor-pointer"
                        style={{ color: '#374151' }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(37,99,235,0.06)';
                          (e.currentTarget as HTMLAnchorElement).style.color = '#1d4ed8';
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          (e.currentTarget as HTMLAnchorElement).style.color = '#374151';
                        }}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                    <div className="pt-2 pb-1">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white w-full"
                        style={{
                          background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
                          boxShadow: '0 2px 12px rgba(37,99,235,0.25)',
                        }}
                      >
                        Contactar
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
