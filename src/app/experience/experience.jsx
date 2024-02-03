import React from "react";
import Header from "../components/headers/header.jsx"
import SubHeader from "../components/headers/subheader.jsx"
import PageDivider from "../components/pagedivider/pagedivider.jsx";
import Timeline from "../components/timeline/timeline.jsx"
import "../globals.css"

const colors = ["darkorange", "cadetblue", "lightsalmon", "indianred", "darkcyan", "chocolate"]
const brightcolors = ["blueviolet", "deeppink", "limegreen"]

const ExperiencePage = () => {
    const title = "Experience"
    const description = "Timeline of My Career"

    const education = [
        {
            title:"University of Minnesota",
            location:"Minneapolis, MN",
            description:"B.S. Computer Science",
            time:"September 2021 - Present"
        }
    ]
    const workExperience = [
        {
            title:"NLP Undergraduate Researcher",
            location:"Minneapolis, MN",
            description:"",
            time:"October 2023 - Present"
        },
        {
            title:"Software Developer Intern",
            location:"Madison, WI",
            description:"Telehealth",
            time:"May 2023 - August 2023"
        }
    ]

    const TimelineElement = (elements) => {
        return (
            <div className="">
                <Timeline elements={elements}/>
            </div>
        );
    }

    return (
        <section 
            className="adaptivePadding flex bg-brownflex-col items-center justify-between" 
            style={{paddingBottom:'4.5rem', paddingTop:'4.5rem'}}
            id="experience"
        >
            <div className="flex space-y-20 w-full">
                <div className="mx-auto w-full max-w-[100rem] rounded-md overflow-hidden">
                    <div className="w-auto h-auto pt-5">
                        <Header centered={true} title={title} description={description} color={"#f6f7f2"} descriptionColor={"#f6f7f2"}></Header>
                    </div>

                    <PageDivider marginBottom={0}></PageDivider>
                    <div 
                        className="w-[100%] bg-darkoffwhite flex flex-row justify-between" 
                        style={{paddingTop:"2.5%", paddingBottom:"2.5%"}}
                    >
                        <div 
                            className="w-5/12"
                            style={{marginLeft:"4.16%"}}
                        >
                            <SubHeader title={"Education"} description={TimelineElement(education)} color={"indianred"}></SubHeader>
                        </div>
                        <div 
                            className="w-7/12"
                            style={{marginRight:"4.16%"}}
                        >
                            <SubHeader title={"Work"} description={TimelineElement(workExperience)} color={"indianred"}></SubHeader>
                        </div>
                    </div>
                    <PageDivider marginBottom={2.5}></PageDivider>
                </div>
            </div>
        </section>
    );
}

export default ExperiencePage;