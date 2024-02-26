import React from "react";
import SubHeader from "../components/headers/subheader.jsx"
import Timeline from "../components/timeline/timeline.jsx"
// import BearToast from "../components/3dmodels/beartoast.jsx"
import "../globals.css"

const ExperiencePage = () => {
    const education = [
        {
            title:"University of Minnesota",
            location:"Minneapolis, MN",
            description:"B.S. Computer Science",
            time:"September 2021 - Present",
            img:"/experience/minnesota.png"
        }
    ]
    const workExperience = [
        {
            title:"NLP Undergraduate Researcher",
            location:"Minneapolis, MN",
            description:"🤖📝🔍 Minnesota NLP",
            time:"October 2023 - Present",
            img:"/experience/minnesota.png"
        },
        {
            title:"Software Developer Intern",
            location:"Madison, WI",
            description:"📱💻🏥 Telehealth",
            time:"May 2023 - August 2023",
            img:"/experience/epic_systems.jpg"
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
            className="section flex flex-col items-center justify-between"
            style={{
                paddingBottom:'4.5rem', 
                paddingTop:'4.5rem',
            }}
            id="experience"
        >
            <div 
                className="flex space-y-20 w-full featuredRightPadding"
                style={{
                    width: "100%",
                    right: 0,
                    position: "relative",
                }}
            >
                <div className="mx-auto w-full max-w-[100rem] rounded-md overflow-hidden">
                    <div 
                        className="w-[100%] flex items-center justify-center " 
                        style={{paddingTop:"2.5%", paddingBottom:"2.5%"}}
                    >
                        <div className="w-[90%] flex flex-wrap">
                            <div style={{ flex: "1 0 41.66%", boxSizing:"border-box", marginRight:"3.3%" }}>
                                <SubHeader title={"Education"} description={TimelineElement(education)} color={"#f6f7f2"}></SubHeader>
                            </div>
                            <div style={{ flex: "1 0 55%", boxSizing:"border-box" }}>
                                <SubHeader title={"Work"} description={TimelineElement(workExperience)} color={"#f6f7f2"}></SubHeader>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperiencePage;