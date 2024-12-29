"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Page = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    // Simulating fetching static data instead of making an API call
    const staticData = [
      {
        _id: "676ed8957970e6a736d0c273",
        certificateimage:
          "https://github.com/Karthikchary23/images/blob/main/Screenshot%202024-12-27%20214528.png?raw=true",
        certificatename: "Cyber Security",
        certificateprovider: "Cisco",
      },
      {
        _id: "676ed7f37970e6a736d0c26d",
        certificateimage:
          "https://github.com/Karthikchary23/images/blob/main/Screenshot%202024-12-27%20214352.png?raw=true",
        certificatename: "Python Essentials 1",
        certificateprovider: "Cisco",
      },
      {
        _id: "676ed83a7970e6a736d0c26f",
        certificateimage:
          "https://github.com/Karthikchary23/images/blob/main/Screenshot%202024-12-27%20214452.png?raw=true",
        certificatename: "JavaScript Essential 1",
        certificateprovider: "Cisco",
      },
      {
        _id: "676ed83a7970e6a736d0c26f", // Duplicate _id
        certificateimage:
          "https://github.com/Karthikchary23/images/blob/main/Screenshot%202024-12-27%20214452.png?raw=true",
        certificatename: "JavaScript Essential 1",
        certificateprovider: "Cisco",
      },
      {
        _id: "676ed8ec7970e6a736d0c277",
        certificateimage:
          "https://github.com/Karthikchary23/images/blob/main/Screenshot%202024-12-27%20214334.png?raw=true",
        certificatename: "Python",
        certificateprovider: "Hacker Rank",
      },
      {
        _id: "676ed8cb7970e6a736d0c275",
        certificateimage:
          "https://github.com/Karthikchary23/images/blob/main/Screenshot%202024-12-27%20213956.png?raw=true",
        certificatename: "Internship",
        certificateprovider: "Hackers Daddy",
      },
      {
        _id: "676ed93c7970e6a736d0c279",
        certificateimage:
          "https://github.com/Karthikchary23/images/blob/main/Screenshot%202024-12-27%20214422.png?raw=true",
        certificatename: "CTF",
        certificateprovider: "IIT Trust Labs",
      },
      {
        _id: "676ed9b17970e6a736d0c27b",
        certificateimage:
          "https://github.com/Karthikchary23/images/blob/main/LINGOJI%20KARTHIK%20CHARY.png?raw=true",
        certificatename: "CTF Participation",
        certificateprovider: "Nexus Elites CTF",
      },
      {
        _id: "676edc4bdcee1032a6b5ae66",
        certificateimage:
          "https://github.com/Karthikchary23/images/blob/main/Screenshot%202024-12-27%20222454.png?raw=true",
        certificatename: "Ethical Hacking",
        certificateprovider: "Udemy",
      },
    ];
    setCertificates(staticData);
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen p-12 m-6">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-white">
        Certificates
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12"
        data-aos="fade-up"
      >
        {certificates.map((certificate, index) => (
          <div
            key={`${certificate._id}-${index}`} // Combining _id and index for a unique key
            className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            onClick={() => window.open(certificate.certificateimage, "_blank")}
          >
            <div className="relative">
              <img
                src={certificate.certificateimage}
                alt={certificate.certificatename}
                className="w-full h-64 object-cover rounded-t-xl group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 rounded-b-xl">
                <h3 className="text-xl font-semibold text-white">
                  {certificate.certificatename}
                </h3>
                <p className="text-gray-300 mt-2 text-sm">
                  {certificate.certificateprovider}
                </p>
              </div>
            </div>
            <div className="p-6 bg-gray-50">
              <p className="text-gray-600 text-sm">
                {certificate.certificatename} issued by{" "}
                {certificate.certificateprovider}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
