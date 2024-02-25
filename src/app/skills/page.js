import React from "react";

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