import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../components/Button";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container-custom py-12">
      <header className="mb-16 max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-display font-medium mb-4"
        >
          Contact
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted"
        >
          I'm always open to discussing product design work or partnership opportunities.
        </motion.p>
      </header>

      <div className="grid-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="col-span-4 sm:col-span-8 lg:col-span-6"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-surface border border-border/50 p-8 rounded-card shadow-sm">
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-text">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-card bg-bg border border-border/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="Jane Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-text">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-card bg-bg border border-border/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="jane@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-text">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-card bg-bg border border-border/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-y"
                placeholder="Hello! I'd like to talk about..."
              ></textarea>
            </div>

            <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full mt-4">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-success/10 text-success rounded-card text-sm text-center font-medium mt-2"
              >
                Thanks for reaching out! I'll get back to you soon.
              </motion.div>
            )}

          </form>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="col-span-4 sm:col-span-8 lg:col-span-5 lg:col-start-8 mt-12 lg:mt-0 flex flex-col gap-12"
        >
          <div>
            <h2 className="text-2xl font-display font-medium mb-4">Other ways to connect</h2>
            <p className="text-muted mb-6">
              Prefer to use your own email client or schedule a quick chat?
            </p>
            <div className="flex flex-col gap-4">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-text font-medium hover:text-accent transition-colors">
                hello@example.com
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-text font-medium hover:text-accent transition-colors">
                Schedule a Calendly meeting
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Social Profiles</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="https://www.linkedin.com/in/mildred-c-huggins" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent transition-colors font-medium">LinkedIn</a></li>
              <li><a href="#" className="text-text hover:text-accent transition-colors font-medium">Twitter</a></li>
              <li><a href="#" className="text-text hover:text-accent transition-colors font-medium">Dribbble</a></li>
              <li><a href="#" className="text-text hover:text-accent transition-colors font-medium">GitHub</a></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
