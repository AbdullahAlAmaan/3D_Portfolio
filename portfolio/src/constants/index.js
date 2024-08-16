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
  VHDL,
  Filmatic,
  MicroMemoirs,
  Netlify,
  LekhaLekhi,
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
    id: "resume",
    title: "Resume",
    isDownload: true,
    downloadLink: "/AMAAN MAIN RESUME.pdf"
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


const projects = [
  {
    name: "Filmatic",
    description:
      " Movie and TV show platform designed to enhance user engagement through personalized features such as Watch Later and Watch Again. It streamlines content discovery with an intuitive interface, advanced filtering, and search capabilities, allowing users to find content tailored to their preferences. The platform's responsive design ensures seamless accessibility and improved user interaction across various devices, leading to increased user retention and satisfaction.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Filmatic,
    source_code_link: "https://github.com/AbdullahAlAmaan/Filmatic",
    demo_link: "https://filmatic.netlify.app/",
  },
  {
    name: "Micromemoirs",
    description:
      "MicroMemoirs is a microblogging platform designed to offer users a robust social experience. It allows users to follow, unfollow, message others, and update their profiles. The platform includes interactive features such as profile customization with picture uploads and real-time status updates, enhancing user engagement and personalization. Built using Python and Flask, MicroMemoirs provides a streamlined, responsive interface for dynamic social interactions.",
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
    image: MicroMemoirs,
    source_code_link: "https://github.com/AbdullahAlAmaan/MicroMemoirs",
  },
  {
    name: "LekhaLekhi",
    description:
      " LekhaLekhi is a user-focused blogging platform where authenticated users can create, publish, and manage their blogs. Each blog is displayed on the user's main page, and the platform allows for easy deletion of content. The system ensures a seamless and personalized experience, enabling users to effortlessly share their thoughts and ideas.",
    tags: [
      {
        name: "Node",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: LekhaLekhi,
    source_code_link: "https://github.com/AbdullahAlAmaan/LekhaLekhi",
    demo_link: "https://filmatic.netlify.app/",
  },  
  {
    name: "ETF-Portfolio-Management-System",
    description: [" ETF Portfolio Management System is a comprehensive tool designed to manage and analyze ETF portfolios through advanced financial data structures. The system employs object-oriented programming and dynamic memory management to efficiently handle complex financial data, with a focus on linked lists. It executes sophisticated algorithms for data sorting and financial calculations, ensuring accurate and effective portfolio management."],
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
    description: [" IntelliTraffic Control System is a sophisticated solution designed to manage and optimize traffic flow using state machine principles. The system simulates and controls traffic lights on FPGA platforms, ensuring smooth and efficient coordination of traffic signals. Through comprehensive simulations and real-world testing, IntelliTraffic delivers precise state transitions, enhancing overall traffic management. The system is also optimized for efficient operation, reducing logic utilization by 15%, making it a robust and effective tool for modern traffic control."],
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
