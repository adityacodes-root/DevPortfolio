import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  html,
  css,
  github,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  mysql,
  mkns,
  bssk,
  signature,
  detector,
  taskprism,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "works",
    title: "Projects",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "tailwind",
    icon: tailwind,
  },
  {
    name: "javascript",
    icon: javascript,
  },
  {
    name: "reactjs",
    icon: reactjs,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  

 
];

const experiences = [
  {
    title: "High School Education ",
    company_name: "Mansukhbhai Kothari National School",
    icon: mkns,
    iconBg: "#383E56",
    date: "March 2020 - April 2022",
    points: [
      "Completed secondary (10th) and higher secondary (12th) education from Central Board of Secondary Education.",
      "Developed problem-solving skills and a passion for modern-day technology.",
      "Sharpened my skills in Python and MySQL as a part of my course.",
    ],
  },
  {
    title: "Summer Internship",
    company_name: "Bharatiya Samaj Seva Kendra (BSSK), Pune",
    icon: bssk,
    iconBg: "#E6DEDD",
    date: "May 2024 - July 2024",
    points: [
      "Developed and deployed a website for the NGO, improving digital presence and accessibility.",
      "Collaborated with the team to streamline data management and organizational workflows.",
      "Worked on filing, scrutinizing, and managing official records efficiently.",
      "Gained hands-on experience in web development and organizational operations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Aditya has been an invaluable asset to BSSK. His perseverance, dedication, and willingness to contribute towards our mission are qualities that will undoubtedly take him far!",
    name: "Mrs. Naganadhini S.",
    designation: "Executive Director",
    company: "Bharatiya Samaj Seva Kendra",
    image:
      "https://media.licdn.com/dms/image/v2/D4D0BAQHu5y5D5d0ohw/company-logo_200_200/company-logo_200_200/0/1711620062453/bharatiya_samaj_seva_kendra___india_logo?e=1748476800&v=beta&t=yOVOQw5IgaE-tkv7cpRIXMVsRYG9yeoZ_zeSnJpp46w",
  },
];

const projects = [
  {
    name: "TaskPrism",
    description:
    "TaskPrism is a resource/task allocation app using graph coloring.This project demonstrates the use of graph coloring algorithms to optimize resource allocation in project management.It aims to help project managers optimize resource usage. ",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
    ],
    image: taskprism,
    source_code_link: "https://github.com/adityacodes-root/TaskPrism?tab=readme-ov-file",
  },
  {
    name: "Digital Signature Maker",
    description:
      "A simple and professional tool to create custom digital signatures. Users can draw their signature using various settings such as pen color, line width, and background color. The signa can be saved as an image, and the canvas can be cleared/undone at any time.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: signature,
    source_code_link: "https://github.com/adityacodes-root/digital-signature-maker",
  },
  {
    name: "Gas Leakage Detectior",
    description:
      "A compact and efficient gas leakage monitoring system using Arduino Nano, MQ2 sensor, I2C LCD, and RTC module. It continuously detects LPG, CO, and smoke levels, providing real-time, time-stamped alerts to enhance safety.",
    tags: [
      
      {
        name: "C++",
        color: "pink-text-gradient",
      },
    ],
    image:detector,
    source_code_link: "https://github.com/adityacodes-root/Gas-Detection-and-Alert-System",
  },
];

export { services, technologies, experiences, testimonials, projects };
