// Centralized content data — English locale for professional global portfolio.
// Authoritative source: resume & Hnfzrog GitHub repositories.

export interface Experience {
  role: string;
  org: string;
  period: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  highlights: string[];
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const profile = {
  name: "Hanif Abdillah Kuswanto",
  role: "Frontend Developer",
  status: "Available for Freelance & Collaboration",
  tagline:
    "I craft fast, scalable, and beautifully structured web applications — from high-converting landing pages to complex enterprise platforms.",
  about:
    "Software Engineer specializing in modern Frontend Development (Angular, Next.js, TypeScript). Experienced in engineering clean, modular, and maintainable architectures in active production environments (Badan Sistem Informasi UII). Dedicated to pixel-perfect UI/UX precision, peak web performance, and reliable technical solutions.",
  skills: ["Angular", "TypeScript", "Responsive UI", "Vue", "React"],
  metrics: [
    { label: "Engineering Experience", value: "2+ Years" },
    { label: "Core Specialization", value: "Angular & Next.js" },
    { label: "Design Quality", value: "100% Responsive" },
  ],
  contact: {
    whatsapp: "6285181804925",
    whatsappDisplay: "+62 851-8180-4925",
    email: "hanifabdillah668@gmail.com",
    github: "https://github.com/Hnfzrog",
    location: "Magelang & Yogyakarta, Indonesia",
  },
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export const projects: Project[] = [
  {
    title: "App-Math — Math LMS + AI Grading",
    category: "Fullstack Web Application",
    description:
      "Web-based Learning Management System for mathematics education featuring multi-role authentication (Admin, Teacher, Student), automated AI grading, and real-time score evaluations.",
    tags: ["TypeScript", "Fullstack", "AI Grading", "Realtime", "Tailwind"],
    githubUrl: "https://github.com/Hnfzrog/app-math",
    highlights: [
      "Multi-role Auth (Admin, Teacher, Student)",
      "Automated AI Grading for Complex Math Problems",
      "Real-time Analytics & Interactive Student Dashboards",
    ],
    featured: true,
  },
  {
    title: "Telenurse — Telemedicine Platform",
    category: "Modern Web Platform",
    description:
      "Interactive telemedicine platform for nursing consultations and patient healthcare monitoring, built with modern Next.js App Router, TypeScript, Tailwind CSS, and shadcn/ui.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Healthcare"],
    githubUrl: "https://github.com/Hnfzrog/telenurse",
    highlights: [
      "Modern Next.js App Router Architecture",
      "Accessible & Minimalist Glass UI Components",
      "Reusable & Production-Grade Component Hierarchy",
    ],
    featured: true,
  },
  {
    title: "UD-Sregep — Enterprise Frontend",
    category: "Enterprise Web App",
    description:
      "Enterprise management frontend application built on Angular and TypeScript for business process automation, featuring reactive RxJS state management and complex data forms.",
    tags: ["Angular", "TypeScript", "Enterprise", "RxJS", "REST API"],
    githubUrl: "https://github.com/Hnfzrog/ud-sregep-fe",
    highlights: [
      "Modular Angular Architecture & Clean Separation",
      "Reactive Form Validation & Strict Data Typing",
      "Robust Production-Grade REST API Integration",
    ],
    featured: true,
  },
  {
    title: "Lumpiamoo Web — Brand Landing Page",
    category: "Business & F&B Showcase",
    description:
      "Modern, responsive landing page for a culinary brand and local business. Designed with a mobile-first visual hierarchy, instant page loading, and direct WhatsApp ordering conversions.",
    tags: ["HTML5", "CSS3 / Styling", "Responsive UI", "Landing Page", "SEO"],
    githubUrl: "https://github.com/Hnfzrog/lumpiamoo-web",
    highlights: [
      "Mobile-First & Ultra Fast Page Load Speed",
      "High-Conversion Visual Design Layout",
      "Seamless Direct Click-to-WhatsApp Ordering",
    ],
    featured: false,
  },
  {
    title: "DailyKit — 10 Browser Utilities Suite",
    category: "Lightweight Digital Tools",
    description:
      "Suite of 10 browser-based digital utilities running 100% client-side with zero backend dependencies, utilizing TypeScript and secure browser LocalStorage.",
    tags: ["TypeScript", "Vanilla JS", "LocalStorage", "Serverless", "Instant Load"],
    githubUrl: "https://github.com/Hnfzrog/DailyKit",
    highlights: [
      "10 Standalone Digital Tools in One Hub",
      "Zero Server Dependencies & Instant Execution",
      "Persistent Client-Side LocalStorage Data",
    ],
    featured: false,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Frameworks & Libs",
    icon: "layers",
    skills: ["Angular", "Next.js", "React", "Vue", "Astro"],
  },
  {
    title: "Languages & Typing",
    icon: "code",
    skills: ["TypeScript", "JavaScript (ES6+)", "HTML5 Semantic", "CSS3 Modern"],
  },
  {
    title: "Styling & UI/UX Design",
    icon: "palette",
    skills: [
      "Tailwind CSS v4",
      "Glassmorphism UI",
      "shadcn/ui",
      "Figma Slicing",
      "Responsive Mobile-First",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "tools",
    skills: [
      "Git & GitHub",
      "Vite",
      "RxJS Reactive",
      "REST API Integration",
      "Technical SEO & Schema",
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    org: "Badan Sistem Informasi UII",
    period: "September 2023 – Present",
    description:
      "Developing and maintaining enterprise-scale web applications using TypeScript and Angular in an active production environment. Responsible for feature implementation, UI performance optimization, bug resolution, and adhering to scalable component architectures.",
  },
  {
    role: "Internship — Frontend Developer",
    org: "Badan Sistem Informasi UII",
    period: "July 2022 – December 2022",
    description:
      "Completed a 6-month professional engineering internship, gaining hands-on expertise with TypeScript and Angular to build university web modules and enhance digital user experiences.",
  },
];

export const services: Service[] = [
  {
    title: "Landing Page & Company Profile",
    description:
      "High-impact, conversion-focused single-page websites with modern design aesthetics to elevate your brand reputation.",
    icon: "globe",
    deliverables: [
      "Exclusive Glass / Modern Minimalist Aesthetic",
      "100% Responsive on Smartphones, Tablets & Desktops",
      "Google SEO Optimization & Social Card Previews",
      "Direct Click-to-WhatsApp Contact Integration",
    ],
  },
  {
    title: "Professional Personal Portfolio",
    description:
      "Digital showcase websites tailored for developers, designers, and professionals looking to stand out.",
    icon: "user",
    deliverables: [
      "Interactive Bento-Grid Project Showcase",
      "Seamless Dark & Light Mode Theme Toggle",
      "Indexed on Google (Search Console Ready)",
      "Blazing Fast Performance with Zero Lag",
    ],
  },
  {
    title: "Frontend Web Applications (SPA / Next.js / Angular)",
    description:
      "Dynamic, interactive web applications featuring responsive dashboards, robust state management, and API integrations.",
    icon: "terminal",
    deliverables: [
      "Stack Options: Angular, Next.js, React, or Vue",
      "Clean, Modular, and Scalable Code Structure",
      "RESTful API Integration & Robust Error Handling",
      "Optimized Client-Side State Management",
    ],
  },
  {
    title: "Figma to Code Slicing (Pixel Perfect)",
    description:
      "Transforming Figma UI/UX designs into pixel-perfect, accessible, and responsive HTML/CSS/Tailwind code.",
    icon: "layout",
    deliverables: [
      "Pixel-Perfect Fidelity to Figma Mockups",
      "Clean & Maintainable Tailwind CSS Architecture",
      "Micro-Interactions & Smooth Transition Effects",
      "Cross-Browser Compatibility (Chrome, Safari, Firefox)",
    ],
  },
];
