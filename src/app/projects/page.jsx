import React from "react";
import Header from "../components/headers/header.jsx";
import SubHeader from "../components/headers/subheader.jsx";
import ProjectContainer from "../components/projectcontainer/projectcontainer.jsx";
import PageDivider from "../components/pagedivider/pagedivider";
import Carousel from "../components/carousel/carousel.jsx"
import "../globals.css";

const ProjectPage = () => {
    const title = "Projects";
    const description = "A growing collection of my projects, past and ongoing"

    const projects = [<ProjectContainer title={0}/>, <ProjectContainer title={1}/>, <ProjectContainer title={2}/>, <ProjectContainer title={3}/>]
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-20">
            <div className="flex space-y-20 w-full">
                <div className="mx-auto w-full max-w-[100rem] rounded-md overflow-hidden">
                    <Header title={title} description={description}></Header>

                    <PageDivider></PageDivider>

                    <SubHeader title={"Ongoing"}></SubHeader>

                    {/* <div className="w-full rounded-lg bg-gradient-radial from-transparent via-slate-100 to-slate-150"> */}
                    <div className="w-full rounded-lg bg-gradient-to-r from-transparent via-slate-150"> 
                        <Carousel projectList={projects}></Carousel>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProjectPage;