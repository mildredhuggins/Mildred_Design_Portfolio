import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../components/Button";

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-wash noise-overlay">
        
        {/* Video Background with Purple Filter */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-accent-3/20 mix-blend-overlay z-10" />
          <div className="absolute inset-0 bg-bg/70 z-10" /> {/* Darken for text readability */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/Hero%20Video/MillieatDesk%20%282%29.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Overlay Text */}
        <div className="container-custom relative z-20 text-center flex flex-col items-center gap-8 mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-[72px] font-display font-normal leading-[0.95] text-text max-w-4xl tracking-[-0.02em]"
          >
            {t('home.hero_title_1')} <br className="hidden sm:block" />
            <span className="text-text">{t('home.hero_title_2')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted max-w-2xl"
          >
            {t('home.hero_desc')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-2"
          >
            <span className="px-4 py-1.5 rounded-full border border-border bg-surface text-sm font-medium text-text shadow-sm">
              {t('home.chip_1')}
            </span>
            <span className="px-4 py-1.5 rounded-full border border-border bg-surface text-sm font-medium text-text shadow-sm">
              {t('home.chip_2')}
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mt-4"
          >
            <Link to="/gallery" className="button-primary">
              {t('home.view_work')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Feature Section */}
      <section className="section-spacing container-custom">
        <div className="grid-custom items-center">
          <div className="col-span-4 sm:col-span-8 lg:col-span-5 flex flex-col gap-6">
            <h2 className="text-4xl sm:text-5xl font-display font-normal tracking-[-0.02em]">Visual Explorations</h2>
            <p className="text-lg text-muted">
              Dive into a collection of my design explorations, visual concepts, and creative experiments.
            </p>
            <div>
              <Link to="/gallery" className="button-primary inline-block">{t('home.view_gallery')}</Link>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-8 lg:col-span-6 lg:col-start-7 mt-12 lg:mt-0">
            <Link to="/gallery" className="block rounded-[var(--radius)] overflow-hidden bg-black/5 aspect-[4/3] group relative shadow-[var(--shadow)]">
              <img 
                src="https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%201%2C%202026%2C%2010_30_51%20PM.png" 
                alt="Gallery preview" 
                className="w-full h-full object-cover transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
