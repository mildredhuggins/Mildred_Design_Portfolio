import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function Bio() {
  const { t } = useTranslation();

  return (
    <div className="container-custom py-12">
      {/* Header */}
      <header className="mb-16 max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-display font-medium mb-4"
        >
          {t('nav.bio')}
        </motion.h1>
      </header>

      <div className="grid-custom">
        {/* Main Content */}
        <div className="col-span-4 sm:col-span-8 lg:col-span-7 flex flex-col gap-12">
          
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-6 text-muted leading-relaxed text-lg">
              <p>
                Mildred Huggins is a San Francisco Bay Area graphic artist and acrylic painter whose work balances clarity with color—design systems that feel effortless, and paintings that move like memory. The Bay is an everyday muse: fog-soft gradients, sharp geometry of bridges, the rhythm of neighborhoods. But her palette and perspective also reach back to Maracaibo, Venezuela, where heat, music, family rituals, and visual abundance continue to shape how she sees form and feeling.
              </p>
              <p>
                Across both design and painting, Mildred builds with structure first—grids, tempo, repetition—then lets color do the storytelling. You can feel the pulse of Alejandro Otero’s optical cadence and the wit and presence of Marisol’s sculptural portraits, filtered through the fearless color of Matisse, the coastal light of Diebenkorn, and Degas’ sense of composition and gesture. (Her studio rule: nothing is added unless it earns its place.)
              </p>
              <p>
                When she isn’t painting or refining a typographic system, you’ll find her roaming museums, lingering at art festivals, or taking long walks outdoors—collecting shapes, shadows, and small human moments that later reappear as bold fields, quiet details, and work that’s both modern and unmistakably personal.
              </p>
            </div>
          </motion.section>

        </div>

        {/* Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="col-span-4 sm:col-span-8 lg:col-span-4 lg:col-start-9 mt-12 lg:mt-0"
        >
          <div className="sticky top-32 flex flex-col gap-12">
            
            {/* Portrait */}
            <div className="aspect-[3/4] rounded-card overflow-hidden bg-black/5 border border-border/50">
              <img 
                src="https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/Self%20Photos/ChatGPT%20Image%20Feb%2028%2C%202026%2C%2002_10_44%20PM.png" 
                alt="Mildred Huggins" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
