import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { Chip } from "../components/Chip";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  // Extract unique tags from all projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(p => p.tags.forEach(t => tags.add(t)));
    return ["All", ...Array.from(tags)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter(p => p.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="container-custom py-12">
      <header className="mb-16 max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-display font-medium mb-4"
        >
          Work
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted"
        >
          A selection of case studies, experiments, and professional projects.
        </motion.p>
      </header>

      {/* Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-3 mb-12"
      >
        {allTags.map(tag => (
          <Chip 
            key={tag} 
            label={tag} 
            active={activeFilter === tag} 
            onClick={() => setActiveFilter(tag)} 
          />
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div layout className="grid-custom">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="col-span-4 sm:col-span-4 lg:col-span-4"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredProjects.length === 0 && (
        <div className="py-24 text-center text-muted">
          No projects found for this category.
        </div>
      )}
    </div>
  );
}
