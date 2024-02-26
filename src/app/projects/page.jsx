import React from "react";
import SubHeader from "../components/headers/subheader.jsx";
import ProjectContainer from "../components/projectcontainer/projectcontainer.jsx";
import Carousel from "../components/carousel/carousel.jsx"
import StackSVG from "../components/projectcontainer/svgs.jsx"
import Image from "next/image";
import "../globals.css";

const colors = ["darkorange", "burlywood", "indianred", "tan", "cadetblue", "lightsalmon", "darkcyan", "chocolate"]

const ProjectPage = () => {

    const projects = [
        <ProjectContainer 
            title={"RedditReels"} 
            image="/projects/reddit.jpg"
            color={colors[2]}
            description={<div>Automatic short-form video content generator and uploader for TikTok, YouTube, and Instagram.<br/>About 30,000,000 annual views.</div>}
        />, 
        <ProjectContainer 
            title={"User-Level Thread Library"}
            svg={<StackSVG/>}
            color={colors[2]}
            description={<div>User-level thread library and API.<br/>Contains vital functions such as thread creation, scheduling, synchronization, and termination.</div>}
        />, 
        <ProjectContainer 
            title={"VoiceNotes"}
            image="/projects/voicenotes.jpg"
            color={colors[2]}
            description={<div>Fully voice controlled note-taking app for hands-free use.</div>}
        />, 
        <ProjectContainer 
            title={"GroupFinder"} 
            image="/projects/group.png"
            color={colors[2]}
            description={<div>Clusters user-submitted data based upon similarity.<br/>Uses a parallelized implementation of a k-means clustering ML algorithm.</div>}
        />
    ]
    
    return (
        <section 
            className={"section flex flex-col items-center justify-between"} 
            style={{
                paddingBottom:'4.5rem', 
                paddingTop:'4.5rem'
            }}
            id="projects"
        >
            <div 
                style={{
                    position: "absolute", 
                    marginTop: "-4.5rem", 
                    marginLeft:"-40%",
                    width:"100%",
                    minHeight:"100vh"
                }}
            >
                <div 
                    style={{ 
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
                className="flex space-y-20 w-full featuredRightPadding" 
                style={{
                    width: "100%",
                    right: 0,
                    position: "relative",
                    // paddingRight: "15%",
                    zIndex: 1
                }}
            >
                <div className="mx-auto w-auto max-w-[100rem] overflow-hidden flex flex-col items-center justify-center">
                    <div 
                        className="w-[100%] flex items-center justify-center p-8" 
                        style={{paddingBottom:0}}
                    >
                        <div className="overflow-hidden">
                            <SubHeader title={"Completed"} color={"#f6f7f2"}></SubHeader>

                            <div className="w-full rounded-lg shadow-lg">
                                <Carousel projectList={projects}></Carousel>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ProjectPage;