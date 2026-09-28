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
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Google Gemini",
    ],
    spotlight: "Live",
    screenshot: "aicodereviewer.png",
    links: [
      {
        label: "Live Demo",
        href: "https://ai-code-reviewer-ecru-xi.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/shivamkumarlogs/AI-Code-Reviewer",
      },
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

export const books = [
  {
    id: "great-gatsby",
    title: "The Great Gatsby",
    shortTitle: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Classic Literature",
    year: "1925",
    color: "#0d1b2a", // Scribner midnight celestial blue
    accentColor: "#f5d061", // art deco gold foil
    textColor: "#fef3c7",
    fontFamily: "serif",
    height: 254,
    width: 38,
    status: "Masterpiece",
    takeaway: "A hauntingly beautiful critique of the American Dream, illusion, longing, and the green light at the end of the dock.",
    link: "https://www.goodreads.com/book/show/4671.The_Great_Gatsby",
  },
  {
    id: "dont-believe-everything",
    title: "Don't Believe Everything You Think",
    shortTitle: "Don't Believe Everything You Think",
    author: "Joseph Nguyen",
    category: "Mindset & Psychology",
    year: "2022",
    color: "#f5f0e8", // minimalist zen ivory bone paper
    accentColor: "#dc2626", // iconic zen crimson dot
    textColor: "#18181b", // stark black ink
    fontFamily: "sans",
    height: 228,
    width: 36,
    status: "Transformative",
    takeaway: "Suffering is not created by what happens to us, but by our unexamined thinking about what happens.",
    link: "https://www.goodreads.com/book/show/63098555-don-t-believe-everything-you-think",
  },
  {
    id: "dont-love-you-anymore",
    title: "I Don't Love You Anymore",
    shortTitle: "I Don't Love You Anymore",
    author: "Rithvik Singh",
    category: "Poetry & Healing",
    year: "2023",
    color: "#2a1c22", // dusty rose-charcoal
    accentColor: "#fda4af", // rose gold foil
    textColor: "#fae8eb",
    fontFamily: "sans",
    height: 218,
    width: 35,
    status: "Poetic",
    takeaway: "Moving on is not about forgetting; it is about choosing yourself when someone else stopped choosing you.",
    link: "https://www.goodreads.com/book/show/198754124-i-don-t-love-you-anymore",
  },
  {
    id: "siddhartha",
    title: "Siddhartha",
    shortTitle: "Siddhartha",
    author: "Hermann Hesse",
    category: "Philosophical Fiction",
    year: "1922",
    color: "#3a2414", // earthen river saffron ochre
    accentColor: "#f59e0b", // Buddhist saffron gold foil
    textColor: "#fef3c7",
    fontFamily: "serif",
    height: 236,
    width: 37,
    status: "Spiritual Classic",
    takeaway: "Wisdom cannot be taught or transferred through words alone; it must be found and lived through personal experience.",
    link: "https://www.goodreads.com/book/show/52036.Siddhartha",
  },
  {
    id: "old-man-sea",
    title: "The Old Man and the Sea",
    shortTitle: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    category: "Literary Classic",
    year: "1952",
    color: "#0f232b", // classic oceanic marine teal
    accentColor: "#5eead4", // sea-spray silver-mint foil
    textColor: "#f0fdfa",
    fontFamily: "serif",
    height: 226,
    width: 36,
    status: "Nobel Prize",
    takeaway: "Man is not made for defeat. A man can be destroyed, but not defeated.",
    link: "https://www.goodreads.com/book/show/2165.The_Old_Man_and_the_Sea",
  },
  {
    id: "metamorphosis",
    title: "The Metamorphosis",
    shortTitle: "The Metamorphosis",
    author: "Franz Kafka",
    category: "Existential Classic",
    year: "1915",
    color: "#141416", // stark Kafkaesque obsidian charcoal
    accentColor: "#b91c1c", // stark modernist crimson
    textColor: "#f5f5f5",
    fontFamily: "mono",
    height: 232,
    width: 36,
    status: "Existential Classic",
    takeaway: "An unsettling exploration of alienation, familial burden, and what it truly means to be human in a transactional world.",
    link: "https://www.goodreads.com/book/show/485894.The_Metamorphosis",
  },
  {
    id: "the-alchemist",
    title: "The Alchemist",
    shortTitle: "The Alchemist",
    author: "Paulo Coelho",
    category: "Philosophical Fiction",
    year: "1988",
    color: "#4e2415", // HarperOne desert Moroccan terracotta
    accentColor: "#facc15", // radiant desert sun gold
    textColor: "#fef9c3",
    fontFamily: "serif",
    height: 242,
    width: 39,
    status: "Timeless",
    takeaway: "When you want something, all the universe conspires in helping you to achieve it. Listen to your heart and follow the omens.",
    link: "https://www.goodreads.com/book/show/18144590-the-alchemist",
  },
  {
    id: "project-hail-mary",
    title: "Project Hail Mary",
    shortTitle: "Project Hail Mary",
    author: "Andy Weir",
    category: "Hard Sci-Fi",
    year: "2021",
    color: "#0a0c12", // deep space vacuum black
    accentColor: "#facc15", // orbital bright solar yellow
    textColor: "#fde047", // high-contrast solar yellow
    fontFamily: "sans",
    height: 256,
    width: 44,
    status: "Sci-Fi Favorite",
    takeaway: "A triumphant celebration of scientific ingenuity, cross-species friendship, and human resilience against cosmic odds.",
    link: "https://www.goodreads.com/book/show/54493401-project-hail-mary",
  },
];
