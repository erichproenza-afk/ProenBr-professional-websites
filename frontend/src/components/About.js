import { motion } from 'framer-motion';
import { Award, Zap, DollarSign } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t.about.features.experience.title,
      description: t.about.features.experience.description,
      color: 'bg-brand-100 text-brand-600',
    },
    {
      icon: Zap,
      title: t.about.features.delivery.title,
      description: t.about.features.delivery.description,
      color: 'bg-amber-100 text-amber-600',
    },
    {
      icon: DollarSign,
      title: t.about.features.affordable.title,
      description: t.about.features.affordable.description,
      color: 'bg-green-100 text-green-600',
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
    <section id="about" className="py-20 md:py-28 bg-white" data-testid="about-section">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1630673489068-d329fa4e2767?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjB3ZWIlMjBkZXNpZ24lMjB0ZWFtJTIwbWVldGluZyUyMGJyYWluc3Rvcm1pbmclMjB3aGl0ZWJvYXJkfGVufDB8fHx8MTc3MTI4MDAzMHww&ixlib=rb-4.1.0&q=85"
                alt="Professional team collaboration"
                className="w-full h-auto object-cover"
                data-testid="about-image"
              />
            </div>
            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-navy-900 text-white rounded-2xl p-6 shadow-xl"
            >
              <p className="text-4xl font-bold font-heading">50+</p>
              <p className="text-sm text-slate-300 mt-1">Projects Delivered</p>
            </motion.div>
            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-100 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-brand-100 text-brand-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4"
            >
              {t.about.badge}
            </motion.span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-navy-900 tracking-tight mb-6" data-testid="about-title">
              {t.about.title}
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 font-body" data-testid="about-description">
              {t.about.description}
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200"
                  data-testid={`about-feature-${index}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 font-heading">{feature.title}</h3>
                    <p className="text-slate-600 font-body">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
