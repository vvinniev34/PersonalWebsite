import React from "react";

const ProjectContainer = (props) => {
    const { title, description ="" } = props;
    return (
        <div className="bg-white rounded-lg shadow-md flex justify-center align-center w-full h-80">
            <h3>Project {title}</h3>
        </div>
    );
}

export default ProjectContainer;