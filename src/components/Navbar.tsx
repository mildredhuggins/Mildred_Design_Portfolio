import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Check initial theme
    const isLight = document.documentElement.classList.contains('light');
    setIsLightMode(isLight);
  }, []);

  const toggleTheme = () => {
    if (isLightMode) {
      document.documentElement.classList.remove('light');
      setIsLightMode(false);
    } else {
      document.documentElement.classList.add('light');
      setIsLightMode(true);
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('nav.work'), path: "/projects" },
    { name: t('nav.gallery'), path: "/gallery" },
    { name: t('nav.about'), path: "/about" },
    { name: t('nav.resume'), path: "/resume" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container-custom h-20 flex items-center justify-between">
        <Link to="/" className="font-display font-semibold text-lg tracking-tight z-50">
          Millie Designs
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-text ${
                  location.pathname.startsWith(link.path) ? "text-text" : "text-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 border-l border-border/50 pl-6">
            <button onClick={toggleLanguage} className="text-muted hover:text-text transition-colors flex items-center gap-1 text-sm font-medium" aria-label="Toggle language">
              <Globe size={18} />
              <span className="uppercase">{i18n.language}</span>
            </button>
            <button onClick={toggleTheme} className="text-muted hover:text-text transition-colors" aria-label="Toggle theme">
              {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4 z-50">
          <button onClick={toggleLanguage} className="text-text focus:outline-none flex items-center gap-1 text-sm font-medium uppercase">
            <Globe size={18} />
            {i18n.language}
          </button>
          <button onClick={toggleTheme} className="text-text focus:outline-none">
            {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            className="p-2 -mr-2 text-text focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-0 right-0 h-screen bg-bg flex flex-col items-center justify-center gap-8 z-40 md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-2xl font-display font-medium transition-colors ${
                    location.pathname.startsWith(link.path) ? "text-text" : "text-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
