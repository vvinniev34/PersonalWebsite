import React from "react";
import Header from "../components/headers/header.jsx"
import SubHeader from "../components/headers/subheader.jsx"
import SlidingDiv from "../components/slidingdiv/slidingDiv.jsx"
import PageDivider from '../components/pagedivider/pagedivider.jsx'
import BearToast from "../components/3dmodels/beartoast.jsx"
import "../globals.css"

const AboutPage = () => {
  const title = "Home";
  const introduction = 
    // <div className="flex w-full">
      <div className="flex w-auto w-auto">
        <div className="handwave pr-5 w-auto h-16">👋</div>
        <div className="whitespace-no-wrap h-16 w-auto">
          Hi, I'm Vincent!
          <br/>
          Welcome to my website!
        </div>
      </div>

      // <div className="right-0 top-[-50%] w-[50%] h-[150%] bg-black">
      //   {/* <BearToast/> */}
      // </div>
    // </div>
  const background = "projects/project_header.jpg"
  
  
  const currentlyDoing = "well, so far feeling very good. I'm so proud to make this big decision in my life in football. As you mentioned before, in Europe, my work, it's done. I won everything. I played in the most important clubs in Europe. And for me now is a new challenge."
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 pt-5">
      <div className="flex space-y-20 w-full">
        <div className="mx-auto w-auto max-w-[100rem] rounded-md overflow-hidden flex flex-col items-center justify-center">
          <div className="w-full h-auto bg-cover bg-center pt-5" style={{ backgroundImage: `url(${background})` }}>
            <Header centered={true} title={title} description={introduction}></Header>
          </div>


          <PageDivider marginBottom={2.5}></PageDivider>

          <div className="w-[90%]">
            <SlidingDiv>
                <div className="w-3/4 mr-[8.33%]">
                  <SubHeader title={"About Me"} description={currentlyDoing}></SubHeader>
                </div>
                <div className="w-1/6 m-0 bg-blue-300 overflow-hidden">
                  <img src="projects/reddit.jpg" alt="image" className="h-[100%] object-cover"/>
                  Image
                </div>
            </SlidingDiv>
            <SlidingDiv reverse={true}>
                <div className="w-3/4 ml-[8.33%]">
                  <SubHeader title={"About Me"} description={currentlyDoing}></SubHeader>
                </div>
                <div className="w-1/6 m-0 bg-blue-300">Image</div>
            </SlidingDiv>
            <SlidingDiv>
                <div className="w-3/4 mr-[8.33%]">
                  <SubHeader title={"About Me"} description={currentlyDoing}></SubHeader>
                </div>
                <div className="w-1/6 m-0 bg-blue-300">Image</div>
            </SlidingDiv>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutPage;