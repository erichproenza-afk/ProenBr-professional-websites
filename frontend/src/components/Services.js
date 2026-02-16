import { motion } from 'framer-motion';
import { FileText, Layers, Layout, Search, Settings } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: FileText,
      title: t.services.items.onepage.title,
      description: t.services.items.onepage.description,
      size: 'md:col-span-1',
    },
    {
      icon: Layers,
      title: t.services.items.multipage.title,
      description: t.services.items.multipage.description,
      size: 'md:col-span-2',
    },
    {
      icon: Layout,
      title: t.services.items.portfolio.title,
      description: t.services.items.portfolio.description,
      size: 'md:col-span-2',
    },
    {
      icon: Search,
      title: t.services.items.seo.title,
      description: t.services.items.seo.description,
      size: 'md:col-span-1',
    },
    {
      icon: Settings,
      title: t.services.items.custom.title,
      description: t.services.items.custom.description,
      size: 'md:col-span-3',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50" data-testid="services-section">
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
            {t.services.badge}
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-navy-900 tracking-tight mb-4" data-testid="services-title">
            {t.services.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-body" data-testid="services-subtitle">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`${service.size} group bg-white rounded-2xl border border-slate-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              data-testid={`service-card-${index}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand-100 transition-colors duration-200">
                <service.icon className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 font-heading mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
