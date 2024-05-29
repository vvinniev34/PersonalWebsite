"use client"
import SmoothScrollLink from "./navUtils"
import { useState, useEffect, useRef } from "react";

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

  const [windowWidth, setWindowWidth] = useState(undefined)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
      function handleResize() {
          setWindowWidth(window.innerWidth)
      }
      window.addEventListener("resize", handleResize)
      handleResize()
      return () => { 
          window.removeEventListener("resize", handleResize)
      }
  }, [setWindowWidth])

  const dropdownRef = useRef(null);
  const expandRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        expandRef.current &&
        !expandRef.current.contains(event.target) &&
        dropdownRef.current 
        // !dropdownRef.current.contains(event.target)
      ) {
        setExpanded(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="mobileSticky top-0 flex flex-wrap bg-white/80  pt-4 backdrop-blur md:pt-5 w-full" style={{zIndex:50}}>
      <div className="sidebarLeftPadding sidebarRightPadding flex flex-wrap items-center w-full pb-4 md:pb-5">
        <div>
          <SmoothScrollLink
            className={`text-xl hover:text-black md:text-2xl ${
              "/" === activeSection
                ? 'font-extrabold text-black'
                : 'text-gray-600'
            } relative group`}
            href={`#/`}
            targetId={"/"}
          >
            {"VL"}
            <span className="absolute inset-x-0 left-0 bottom-[-0.1rem] h-0.5 bg-black underline scale-x-0"></span>
          </SmoothScrollLink>
        </div>
        {windowWidth && windowWidth > 640 ?
          <div className="ml-auto flex items-center gap-x-5 pr-8"> 
            {menuItems.map((menuItem, i) => {
                return i != 0 ? (
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
                ) : ""
              })}
          </div> : windowWidth ? 
          <div className='flex items-center justify-center fade_in ml-auto' onClick={() => setExpanded(!expanded)} ref={expandRef} >
          {!expanded ? 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="w-8 h-8 stroke-gray-600 hover:stroke-black hover:cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="w-8 h-8 stroke-gray-600 hover:stroke-black hover:cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg> 
          }
        </div> : ""}
        </div>
        {expanded && windowWidth < 640? 
        <div className='w-full left-0 shadow-md' ref={dropdownRef} >
            {menuItems.map((menuItem, i) => {
                return i != 0 ? (
                  <div>
                    <SmoothScrollLink
                      linkKey={i}
                      className={`py-2 px-8 font-medium block text-lg outline-offset-[-6px] flex items-center hover:bg-gray-100 cursor-pointer text-gray-600`}
                      href={`#${menuItem[1]}`}
                      targetId={menuItem[1]}
                    >
                      {menuItem[0]}
                    </SmoothScrollLink>
                  </div>
                ) : ""
              })}
          </div> : ""
        }
    </div>
  )
}