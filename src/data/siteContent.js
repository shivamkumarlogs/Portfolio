export const profile = {
  name: "Shivam Kumar",
  strapline: "Full-Stack Developer",
  heroDescription:
    "I build responsive web and mobile apps with the MERN stack, from REST APIs to polished, accessible UI.",
};

export const techStack = [
  { name: "JavaScript", category: "language" },
  { name: "HTML", category: "language" },
  { name: "CSS", category: "language" },
  { name: "React.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "React Router", category: "frontend" },
  { name: "Context API", category: "frontend" },
  { name: "React Native", category: "mobile" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "REST API", category: "backend" },
  { name: "MongoDB", category: "database" },
  { name: "Mongoose", category: "database" },
  { name: "Git", category: "platform" },
  { name: "GitHub", category: "platform" },
  { name: "Postman", category: "platform" },
];

export const projects = [
  {
    title: "NoteNest",
    eyebrow: "Full-Stack MERN App",
    description:
      "A responsive full-stack note-taking platform with a decoupled frontend-backend architecture. Global state managed via React Context API, nested routing with React Router DOM v7, and a modular RESTful API built on a Controller-Model-Route pattern with Mongoose for data integrity.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    spotlight: "Live",
    screenshot: "notenest.png",
    links: [
      { label: "Live Demo", href: "https://note-nest-six-beryl.vercel.app/" },
      { label: "GitHub", href: "https://github.com/shivamkumartech/notenest" },
    ],
  },
  {
    title: "RecipeFinder",
    eyebrow: "Web App",
    description:
      "A recipe discovery app integrating TheMealDB's API for instant search, detailed recipe views, and random discovery across 500+ recipes. Fully responsive mobile-first UI built with a custom Tailwind CSS v4 design system, custom data-fetching hooks, and an accessible modal recipe view with keyboard support and skeleton loading states.",
    tags: ["React", "Tailwind CSS", "JavaScript (ES6+)"],
    spotlight: "Live",
    screenshot: "recipefinder.png",
    links: [
      {
        label: "Live Demo",
        href: "https://recipe-finder-seven-opal.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/shivamkumartech/recipefinder",
      },
    ],
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/shivamkumartech",
    icon: "github",
    detail: "Where all my code lives.",
  },

  {
    label: "X",
    href: "https://x.com/shivamkumar_dev",
    icon: "x",
    detail: "Thoughts & updates.",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/shivamkumartech",
    icon: "leetcode",
    detail: "Problem-solving practice.",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shivamkumartech",
    icon: "linkedin",
    detail: "Connect with me here.",
  },
  {
    label: "Email",
    href: "mailto:shivamkumar.byte@gmail.com",
    icon: "email",
    detail: "Best way to reach me directly.",
  },
];

export const experience = [
  {
    role: "React Native Developer Intern",
    company: "Mobiloitte",
    location: "New Delhi, Delhi",
    period: "Jul 2025 - Oct 2025",
    points: [
      "Developed and maintained cross-platform mobile features using React Native under production-grade workflows",
      "Collaborated with design and backend teams to build responsive UI components and integrate REST APIs",
      "Debugged and fixed layout responsiveness issues on Android and iOS, eliminating critical UI bugs before release",
      "Worked with Git & GitHub for version control, code reviews, and feature branching in an agile environment",
    ],
  },
];
