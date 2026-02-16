import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, Facebook, Send, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Input } from './ui/input';
import { Toaster, toast } from 'sonner';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display-only form, no backend submission
    setIsSubmitted(true);
    toast.success(t.contact.form.success);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.info.phone.label,
      value: t.contact.info.phone.value,
      href: 'tel:+17252582043',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: MessageCircle,
      label: t.contact.info.whatsapp.label,
      value: t.contact.info.whatsapp.value,
      href: 'https://wa.me/5541992271492',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Mail,
      label: t.contact.info.email.label,
      value: t.contact.info.email.value,
      href: 'mailto:erichproenza@gmail.com',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      value: '@erich.proenzahidalgo',
      href: 'https://www.facebook.com/erich.proenzahidalgo',
      color: 'bg-indigo-100 text-indigo-600',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-white" data-testid="contact-section">
      <Toaster position="top-center" richColors />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-brand-100 text-brand-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4"
          >
            {t.contact.badge}
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-navy-900 tracking-tight mb-4" data-testid="contact-title">
            {t.contact.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-body" data-testid="contact-subtitle">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-heading text-navy-900 mb-6">
              {t.footer.contact}
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200 group"
                  data-testid={`contact-info-${index}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color} transition-transform duration-200 group-hover:scale-110`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="font-medium text-navy-900">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick WhatsApp CTA */}
            <motion.a
              href="https://wa.me/17252582043"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-8 inline-flex items-center gap-3 bg-green-500 text-white rounded-full px-8 py-4 font-medium hover:bg-green-600 transition-colors duration-200 shadow-lg shadow-green-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="whatsapp-cta"
            >
              <MessageCircle className="w-5 h-5" />
              {t.hero.cta.preview}
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-2">
                    {t.contact.form.name}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-12 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder={t.contact.form.name}
                    required
                    data-testid="contact-name-input"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">
                    {t.contact.form.email}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-12 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder={t.contact.form.email}
                    required
                    data-testid="contact-email-input"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent focus:outline-none transition-all resize-none"
                    placeholder={t.contact.form.message}
                    required
                    data-testid="contact-message-input"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-full text-white text-base font-medium px-8 py-4 transition-all duration-200 ${
                    isSubmitted
                      ? 'bg-green-500'
                      : 'bg-navy-900 hover:bg-navy-900/90 shadow-lg shadow-navy-900/20'
                  }`}
                  whileHover={!isSubmitted ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitted ? { scale: 0.98 } : {}}
                  data-testid="contact-submit-btn"
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      {t.contact.form.success}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t.contact.form.submit}
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
