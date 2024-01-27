import React from "react";
import Header from "../components/headers/header.jsx"
import SubHeader from "../components/headers/subheader.jsx"
import "../globals.css"

const ResumePage = () => {
    const title = "Resume"
    const description = ""
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-20">
            <div className="flex space-y-20 w-full">
                <div className="mx-auto w-auto max-w-[100rem] rounded-md overflow-hidden">
                    <Header title={title} description={description}/>
                </div>
           </div>
        </main>
    );
}

export default ResumePage;