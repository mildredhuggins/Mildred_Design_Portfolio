import { motion } from "motion/react";

export function About() {
  return (
    <div className="container-custom py-12">
      {/* Header */}
      <header className="mb-16 max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-display font-medium mb-4"
        >
          About
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted"
        >
          I'm a designer who believes in quiet confidence.
        </motion.p>
      </header>

      <div className="grid-custom">
        {/* Main Content */}
        <div className="col-span-4 sm:col-span-8 lg:col-span-7 flex flex-col gap-12">
          
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-display font-medium mb-4">My Story</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                My journey into design wasn't linear. I started in cognitive science, fascinated by how people process information and make decisions. I soon realized that the most direct way to apply this knowledge was through shaping the digital environments we interact with every day.
              </p>
              <p>
                I focus on creating systems that are robust, interfaces that are intuitive, and experiences that feel natural. I believe that the best design is often invisible—it simply works so well that you don't even notice it.
              </p>
              <p>
                Currently, I'm completing my degree while taking on freelance projects that challenge me to grow as a systems thinker and visual designer.
              </p>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-display font-medium mb-6">Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface border border-border/50 p-6 rounded-card shadow-sm">
                <h3 className="font-medium mb-2">Clarity over Cleverness</h3>
                <p className="text-sm text-muted">Interfaces should be immediately understandable. I prioritize clear communication over trendy aesthetics.</p>
              </div>
              <div className="bg-surface border border-border/50 p-6 rounded-card shadow-sm">
                <h3 className="font-medium mb-2">Systems Thinking</h3>
                <p className="text-sm text-muted">I design components that scale, ensuring consistency across the entire product ecosystem.</p>
              </div>
              <div className="bg-surface border border-border/50 p-6 rounded-card shadow-sm">
                <h3 className="font-medium mb-2">Inclusive by Default</h3>
                <p className="text-sm text-muted">Accessibility isn't an afterthought. It's a fundamental requirement for good design.</p>
              </div>
              <div className="bg-surface border border-border/50 p-6 rounded-card shadow-sm">
                <h3 className="font-medium mb-2">Iterative Craft</h3>
                <p className="text-sm text-muted">Great design comes from continuous refinement, testing, and a willingness to be wrong.</p>
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-display font-medium mb-4">Outside Design</h2>
            <p className="text-muted leading-relaxed">
              When I'm not pushing pixels, you can find me brewing unnecessarily complicated pour-over coffee, trying to keep my houseplants alive, or exploring the city with my analog camera. I believe that stepping away from the screen is essential for creative longevity.
            </p>
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
            
            {/* Portrait Placeholder */}
            <div className="aspect-[3/4] rounded-card overflow-hidden bg-black/5 border border-border/50">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale opacity-80"
              />
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Toolkit</h3>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Framer", "React", "Tailwind CSS", "Webflow", "Principle", "Adobe CC", "HTML/CSS"].map(tool => (
                  <span key={tool} className="px-3 py-1 bg-surface border border-border/50 rounded-pill text-sm font-medium text-muted">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
