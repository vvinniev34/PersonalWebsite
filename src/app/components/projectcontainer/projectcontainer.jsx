import React from "react";
import TertiaryHeader from "../headers/tertiaryheader"

const ProjectContainer = (props) => {
    const { title, description ="", image="" } = props;
    const tempdescription = "There is no harm in dreaming of becoming the world's best player. It is all about trying to be the best. I will keep working hard to achieve it but it is within my capabilities."
    return (
        <div className="bg-white rounded-lg shadow-md flex w-full h-80">
            <div className="w-[40%] m-[2.5%] bg-offwhite overflow-hidden rounded-md zoom-on-hover">
                {image ? <img src={image} alt="Reddit Image" className="h-[100%] object-cover"></img> : "Image"}
            </div>
            <div className="w-[55%] mr-[2.5%] mt-[2.5%] mb-[2.5%]">
                <TertiaryHeader title={title} description={tempdescription}/>
                {/* <div className="">
                    <a href="https://github.com/vvinniev34/redditreels" target="_blank">Visit</a>
                </div> */}
            </div>
        </div>
    );
}

export default ProjectContainer;