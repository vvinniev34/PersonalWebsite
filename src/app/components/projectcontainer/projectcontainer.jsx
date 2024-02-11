import React from "react";
import TertiaryHeader from "../headers/tertiaryheader"

const ProjectContainer = (props) => {
    const { title, description = "", image = "", color = "black", svg = null } = props;
    
    return (
        <div className="bg-offwhite hover:bg-verylightpink hover:translate-y-0.5 rounded-lg shadow-md flex w-full h-80 projectCard">
            <div className="w-[40%] m-[2.5%] overflow-hidden rounded-md" style={{background:"inherit", zIndex:1}}>
                {image ? <img src={image} alt="Reddit Image" className="h-[100%] w-[100%] object-cover zoom-on-hover"/> :
                (svg ? <div className="h-full zoom-on-hover">{svg}</div> : "Image Placeholder")}
            </div>
            <div className="w-[55%] mr-[2.5%] mt-[2.5%] mb-[2.5%]" style={{zIndex:1}}>
                <TertiaryHeader title={title} description={description} color={color}/>
            </div>
        </div>
    );
}

export default ProjectContainer;