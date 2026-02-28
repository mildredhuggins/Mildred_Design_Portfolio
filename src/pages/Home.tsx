import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../components/Button";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function Home() {
  const { t } = useTranslation();
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div className="container-custom">
      {/* Hero Section */}
      <section className="section-spacing grid-custom items-center">
        <div className="col-span-4 sm:col-span-8 lg:col-span-7 flex flex-col gap-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium leading-tight"
          >
            {t('home.hero_title_1')} <br className="hidden sm:block" />
            <span className="text-muted">{t('home.hero_title_2')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted max-w-xl"
          >
            {t('home.hero_desc')}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <Button to="/gallery" variant="primary">{t('home.view_gallery')}</Button>
            <Button to="/resume" variant="secondary">{t('home.download_resume')}</Button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-4 sm:col-span-8 lg:col-span-4 lg:col-start-9 mt-12 lg:mt-0"
        >
          <div className="bg-surface border border-border/50 rounded-card p-6 shadow-sm">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">{t('home.currently')}</h3>
            <ul className="space-y-4">
              <li className="flex justify-between text-sm border-b border-border/30 pb-2">
                <span className="text-muted">{t('home.location')}</span>
                <span className="font-medium">San Francisco, CA</span>
              </li>
              <li className="flex justify-between text-sm border-b border-border/30 pb-2">
                <span className="text-muted">{t('home.availability')}</span>
                <span className="font-medium text-success flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                  {t('home.open_roles')}
                </span>
              </li>
              <li className="flex justify-between text-sm border-b border-border/30 pb-2">
                <span className="text-muted">{t('home.tools')}</span>
                <span className="font-medium">Figma, Framer, React</span>
              </li>
              <li className="flex justify-between text-sm pb-2">
                <span className="text-muted">{t('home.latest')}</span>
                <Link to={`/projects/${featuredProjects[0]?.id}`} className="font-medium hover:text-accent hover:underline underline-offset-4 transition-all">
                  {featuredProjects[0]?.title}
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="section-spacing border-t border-border/50">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-display font-medium">{t('home.selected_work')}</h2>
            <p className="text-muted mt-2">{t('home.selected_work_desc')}</p>
          </div>
          <Link to="/projects" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors group">
            {t('home.view_all')}
            <motion.span 
              className="inline-block"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >→</motion.span>
          </Link>
        </div>

        <div className="grid-custom">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              featured={index === 0} 
            />
          ))}
        </div>
        
        <div className="mt-8 sm:hidden flex justify-center">
          <Button to="/projects" variant="secondary" className="w-full">{t('home.view_all_projects')}</Button>
        </div>
      </section>

      {/* Mini About */}
      <section className="section-spacing border-t border-border/50">
        <div className="grid-custom">
          <div className="col-span-4 sm:col-span-8 lg:col-span-5">
            <h2 className="text-3xl font-display font-medium mb-6">{t('home.about_me')}</h2>
            <p className="text-muted leading-relaxed mb-6">
              {t('home.about_desc')}
            </p>
            <Button to="/about" variant="ghost" className="px-0 hover:bg-transparent hover:text-accent">
              {t('home.read_bio')}
            </Button>
          </div>
          <div className="col-span-4 sm:col-span-8 lg:col-span-6 lg:col-start-7 mt-12 lg:mt-0">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-6">{t('home.core_strengths')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">{t('home.ux_ui')}</h4>
                <p className="text-sm text-muted">{t('home.ux_ui_desc')}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">{t('home.design_systems')}</h4>
                <p className="text-sm text-muted">{t('home.design_systems_desc')}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">{t('home.motion')}</h4>
                <p className="text-sm text-muted">{t('home.motion_desc')}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">{t('home.prototyping')}</h4>
                <p className="text-sm text-muted">{t('home.prototyping_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
