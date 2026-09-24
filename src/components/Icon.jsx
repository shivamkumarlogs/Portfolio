export function Icon({ name, size = 18, className = "" }) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    className,
  };

  switch (name) {
    case "github":
    case "GitHub":
      return (
        <svg {...props} aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5.1 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.7 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.5C22 6.5 17.5 2 12 2z"
          />
        </svg>
      );

    case "x":
      return (
        <svg {...props} aria-hidden="true">
          <path
            fill="currentColor"
            d="M4 4l6.5 8.5L4 20h1.5l5.7-6.6L15.5 20H20l-6.8-9L19 4h-1.5l-5.4 6.2L8.5 4H4zm2.7 1.1h2.1l9.1 13.8h-2.1L6.7 5.1z"
          />
        </svg>
      );

    case "leetcode":
      return (
        <svg {...props} aria-hidden="true">
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fontSize="9"
            fontWeight="700"
            fill="currentColor"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
          >
            LC
          </text>
        </svg>
      );

    case "linkedin":
      return (
        <svg {...props} aria-hidden="true">
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M7 10v7M7 7v.01M12 17v-4.5a2 2 0 0 1 4 0V17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "globe":
      return (
        <svg
          {...props}
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      );

    case "email":
      return (
        <svg {...props} aria-hidden="true">
          <rect
            x="2"
            y="5"
            width="20"
            height="14"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M2 7l8 6c1.2.8 2.8.8 4 0l8-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "arrow-right":
      return (
        <svg
          {...props}
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      );

    case "arrow-up-right":
      return (
        <svg
          {...props}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      );

    case "external-link":
      return (
        <svg
          {...props}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
        </svg>
      );

    case "download":
      return (
        <svg
          {...props}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
        </svg>
      );

    case "home":
      return (
        <svg
          {...props}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );

    case "sun":
      return (
        <svg
          {...props}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v1.75M12 19.25V21M21 12h-1.75M4.75 12H3M18.364 5.636l-1.238 1.238M6.874 17.126l-1.238 1.238M18.364 18.364l-1.238-1.238M6.874 6.874 5.636 5.636M15.25 12a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Z" />
        </svg>
      );

    case "moon":
      return (
        <svg
          {...props}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.25 15.25A8.5 8.5 0 0 1 8.75 3.75a8.5 8.5 0 1 0 11.5 11.5Z" />
        </svg>
      );

    case "eye":
      return (
        <svg
          {...props}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );

    case "paperclip":
      return (
        <svg
          {...props}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
        </svg>
      );

    case "javascript":
    case "JavaScript":
      return (
        <svg {...props} aria-hidden="true">
          <rect width="24" height="24" rx="3.5" fill="#F7DF1E" />
          <path
            fill="#000000"
            d="M6.2 18.2c.4.7 1.1 1.2 2.1 1.2 1.2 0 2-.6 2-1.9v-7.3h2.3v7.3c0 2.6-1.5 3.7-3.9 3.7-2.1 0-3.3-1.1-3.9-2.4l1.4-.6zm7.8-.5c.5.9 1.4 1.5 2.5 1.5 1.1 0 1.8-.6 1.8-1.4 0-.9-.8-1.3-2.1-1.8-1.8-.7-3-1.6-3-3.4 0-1.7 1.3-3 3.3-3 1.5 0 2.6.5 3.4 1.8l-1.6 1c-.4-.7-.9-1-1.8-1-.8 0-1.4.5-1.4 1.1 0 .7.6 1.1 1.8 1.5 2 .8 3.3 1.6 3.3 3.6 0 2-1.5 3.2-3.8 3.2-2.1 0-3.4-1-4.1-2.4l1.7-.9z"
          />
        </svg>
      );

    case "html":
    case "HTML":
      return (
        <svg {...props} aria-hidden="true">
          <path fill="#E44D26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z" />
          <path fill="#F16529" d="M12 1.8v20.4l6.8-1.9 1.5-18.5H12z" />
          <path
            fill="#FFFFFF"
            d="M8.531 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.242l.33 4.171 5.404 1.5 5.372-1.448.744-8.213H8.531z"
          />
        </svg>
      );

    case "css":
    case "CSS":
      return (
        <svg {...props} aria-hidden="true">
          <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0z" />
          <path fill="#33A9DC" d="M12 1.8v20.4l6.8-1.9 1.5-18.5H12z" />
          <path
            fill="#FFFFFF"
            d="M18.59 4.413L5.41 4.41l.26 2.877h10.038l-.34 3.738-6.842.003.262 2.872h6.319l-.337 3.513-2.77.747-2.77-.751-.176-1.976H6.786l.337 4.175 4.877 1.354 4.878-1.354.736-8.223.238-2.686.238-2.707z"
          />
        </svg>
      );

    case "java":
    case "Java":
      return (
        <svg {...props} aria-hidden="true">
          <path
            d="M7.8 7.2c-.8.8-.2 1.9.8 2.2 1.3.4 2.8-.2 2.8-1.5 0-1.8-2-2.1-2-3.4 0-.8.6-1.5 1.5-1.7-.8-.3-2.1.2-2.4 1.1-.4 1.2.6 1.8 1.1 2.2-.6.2-1.4.5-1.8 1.1z"
            fill="#E76F00"
          />
          <path
            d="M12.5 6.5c-.6.6-.2 1.5.6 1.7 1 .3 2.1-.2 2.1-1.2 0-1.4-1.5-1.7-1.5-2.7 0-.6.5-1.2 1.2-1.3-.6-.2-1.6.2-1.8.9-.3.9.5 1.4.9 1.7-.5.2-1.1.4-1.5.9z"
            fill="#E76F00"
          />
          <path
            d="M4.5 15.5c2 1.2 6.8 1.5 9.8.2.8-.4 1.4-.8 1.4-1.4 0-.9-1.2-1.4-2.8-1.8 2.2-.2 4.1.7 4.1 2 0 1.6-3 2.8-6.5 2.8-3.4 0-6-1.1-6-2.5 0-.5.3-1 .8-1.4-.4.6-.8 1.4-.8 2.1z"
            fill="#5382A1"
          />
          <path
            d="M16.8 11.2c.4 1.4-.6 2.6-1.8 3.1 1.6-.2 2.8-1.4 2.6-2.9-.1-1.1-.9-1.7-1.8-1.9.7.4 1 1 1 1.7z"
            fill="#5382A1"
          />
          <path
            d="M6 18c3 1 9.5 1 12.5 0 1-.3 1.5-.7 1.5-1.2 0-.6-.8-1.1-2-1.4.8.4 1.2.8 1.2 1.2 0 .8-2.2 1.5-6.5 1.5s-6.7-.7-6.7-1.5c0-.4.4-.8 1.2-1.2-1.2.3-1.8.8-1.8 1.4 0 .5.3.9.6 1.2z"
            fill="#5382A1"
          />
        </svg>
      );

    case "react":
    case "React.js":
    case "react-native":
    case "React Native":
      return (
        <svg {...props} aria-hidden="true">
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
          <g fill="none" stroke="#61DAFB" strokeWidth="1.5">
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );

    case "tailwind":
    case "tailwindcss":
    case "Tailwind CSS":
      return (
        <svg {...props} fill="#38BDF8" aria-hidden="true">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      );

    case "react-router":
    case "React Router":
      return (
        <svg {...props} aria-hidden="true">
          <circle cx="3.5" cy="16" r="2.2" fill="currentColor" />
          <circle cx="8" cy="11" r="2.2" fill="currentColor" />
          <circle cx="20.5" cy="16" r="2.2" fill="currentColor" />
          <line
            x1="13"
            y1="7"
            x2="16.5"
            y2="13.5"
            stroke="#E32C2C"
            strokeWidth="4.4"
            strokeLinecap="round"
          />
          <circle cx="13" cy="7" r="2.2" fill="#E32C2C" />
          <circle cx="16.5" cy="13.5" r="2.2" fill="#E32C2C" />
        </svg>
      );

    case "node":
    case "nodejs":
    case "Node.js":
      return (
        <svg {...props} aria-hidden="true">
          <polygon points="12,2 21.5,7.5 12,13 2.5,7.5" fill="#8CC84B" />
          <polygon points="2.5,7.5 12,13 12,23 2.5,17.5" fill="#5FA04E" />
          <polygon points="12,13 21.5,7.5 21.5,17.5 12,23" fill="#417E38" />
        </svg>
      );

    case "express":
    case "expressjs":
    case "Express.js":
      return (
        <svg {...props} aria-hidden="true">
          <text
            x="12"
            y="17"
            textAnchor="middle"
            fontSize="14"
            fontWeight="500"
            fill="currentColor"
            fontFamily="Inter, system-ui, -apple-system, sans-serif"
            letterSpacing="-0.5px"
          >
            ex
          </text>
        </svg>
      );

    case "jwt":
    case "JWT":
      return (
        <svg {...props} aria-hidden="true">
          <path
            d="M12 1L3.5 5.2v6.2c0 6.1 4.2 10.8 8.5 12.1 4.3-1.3 8.5-6 8.5-12.1V5.2L12 1z"
            fill="#EB5424"
          />
          <polygon
            points="12,6.2 13.8,10.6 18.4,10.9 14.8,13.8 16,18.2 12,15.5 8,18.2 9.2,13.8 5.6,10.9 10.2,10.6"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "mongodb":
    case "MongoDB":
      return (
        <svg {...props} aria-hidden="true">
          <path
            fill="#13AA52"
            d="M12.002 0c-.22 0-.42.06-.59.18-.76.54-5.91 4.54-5.91 12.02 0 5.4 3.73 9.4 6.13 11.58.21.19.46.22.64.22.18 0 .42-.03.63-.22 2.4-2.18 6.13-6.18 6.13-11.58 0-7.48-5.15-11.48-5.91-12.02-.17-.12-.37-.18-.59-.18zm-.13 1.93v20.03c-2.02-1.91-4.88-5.41-4.88-9.76 0-4.91 3.19-8.47 4.88-10.27z"
          />
          <path
            fill="#00684A"
            d="M11.87 1.93v20.03c2.02-1.91 4.88-5.41 4.88-9.76 0-4.91-3.19-8.47-4.88-10.27z"
          />
          <path
            fill="#FFFFFF"
            d="M12 21.8c-.3-.8-.5-1.7-.5-2.6 0-3.3 1.8-6.1 4.3-7.5-.5 3.5-1.9 6.7-3.8 10.1z"
            opacity="0.25"
          />
        </svg>
      );

    case "git":
    case "Git":
      return (
        <svg {...props} aria-hidden="true">
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="3"
            transform="rotate(45 12 12)"
            fill="#FFFFFF"
          />
          <path
            fill="#F05032"
            d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.529-.527-.667-1.29-.413-1.943L12.78 8.913v5.673c.188.106.36.246.5.409.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.721-.72-.721-1.884 0-2.604.183-.183.4-.316.634-.396V8.75c-.234-.08-.451-.213-.634-.396-.534-.533-.667-1.306-.403-1.966L7.545 3.69.452 10.783c-.603.604-.603 1.582 0 2.188l10.48 10.477c.604.604 1.582.604 2.186 0l10.428-10.43c.604-.603.604-1.58 0-2.188"
          />
        </svg>
      );

    case "postman":
    case "Postman":
      return (
        <svg {...props} fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9.5" stroke="#FF6C37" strokeWidth="1.8" />
          <path
            d="M16.5 7.5L8.5 12l8 4.5"
            stroke="#FF6C37"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 10.5a1.8 1.8 0 0 1 0 3"
            stroke="#FF6C37"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    default:
      return null;
  }
}
