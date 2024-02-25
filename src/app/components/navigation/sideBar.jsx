"use client"
import React, { useState, useEffect } from 'react'
import { GithubSVG, LinkedInSVG, InstagramSVG, MailSVG } from "../contact/svgs"
import { handleGithubClick, handleLinkedInClick, handleEmailClick } from "../contact/contact"
import SmoothScrollLink from "./navUtils"
import Header from "../headers/header"
import styles from "./sideBar.module.css"

const aboutDescription = "I'm an aspiring Software Engineer based in Minneapolis. Welcome to my portfolio.";
const experienceDescription = "Timeline of my career"
const skillsDescription = "Some technologies I've been tinkering with"
const projectsDescription = "A growing collection of my projects, past and ongoing"

const SideBar = () => {
    const menuItems = [["Home", "/"], ["About", "about"], ["Experience", "experience"], ["Skills", "skills"], ["Projects", "projects"]]
    const menuItemsReverseDict = {
        "/": ["Home", aboutDescription],
        "about": ["About", aboutDescription],
        "experience": ["Experience", experienceDescription],
        "skills": ["Skills", skillsDescription],
        "projects": ["Projects", projectsDescription]
    }

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
        <div className="sticky top-0 flex flex-col justify-center items-center w-2/5 h-full min-h-screen z-10" >
            <div 
                className="w-full h-auto pt-5 " 
                style={{ paddingLeft:"8rem", paddingRight:"2rem", position:"absolute", top:"5rem", left:0 }}
            >
                <Header centered={false} title={menuItemsReverseDict[activeSection][0]} description={menuItemsReverseDict[activeSection][1]} color={"#f6f7f2"} descriptionColor={"#f6f7f2"}></Header>
            </div>
            <div style={{ width:"100%", padding:"8rem" }}>
                {menuItems.map((menuItem, i) => {
                    return (
                        <div key={i}>
                            <SmoothScrollLink
                                linkKey={i}
                                className={`text-lg hover:text-lightblue text-2xl font-extrabold tracking-tight md:text-4xl ${
                                menuItem[1] === activeSection
                                    ? 'text-lightblue'
                                    : 'text-white'
                                } pb-5`}
                                href={`#${menuItem[1]}`}
                                targetId={menuItem[1]}
                            >
                                {menuItem[0]}
                            </SmoothScrollLink>
                        </div>
                    )
                })}
            </div>
            <div 
                className="w-full h-auto" 
                style={{ paddingLeft:"8rem", paddingRight:"2rem", position:"absolute", bottom:"5rem", left:0 }}
            >
                <Header 
                    centered={false} 
                    title={
                        <div className='flex fill-white'>
                            <div className={styles.contactSVG} onClick={handleGithubClick}>
                                <GithubSVG/>
                            </div>
                            <div className={styles.contactSVG} onClick={handleLinkedInClick}>
                                <LinkedInSVG/>
                            </div>
                            <div className={styles.contactSVG} onClick={handleEmailClick}>
                                <MailSVG/>
                            </div>
                            <div className={styles.contactSVG}>
                                <InstagramSVG/>
                            </div>
                        </div>
                    } 
                    description={"Vincent Liu"} 
                    color={"#f6f7f2"} 
                    descriptionColor={"#f6f7f2"}
                />
            </div>
        </div>
    )
}

export default SideBar