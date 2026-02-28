import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex flex-col ${featured ? "col-span-4 sm:col-span-8 lg:col-span-8" : "col-span-4 sm:col-span-4 lg:col-span-4"}`}
    >
      <Link to={`/projects/${project.id}`} className="block overflow-hidden rounded-card bg-black/5 aspect-[4/3] relative">
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </Link>
      
      <div className="mt-4 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium group-hover:underline decoration-1 underline-offset-4">
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </h3>
          <span className="text-sm text-muted font-mono">{project.year}</span>
        </div>
        <p className="text-muted text-sm line-clamp-1">{project.outcome}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs font-medium text-muted bg-black/5 px-2 py-1 rounded-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
