export interface Project {
  id: string;
  title: string;
  role: string;
  year: string;
  tools: string[];
  tags: string[];
  heroImage: string;
  thumbnail: string;
  outcome: string;
  problem: string;
  constraints: string[];
  process: {
    title: string;
    description: string;
  }[];
  artifacts: {
    url: string;
    caption: string;
  }[];
  results: string[];
  reflection: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "fintech-dashboard",
    title: "Aura Financial",
    role: "Lead Product Designer",
    year: "2023",
    tools: ["Figma", "Framer", "React"],
    tags: ["UX/UI", "Fintech", "Dashboard"],
    heroImage: "https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%201%2C%202026%2C%2010_30_51%20PM.png",
    thumbnail: "https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%201%2C%202026%2C%2010_30_51%20PM.png",
    outcome: "Redesigned the core dashboard, increasing daily active users by 34%.",
    problem: "Aura's existing dashboard was cluttered with data, making it difficult for users to understand their financial health at a glance. The cognitive load was too high, leading to user drop-off.",
    constraints: [
      "Must integrate with legacy backend APIs",
      "Strict compliance and accessibility requirements (WCAG AA)",
      "3-month timeline from research to handoff"
    ],
    process: [
      {
        title: "Discovery & Research",
        description: "Conducted 15 user interviews to understand how people track their spending. Found that users care more about 'safe to spend' amounts than raw transaction lists."
      },
      {
        title: "Information Architecture",
        description: "Restructured the navigation to prioritize actionable insights. Moved deep settings into a secondary menu."
      },
      {
        title: "Prototyping & Testing",
        description: "Created high-fidelity prototypes in Figma and tested with 8 users. Iterated on the data visualization to make charts more readable."
      }
    ],
    artifacts: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        caption: "Early wireframes focusing on data hierarchy."
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        caption: "Final dashboard design with simplified charts."
      }
    ],
    results: [
      "34% increase in daily active users",
      "Reduced support tickets related to navigation by 40%",
      "Shipped on time and within budget"
    ],
    reflection: "If I had more time, I would have explored more micro-interactions for the data charts to make the experience feel more alive. I learned a lot about balancing data density with clarity.",
    featured: true
  },
  {
    id: "eco-commerce",
    title: "Lumina Eco",
    role: "UX/UI Designer",
    year: "2024",
    tools: ["Figma", "Webflow"],
    tags: ["E-commerce", "Branding", "Web"],
    heroImage: "https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%201%2C%202026%2C%2010_35_43%20PM.png",
    thumbnail: "https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%201%2C%202026%2C%2010_35_43%20PM.png",
    outcome: "Created a seamless shopping experience for sustainable home goods.",
    problem: "Lumina Eco needed a digital storefront that reflected their premium, sustainable brand identity while maintaining high conversion rates.",
    constraints: [
      "Mobile-first approach required",
      "Integration with Shopify backend",
      "Limited budget for custom photography"
    ],
    process: [
      {
        title: "Brand Translation",
        description: "Translated their physical brand guidelines into a digital design system, focusing on earthy tones and elegant typography."
      },
      {
        title: "Checkout Optimization",
        description: "Streamlined the checkout process from 4 steps to 2, reducing friction."
      }
    ],
    artifacts: [
      {
        url: "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&q=80&w=1200",
        caption: "Product detail page with clear sustainability metrics."
      }
    ],
    results: [
      "22% increase in conversion rate",
      "Average order value increased by $15",
      "Featured on Awwwards"
    ],
    reflection: "Working with limited photography pushed me to rely more on typography and layout to create a premium feel.",
    featured: true
  },
  {
    id: "health-tracker",
    title: "Vitals App",
    role: "Product Designer",
    year: "2023",
    tools: ["Figma", "Principle"],
    tags: ["Mobile", "Health", "Motion"],
    heroImage: "https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%201%2C%202026%2C%2010_52_18%20PM.png",
    thumbnail: "https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%201%2C%202026%2C%2010_52_18%20PM.png",
    outcome: "Designed an intuitive habit tracker that feels like a companion.",
    problem: "Most health trackers feel clinical and punishing. Vitals needed to feel encouraging and personal.",
    constraints: [
      "iOS Human Interface Guidelines compliance",
      "Must support dark mode natively"
    ],
    process: [
      {
        title: "Motion Studies",
        description: "Explored how animation could provide positive reinforcement when completing habits."
      },
      {
        title: "UI Design",
        description: "Created a soft, rounded UI that feels approachable."
      }
    ],
    artifacts: [
      {
        url: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1200",
        caption: "Daily overview screen."
      }
    ],
    results: [
      "4.8 star rating on App Store",
      "High 30-day retention rate (45%)"
    ],
    reflection: "Motion design proved to be the key differentiator for this product. It taught me the value of 'juice' in non-game apps.",
    featured: true
  },
  {
    id: "design-system",
    title: "Nexus UI",
    role: "Systems Designer",
    year: "2022",
    tools: ["Figma", "Storybook"],
    tags: ["Design Systems", "Documentation"],
    heroImage: "https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%201%2C%202026%2C%2010_57_16%20PM.png",
    thumbnail: "https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%201%2C%202026%2C%2010_57_16%20PM.png",
    outcome: "Built a comprehensive design system serving 5 product teams.",
    problem: "Inconsistent UI across products was slowing down development and confusing users.",
    constraints: [
      "Must support React and Vue",
      "Strict accessibility standards"
    ],
    process: [
      {
        title: "Audit",
        description: "Audited all existing products to identify common patterns."
      },
      {
        title: "Component Library",
        description: "Built a centralized Figma library with robust variants and auto-layout."
      }
    ],
    artifacts: [
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
        caption: "Component documentation."
      }
    ],
    results: [
      "Reduced design-to-dev handoff time by 50%",
      "Zero accessibility violations in new components"
    ],
    reflection: "Documentation is just as important as the components themselves.",
    featured: false
  }
];
