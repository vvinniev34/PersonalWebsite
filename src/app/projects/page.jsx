"use client"
import React, { useRef, useState, useEffect } from 'react';
import SubHeader from "../components/headers/subheader.jsx";
import ProjectContainer from "../components/projectcontainer/projectcontainer.jsx";
import FeaturedProject from "../components/projectcontainer/featuredproject.jsx"
import Carousel from "../components/carousel/carousel.jsx"
import StackSVG from "../components/projectcontainer/svgs.jsx"
import Image from "next/image";
import "../globals.css";

const ProjectPage = () => {
    const [featuredProjectHeight, setFeaturedProjectHeight] = useState();
    const featuredProject = useRef(null);

    useEffect(() => {
        if (!featuredProject.current)   return;
        const resizeObserver = new ResizeObserver(() => {
             if(featuredProject.current.offsetHeight !== featuredProjectHeight) {
                setFeaturedProjectHeight(featuredProject.current.offsetHeight);
            }
        });        
        resizeObserver.observe(featuredProject.current);

        return function cleanup() {
            resizeObserver.disconnect();
        }
    },
    [featuredProject.current])

    const projects = [
        <ProjectContainer 
            title={"RedditReels"} 
            image="/projects/reddit.jpg"
            color={"indianred"}
            description={<div>Automatic short-form video content generator and uploader for TikTok, YouTube, and Instagram.<br/>About 30,000,000 annual views.</div>}
        />, 
        <ProjectContainer 
            title={"User-Level Thread Library"}
            svg={<StackSVG/>}
            color={"indianred"}
            description={<div>User-level thread library and API.<br/>Contains vital functions such as thread creation, scheduling, synchronization, and termination.</div>}
        />, 
        <ProjectContainer 
            title={"VoiceNotes"}
            image="/projects/voicenotes.jpg"
            color={"indianred"}
            description={<div>Fully voice controlled note-taking app for hands-free use.</div>}
        />, 
        <ProjectContainer 
            title={"GroupFinder"} 
            image="/projects/group.png"
            color={"indianred"}
            description={<div>Clusters user-submitted data based upon similarity.<br/>Uses a parallelized implementation of a k-means clustering ML algorithm.</div>}
        />
    ]

    return (
        <section 
            className="section flex flex-col items-center justify-between"
            style={{
                paddingBottom:'4.5rem', 
                paddingTop:'4.5rem'
            }}
            id="projects"
        > 
            <div 
                className="mobileImageBackground"
                style={{ transform: "scaleX(-1) translateX(20%)", marginTop:`calc(-2rem + ${featuredProjectHeight}px` }}
            >   
                <div 
                    style={{ 
                        background:'linear-gradient(to left, rgba(255,255,255,0) 10%, #0f0f0f)',
                        width:"100%",
                        height:"100%",
                        position:"absolute",
                        zIndex:1
                    }}
                />
                <Image 
                    src="/submarine.png"
                    alt="ocean underwater surface"
                    layout="fill" 
                    objectFit="cover" 
                    objectPosition="center"
                />
            </div>
            <div 
                className="space-y-20 w-full featuredRightPadding"
                style={{ 
                    position:'relative',
                    zIndex:30
                }}
            >
                <div className="mx-auto w-auto max-w-[100rem] overflow-hidden flex flex-col items-center justify-center">
                    <div className="w-full p-8" style={{ paddingTop:0, paddingBottom:'0.5rem' }}>
                        <SubHeader title={"Featured"} color={"#f6f7f2"}/>
                        <div className="py-4" ref={featuredProject}>
                            <FeaturedProject/>
                        </div>
                    </div>

                    <div className="w-[100%] flex items-center justify-center p-8 pb-0">
                        <div className="overflow-hidden">
                            <SubHeader title={"Completed"} color={"#f6f7f2"}/>
                            <div className="w-full rounded-lg shadow-lg">
                                <Carousel projectList={projects}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ProjectPage;