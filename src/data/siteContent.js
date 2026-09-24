export const profile = {
  name: "Shivam Kumar",
  strapline: "Full-Stack Developer",
  heroDescription:
    "I build products from idea to deployment, from REST APIs to polished, accessible UI.",
};

export const techStack = [
  { name: "JavaScript", category: "language" },
  { name: "HTML", category: "language" },
  { name: "CSS", category: "language" },
  { name: "Java", category: "language" },
  { name: "React.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "React Router", category: "frontend" },
  { name: "React Native", category: "mobile" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "JWT", category: "backend" },
  { name: "Git", category: "platform" },
  { name: "GitHub", category: "platform" },
  { name: "Postman", category: "platform" },
];

export const GITHUB_USERNAME = "shivamkumartech";
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

export const socialLinks = [
  {
    label: "GitHub",
    href: GITHUB_URL,
    icon: "github",
  },

  {
    label: "Email",
    href: "mailto:shivamkumar.byte@gmail.com",
    icon: "email",
  },

  {
    label: "Twitter",
    href: "https://x.com/shivamkumar_dev",
    icon: "x",
  },

  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shivamkumartech",
    icon: "linkedin",
  },
];

export const projects = [
  {
    title: "NoteNest",
    // eyebrow: "Full-Stack MERN App",
    description:
      "A responsive full-stack note-taking platform with a decoupled frontend-backend architecture. Global state managed via React Context API, nested routing with React Router DOM v7, and a modular RESTful API built on a Controller-Model-Route pattern with Mongoose for data integrity.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    spotlight: "Live",
    links: [
      { label: "Live Demo", href: "https://note-nest-six-beryl.vercel.app/" },
      { label: "GitHub", href: "https://github.com/shivamkumartech/else" },
    ],
  },

  {
    title: "RecipeFinder",
    // eyebrow: "Web App",
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

  {
    title: "Spotify Clone Backend",
    eyebrow: "RESTful API",
    description:
      "A comprehensive backend service for a music streaming platform built with Node.js (ES Modules) and Express 5. Features robust dual-token JWT authentication, secure password hashing, and MongoDB integration via Mongoose. Includes advanced capabilities like Nodemailer email services configured with Google OAuth2, plus seamless media uploads managed through Multer and the ImageKit SDK.",
    tags: ["Node.js", "Express", "MongoDB", "JWT Auth", "ImageKit SDK"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/shivamkumartech/Spotify-Clone-Backend",
      },
    ],
  },
];
