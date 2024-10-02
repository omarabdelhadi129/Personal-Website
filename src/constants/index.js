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
    title: "Teacher Assistant ",
    company_name: "Carleton University",
    icon: carleton,
    iconBg: "white",
    date: "June 2021 - Present",
    points: [
      "Assisted in web development courses, guiding students through programming labs and workshops using JavaScript, Python, and Java.",
      "Led weekly labs, workshops, and office hours to help students with web development concepts and code debugging in JavaScript, Python, and Java.",
      "Collaborated with academic staff to improve course materials and enhance the student learning experience in web technologies.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Getit Local Technologies",
    icon: getit,
    iconBg: "white",
    date: "May 2022 - Aug 2022",
    points: [
      "Developed automated test plans and scripts to identify software issues using TestFlight and Android Studio.",
      "Collaborated with engineers to design innovative products for Getit applications, tracking progress with Jira and Git.",
      "Built responsive SPAs using React Native for mobile and React with JavaScript ES6 for web, enhancing user experience across iOS and Android platforms using XCode and Android Studio.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Barracuda Networks LTD",
    icon: barracuda,
    iconBg: "white",
    date: "Sep 2022 - Aug 2023",
    points: [
      "Developed and maintained .NET C# microservices and aggregator services, along with a React front end utilizing TypeScript, and automated workflows and builds using CI/CD pipelines for the Barracuda SMP app.",
      "Actively participated in planning and decision-making meetings, collaborating with the team to address required changes and assigning tasks based on team members’ focus areas.",
      "Managed and maintained the front-end repository, reviewing pull requests and setting up workflows and build actions in GitHub, ensuring code quality and adherence to best practices.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Canadian Space Division (DND)",
    icon: dnd,
    iconBg: "white",
    date: "Jan 2023 - Present",
    points: [
      "Automated Space Domain Awareness tasks by developing Java back-end components using Maven and Spring, and interactive React front-end interfaces built with Vite, optimizing data processing and user experience.",
      "Collaborated with a multidisciplinary team, utilizing Kafka, Docker, and SQL to implement key features for the Space COP application, enhancing space domain awareness and monitoring capabilities.",
      "Engaged in Agile/Scrum development, contributing to feature enhancements and operational efficiency, while onboarding and training new student developers.",
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
