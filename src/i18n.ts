import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "work": "Work",
        "gallery": "Gallery",
        "bio": "Bio",
        "resume": "Resume",
        "contact": "Contact"
      },
      "home": {
        "hero_title_1": "SF Bay Area graphic designer crafting",
        "hero_title_2": "clear, elegant visual systems.",
        "hero_desc": "Systems-minded design with a love for motion and detail—bringing calm, high-functioning work to brands and digital products.",
        "chip_1": "Brand + Digital",
        "chip_2": "Systems + Motion",
        "view_work": "View Work",
        "contact": "Contact",
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
        "bio": "Biografía",
        "resume": "Currículum",
        "contact": "Contacto"
      },
      "home": {
        "hero_title_1": "Diseñador gráfico del Área de la Bahía de SF creando",
        "hero_title_2": "sistemas visuales claros y elegantes.",
        "hero_desc": "Diseño con mentalidad de sistemas con amor por el movimiento y el detalle, aportando trabajo tranquilo y de alto funcionamiento a marcas y productos digitales.",
        "chip_1": "Marca + Digital",
        "chip_2": "Sistemas + Movimiento",
        "view_work": "Ver Trabajo",
        "contact": "Contacto",
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
