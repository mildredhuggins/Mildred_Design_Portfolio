import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 mt-24">
      <div className="container-custom">
        <div className="bg-accent text-white rounded-[calc(var(--radius)+16px)] p-8 sm:p-12 lg:p-16 mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-[var(--shadow)]">
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl font-display font-normal mb-4 tracking-[-0.02em]">{t('footer.title')}</h2>
            <p className="text-white/80 text-lg">
              {t('footer.desc')}
            </p>
          </div>
          <a 
            href="mailto:message@milliedesigner.com" 
            className="inline-flex items-center gap-2 bg-white text-accent font-medium px-6 py-4 rounded-[var(--radius)] hover:bg-white/90 transition-all duration-200 ease-[cubic-bezier(0.2,0.8,0.2,1)] group whitespace-nowrap shadow-sm hover:-translate-y-1"
          >
            {t('footer.say_hello')}
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        <div className="grid-custom">
          <div className="col-span-4 sm:col-span-8 lg:col-span-12 flex flex-col sm:flex-row justify-between gap-12">
            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted">{t('footer.socials')}</h3>
              <ul className="flex flex-col gap-3">
                <li><a href="https://www.linkedin.com/in/mildred-c-huggins" target="_blank" rel="noopener noreferrer" className="text-sm text-text hover:text-accent transition-colors">LinkedIn</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted">{t('footer.sitemap')}</h3>
              <ul className="flex flex-col gap-3">
                <li><Link to="/" className="text-sm text-text hover:text-accent transition-colors">Home</Link></li>
                <li><Link to="/gallery" className="text-sm text-text hover:text-accent transition-colors">{t('nav.gallery')}</Link></li>
                <li><Link to="/bio" className="text-sm text-text hover:text-accent transition-colors">{t('nav.bio')}</Link></li>
                <li><a href="mailto:message@milliedesigner.com" className="text-sm text-text hover:text-accent transition-colors">{t('nav.contact')}</a></li>
              </ul>
            </div>
          </div>

          <div className="col-span-4 sm:col-span-8 lg:col-span-12 mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted font-mono">
              &copy; {currentYear} Millie Designs. {t('footer.rights')}
            </p>
            <p className="text-xs text-muted font-mono">
              {t('footer.designed_with')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
