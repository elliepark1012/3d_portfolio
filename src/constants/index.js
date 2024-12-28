import { isCompositeComponentWithType } from "react-dom/test-utils";
import {
    mobile,
    backend,
    creator,
    web,
    apple,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    python,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    surfree,
    giveashout,
    cremedelacreme,
    kita,
    y2s,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ios & macOS troubleshooting",
      icon: mobile,
    },
    {
      title: "React Native Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
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
      name: "React JS",
      icon: reactjs,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  const experiences = [
    {
      title: "Camera and Photos Lab Infrastructure Engineer",
      company_name: "Apple",
      icon: apple,
      iconBg: "#E6DEDD",
      date: "Jun 2024 - Dec 2024",
      points: [
        "Maintained and optimized macOS agents and over 700 devices, ensuring peak functionality and operational efficiency.",
        "Debugged and enhanced Ansible playbooks, supporting CI/CD pipeline maintenance and ensuring system reliability through rigorous weekly testing.",
        "Conducted detail-oriented feature testing, effectively communicating with developers on root issues and reproduction steps, particularly with development board iOS devices for power and performance.",
        "Improved user engagement by 30% through secure API integration and streamlined workflows in the Remote Studio device registration system, incorporating integrated search, meta tags, and global themes to enhance design and user experience.",
      ],
    },
    {
      title: "Apple Technical Support Expert",
      company_name: "Apple",
      icon: apple,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Jun 2024",
      points: [
          "Developed in-store content for new hire education and product training videos, enhancing customer engagement by 6% and showcasing technical expertise in Apple products.",
          "Fostered strong relationships with business customers, leading to 106 new accounts and a 45% account conversion rate through consistent service and techincal support."
      ],
    },
    {
      title: "Purchasing Analyst & IT Support",
      company_name: "Y2S",
      icon: y2s,
      iconBg: "#ffffff",
      date: "Mar 2020 - Aug 2022",
      points: [
        "Managed technical infrastructure and administered online purchasing systems and reports using QuickBooks and Excel, with an emphasis on network security and device management.",
        "Ensured robust network security measures and optimized device management through Microsoft Intune to enhance purchasing operations." ],
    },
    {
      title: "Expo Project Associate Manager",
      company_name: "KITA",
      icon: kita,
      iconBg: "#ffffff",
      date: "Dec 2018 - Mar 2020",
      points: [
        "Assisting small Korean businesses to export overseas markets via trade shows and E-commerce.",
        "Organizing, budgeting, scheduling overseas exhibition, especially for marketing, translating to English, Chinese and French as a Global Trade Expert Incubating Program Leader."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Creme de la creme",
      description:
        "Developed and deployed a responsive web app using Node.js for restaurant reviews, implemented JWT for authentication, utilized AWS S3 for secure storage, and designed a dynamic React frontend integrating RESTful APIs for enhanced functionality.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "AWS",
          color: "green-text-gradient",
        },
        {
          name: "RESTfulAPI",
          color: "pink-text-gradient",
        },
      ],
      image: cremedelacreme,
      source_code_link: "https://github.com/elliepark1012/cremedelacreme",
    },
    {
      name: "Give A Shout",
      description:
        "Created a volunteer event listing app with Rails API and React, featuring a responsive UI designed with CSS, managed relational data with SQL, and integrated RESTful APIs for efficient backend operations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rubyonrails",
          color: "green-text-gradient",
        },
        {
          name: "sql",
          color: "pink-text-gradient",
        },
      ],
      image: giveashout,
      source_code_link: "https://github.com/elliepark1012/giveashout",
    },
    {
      name: "Surfree",
      description:
        "Surfree is a React app built entirely with JavaScript, free of jQuery dependencies, leveraging Google Maps and shop websites to provide a comprehensive surfing booking platform where users can search and filter surf shops and pricing.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: surfree,
      source_code_link: "https://github.com/elliepark1012/surfree",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };