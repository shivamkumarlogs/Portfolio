export const profile = {
  name: "Shivam Kumar",
  strapline: "Full-Stack Developer",
  about: [
    "I'm a **Full-Stack Developer** passionate about crafting digital products where thoughtful design meets clean, scalable code.",
    "I design and develop modern interfaces and robust backend APIs with **React**, **Node.js**, **Express**, and **MongoDB** focusing on usability, performance, and clean architecture.",
    "I enjoy transforming ideas into polished products, refining interaction details, and creating intuitive, reliable experiences from database schema to UI.",
  ],
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

export const EMAIL = "shivamkumar.byte@gmail.com";
export const GITHUB_USERNAME = "shivamkumarlogs";

export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

export const socialLinks = [
  {
    label: "GitHub",
    href: GITHUB_URL,
    icon: "github",
  },

  {
    label: "Twitter",
    href: "https://x.com/shivamkumarlogs",
    icon: "x",
  },

  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shivamkumarlogs/",
    icon: "linkedin",
  },
];

export const projects = [
  {
    title: "AI Code Reviewer",
    description:
      "An intelligent full-stack web application that uses Google Gemini to review developer source code and provide feedback on code quality, potential bugs, security risks, performance, and possible improvements.",
    tags: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Google Gemini"],
    spotlight: "Live",
    screenshot: "aicodereviewer.png",
    links: [
      { label: "Live Demo", href: "https://ai-code-reviewer-ecru-xi.vercel.app/" },
      { label: "GitHub", href: "https://github.com/shivamkumarlogs/AI-Code-Reviewer" },
    ],
  },

  {
    title: "RecipeFinder",
    description:
      "A recipe discovery app integrating TheMealDB's API for instant search, detailed recipe views, and random discovery across 500+ recipes. Fully responsive mobile-first UI built with a custom Tailwind CSS v4 design system, custom data-fetching hooks, and an accessible modal recipe view with keyboard support and skeleton loading states.",
    tags: ["React.js", "Tailwind CSS"],
    spotlight: "Live",
    screenshot: "recipefinder.png",
    links: [
      {
        label: "Live Demo",
        href: "https://recipe-finder-seven-opal.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/shivamkumarlogs/recipefinder",
      },
    ],
  },

  {
    title: "Spotify Clone Backend",
    description:
      "A comprehensive backend service for a music streaming platform built with Node.js (ES Modules) and Express 5. Features robust dual-token JWT authentication, secure password hashing, and MongoDB integration via Mongoose. Includes advanced capabilities like Nodemailer email services configured with Google OAuth2, plus seamless media uploads managed through Multer and the ImageKit SDK.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "ImageKit SDK"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/shivamkumarlogs/Spotify-Clone-Backend",
      },
    ],
  },
];

export const blogs = [
  {
    title: "The localStorage Authentication Trap",
    url: "https://x.com/shivamkumarlogs/status/2101948014638285027?s=20",
    date: "Sep 21, 2026",
    readTime: "8 min",
  },
  {
    title: "3 Lines Every Express Backend Needs",
    url: "https://x.com/shivamkumarlogs/status/2101327586987282443?s=20",
    date: "Sep 19, 2026",
    readTime: "5 min",
  },
  {
    title: "3 simple JavaScript bugs that drove me crazy",
    url: "https://x.com/shivamkumarlogs/status/2100100355300417571?s=20",
    date: "Sep 16, 2026",
    readTime: "5 min",
  },
];

