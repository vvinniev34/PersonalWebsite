import React from "react";
import Header from "../components/headers/header.jsx";
import SubHeader from "../components/headers/subheader.jsx";
import ProjectContainer from "../components/projectcontainer/projectcontainer.jsx";
import PageDivider from "../components/pagedivider/pagedivider";
import Carousel from "../components/carousel/carousel.jsx"
import StackSVG from "../components/projectcontainer/svgs.jsx"
import "../globals.css";

const colors = ["darkorange", "cadetblue", "lightsalmon", "indianred", "darkcyan", "chocolate"]
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
            description={<div>Automatic short-form video content generator and uploader for TikTok, YouTube Shorts, and Instagram Reels.<br/>On pace for 30,000,000 annual views.</div>}
        />, 
        <ProjectContainer 
            title={"User-Level Thread Library"}
            svg={<StackSVG/>}
            color={colors[1]}
            description={<div>Designed a user-level thread library and API from scratch.<br/>Contains vital functions such as thread creation, scheduling, synchronization, and termination, to enable efficient resource utilization and task parallelism.</div>}
        />, 
        <ProjectContainer 
            title={"VoiceNotes"}
            image="projects/voicenotes.jpg"
            color={colors[1]}
            description={<div>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>}
        />, 
        <ProjectContainer 
            title={"Cluster Analysis Tool"} 
            image="projects/group.png"
            color={colors[1]}
            description={<div>Designed a parallelized implementation of the k-means clustering ML algorithm to partition user-provided data</div>}
        />
    ]
    
    return (
        <section 
            className="flex bg-darkgray min-h-screen flex-col items-center justify-between p-20" 
            style={{paddingLeft:'15%', paddingRight:'15%'}}
            id="projects"
        >
            <div className="flex space-y-20 w-full">
                <div className="mx-auto w-auto max-w-[100rem] overflow-hidden flex flex-col items-center justify-center">
                    <div className="w-auto h-auto pt-5">
                        <Header centered={true} title={title} description={description} color={"#483D8B"}></Header>
                    </div>

                    <PageDivider marginBottom={0}></PageDivider>

                    <div 
                        className="w-[100%] bg-darkoffwhite flex items-center justify-center p-8" 
                        style={{paddingBottom:0}}
                    >
                        <div className="w-[90%] overflow-hidden">
                            <SubHeader title={"Ongoing"} color={colors[4]}></SubHeader>

                            <div className="w-full rounded-lg shadow-lg">
                                <Carousel projectList={projects}></Carousel>
                            </div>
                        </div>
                    </div>

                    <PageDivider marginBottom={0}></PageDivider>
                </div>
            </div>
        </section>
    );
}

export default ProjectPage;