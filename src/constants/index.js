import {
  css,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  php,
  python,
  batStateU,
  batStateUProj,
  promptopia,
  portfolio,
  design,
  webdev,
  backend,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "ABOUT",
  },
  {
    id: "work",
    title: "WORK",
  },
  {
    id: "contact",
    title: "CONTACT",
  },
];

const services = [
  {
    title: "UI/UX Design",
    icon: design,
  },
  {
    title: "Web Developer",
    icon: webdev,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "BatStateU Digital Transformation Center (DTC)",
    icon: batStateU,
    iconBg:
      "linear-gradient(91deg, #BFBFBF 0%, rgba(115, 187, 201, 0.72) 100%)",
    date: "January 2023 - June 2023",
    points: [
      "Developing and maintaining web application using HTML, CSS, JavaScript, PHP and other related technologies.",
      "Collaborating with cross-functional teams including backend developers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const skills = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Php",
    icon: php,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "BatStateU RMS",
    description:
      "Efficiently explore, publish, and manage diverse research papers on a streamlined web platform for comprehensive research management.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
    ],
    image: batStateUProj,
    source_code_link: "https://github.com/gitcommit222/new-rms-webdev",
  },
  {
    name: "Promptopia",
    description:
      "An elegantly designed web application that empowers users to seamlessly create, update, delete, search, and access prompts with utmost efficiency.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link: "https://github.com/gitcommit222/promptopia-nextjs",
  },
  {
    name: "My Portfolio",
    description:
      "A comprehensive online portfolio adeptly showcasing my proficiencies and extensive experience within the realm of software development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/gitcommit222/myportfolio",
  },
];


export { services, experiences, skills, projects };
