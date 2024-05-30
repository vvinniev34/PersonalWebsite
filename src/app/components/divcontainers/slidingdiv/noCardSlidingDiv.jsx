"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const NoCardSlidingDiv = (props) => {
  const { children, reverse = false } = props;

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`flex ${
        !reverse
          ? `transition-transform-rl-initial ${
              inView ? "transition-transform-rl" : ""
            }`
          : `transition-transform-lr-initial ${
              inView ? "transition-transform-lr" : ""
            }`
      } rounded-lg p-5`}
    >
      {children}
    </div>
  );
};

export default NoCardSlidingDiv;
