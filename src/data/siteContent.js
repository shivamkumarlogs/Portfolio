import {
  FaGithub,
  FaXTwitter,
  FaLinkedin,
  FaRegFileLines,
} from "react-icons/fa6";

export const profile = {
  name: "Shivam Kumar",
  strapline: "Software Developer",
  summary:
    "Building full-stack products from idea to deployment with a focus on simplicity, performance, and usability.",
  about: [
    "I like to describe myself as a full-stack developer with a **product-first mindset**. For me, coding isn't just about syntax. it's about building tools that people actually find useful, fast, and pleasant to use.",
    "When building, I care deeply about both sides of the coin: making sure the **backend is solid, secure, and reliable**, while ensuring the **interface feels effortless and responsive**. I prefer simple, dependable solutions over over-engineering.",
    "I learn best by building from scratch, breaking down tricky problems, and refining the small details that make software feel alive.",
  ],
};

export const techStack = [
  {
    name: "JavaScript",
    category: "language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML",
    category: "language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    category: "language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Java",
    category: "language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "React.js",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "React Router",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg",
  },
  {
    name: "React Native",
    category: "mobile",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "JWT",
    category: "backend",
    icon: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg",
  },
  {
    name: "Git",
    category: "platform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    category: "platform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Postman",
    category: "platform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
];

export const EMAIL = "shivamkumar.byte@gmail.com";
export const GITHUB_USERNAME = "shivamkumarlogs";

export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

export const RESUME_URL = "/Shivam_Kumar_Resume.pdf";

export const socialLinks = [
  {
    label: "GitHub",
    href: GITHUB_URL,
    icon: FaGithub,
  },

  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shivamkumarlogs/",
    icon: FaLinkedin,
  },

  {
    label: "Twitter",
    href: "https://x.com/shivamkumarlogs",
    icon: FaXTwitter,
  },
];

export const projects = [
  {
    title: "AI Code Reviewer",
    type: "personal",
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
    screenshot: "/aicodereviewer.png",
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
    type: "personal",
    description:
      "A recipe discovery app integrating TheMealDB's API for instant search, detailed recipe views, and random discovery across 500+ recipes. Fully responsive mobile-first UI built with a custom Tailwind CSS v4 design system, custom data-fetching hooks, and an accessible modal recipe view with keyboard support and skeleton loading states.",
    tags: ["React.js", "Tailwind CSS"],
    spotlight: "Live",
    screenshot: "/recipefinder.png",
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
    type: "personal",
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
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    color: "#243a66",
    textColor: "#fed7aa",
    height: 254,
    width: 32,
    link: "https://www.amazon.com/dp/0743273567",
    cover: "/books/great-gatsby.jpg",
  },
  {
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    color: "#121b26",
    textColor: "#e0f2fe",
    height: 220,
    width: 38,
    link: "https://www.amazon.com/dp/0684801221",
    cover: "/books/old-man-sea.jpg",
  },
  {
    title: "Metamorphosis",
    author: "Franz Kafka",
    color: "#FAF4E4",
    textColor: "#18181b",
    height: 250,
    width: 34,
    link: "https://www.amazon.com/dp/0486290301",
    cover: "/books/metamorphosis.png",
  },
  {
    title: "Don't Believe Everything You Think",
    author: "Joseph Nguyen",
    color: "#f8f7f5",
    textColor: "#18181b",
    height: 274,
    width: 30,
    link: "https://www.amazon.com/dp/B09TZ4LZF9",
    cover: "/books/dont-believe-everything.jpg",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    color: "#c84914",
    textColor: "#fef9c3",
    height: 260,
    width: 46,
    link: "https://www.amazon.com/dp/0062315005",
    cover: "/books/the-alchemist.png",
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    color: "#090a0f",
    textColor: "#fde047",
    height: 268,
    width: 42,
    link: "https://www.amazon.com/dp/0593135202",
    cover: "/books/project-hail-mary.jpg",
  },
  {
    title: "Siddhartha",
    author: "Hermann Hesse",
    color: "#055169",
    textColor: "#fed7aa",
    height: 246,
    width: 38,
    link: "https://www.amazon.com/dp/0553208845",
    cover: "/books/siddhartha.jpg",
  },
];
