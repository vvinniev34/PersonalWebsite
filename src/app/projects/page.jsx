import React from "react";
import Header from "../components/headers/header.jsx";
import SubHeader from "../components/headers/subheader.jsx";
import ProjectContainer from "../components/projectcontainer/projectcontainer.jsx";
import PageDivider from "../components/pagedivider/pagedivider";
import Carousel from "../components/carousel/carousel.jsx"
import StackSVG from "../components/projectcontainer/svgs.jsx"
import "../globals.css";

const colors = ["darkorange", "cadetblue", "lightsalmon", "indianred", "darkcyan", "chocolate"]
const brightcolors = ["blueviolet", "deeppink"]

const ProjectPage = () => {
    const title = "Projects";
    const description = "A growing collection of my projects, past and ongoing"
    const background = "projects/project_header.jpg"

    const projects = [
        <ProjectContainer 
            title={"RedditReels"} 
            image="projects/reddit.jpg"
            color={colors[5]}
        />, 
        <ProjectContainer 
            title={"User-Level Thread Library"}
            svg={<StackSVG/>}
            color={colors[5]}
        />, 
        <ProjectContainer 
            title={"VoiceNotes"}
            image="projects/voicenotes.jpg"
            color={colors[5]}
        />, 
        <ProjectContainer 
            title={"Cluster Analysis Tool"} 
            image="projects/group.png"
            color={colors[5]}
        />
    ]
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-20 pt-5">
            <div className="flex space-y-20 w-full">
                <div className="mx-auto w-full max-w-[100rem] rounded-md overflow-hidden">
                    <div className="w-auto h-auto pt-5">
                        <Header centered={true} title={title} description={description} color={brightcolors[1]}></Header>
                    </div>

                    <PageDivider marginBottom={2.5}></PageDivider>

                    <SubHeader title={"Ongoing"} color={colors[4]}></SubHeader>

                    <div className="w-full rounded-lg shadow-lg">
                        <Carousel projectList={projects}></Carousel>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProjectPage;