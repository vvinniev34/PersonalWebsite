import React from "react";
import TertiaryHeader from "../headers/tertiaryheader"
import Image from "next/image";

const ProjectContainer = (props) => {
    const { title, description = "", image = "", color = "black", svg = null } = props;
    
    return (
        <div className="rounded-lg shadow-md flex w-full h-80 projectCard">
            <div className="w-0 sm:w-[40%] sm:m-[2.5%] overflow-hidden rounded-md" style={{background:"inherit", zIndex:1}}>
                {image ? 
                    <div className="h-[100%] object-cover zoom-on-hover">
                        <Image src={image} alt="project image" style={{ height:"100%", objectFit:"cover", objectPosition:"center" }}/>
                    </div> :
                    (svg ? <div className="h-full zoom-on-hover">{svg}</div> : "Image Placeholder")}
            </div>
            <div className="w-full sm:w-[55%] m-[5%] sm:m-[2.5%] sm:ml-0" style={{zIndex:1}}>
                <TertiaryHeader title={title} description={description} color={"rgb(75 85 99)"}/>
            </div>
        </div>
    );
}

export default ProjectContainer;