"use client";
import React, { useEffect } from "react";
import AOS from "aos"; // For animations
import "aos/dist/aos.css"; // Import AOS styles

const Page = () => {
  // Hardcoded education details
  const educationDetails = [
    {
      collegeName: "CMR College Of Engineering And Technology",
      degree: "Bachelor of Technology-(CSE(Cyber Security))",
      cgpa: "7.78",
      academicYear: "2022-2025",
      imageOfcollege:
        "https://images.shiksha.com/mediadata/images/1547211911phptODUbj.jpeg",
    },
    {
      collegeName: "Teegala Krishna Reddy Engineering College",
      degree: "Diploma-(Computer Science)",
      cgpa: "8.2",
      academicYear: "2019-2022",
      imageOfcollege:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2a7GGJ06WkoYMUpDL8aDcQdGA3aH0eNaQHw&s",
    },
    {
      collegeName: "Srinivasa High School",
      degree: "SSC",
      cgpa: "8.0",
      academicYear: "2019",
      imageOfcollege:
        "https://imgs.search.brave.com/S-s3g_n3zJOrTyT97nX4iszjccLoIirfPMRMehXWTLY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/NTE4NDMyMS9waG90/by9ibGFjay1iYWNr/Z3JvdW5kLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1XSmtn/NjlCemJ2ZDhXXzBh/ckdTNVFKR0dOczFi/YUxqa0JmM1UzUGtp/T1BNPQ",
    },
  ];

  // Hardcoded skills
  const skills = [
    {
      skill: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVS5wOrF1fXHLGU-HDaTvt1LZG0ZF2aRmIEw&s",
      skillname: "HTML",
    },
    {
      skill: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-512.png",
      skillname: "CSS",
    },
    {
      skill: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
      skillname: "JS",
    },
    {
      skill: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
      skillname: "React JS",
    },
    {
      skill: "https://cdn.prod.website-files.com/6320125ace536b6ad148eca3/66502d746f57d299fe0e0c31_Image%201-Express.js.webp",
      skillname: "Express JS",
    },
    {
      skill: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
      skillname: "Node JS",
    },
    {
      skill: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/701px-Python-logo-notext.svg.png",
      skillname: "Python",
    },
    {
      skill: "https://www.citypng.com/public/uploads/preview/hd-java-programming-logo-png-701751694771848sm650yaqjt.png",
      skillname: "Java",
    },
    {
      skill: "https://www.kindpng.com/picc/m/403-4039227_c-language-logo-png-transparent-png.png",
      skillname: "C",
    },
    {
      skill: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
      skillname: "Mongo DB",
    },
    {
      skill: "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png",
      skillname: "Tailwind CSS",
    },
    {
      skill: "https://rhtech.geekhunter.com.br/wp-content/uploads/2022/04/github.png",
      skillname: "GitHub",
    },
    {
      skill: "https://imgs.search.brave.com/jPMNvIzo2fGbjhZAg78ns4T913-1PREgFJh9l_iovhQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9naXQtaWNv/bi0xMDI0eDEwMjQt/dDFlbTdyMWcucG5n",
      skillname: "Git",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="text-white flex flex-col items-center py-10">
        {/* Education Details */}
        <div className="w-full max-w-5xl px-5">
          <h1 className="text-2xl font-extrabold text-center mb-10 md:text-4xl lg:text-5xl">
            Education Details
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationDetails.map((detail, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 bg-gray-800"
              >
                <img
                  className="w-full h-56 object-cover opacity-60"
                  src={detail.imageOfcollege}
                  alt={detail.collegeName}
                />

                <div className="absolute inset-0 flex flex-col justify-center items-center p-5 text-center bg-black bg-opacity-50">
                  <h2 className="text-2xl font-bold mb-2">{detail.collegeName}</h2>
                  <p className="text-lg font-medium">{detail.degree}</p>
                  <p className="text-sm font-light">CGPA: {detail.cgpa}</p>
                  <p className="text-sm font-light">Academic Year: {detail.academicYear}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="text-white">
        <h1 className="text-2xl font-extrabold text-center mb-10 md:text-4xl lg:text-5xl">
          Skills & Technologies
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="flex flex-col items-center justify-center w-24 h-32 rounded-lg shadow-lg p-2"
            >
              <img
                className="w-20 h-20 object-contain mb-2"
                src={skill.skill}
                alt={skill.skillname}
              />
              <span className="text-white font-semibold text-md text-center">
                {skill.skillname}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
