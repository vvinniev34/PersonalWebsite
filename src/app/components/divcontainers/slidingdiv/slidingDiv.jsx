"use client";
import React from 'react';
import { useInView } from 'react-intersection-observer';

const SlidingDiv = (props) => {
    const { children, reverse = false } = props

    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <div 
            ref={ref}
            className={`flex ${inView ? (reverse ? "transition-transform-lr flex-row-reverse" : "transition-transform-rl") :
                "transform translate-x-full duration-1000 ease-out"} rounded-lg p-5 m-10 bg-offwhite shadow-md`}
        >
            {children}
        </div>
    );
};

export default SlidingDiv;
