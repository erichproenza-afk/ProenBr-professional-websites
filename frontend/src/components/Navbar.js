import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'testimonials', label: t.nav.testimonials },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            data-testid="logo"
          >
            <span className="text-2xl font-bold font-heading text-navy-900">
              Proen<span className="text-brand-500">BR</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-slate-600 hover:text-navy-900 transition-colors duration-200"
                data-testid={`nav-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-100 rounded-full p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-white text-navy-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
                data-testid="lang-en"
                aria-label="Switch to English"
              >
                <span className="text-base">🇺🇸</span>
                <span>EN</span>
              </button>
              <button
                onClick={() => setLanguage('pt')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  language === 'pt'
                    ? 'bg-white text-navy-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
                data-testid="lang-pt"
                aria-label="Switch to Portuguese"
              >
                <span className="text-base">🇧🇷</span>
                <span>PT</span>
              </button>
            </div>
            <motion.a
              href="https://wa.me/17252582043"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-navy-900 text-white text-sm font-medium px-6 py-2.5 hover:bg-navy-900/90 transition-colors duration-200 shadow-lg shadow-navy-900/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="nav-cta"
            >
              {t.hero.cta.preview}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-navy-900" />
            ) : (
              <Menu className="w-6 h-6 text-navy-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100"
            data-testid="mobile-menu"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left px-4 py-3 text-slate-600 hover:text-navy-900 hover:bg-slate-50 rounded-lg transition-colors"
                    data-testid={`mobile-nav-${link.id}`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="flex items-center gap-2 px-4 py-2 mt-2">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      language === 'en'
                        ? 'bg-navy-900 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                    data-testid="mobile-lang-en"
                  >
                    <span>🇺🇸</span> EN
                  </button>
                  <button
                    onClick={() => setLanguage('pt')}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      language === 'pt'
                        ? 'bg-navy-900 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                    data-testid="mobile-lang-pt"
                  >
                    <span>🇧🇷</span> PT
                  </button>
                </div>
                <a
                  href="https://wa.me/17252582043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 mx-4 inline-flex items-center justify-center rounded-full bg-navy-900 text-white text-sm font-medium px-6 py-3"
                  data-testid="mobile-cta"
                >
                  {t.hero.cta.preview}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
