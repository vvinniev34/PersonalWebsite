import React from "react";
import Header from "../components/headers/header.jsx";
import SubHeader from "../components/headers/subheader.jsx";
import ProjectContainer from "../components/projectcontainer/projectcontainer.jsx";
import PageDivider from "../components/pagedivider/pagedivider";
import Carousel from "../components/carousel/carousel.jsx"
import StackSVG from "../components/projectcontainer/svgs.jsx"
import "../globals.css";

const colors = ["darkorange", "burlywood", "tan", "cadetblue", "lightsalmon", "indianred", "darkcyan", "chocolate"]
const brightcolors = ["blueviolet", "deeppink", "dullyellow"]

const ProjectPage = () => {
    const title = "Projects";
    const description = "A growing collection of my projects, past and ongoing"
    const background = "projects/project_header.jpg"

    const projects = [
        <ProjectContainer 
            title={"RedditReels"} 
            image="projects/reddit.jpg"
            color={colors[1]}
            description={<div>Automatic short-form video content generator and uploader for TikTok, YouTube, and Instagram.<br/>About 30,000,000 annual views.</div>}
        />, 
        <ProjectContainer 
            title={"User-Level Thread Library"}
            svg={<StackSVG/>}
            color={colors[1]}
            description={<div>User-level thread library and API.<br/>Contains vital functions such as thread creation, scheduling, synchronization, and termination.</div>}
        />, 
        <ProjectContainer 
            title={"VoiceNotes"}
            image="projects/voicenotes.jpg"
            color={colors[1]}
            description={<div>Fully voice controlled note-taking app for hands-free use.</div>}
        />, 
        <ProjectContainer 
            title={"GroupFinder"} 
            image="projects/group.png"
            color={colors[1]}
            description={<div>Clusters user-submitted data based upon similarity.<br/>Uses a parallelized implementation of a k-means clustering ML algorithm.</div>}
        />
    ]
    
    return (
        <section 
            className={"adaptivePadding flex bg-dimgray flex-col items-center justify-between"/*min-h-screen*/} 
            style={{paddingBottom:'0%', paddingTop:'4.5rem'}}
            id="projects"
        >
            <div className="flex space-y-20 w-full">
                <div className="mx-auto w-auto max-w-[100rem] overflow-hidden flex flex-col items-center justify-center">
                    <div className="w-auto h-auto pt-5">
                        <Header centered={true} title={title} description={description} color={"antiquewhite"} descriptionColor="antiquewhite"></Header>
                    </div>

                    <PageDivider marginBottom={0}></PageDivider>

                    <div 
                        className="w-[100%] bg-darkoffwhite flex items-center justify-center p-8" 
                        style={{paddingBottom:0}}
                    >
                        <div className="w-[90%] overflow-hidden">
                            <SubHeader title={"Completed"} color={colors[2]}></SubHeader>

                            <div className="w-full rounded-lg shadow-lg">
                                <Carousel projectList={projects}></Carousel>
                            </div>
                        </div>
                    </div>

                    <PageDivider marginBottom={2.5}></PageDivider>
                </div>
            </div>
        </section>
    );
}

export default ProjectPage;