"use client";
import Link from "next/link";
import AOS from "aos"; // For animations
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";



export default function page() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center mt-12 sm:mt-24 text-white">
        {/* Left Section */}
        <div className="w-full sm:w-[60%] flex flex-col gap-6 sm:gap-10 sm:ml-4 px-4">
          <div>
            <div className="flex flex-col gap-4">
              <span
                className="greetings text-2xl sm:text-md md:text-xl lg:text-2xl"
                data-aos="fade-up"
              >
                Hello!
              </span>
              <span
                className="name text-4xl sm:text-lg  md:text-3xl lg:text-5xl font-bold"
                data-aos="zoom-in"
              >
                I am Lingoji Karthik Chary
              </span>
              <span
                className="profession text-4xl sm:text-2xl md:3xl lg:text-4xl"
                data-aos="fade-up"
              >
                Full Stack Web Developer, Pentester
              </span>
              <div
                className="description mt-3 text-sm sm:text-md md:text-lg "
                data-aos="fade-up"
              >
                <span>
                  I am a motivated and skilled Computer Science graduate
                  specializing in cybersecurity, with hands-on experience in web
                  development and backend technologies. Proficient in Python,
                  Java, and modern frameworks like React.js and Tailwind CSS, I
                  have developed secure and user-friendly applications,
                  including an election management system and a password
                  manager. My certifications in ethical hacking and
                  cybersecurity demonstrate my commitment to securing digital
                  environments. I have also excelled in Capture The Flag
                  competitions, earning recognition and valuable internship
                  experience. I am eager to apply my expertise in solving
                  real-world challenges and building innovative solutions.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16">
              <Link href="https://www.instagram.com/lingoji_karthik?igsh=ZGg2bzlsNHF5NHNj">
                <img src="/insta.gif" alt="Instagram" />
              </Link>
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16">
              <Link href="#">
                <img src="/facebook.gif" alt="Facebook" />
              </Link>
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16">
              <Link href="https://www.linkedin.com/in/karthik-chary-42652824a/">
                <img src="/linkedin.gif" alt="LinkedIn" />
              </Link>
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16">
              <Link href="#">
                <img src="/twitter.gif" alt="Twitter" />
              </Link>
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16">
              <Link href="https://github.com/Karthikchary23">
                <img src="/github.png" alt="GitHub" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full sm:w-[40%] px-4 sm:px-10 h-full">
          <img
            className="rounded-full w-44 h-44 sm:w-48 sm:h-48  sm:mt-11 sm:mb-14 md:w-64 md:h-64 lg:w-96 lg:h-96 mx-auto"
            src="https://imgs.search.brave.com/z_VIFwkXgP_XnMrY9dvqE7hImbCT5JWcPytnjF9HZFM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NseS5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDIv/c2hpbmNoYW4tcGhv/dG80My5qcGc"
            alt="Photo of Karthik"
          />
        </div>
      </div>
    </>
  );
}

