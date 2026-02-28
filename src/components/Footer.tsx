import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-12 mt-24">
      <div className="container-custom grid-custom">
        <div className="col-span-4 sm:col-span-8 lg:col-span-6 flex flex-col gap-6">
          <h2 className="text-2xl font-display font-medium">Let's build something together.</h2>
          <p className="text-muted max-w-md">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div>
            <a 
              href="mailto:hello@example.com" 
              className="inline-flex items-center gap-2 text-text font-medium hover:text-accent transition-colors group"
            >
              Say Hello
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        <div className="col-span-4 sm:col-span-8 lg:col-span-6 flex flex-col sm:flex-row justify-between lg:justify-end gap-12 lg:gap-24 mt-12 lg:mt-0">
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Socials</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="https://www.linkedin.com/in/mildred-c-huggins" target="_blank" rel="noopener noreferrer" className="text-sm text-text hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-text hover:text-accent transition-colors">Twitter</a></li>
              <li><a href="#" className="text-sm text-text hover:text-accent transition-colors">Dribbble</a></li>
              <li><a href="#" className="text-sm text-text hover:text-accent transition-colors">GitHub</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Sitemap</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-sm text-text hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/projects" className="text-sm text-text hover:text-accent transition-colors">Work</Link></li>
              <li><Link to="/gallery" className="text-sm text-text hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="text-sm text-text hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/resume" className="text-sm text-text hover:text-accent transition-colors">Resume</Link></li>
            </ul>
          </div>
        </div>

        <div className="col-span-4 sm:col-span-8 lg:col-span-12 mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted font-mono">
            &copy; {currentYear} Millie Designs. All rights reserved.
          </p>
          <p className="text-xs text-muted font-mono">
            Designed with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
