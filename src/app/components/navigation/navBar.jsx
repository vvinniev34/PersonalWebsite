"use client"
import SmoothScrollLink from "./navUtils"
import { useState, useEffect } from "react";

export default function Navbar() {
  const menuItems = [["Home", "/"], ["About", "about"], ["Experience", "experience"], ["Skills", "skills"], ["Projects", "projects"]]

  const [activeSection, setActiveSection] = useState("/");

  const getMiddleY = (element) => {
      if (!element) return 0;
      const { top, height } = element.getBoundingClientRect();
      return top + height / 2;
  }

  const checkScroll = () => {
      const homeElement = document.getElementById('/');
      const aboutElement = document.getElementById('about');
      const experienceElement = document.getElementById('experience');
      const skillsElement = document.getElementById('skills');
      const projectsElement = document.getElementById('projects');

      const homeMiddleY = getMiddleY(homeElement);
      const aboutMiddleY = getMiddleY(aboutElement);
      const experienceMiddleY = getMiddleY(experienceElement);
      const skillsMiddleY = getMiddleY(skillsElement);
      const projectsMiddleY = getMiddleY(projectsElement);

      const viewportMiddleY = window.innerHeight / 2;

      const distances = {
          '/': Math.abs(viewportMiddleY - homeMiddleY),
          'about': Math.abs(viewportMiddleY - aboutMiddleY),
          'experience': Math.abs(viewportMiddleY - experienceMiddleY),
          'skills': Math.abs(viewportMiddleY - skillsMiddleY),
          'projects': Math.abs(viewportMiddleY - projectsMiddleY),
      };

      const closestSection = Object.keys(distances).reduce((a, b) => distances[a] < distances[b] ? a : b);
      setActiveSection(closestSection);
  };

  useEffect(() => {
      window.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div className="mobileSticky top-0 flex flex-wrap items-center gap-x-5 bg-white/80 px-4 py-4 backdrop-blur md:px-16 md:py-5 lg:px-32 w-full" style={{zIndex:50}}>
      {menuItems.map((menuItem, i) => {
          return (
            <div key={i}>
              <SmoothScrollLink
                linkKey={i}
                className={`text-lg hover:text-black md:text-xl ${
                  menuItem[1] === activeSection
                    ? 'font-extrabold text-black'
                    : 'text-gray-600'
                } relative group`}
                href={`#${menuItem[1]}`}
                targetId={menuItem[1]}
              >
                {menuItem[0]}
                <span className="absolute inset-x-0 left-0 bottom-[-0.1rem] h-0.5 bg-black underline scale-x-0"></span>
              </SmoothScrollLink>
            </div>
          )
        })}
    </div>
  )
}