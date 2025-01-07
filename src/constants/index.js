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
      "Developed Java-based back-end solutions using Maven and Spring, creating cron-scheduled scripts and API endpoints to automate data ingestion, organize databases efficiently, and support front-end data access for analysis.",
      "Designed and delivered interactive, customizable graphs, maps, and diagrams on the React front end using TypeScript, incorporating analytical calculations to help stakeholders monitor key metrics effectively.",
      "Deployed applications to Azure using Tanzu and implemented comprehensive test suites for both back-end services and front-end components, ensuring high code quality and reliability.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Barracuda Networks LTD",
    icon: barracuda,
    iconBg: "white",
    date: "Sep 2022 - Aug 2023",
    points: [
      "Developed and enhanced .NET C# microservices and REST APIs, implementing new features and resolving issues to support the functionality of the RMM application.",
      "Built interactive React front-end components and integrated them with backend APIs for the Eureka project, ensuring seamless user interaction and data flow.",
      "Utilized AWS tools to monitor and maintain the state of services, while designing CI/CD pipelines to automate code scans, enforce code quality, and manage package licenses effectively.",
      "Engineered a low-level system agent to interface directly with Windows OS components, using C++ and scripting to gather and process critical SaaS data, like hardware, software, and performance metrics, for downstream analysis.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Getit Local Technologies",
    icon: getit,
    iconBg: "white",
    date: "May 2022 - Aug 2022",
    points: [
      "Developed and optimized React Native mobile applications and React-based web interfaces, ensuring seamless user experiences across iOS, Android, and desktop platforms.",
      "Designed MongoDB queries to handle large datasets, while analyzing and optimizing query performance.",
      "Implemented REST APIs in Node.js to enable efficient data exchange between the backend and front-end.",
    ],
  },
  {
    title: "Teacher Assistant",
    company_name: "Carleton University",
    icon: carleton,
    iconBg: "white",
    date: "Jun 2021 - Dec 2024",
    points: [
      "Assisted in web development courses, guiding students through programming labs and workshops using JavaScript, Python, and Java.",
      "Led weekly labs, workshops, and office hours to help students with web development concepts and code debugging in JavaScript, Python, and Java.",
      "Collaborated with academic staff to improve course materials and enhance the student learning experience in web technologies.",
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
