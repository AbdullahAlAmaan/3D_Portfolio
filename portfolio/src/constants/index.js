import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  BS23,
  Electrium,
  InterCloud,
  NIBIR,
  Python,
  cpp,
  Pusher,
  VHDL
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
    title: "Python",
    icon: Python,
  },
  {
    title: "C++",
    icon: cpp,
  },
  {
    title: "React ",
    icon: reactjs,
  },
  {
    title: "JavaScript",
    icon: javascript,
  },
];

const technologies = [
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
    name: "Python",
    icon: Python,
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
    name: "C++",
    icon: cpp,
  },
  {
    name: "Pusher",
    icon: Pusher,
  },

  {
    name: "VHDL",
    icon: VHDL,
  }
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Brain Station 23 PLC.",
    icon: BS23,
    iconBg: "#383E56",
    date: "May 2024 - August 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mechanical Design Engineer",
    company_name: "Electrium Mobility",
    icon: Electrium,
    iconBg: "black",
    date: "Jan 2024 - Apr 2024",
    points: [
      "Utilized SolidWorks for the conceptualization and design of a battery box, ensuring that the final design met specific requirements for durability, space efficiency, and ease of integration with the overall system.",
      "Optimized the mechanical aspects of the Dutch bike Bakfiets to enhance performance, focusing on streamlining the design for better energy efficiency and ensuring a balance between functionality and user comfort.",
    ],
  },
  {
    title: "Cloud Engineer Intern",
    company_name: "InterCloud Limited",
    icon: InterCloud,
    iconBg: "#1d3a54",
    date: "Mar 2023 - Jun 2023",
    points: [
      "Leveraged expertise in Python, Flask, and front-end technologies (CSS, HTML, JavaScript) to contribute to innovative cloud-based communication solutions at Intercloud Limited. ",
      "Engaged in back-end API development, emphasizing seamless integration and user experience, advancing the company’s goal to provide communication services without reliance on traditional SIM technology and focusing on the scalability and reliability of cloud-based platforms."
      
    ],
  },
  {
    title: "Co-founder and Fundraiser",
    company_name: "NIBIR",
    date: "Dec 2018 - Present",
    icon: NIBIR,
    iconBg:"black",
    points: [
      "Organized and distributed thousands of warm clothing and blankets to vulnerable populations in various neighbourhoods and water-surrounded lowlands during winters, the 2019 floods and the COVID-19 pandemic, ensuring community sustenance and support with NIBIR, a non-profit voluntary organization.",
      "Fostered a partnership with local youth forums to plant over 5,000 trees to enhance municipal greenery successfully and executed educational programs on climate change and sustainable living."
      
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Filmatic",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: reactjs,
    source_code_link: "https://github.com/AbdullahAlAmaan/Filmatic",
  },
  {
    name: "Micromemoirs",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: html,
    source_code_link: "https://github.com/AbdullahAlAmaan/MicroMemoirs",
  },
  {
    name: "ETF-Portfolio-Management-System",
    description: [" • Demonstrated expertise in object-oriented programming, dynamic memory management, and linked lists, completing a multi-phase project with a focus on financial data structures.",
    "• Efficiently executed algorithms for data sorting and financial calculations, demonstrating problem-solving skills in a structured programming environment."],
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
    
    ],
    image: cpp,
    source_code_link: "https://github.com/AbdullahAlAmaan/ETF-Portfolio-Management-System",
  },
  {
    name: "IntelliTraffic Control System",
    description: [" • Engineered a traffic light control system using VHDL and FPGA boards, leveraging state machine concepts to simulate and manage traffic flow dynamics effectively. • Performed comprehensive system simulations and real-world testing on FPGA platforms, enhancing traffic light coordination and achieving robust performance with precise state transitions.• Optimized the FPGA-based system to reduce logic utilization by 15%, ensuring efficient operation and demonstrating advanced skills in digital circuit design and real-time embedded system applications."],
    tags: [
      {
        name: "VHDL",
        color: "blue-text-gradient",
      },
      {
        name: "FPGA",
        color: "green-text-gradient",
      },
    
    ],
    image: cpp,
    source_code_link: "https://github.com/AbdullahAlAmaan/ETF-Portfolio-Management-System",
  },
];

export { services, technologies, experiences, projects};

//testimonials
