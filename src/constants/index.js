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
  batStateU,
  batStateUProj,
  promptopia,
  portfolio,
  design,
  webdev,
  backend
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "ABOUT"
    },
    {
        id: "work",
        title: "WORK"
    },
    {
        id: "contact",
        title: "CONTACT"
    },
]

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
      iconBg: "linear-gradient(91deg, #BFBFBF 0%, rgba(115, 187, 201, 0.72) 100%)",
      date: "January 2023 - June 2023",
      points: [
        "Developing and maintaining web application using HTML, CSS, JavaScript, PHP and other related technologies.",
        "Collaborating with cross-functional teams including backend developers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];


  export { services, experiences }