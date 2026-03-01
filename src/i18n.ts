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
      },
      "bio": {
        "title": "About Mildred",
        "subtitle": "Graphic artist & acrylic painter — San Francisco Bay Area",
        "tags": {
          "graphic_design": "Graphic Design",
          "acrylic_painting": "Acrylic Painting",
          "typography": "Typography",
          "color_systems": "Color Systems",
          "bay_area": "Bay Area",
          "maracaibo": "Maracaibo, Venezuela"
        },
        "p1": "Mildred Huggins is a San Francisco Bay Area graphic artist and acrylic painter whose work holds two things in rare balance: design systems that feel effortless, and paintings that move like memory. The Bay is an everyday muse — fog-soft gradients, the sharp geometry of bridges, the layered rhythm of its neighborhoods. But her palette and her eye also reach back to Maracaibo, Venezuela, where heat, music, family celebrations, and visual abundance continue to shape how she sees form and feeling.",
        "p2_1": "Across both disciplines, Mildred builds with structure first — grids, tempo, repetition — then lets color do the storytelling. You can feel the optical cadence of ",
        "p2_2": ", the wit and commanding presence of ",
        "p2_3": "'s sculptural portraits, filtered through the fearless color of ",
        "p2_4": ", the coastal luminosity of ",
        "p2_5": ", and the compositional instinct of ",
        "p2_6": ".",
        "callout": "Studio rule: nothing is added unless it earns its place.",
        "p3": "When she isn't painting or refining a typographic system, you'll find Mildred roaming museums, lingering at art festivals, or taking long walks outdoors — collecting shapes, shadows, and small human moments that later reappear as bold fields, quiet details, and work that is both unmistakably modern and deeply personal.",
        "sidebar": {
          "currently": "Currently",
          "currently_val": "Based in the San Francisco Bay Area<br/>Available for commissions & collaborations",
          "roots": "Roots",
          "roots_val": "Maracaibo, Venezuela",
          "influences": "Influences",
          "practice": "Practice",
          "practice_val": "Graphic design · Acrylic painting · Typography · Color systems"
        },
        "skills": {
          "title": "Tools & Skills",
          "adobe": "Adobe Creative Suite",
          "productivity": "Productivity",
          "emerging": "Emerging Practice"
        }
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
      },
      "bio": {
        "title": "Sobre Mildred",
        "subtitle": "Artista gráfica y pintora acrílica — Área de la Bahía de San Francisco",
        "tags": {
          "graphic_design": "Diseño Gráfico",
          "acrylic_painting": "Pintura Acrílica",
          "typography": "Tipografía",
          "color_systems": "Sistemas de Color",
          "bay_area": "Área de la Bahía",
          "maracaibo": "Maracaibo, Venezuela"
        },
        "p1": "Mildred Huggins es una artista gráfica y pintora acrílica del Área de la Bahía de San Francisco cuyo trabajo mantiene dos cosas en un raro equilibrio: sistemas de diseño que se sienten sin esfuerzo y pinturas que se mueven como la memoria. La Bahía es una musa cotidiana: degradados suaves como la niebla, la geometría afilada de los puentes, el ritmo en capas de sus vecindarios. Pero su paleta y su ojo también se remontan a Maracaibo, Venezuela, donde el calor, la música, las celebraciones familiares y la abundancia visual continúan dando forma a cómo ve la forma y el sentimiento.",
        "p2_1": "En ambas disciplinas, Mildred construye primero con estructura (cuadrículas, tempo, repetición) y luego deja que el color cuente la historia. Puedes sentir la cadencia óptica de ",
        "p2_2": ", el ingenio y la presencia imponente de los retratos escultóricos de ",
        "p2_3": ", filtrados a través del color intrépido de ",
        "p2_4": ", la luminosidad costera de ",
        "p2_5": ", y el instinto compositivo de ",
        "p2_6": ".",
        "callout": "Regla del estudio: no se agrega nada a menos que se gane su lugar.",
        "p3": "Cuando no está pintando o refinando un sistema tipográfico, encontrarás a Mildred recorriendo museos, demorándose en festivales de arte o dando largos paseos al aire libre, recolectando formas, sombras y pequeños momentos humanos que luego reaparecen como campos audaces, detalles tranquilos y un trabajo que es a la vez inconfundiblemente moderno y profundamente personal.",
        "sidebar": {
          "currently": "Actualmente",
          "currently_val": "Con sede en el Área de la Bahía de San Francisco<br/>Disponible para encargos y colaboraciones",
          "roots": "Raíces",
          "roots_val": "Maracaibo, Venezuela",
          "influences": "Influencias",
          "practice": "Práctica",
          "practice_val": "Diseño gráfico · Pintura acrílica · Tipografía · Sistemas de color"
        },
        "skills": {
          "title": "Herramientas y Habilidades",
          "adobe": "Adobe Creative Suite",
          "productivity": "Productividad",
          "emerging": "Práctica Emergente"
        }
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
