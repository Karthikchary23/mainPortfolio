"use client";
import React, { useState,useEffect } from "react";
import Link from "next/link";
import AOS from "aos"; // For animations
import "aos/dist/aos.css"; // Import AOS styles
useEffect(() => {
     AOS.init();
 
}, [third])


const Page = () => {
  // Hardcoded project data (since no server components are used)
  const projects = [
    {
      projectimage: "https://raw.githubusercontent.com/Karthikchary23/images/refs/heads/main/Screenshot%202024-12-27%20190740.png",
      projectname: "Election Management System (Cyber Security and Full stack)",
      projectdescription:
        "The Election Management System is a cutting-edge project combining cybersecurity and full-stack development to ensure secure and efficient electoral processes. Built with HTML, CSS, React.js, Express.js, Node.js, and MongoDB, this system offers a seamless user experience and robust backend architecture. It integrates multi-factor authentication (MFA), including OTP-based verification, to enhance the security of voter logins. The project adheres to CIA principles—Confidentiality, Integrity, and Availability—to protect sensitive voter data and ensure trustworthy elections. Key features include secure voter registration, real-time data fetching, and a responsive interface for administrators and voters.",
      github: "https://github.com/Karthikchary23/Election-Management-",
    },
    {
      projectimage: "https://github.com/Karthikchary23/images/blob/main/Screenshot%202024-12-27%20194215.png?raw=true",
      projectname: "Password Manager",
      projectdescription:
        "This project is a secure and user-friendly Password Manager Website designed to store and manage usernames and passwords effectively. Built using React.js for the front-end and Express.js for the back-end, the application ensures a seamless and responsive user experience. The website leverages HTML, CSS, and Tailwind CSS for an elegant and customizable interface, while JavaScript handles client-side logic for smooth interactivity.",
      github: "https://github.com/Karthikchary23/PasswordManager",
    },
    {
      projectimage: "https://github.com/Karthikchary23/images/blob/main/Screenshot%202024-12-27%20194852.png?raw=true",
      projectname: "Currency Converter",
      projectdescription:
        "The Currency Converter Application is a simple yet efficient tool designed to provide real-time currency conversion rates. Developed as a project to gain hands-on experience with APIs, it combines the power of HTML, CSS, and JavaScript to deliver a clean and interactive interface for users.",
      github: "https://github.com/Karthikchary23/Currency-conventor",
    },
    {
      projectimage: "https://github.com/Karthikchary23/images/blob/main/Screenshot%202024-12-27%20194950.png?raw=true",
      projectname: "Netflix Clone (Static)",
      projectdescription:
        "The Netflix Clone is a static front-end project replicating the user interface of the popular streaming platform, Netflix. Built using HTML and CSS, this project demonstrates proficiency in creating visually appealing and responsive web designs.",
      github: "https://github.com/Karthikchary23/Netflix-clone",
    },
    {
      projectimage: "https://github.com/Karthikchary23/images/blob/main/Screenshot%202024-12-27%20202605.png?raw=true",
      projectname: "Zomato Clone",
      projectdescription:
        "The Zomato Clone is a static front-end project that replicates the design of the popular restaurant discovery and food delivery platform, Zomato. Created using HTML and CSS, this project showcases expertise in crafting visually appealing and responsive web designs with attention to detail.",
      github: "https://github.com/Karthikchary23/Zomato-clone1",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="text-white p-8">
      <h1 className="font-extrabold text-5xl text-center mb-12">Projects</h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="fade-up"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-700 via-gray-800 to-black rounded-lg overflow-hidden shadow-xl hover:shadow-2xl border-2 border-white transition-all duration-300 transform hover:scale-105 hover:translate-y-2"
          >
            <img
              src={project.projectimage}
              alt={project.projectname}
              className="w-full h-56 object-cover transition-all duration-300 group-hover:opacity-80"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{project.projectname}</h2>
              <p className="text-gray-300 text-sm mb-4">
                {expandedIndex === index
                  ? project.projectdescription
                  : project.projectdescription
                  ? project.projectdescription.substring(0, 120) + "..."
                  : "No description available"}
              </p>
              <button
                onClick={() => handleToggleDescription(index)}
                className="text-blue-500 hover:underline mt-2 transition-all duration-200 transform hover:scale-105"
              >
                {expandedIndex === index ? "Read Less" : "Read More"}
              </button>
              <p className="text-md font-bold mb-2">
                Github:
                <span className="text-md text-blue-500 ml-4">
                  <Link href={project.github}>Click here for code</Link>
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
