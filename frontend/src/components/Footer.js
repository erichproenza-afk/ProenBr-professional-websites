import { motion } from 'framer-motion';
import { Phone, Mail, Facebook, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'testimonials', label: t.nav.testimonials },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-navy-900 text-white py-16" data-testid="footer">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-block mb-4">
              <span className="text-2xl font-bold font-heading">
                Proen<span className="text-brand-400">BR</span>
              </span>
            </a>
            <p className="text-slate-400 font-body leading-relaxed max-w-md mb-6">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/17252582043"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                data-testid="footer-whatsapp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/erich.proenzahidalgo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                data-testid="footer-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:erichproenza@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                data-testid="footer-email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold font-heading mb-4">{t.footer.links}</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-white transition-colors font-body"
                    data-testid={`footer-link-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold font-heading mb-4">{t.footer.contact}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+17252582043"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-body"
                  data-testid="footer-phone-usa"
                >
                  <Phone className="w-4 h-4" />
                  +1 725 258 2043
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5541992271492"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-body"
                  data-testid="footer-phone-brazil"
                >
                  <MessageCircle className="w-4 h-4" />
                  +55 41 99227 1492
                </a>
              </li>
              <li>
                <a
                  href="mailto:erichproenza@gmail.com"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-body"
                  data-testid="footer-email-link"
                >
                  <Mail className="w-4 h-4" />
                  erichproenza@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-slate-400 text-sm font-body">
            © {new Date().getFullYear()} ProenBR. {t.footer.rights}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
