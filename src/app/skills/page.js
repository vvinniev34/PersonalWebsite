"use client"
import React from "react";
import TertiaryHeader from "../components/headers/tertiaryheader";
import { useInView } from 'react-intersection-observer';
import styles from './page.module.css'

const SkillsPage = () => {
  const languages = (
    <ul>
      <li>Java</li>
      <li>JavaScript</li>
      <li>TypeScript</li>
      <li>Python</li>
      <li>C</li>
      <li>C++</li>
      <li>C#</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>SQL</li>
    </ul>
  )
  const frameworks = (
    <ul>
      <li>React.js</li>
      <li>Spring Boot</li>
      <li>.NET</li>
      <li>Django</li>
      <li>Node.js</li>
    </ul>
  )

  const tools = (
    <ul>
      <li>Microsoft Azure</li>
      <li>Tailwind CSS</li>
      <li>Git & Github</li>
      <li>PyTorch</li>
      <li>MPI</li>
      <li>OpenMP</li>
      <li>Docker</li>
      <li>Selenium</li>
    </ul>
  )

  const databases = (
    <ul>
      <li>PostgreSQL</li>
      <li>MySQL</li>
      <li>Firebase</li>
      <li>CosmosDB</li>
    </ul>
  )

  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  
  return (
    <section 
      className="section flex flex-col items-center justify-between" 
      style={{paddingBottom:'4.5rem', paddingTop:'4.5rem', position:"relative", overflow:"hidden"}}
      id="skills"
    >
      <div 
          className="flex space-y-20 w-full featuredRightPadding"
          style={{
              width: "100%",
              right: 0,
              position: "relative",
          }}
      >
          <div className="mx-auto w-full max-w-[100rem] rounded-md overflow-hidden">
              <div 
                  className="w-[100%] flex items-center justify-center " 
                  style={{paddingTop:"2.5%", paddingBottom:"2.5%"}}
              >
                  <div 
                    ref={ref} 
                    className={`w-[90%] flex flex-row flex-wrap justify-between overflow-hidden`} 
                    style={{padding:'1.25rem'}}
                  >
                      <div 
                        className={`${inView ? styles.dropIn1 : ""}`}
                        style={{ paddingTop:"1rem", paddingBottom:"1rem" }}
                      >
                          <TertiaryHeader title={"Languages"} description={languages} color={"#f6f7f2"} descriptionColor={"#f6f7f2"}></TertiaryHeader>
                      </div>
                      <div 
                        className={`${inView ? styles.dropIn2 : ""}`}
                        style={{ paddingTop:"1rem", paddingBottom:"1rem" }}
                      >
                          <TertiaryHeader title={"Frameworks"} description={frameworks} color={"#f6f7f2"} descriptionColor={"#f6f7f2"}></TertiaryHeader>
                      </div>
                      <div
                        className={`${inView ? styles.dropIn3 : ""}`} 
                        style={{ paddingTop:"1rem", paddingBottom:"1rem" }}
                      >
                          <TertiaryHeader title={"Tools"} description={tools} color={"#f6f7f2"} descriptionColor={"#f6f7f2"}></TertiaryHeader>
                      </div>
                      <div 
                        className={`${inView ? styles.dropIn4 : ""}`}
                        style={{ paddingTop:"1rem", paddingBottom:"1rem" }}
                      >
                          <TertiaryHeader title={"Databases"} description={databases} color={"#f6f7f2"} descriptionColor={"#f6f7f2"}></TertiaryHeader>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    </section>
  )
}

export default SkillsPage;