import React from "react";
import Header from "../components/headers/header.jsx"
import SubHeader from "../components/headers/subheader.jsx"
import PageDivider from "../components/pagedivider/pagedivider.jsx";
import "../globals.css"

const colors = ["darkorange", "cadetblue", "lightsalmon", "indianred", "darkcyan", "chocolate"]
const brightcolors = ["blueviolet", "deeppink", "limegreen"]

const ExperiencePage = () => {
    const title = "Experience"
    const description = "Timeline of My Experience"

    return (
        <section 
            className="adaptivePadding flex bg-gradient-to-b from-lightgray to-dimgray min-h-screen flex-col items-center justify-between" 
            style={{paddingBottom:'0%', paddingTop:'4.5rem'}}
            id="experience"
        >
            <div className="flex space-y-20 w-full">
                <div className="mx-auto w-full max-w-[100rem] rounded-md overflow-hidden">
                    <div className="w-auto h-auto pt-5">
                        <Header centered={true} title={title} description={description} color={"black"}></Header>
                    </div>

                    {/* <PageDivider marginBottom={2.5}></PageDivider>

                    <SubHeader title={"Experience"} color={colors[2]}></SubHeader> */}
                </div>
            </div>
        </section>
    );
}

export default ExperiencePage;