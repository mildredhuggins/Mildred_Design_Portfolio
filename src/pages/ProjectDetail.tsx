import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { projects } from "../data/projects";
import { ArrowLeft } from "lucide-react";

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="container-custom py-24 text-center">
        <h1 className="text-4xl font-display font-medium mb-4">Project not found</h1>
        <p className="text-muted mb-8">The project you're looking for doesn't exist or has been moved.</p>
        <Link to="/projects" className="text-accent hover:underline">Return to projects</Link>
      </div>
    );
  }

  return (
    <article className="pb-24">
      {/* Header */}
      <header className="container-custom py-12 lg:py-20">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-text transition-colors mb-8 group">
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Work
        </Link>
        
        <div className="grid-custom">
          <div className="col-span-4 sm:col-span-8 lg:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium mb-6 leading-tight"
            >
              {project.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted leading-relaxed"
            >
              {project.outcome}
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-4 sm:col-span-8 lg:col-span-3 lg:col-start-10 mt-12 lg:mt-0 flex flex-col gap-6"
          >
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-2">Role</h3>
              <p className="font-medium">{project.role}</p>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-2">Timeline</h3>
              <p className="font-medium">{project.year}</p>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-2">Tools</h3>
              <p className="font-medium">{project.tools.join(", ")}</p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 mb-24"
      >
        <div className="aspect-[16/9] md:aspect-[21/9] rounded-card overflow-hidden bg-black/5">
          <img 
            src={project.heroImage} 
            alt={`${project.title} hero`} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="container-custom grid-custom relative">
        {/* Sticky Sidebar */}
        <div className="hidden lg:block col-span-3">
          <div className="sticky top-32 flex flex-col gap-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-2">Contents</h3>
            <nav className="flex flex-col gap-3">
              <a href="#context" className="text-sm font-medium text-muted hover:text-text transition-colors">Context</a>
              <a href="#process" className="text-sm font-medium text-muted hover:text-text transition-colors">Process</a>
              <a href="#artifacts" className="text-sm font-medium text-muted hover:text-text transition-colors">Artifacts</a>
              <a href="#results" className="text-sm font-medium text-muted hover:text-text transition-colors">Results</a>
              <a href="#reflection" className="text-sm font-medium text-muted hover:text-text transition-colors">Reflection</a>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-4 sm:col-span-8 lg:col-span-7 lg:col-start-5 flex flex-col gap-24">
          
          <section id="context" className="scroll-mt-32">
            <h2 className="text-3xl font-display font-medium mb-6">Context & Problem</h2>
            <p className="text-lg text-muted leading-relaxed mb-8">{project.problem}</p>
            
            <h3 className="text-xl font-medium mb-4">Constraints</h3>
            <ul className="list-disc list-inside space-y-2 text-muted">
              {project.constraints.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </section>

          <section id="process" className="scroll-mt-32">
            <h2 className="text-3xl font-display font-medium mb-8">Process</h2>
            <div className="flex flex-col gap-12">
              {project.process.map((step, i) => (
                <div key={i} className="border-l-2 border-border/50 pl-6 py-1">
                  <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                  <p className="text-muted leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="artifacts" className="scroll-mt-32">
            <h2 className="text-3xl font-display font-medium mb-8">Key Artifacts</h2>
            <div className="flex flex-col gap-12">
              {project.artifacts.map((artifact, i) => (
                <figure key={i} className="flex flex-col gap-4">
                  <div className="rounded-card overflow-hidden bg-black/5 border border-border/50">
                    <img 
                      src={artifact.url} 
                      alt={artifact.caption} 
                      className="w-full h-auto"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <figcaption className="text-sm text-muted text-center font-mono">{artifact.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section id="results" className="scroll-mt-32">
            <h2 className="text-3xl font-display font-medium mb-6">Results</h2>
            <div className="bg-surface border border-border/50 rounded-card p-8 shadow-sm">
              <ul className="space-y-4">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent mt-1">✦</span>
                    <span className="text-lg font-medium">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="reflection" className="scroll-mt-32">
            <h2 className="text-3xl font-display font-medium mb-6">Reflection</h2>
            <div className="bg-black/5 rounded-card p-8 border-l-4 border-accent">
              <p className="text-lg leading-relaxed italic text-muted">
                "{project.reflection}"
              </p>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}
