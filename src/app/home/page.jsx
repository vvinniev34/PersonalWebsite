import React from "react";
import Header from "../components/headers/header.jsx"
import SubHeader from "../components/headers/subheader.jsx"
import SlidingDiv from "../components/slidingdiv/slidingDiv.jsx"
import PageDivider from '../components/pagedivider/pagedivider.jsx'
import BearToast from "../components/3dmodels/beartoast.jsx"
import "../globals.css"

const HomePage = () => {
  const title = "Home";
  const introduction = 
    <div className="flex w-full">
      <div className="flex w-auto w-[50%]">
        <div className="handwave pt-5 pr-5 w-auto h-16">👋</div>
        <div className="whitespace-no-wrap">
          Hi, I'm Vincent! Dedication, hard work all the time, and belief. If you think you're perfect already, then you never will be. <br/>-Christiano Ronaldo
        </div>
      </div>

      <div className="right-0 top-[-50%] w-[50%] h-[150%]">
        <BearToast/>
      </div>
    </div>
  
  const currentlyDoing = "well, so far feeling very good. I'm so proud to make this big decision in my life in football. As you mentioned before, in Europe, my work, it's done. I won everything. I played in the most important clubs in Europe. And for me now is a new challenge. As you mentioned in Asia, I'm glad for that Al-Nassr gave me this opportunity to show and develop, not only for the football, but also for the generation, the young generation, the women's generation as well, for the young boys. And for me, it's a challenge. But in the same way, I feel very, very happy and very proud."

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <div className="flex space-y-20 w-full">
        <div className="mx-auto w-auto max-w-[100rem] rounded-md overflow-hidden">
          <Header title={title} description={introduction}></Header>


          <PageDivider marginBottom={8}></PageDivider>

          <SlidingDiv>
            <SubHeader title={"About Me"} description={currentlyDoing}></SubHeader>
          </SlidingDiv>
          <SlidingDiv reverse={true}>
            <SubHeader title={"Work Experience"} description={currentlyDoing}></SubHeader>
          </SlidingDiv>
          <SlidingDiv>
            <SubHeader title={"What I'm Doing"} description={currentlyDoing}></SubHeader>
          </SlidingDiv>
        </div>
      </div>
    </main>
  )
}

export default HomePage;