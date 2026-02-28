import { motion } from "motion/react";
import { Button } from "../components/Button";

export function Resume() {
  return (
    <div className="container-custom py-12">
      <header className="mb-16 max-w-2xl flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-display font-medium mb-4"
          >
            Resume
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted"
          >
            Experience, education, and skills.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button href="/resume.pdf" variant="primary">Download PDF</Button>
        </motion.div>
      </header>

      <div className="grid-custom">
        <div className="col-span-4 sm:col-span-8 lg:col-span-8 lg:col-start-3 flex flex-col gap-16">
          
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-display font-medium mb-8 border-b border-border/50 pb-4">Experience</h2>
            <div className="flex flex-col gap-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-8">
                <div className="sm:col-span-1 text-sm text-muted font-mono mt-1">
                  2023 — Present
                </div>
                <div className="sm:col-span-3">
                  <h3 className="text-xl font-medium mb-1">Freelance Product Designer</h3>
                  <p className="text-muted mb-4">Self-Employed</p>
                  <ul className="list-disc list-inside text-muted space-y-2">
                    <li>Partnered with early-stage startups to establish their initial design systems and brand identities.</li>
                    <li>Designed and shipped end-to-end features for a fintech dashboard, resulting in a 34% increase in daily active users.</li>
                    <li>Developed responsive marketing sites using Webflow and Framer.</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-8">
                <div className="sm:col-span-1 text-sm text-muted font-mono mt-1">
                  Summer 2022
                </div>
                <div className="sm:col-span-3">
                  <h3 className="text-xl font-medium mb-1">UX Design Intern</h3>
                  <p className="text-muted mb-4">TechCorp Inc.</p>
                  <ul className="list-disc list-inside text-muted space-y-2">
                    <li>Conducted user research and usability testing for an internal enterprise tool.</li>
                    <li>Collaborated with senior designers to refine the component library in Figma.</li>
                    <li>Presented research findings to stakeholders, influencing the Q3 product roadmap.</li>
                  </ul>
                </div>
              </div>

            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-display font-medium mb-8 border-b border-border/50 pb-4">Education</h2>
            <div className="flex flex-col gap-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-8">
                <div className="sm:col-span-1 text-sm text-muted font-mono mt-1">
                  2021 — 2025
                </div>
                <div className="sm:col-span-3">
                  <h3 className="text-xl font-medium mb-1">B.S. Cognitive Science</h3>
                  <p className="text-muted mb-2">University of California</p>
                  <p className="text-sm text-muted">Focus on Human-Computer Interaction. Minor in Digital Arts.</p>
                </div>
              </div>

            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-display font-medium mb-8 border-b border-border/50 pb-4">Awards & Recognition</h2>
            <div className="flex flex-col gap-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-8">
                <div className="sm:col-span-1 text-sm text-muted font-mono mt-1">
                  2024
                </div>
                <div className="sm:col-span-3">
                  <h3 className="text-xl font-medium mb-1">Awwwards Honorable Mention</h3>
                  <p className="text-muted">For the design and development of the Lumina Eco website.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-8">
                <div className="sm:col-span-1 text-sm text-muted font-mono mt-1">
                  2023
                </div>
                <div className="sm:col-span-3">
                  <h3 className="text-xl font-medium mb-1">1st Place, University Hackathon</h3>
                  <p className="text-muted">Lead designer for a team that built an accessible education platform in 48 hours.</p>
                </div>
              </div>

            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
