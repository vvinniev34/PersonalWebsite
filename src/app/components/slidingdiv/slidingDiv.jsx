"use client";
import React from 'react';
import { useInView } from 'react-intersection-observer';

const SlidingDiv = (props) => {
    const { children, reverse = false } = props

    const { ref, inView } = useInView();

    return (
        <div 
            ref={ref}
            className={`${inView ? (reverse ? "transition-transform-lr flex flex-row-reverse" : "transition-transform-rl") :
                "transform translate-x-full duration-1000 ease-out"} rounded-lg border-2 p-5 m-5`}
        >
            {children}
        </div>
    );
};

export default SlidingDiv;
