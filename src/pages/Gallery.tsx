import { motion } from "motion/react";

const galleryProjects = [
  {
    id: 1,
    title: "Brand Identity",
    role: "Visual Design",
    year: "2025",
    image: "https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%201%2C%202026%2C%2010_30_51%20PM.png",
    color: "var(--accent)"
  },
  {
    id: 2,
    title: "Digital Product",
    role: "UX/UI",
    year: "2025",
    image: "https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%201%2C%202026%2C%2010_35_43%20PM.png",
    color: "var(--accent-2)"
  },
  {
    id: 3,
    title: "Motion System",
    role: "Animation",
    year: "2024",
    image: "https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%201%2C%202026%2C%2010_52_18%20PM.png",
    color: "var(--accent-3)"
  },
  {
    id: 4,
    title: "Editorial Layout",
    role: "Typography",
    year: "2024",
    image: "https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%201%2C%202026%2C%2010_57_16%20PM.png",
    color: "var(--highlight)"
  }
];

export function Gallery() {
  return (
    <div className="container-custom py-12">
      <header className="mb-16 max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-6xl font-display font-normal mb-6 tracking-[-0.02em]"
        >
          Selected Work
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted"
        >
          A collection of my design explorations, visual systems, and creative experiments.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {galleryProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div 
              className="rounded-[var(--radius)] overflow-hidden mb-4 relative p-4 sm:p-6 transition-all duration-300 ease-out"
              style={{ backgroundColor: `color-mix(in srgb, ${project.color} 15%, transparent)` }}
            >
              <div className="rounded-[calc(var(--radius)-4px)] overflow-hidden shadow-[var(--shadow)]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.02]"
                />
              </div>
            </div>
            
            <div className="flex items-baseline justify-between px-2">
              <h3 className="text-xl font-display font-medium text-text transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:-translate-y-1 relative inline-block">
                {project.title}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-text transition-all duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:w-full"></span>
              </h3>
              <div className="flex items-center gap-3 text-sm text-muted">
                <span>{project.role}</span>
                <span className="w-1 h-1 rounded-full bg-border"></span>
                <span>{project.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
