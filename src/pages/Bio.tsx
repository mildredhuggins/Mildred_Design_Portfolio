import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function Bio() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <main className="max-w-[1120px] mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-30">
        <motion.header 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className="mb-16 max-w-[680px]"
        >
          <h1 className="font-display text-[clamp(36px,5vw,48px)] leading-[1.1] font-bold tracking-[-0.02em] text-text mb-4">
            {t('bio.title')}
          </h1>
          <p className="text-base text-muted font-normal">
            {t('bio.subtitle')}
          </p>
        </motion.header>

        <motion.div 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: 0.06, ease: "easeOut" }}
          className="flex flex-wrap gap-2 mb-12"
        >
          <span className="font-display text-[13px] font-medium text-muted bg-surface border border-border rounded-full px-3.5 py-1 leading-5">
            {t('bio.tags.graphic_design')}
          </span>
          <span className="font-display text-[13px] font-medium text-muted bg-surface border border-border rounded-full px-3.5 py-1 leading-5">
            {t('bio.tags.acrylic_painting')}
          </span>
          <span className="font-display text-[13px] font-medium text-muted bg-surface border border-border rounded-full px-3.5 py-1 leading-5">
            {t('bio.tags.typography')}
          </span>
          <span className="font-display text-[13px] font-medium text-muted bg-surface border border-border rounded-full px-3.5 py-1 leading-5">
            {t('bio.tags.color_systems')}
          </span>
          <span className="font-display text-[13px] font-medium text-muted bg-surface border border-border rounded-full px-3.5 py-1 leading-5">
            {t('bio.tags.bay_area')}
          </span>
          <span className="font-display text-[13px] font-medium text-muted bg-surface border border-border rounded-full px-3.5 py-1 leading-5">
            {t('bio.tags.maracaibo')}
          </span>
        </motion.div>

        <motion.hr 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: 0.08, ease: "easeOut" }}
          className="border-t border-border mb-16"
        />

        <motion.div 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 items-start"
        >
          <div className="text-base leading-[1.75] text-text font-light">
            <p className="mb-8">
              {t('bio.p1')}
            </p>

            <p className="mb-8">
              {t('bio.p2_1')}
              <a className="text-text underline decoration-[#2F6BFF] underline-offset-[3px] decoration-[1.5px] hover:text-[#2F6BFF] transition-colors font-normal" href="https://en.wikipedia.org/wiki/Alejandro_Otero" target="_blank" rel="noopener noreferrer">Alejandro Otero</a>
              {t('bio.p2_2')}
              <a className="text-text underline decoration-[#2F6BFF] underline-offset-[3px] decoration-[1.5px] hover:text-[#2F6BFF] transition-colors font-normal" href="https://en.wikipedia.org/wiki/Marisol_(artist)" target="_blank" rel="noopener noreferrer">Marisol</a>
              {t('bio.p2_3')}
              <a className="text-text underline decoration-[#2F6BFF] underline-offset-[3px] decoration-[1.5px] hover:text-[#2F6BFF] transition-colors font-normal" href="https://en.wikipedia.org/wiki/Henri_Matisse" target="_blank" rel="noopener noreferrer">Matisse</a>
              {t('bio.p2_4')}
              <a className="text-text underline decoration-[#2F6BFF] underline-offset-[3px] decoration-[1.5px] hover:text-[#2F6BFF] transition-colors font-normal" href="https://en.wikipedia.org/wiki/Richard_Diebenkorn" target="_blank" rel="noopener noreferrer">Diebenkorn</a>
              {t('bio.p2_5')}
              <a className="text-text underline decoration-[#2F6BFF] underline-offset-[3px] decoration-[1.5px] hover:text-[#2F6BFF] transition-colors font-normal" href="https://en.wikipedia.org/wiki/Edgar_Degas" target="_blank" rel="noopener noreferrer">Degas</a>
              {t('bio.p2_6')}
            </p>

            <div className="bg-surface border border-border border-l-[3px] border-l-[#2F6BFF] rounded-2xl px-6 py-6 my-8 text-[15px] italic font-light text-muted leading-[1.65]">
              {t('bio.callout')}
            </div>

            <p>
              {t('bio.p3')}
            </p>
          </div>

          <aside className="flex flex-row flex-wrap lg:flex-col gap-6" aria-label="Quick info">
            {/* Portrait */}
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-black/5 border border-border/50">
              <img 
                src="https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/Self%20Photos/MildredH.png" 
                alt="Mildred Huggins" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6 flex-1 min-w-[220px] lg:min-w-0">
              <p className="font-display text-[11px] font-semibold tracking-[0.1em] uppercase text-muted mb-4">{t('bio.sidebar.currently')}</p>
              <p className="text-sm text-text font-normal leading-[1.6]" dangerouslySetInnerHTML={{ __html: t('bio.sidebar.currently_val') }}></p>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6 flex-1 min-w-[220px] lg:min-w-0">
              <p className="font-display text-[11px] font-semibold tracking-[0.1em] uppercase text-muted mb-4">{t('bio.sidebar.roots')}</p>
              <p className="text-sm text-text font-normal leading-[1.6]">{t('bio.sidebar.roots_val')}</p>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6 flex-1 min-w-[220px] lg:min-w-0">
              <p className="font-display text-[11px] font-semibold tracking-[0.1em] uppercase text-muted mb-4">{t('bio.sidebar.influences')}</p>
              <ul className="flex flex-col gap-2">
                <li className="text-sm flex items-center gap-2 text-text before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-[#2F6BFF] before:shrink-0">
                  <a className="text-text underline decoration-transparent underline-offset-2 hover:text-[#2F6BFF] hover:decoration-[#2F6BFF] transition-all" href="https://en.wikipedia.org/wiki/Alejandro_Otero" target="_blank" rel="noopener noreferrer">Alejandro Otero</a>
                </li>
                <li className="text-sm flex items-center gap-2 text-text before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-[#2F6BFF] before:shrink-0">
                  <a className="text-text underline decoration-transparent underline-offset-2 hover:text-[#2F6BFF] hover:decoration-[#2F6BFF] transition-all" href="https://en.wikipedia.org/wiki/Marisol_(artist)" target="_blank" rel="noopener noreferrer">Marisol</a>
                </li>
                <li className="text-sm flex items-center gap-2 text-text before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-[#2F6BFF] before:shrink-0">
                  <a className="text-text underline decoration-transparent underline-offset-2 hover:text-[#2F6BFF] hover:decoration-[#2F6BFF] transition-all" href="https://en.wikipedia.org/wiki/Henri_Matisse" target="_blank" rel="noopener noreferrer">Henri Matisse</a>
                </li>
                <li className="text-sm flex items-center gap-2 text-text before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-[#2F6BFF] before:shrink-0">
                  <a className="text-text underline decoration-transparent underline-offset-2 hover:text-[#2F6BFF] hover:decoration-[#2F6BFF] transition-all" href="https://en.wikipedia.org/wiki/Richard_Diebenkorn" target="_blank" rel="noopener noreferrer">Richard Diebenkorn</a>
                </li>
                <li className="text-sm flex items-center gap-2 text-text before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-[#2F6BFF] before:shrink-0">
                  <a className="text-text underline decoration-transparent underline-offset-2 hover:text-[#2F6BFF] hover:decoration-[#2F6BFF] transition-all" href="https://en.wikipedia.org/wiki/Edgar_Degas" target="_blank" rel="noopener noreferrer">Edgar Degas</a>
                </li>
              </ul>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6 flex-1 min-w-[220px] lg:min-w-0">
              <p className="font-display text-[11px] font-semibold tracking-[0.1em] uppercase text-muted mb-4">{t('bio.sidebar.practice')}</p>
              <p className="text-sm text-text font-normal leading-[1.6]">{t('bio.sidebar.practice_val')}</p>
            </div>
          </aside>
        </motion.div>
      </main>

      <motion.section 
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.24, delay: 0.14, ease: "easeOut" }}
        className="max-w-[1120px] mx-auto px-4 sm:px-6 pb-16 sm:pb-30" 
        aria-label="Tools & Skills"
      >
        <h2 className="font-display text-[11px] font-semibold tracking-[0.1em] uppercase text-muted mb-8 pt-16 border-t border-border">
          {t('bio.skills.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-surface border border-border rounded-2xl p-6">
            <p className="font-display text-[13px] font-semibold text-text mb-4 flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#2F6BFF] before:shrink-0">
              {t('bio.skills.adobe')}
            </p>
            <ul className="flex flex-col gap-1.5">
              <li className="text-sm text-muted font-light pl-3.5 relative before:content-['-'] before:absolute before:left-0 before:text-border">InDesign</li>
              <li className="text-sm text-muted font-light pl-3.5 relative before:content-['-'] before:absolute before:left-0 before:text-border">Illustrator</li>
              <li className="text-sm text-muted font-light pl-3.5 relative before:content-['-'] before:absolute before:left-0 before:text-border">Photoshop</li>
            </ul>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-6">
            <p className="font-display text-[13px] font-semibold text-text mb-4 flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#2F6BFF] before:shrink-0">
              {t('bio.skills.productivity')}
            </p>
            <ul className="flex flex-col gap-1.5">
              <li className="text-sm text-muted font-light pl-3.5 relative before:content-['-'] before:absolute before:left-0 before:text-border">Google Workspace</li>
            </ul>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-6">
            <p className="font-display text-[13px] font-semibold text-text mb-4 flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#2F6BFF] before:shrink-0">
              {t('bio.skills.emerging')}
            </p>
            <ul className="flex flex-col gap-1.5">
              <li className="text-sm text-muted font-light pl-3.5 relative before:content-['-'] before:absolute before:left-0 before:text-border">AI Prompting</li>
              <li className="text-sm text-muted font-light pl-3.5 relative before:content-['-'] before:absolute before:left-0 before:text-border">Context Engineering</li>
            </ul>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
