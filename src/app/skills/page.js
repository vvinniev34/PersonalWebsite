"use client"
import React, { useState, useEffect } from "react";
import Header from "../components/headers/header.jsx"
import SubHeader from "../components/headers/subheader.jsx"
import NoCardSlidingDiv from "../components/divcontainers/slidingdiv/noCardSlidingDiv.jsx"
import PageDivider from '../components/pagedivider/pagedivider.jsx'
import styles from "./page.module.css"

const colors = ["cadetblue", "lightsalmon", "salmon", "darkorange", "indianred", "darkcyan", "chocolate"]
const brightcolors= ["brown", "indianred"]

const SkillsPage = () => {
  return (
    <section 
      className="section flex flex-col items-center justify-between" 
      style={{paddingBottom:'4.5rem', paddingTop:'4.5rem', position:"relative", overflow:"hidden"}}
      id="skills"
    >
      <div 
        className="flex space-y-20 w-full"
        style={{
          width: "100%",
          right: 0,
          position: "relative",
          paddingRight: "15%",
        }}
      >
        <div className="mx-auto w-auto max-w-[100rem] rounded-md overflow-hidden flex flex-col items-center justify-center">

          <div style={{minHeight:"100vh", width:"100%"}}></div>

        </div>
      </div>

    </section>
  )
}

export default SkillsPage;