import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "work": "Work",
        "gallery": "Gallery",
        "about": "About",
        "resume": "Resume",
        "contact": "Contact"
      },
      "home": {
        "hero_title_1": "Design student focusing on",
        "hero_title_2": "systems, motion, and craft.",
        "hero_desc": "I believe in quiet confidence—design that doesn't shout, but works beautifully. Currently exploring the intersection of digital products and human behavior.",
        "view_gallery": "View Gallery",
        "download_resume": "Download Resume",
        "currently": "Currently",
        "location": "Location",
        "availability": "Availability",
        "tools": "Tools",
        "latest": "Latest",
        "open_roles": "Open for roles",
        "selected_work": "Selected Work",
        "selected_work_desc": "A collection of my recent projects.",
        "view_all": "View all",
        "view_all_projects": "View all projects",
        "about_me": "About Me",
        "about_desc": "I'm a multidisciplinary designer with a background in cognitive science. I approach design as a tool for problem-solving, focusing on clarity, accessibility, and delight.",
        "read_bio": "Read full bio →",
        "core_strengths": "Core Strengths",
        "ux_ui": "UX/UI Design",
        "ux_ui_desc": "Creating intuitive interfaces backed by user research and testing.",
        "design_systems": "Design Systems",
        "design_systems_desc": "Building scalable, accessible components for cohesive products.",
        "motion": "Interaction & Motion",
        "motion_desc": "Adding purposeful animation to guide users and provide feedback.",
        "prototyping": "Prototyping",
        "prototyping_desc": "Validating ideas quickly with high-fidelity interactive prototypes."
      },
      "footer": {
        "title": "Let's build something together.",
        "desc": "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
        "say_hello": "Say Hello",
        "socials": "Socials",
        "sitemap": "Sitemap",
        "rights": "All rights reserved.",
        "designed_with": "Designed with intention."
      }
    }
  },
  es: {
    translation: {
      "nav": {
        "home": "Inicio",
        "work": "Trabajo",
        "gallery": "Galería",
        "about": "Sobre mí",
        "resume": "Currículum",
        "contact": "Contacto"
      },
      "home": {
        "hero_title_1": "Estudiante de diseño enfocado en",
        "hero_title_2": "sistemas, movimiento y artesanía.",
        "hero_desc": "Creo en la confianza silenciosa: un diseño que no grita, pero funciona maravillosamente. Actualmente explorando la intersección entre productos digitales y el comportamiento humano.",
        "view_gallery": "Ver Galería",
        "download_resume": "Descargar Currículum",
        "currently": "Actualmente",
        "location": "Ubicación",
        "availability": "Disponibilidad",
        "tools": "Herramientas",
        "latest": "Último",
        "open_roles": "Disponible para roles",
        "selected_work": "Trabajo Seleccionado",
        "selected_work_desc": "Una colección de mis proyectos recientes.",
        "view_all": "Ver todo",
        "view_all_projects": "Ver todos los proyectos",
        "about_me": "Sobre Mí",
        "about_desc": "Soy un diseñador multidisciplinario con experiencia en ciencia cognitiva. Abordo el diseño como una herramienta para resolver problemas, enfocándome en la claridad, la accesibilidad y el deleite.",
        "read_bio": "Leer biografía completa →",
        "core_strengths": "Fortalezas Principales",
        "ux_ui": "Diseño UX/UI",
        "ux_ui_desc": "Creación de interfaces intuitivas respaldadas por investigación y pruebas de usuarios.",
        "design_systems": "Sistemas de Diseño",
        "design_systems_desc": "Construcción de componentes escalables y accesibles para productos cohesivos.",
        "motion": "Interacción y Movimiento",
        "motion_desc": "Agregar animación con propósito para guiar a los usuarios y proporcionar retroalimentación.",
        "prototyping": "Prototipado",
        "prototyping_desc": "Validación rápida de ideas con prototipos interactivos de alta fidelidad."
      },
      "footer": {
        "title": "Construyamos algo juntos.",
        "desc": "Actualmente busco nuevas oportunidades. Ya sea que tengas una pregunta o solo quieras saludar, ¡haré todo lo posible por responderte!",
        "say_hello": "Di Hola",
        "socials": "Redes Sociales",
        "sitemap": "Mapa del sitio",
        "rights": "Todos los derechos reservados.",
        "designed_with": "Diseñado con intención."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
