import {
  mobile,
  backend,
  creator,
  web,
  canny,
  aed,
  tcp,
  carleton,
  barracuda,
  getit,
  dnd,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const about =
  "Passionate about technology and innovation, I'm a software developer with expertise in Java, C/C++, Python, JavaScript, HTML, React, CSS tailwind, Bootstrap,Haskell, TypeScript, Bash, SQL, R, React, Redux, Angular. My experience spans full-stack development, including microservices, frontend, and backend systems. I thrive on collaborative coding and excel in version control, maintaining code quality, and fostering effective team dynamics. My project management skills, honed through teaching roles and tools like Jira, enable me to drive success. I'm excited about the possibilities technology offers and am always eager to take on new challenges. Let's connect and explore how we can innovate together. 😊💻";

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI & Machine Learning",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Canadian Space Division (DND)",
    icon: dnd,
    iconBg: "white",
    date: "Jan 2024 - Present",
    points: [
      "Engineered and maintained Spring Boot microservices and automated cron pipelines that ingest and process multi-source satellite data daily, improving data reliability and accessibility for mission analysis.",
      "Developed full-stack features using React, TypeScript, and Java, building interactive dashboards, orbital maps, and analytical tools used by internal stakeholders to monitor mission-critical operational metrics.",
      "Managed deployment workflows across Azure and Tanzu, integrating CI/CD automation to ensure consistent and reliable delivery across environments.",
      "Implemented comprehensive JUnit and Vitest test suites, increasing coverage, reducing regression issues, and improving long-term maintainability of backend and frontend systems.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Barracuda Networks LTD",
    icon: barracuda,
    iconBg: "white",
    date: "Sep 2022 - Aug 2023",
    points: [
      "Enhanced .NET C# microservices and REST APIs by delivering new features and resolving production issues for a large-scale RMM platform.",
      "Developed React components and integrated them with backend APIs to improve UI responsiveness, reliability, and overall user experience.",
      "Utilized AWS for service monitoring and implemented CI/CD pipelines to automate code scans, enforce quality gates, and manage licensing compliance.",
      "Built a Windows system agent using C# and scripting to collect hardware, software, and performance telemetry for downstream analytics and reporting.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Getit Local Technologies",
    icon: getit,
    iconBg: "white",
    date: "May 2022 - Aug 2022",
    points: [
      "Developed React Native mobile features and optimized React web components to ensure smooth and consistent UX across iOS, Android, and desktop platforms.",
      "Designed and optimized MongoDB queries to efficiently handle large datasets and improve application responsiveness.",
      "Implemented Node.js REST APIs to streamline backend–frontend communication and support new product features.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "Carleton University",
    icon: carleton,
    iconBg: "white",
    date: "Jun 2021 - Dec 2024",
    points: [
      "Mentored students in programming labs for Python, JavaScript, and Java, helping them understand core concepts, debug code, and apply best practices.",
      "Led weekly labs, workshops, and office hours to reinforce course material and support student success in software development topics.",
      "Collaborated with professors to refine course content, improve structure, and enhance the overall learning experience for students.",
    ],
  },
];

const projects = [
  {
    name: "Canny Edge Detector",
    description:
      "This repository contains an implementation of the Canny Edge Detection algorithm, a popular technique used in image processing to detect edges in images. The implementation includes various steps such as Gaussian blurring, gradient calculation, non-maximum suppression, double thresholding, and edge tracking by hysteresis. The notebook demonstrates the application of the algorithm on different images and visualizes the results.",
    tags: [
      {
        name: "machine-learning",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "cv2",
        color: "pink-text-gradient",
      },
    ],
    image: canny,
    source_code_link: "https://github.com/omarabdelhadi129/Edge-Detector",
  },
  {
    name: "AED Simulator",
    description:
      "This project involves the development of a software-based prototype simulating the functionalities of an Automated External Defibrillator (AED) Plus device. It's designed to assist users in cardiac emergencies by guiding them through the process of analyzing heart rhythms, providing electric shocks, and offering real-time CPR feedback.",
    tags: [
      {
        name: "QT",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "threading",
        color: "pink-text-gradient",
      },
    ],
    image: aed,
    source_code_link: "https://github.com/omarabdelhadi129/AED-Simmiluation-QT",
  },
  {
    name: "Pokemon TCP Server",
    description:
      "This project is a server-client application designed to manage and query Pokémon data. It allows users to interact with a Pokémon dataset through a client-server model, enabling data search, saving search results, and tracking the number of queries performed. The server handles client requests, performs data operations, and maintains query records, while the client interfaces with the server to request these operations. The application utilizes UDP sockets for communication and employs multithreading for concurrent data handling.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "TCP",
        color: "green-text-gradient",
      },
      {
        name: "UDP",
        color: "pink-text-gradient",
      },
    ],
    image: tcp,
    source_code_link: "https://github.com/omarabdelhadi129/Pokemon-TCP-server",
  },
];

export { navLinks, about, services, experiences, projects };
