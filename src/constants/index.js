import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    linkedin,
    githubicon,
    facebook,
    instagram,
    twitter,
    acicts,
    remme,
    stockworx,
    kandyan,
    roommate,
    taptap,
    portfolio,
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

  export const socialLinks = [
    {
      icon: linkedin,
      name: "linkedin",
      url: "https://www.linkedin.com/in/pahan-abhayawardhane",
    },
    {
      icon: githubicon,
      name: "github",
      url: "https://github.com/Pahan-Samudika",
    },
    {
      icon: facebook,
      name: "facebook",
      url: "https://www.facebook.com/pahan.abhayawardhane",
    },
    {
      icon: instagram,
      name: "instagram",
      url: "https://www.instagram.com/_the_keizer_/",
    },
    {
      icon: twitter,
      name: "twitter",
      url: "https://twitter.com/pahansamudika",
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];

  const interests = [
    {
      title: "Photography",
    },
    {
      title: "Art",
    },
    {
      title: "Gaming",
    },
    {
      title: "3D Modeling",
    },
  ]
  
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
  ];
  
  const experiences = [
    {
      title: "Graphic Designer",
      company_name: "ACICTS",
      icon: acicts,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "",
      ],
    },
    {
      title: "UI Designer",
      company_name: "Battle of the Maroons Live Score App",
      icon: acicts,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "",
      ],
    },
    // {
    //   title: "Chief Co-ordinator",
    //   company_name: "ACICTS",
    //   icon: acicts,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //   ],
    // },
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
      name: "RoomMate",
      description:
        "An app for roommates to efficiently manage chores, bills, schedules, and communication, ensuring a harmonious and organized living environment.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: roommate,
      source_code_link: "https://github.com/",
    },
    {
      name: "Keizerfolio",
      description:
        "The interactive 3D portfolio presents creative works in a three-dimensional space, enhancing user engagement and visual appeal while showcasing expertise in UI/UX design.",
      tags: [
        {
          name: "threejs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "emailjs",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Pahan-Samudika/Keizerfolio.git",
    },
    {
      name: "Kandyan Studio",
      description:
        "A comprehensive solution designed to streamline Kandyan Studio's operations, enhancing efficiency, creativity, project management, and team collaboration.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "expressjs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "purple-text-gradient",
        },
      ],
      image: kandyan,
      source_code_link: "https://github.com/ITP-T067/T067-Kandyan-Studio.git",
    },
    {
      name: "StockWorX",
      description:
        "Efficient online stock management system with roles for various users. Developed using JSP Servlet, MySQL, and OOP.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: stockworx,
      source_code_link: "https://github.com/Pahan-Samudika/StockWorX.git",
    },
    {
      name: "RemMe",
      description:
        "Simple and intuitive task management app designed to help users stay organized and productive.",
      tags: [
        {
          name: "kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "room",
          color: "green-text-gradient",
        },
      ],
      image: remme,
      source_code_link: "https://github.com/Pahan-Samudika/RemMe.git",
    },
    {
      name: "TapTap",
      description:
        "Interactive mobile game enhancing cognitive skills. Players tap dots with limited chances, increasing speed for reflex challenge.",
      tags: [
        {
          name: "kotlin",
          color: "blue-text-gradient",
        },
      ],
      image: taptap,
      source_code_link: "https://github.com/Pahan-Samudika/TapTap.git",
    },
  ];
  
  export { services, interests, technologies, experiences, testimonials, projects };