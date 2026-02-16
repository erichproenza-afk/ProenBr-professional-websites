import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Portfolio() {
  const { t } = useLanguage();

  const projects = [
    {
      key: 'royalflush',
      image: 'https://images.unsplash.com/photo-1651381921372-8648ace77ec7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGhvbWUlMjBvZmZpY2UlMjBkZXNrJTIwbWFjYm9vayUyMHBsYW50JTIwbWluaW1hbGlzdHxlbnwwfHx8fDE3NzEyODAwMzF8MA&ixlib=rb-4.1.0&q=85',
    },
    {
      key: 'denicleaning',
      image: 'https://images.unsplash.com/photo-1522591755584-8ef01cdf743b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxjbGVhbiUyMG1vZGVybiUyMGhvbWUlMjBvZmZpY2UlMjBkZXNrJTIwbWFjYm9vayUyMHBsYW50JTIwbWluaW1hbGlzdHxlbnwwfHx8fDE3NzEyODAwMzF8MA&ixlib=rb-4.1.0&q=85',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white" data-testid="portfolio-section">
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
            {t.portfolio.badge}
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-navy-900 tracking-tight mb-4" data-testid="portfolio-title">
            {t.portfolio.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-body" data-testid="portfolio-subtitle">
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => {
            const projectData = t.portfolio.projects[project.key];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative rounded-2xl overflow-hidden bg-slate-100"
                data-testid={`portfolio-card-${index}`}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={projectData.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-block bg-brand-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
                      {projectData.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white font-heading mb-2">
                      {projectData.title}
                    </h3>
                    <p className="text-slate-200 text-sm mb-4 font-body">
                      {projectData.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-white text-navy-900 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-slate-100 transition-colors"
                      data-testid={`portfolio-view-${index}`}
                    >
                      {t.portfolio.viewProject}
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
                {/* Default state info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white group-hover:opacity-0 transition-opacity duration-300">
                  <span className="text-sm text-brand-600 font-medium">
                    {projectData.category}
                  </span>
                  <h3 className="text-xl font-bold text-navy-900 font-heading">
                    {projectData.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
