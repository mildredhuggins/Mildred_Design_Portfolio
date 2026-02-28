import { motion } from "motion/react";

const galleryImages = [
  "https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%201%2C%202026%2C%2010_30_51%20PM.png",
  "https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%201%2C%202026%2C%2010_35_43%20PM.png",
  "https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%201%2C%202026%2C%2010_52_18%20PM.png",
  "https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%201%2C%202026%2C%2010_57_16%20PM.png"
];

export function Gallery() {
  return (
    <div className="container-custom py-12">
      <header className="mb-16 max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-display font-medium mb-4"
        >
          Gallery
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted"
        >
          A collection of my design explorations and visual concepts.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-card overflow-hidden bg-black/5 border border-border/50"
          >
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
