"use client"
import React, { useState, useEffect } from 'react'
import styles from "./glowingCursor.module.css"

const GlowingCursorContainer = ( props ) => {
    const { children } = props;

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isBetweenSections, setIsBetweenSections] = useState(false);

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });

            const skillsElement = document.getElementById('skills');
            const projectsElement = document.getElementById('projects');

            if (skillsElement && projectsElement) {
                const skillsPosition = skillsElement.getBoundingClientRect();
                const projectsPosition = projectsElement.getBoundingClientRect();
                const isBelowSkills = e.clientY >= skillsPosition.top;
                const isAboveProjects = e.clientY <= projectsPosition.bottom;
                setIsBetweenSections(isBelowSkills && isAboveProjects);
            }
        };
        document.addEventListener('mousemove', updateCursorPosition);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    const dynamicStyles = {
        '--cursor-x': `${cursorPosition.x}px`,
        '--cursor-y': `${cursorPosition.y}px`,
    };

    return (
        <div>
            {children}
            <div 
                className={`pointer-events-none inset-0 z-20 ${styles.cursorGlow} ${isBetweenSections ? styles.visible : ""} ${styles.radialGradient}`} 
                style={dynamicStyles}>
            </div>
        </div>
    )
}

export default GlowingCursorContainer;