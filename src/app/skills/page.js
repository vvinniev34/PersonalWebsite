"use client";
import React, { useState, useEffect } from "react";
import TertiaryHeader from "../components/headers/tertiaryheader";
import { useInView } from "react-intersection-observer";
import { languages, frameworks, tools, databases } from "./skillsList.js";

const SkillsPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const [animatedElements, setAnimatedElements] = useState([]);

  useEffect(() => {
    const elements = document.querySelectorAll(".dropIn");
    setAnimatedElements(Array.from(elements));
  }, []);

  useEffect(() => {
    if (inView) {
      triggerSequentialAnimations();
    }
  }, [inView]);

  const triggerSequentialAnimations = () => {
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("animate");
      }, index * 500); // Adjust the delay as needed
    });
  };

  return (
    <section
      className="section flex flex-col items-center justify-between"
      style={{
        paddingBottom: "4.5rem",
        paddingTop: "4.5rem",
        position: "relative",
        overflow: "hidden",
      }}
      id="skills"
    >
      <div
        className="flex space-y-20 w-full featuredRightPadding"
        style={{ zIndex: 30 }}
      >
        <div className="mx-auto w-full max-w-[100rem] rounded-md overflow-hidden">
          <div
            className="w-[100%] flex items-center justify-center "
            style={{ paddingTop: "2.5%", paddingBottom: "2.5%" }}
          >
            <div
              ref={ref}
              className={`w-[90%] flex flex-row flex-wrap justify-between overflow-hidden`}
              style={{
                paddingTop: "1.25rem",
                paddingBottom: "1.25rem",
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
              }}
            >
              <div
                className={`overflow-hidden`}
                style={{ padding: "0.5rem", paddingBottom: "2rem" }}
              >
                <div className={`${inView ? "" : "opacity-0"} dropIn`}>
                  <TertiaryHeader
                    title={"Languages"}
                    description={languages}
                    color={"#f6f7f2"}
                    descriptionColor={"#f6f7f2"}
                  ></TertiaryHeader>
                </div>
              </div>
              <div
                className={`overflow-hidden`}
                style={{ padding: "0.5rem", paddingBottom: "2rem" }}
              >
                <div className={`${inView ? "" : "opacity-0"} dropIn`}>
                  <TertiaryHeader
                    title={"Frameworks"}
                    description={frameworks}
                    color={"#f6f7f2"}
                    descriptionColor={"#f6f7f2"}
                  ></TertiaryHeader>
                </div>
              </div>
              <div
                className={`overflow-hidden`}
                style={{ padding: "0.5rem", paddingBottom: "2rem" }}
              >
                <div className={`${inView ? "" : "opacity-0"} dropIn`}>
                  <TertiaryHeader
                    title={"Tools"}
                    description={tools}
                    color={"#f6f7f2"}
                    descriptionColor={"#f6f7f2"}
                  ></TertiaryHeader>
                </div>
              </div>
              <div
                className={`overflow-hidden`}
                style={{ padding: "0.5rem", paddingBottom: "2rem" }}
              >
                <div className={`${inView ? "" : "opacity-0"} dropIn`}>
                  <TertiaryHeader
                    title={"Databases"}
                    description={databases}
                    color={"#f6f7f2"}
                    descriptionColor={"#f6f7f2"}
                  ></TertiaryHeader>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
