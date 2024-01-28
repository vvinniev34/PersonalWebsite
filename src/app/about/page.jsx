import React from "react";
import Header from "../components/headers/header.jsx"
import SubHeader from "../components/headers/subheader.jsx"
import SlidingDiv from "../components/divcontainers/slidingdiv/slidingDiv.jsx"
import NoCardSlidingDiv from "../components/divcontainers/slidingdiv/noCardSlidingDiv.jsx"
import PageDivider from '../components/pagedivider/pagedivider.jsx'
import BearToast from "../components/3dmodels/beartoast.jsx"

const AboutPage = () => {
  const title = "About";
  const introduction = 
    // <div className="flex w-full">
      // <div className="flex w-auto w-auto">
      //   <div className="handwave pr-5 w-auto h-16">👋</div>
      //   <div className="whitespace-no-wrap h-16 w-auto">
      //     Hi, I'm Vincent!
      //     <br/>
      //     Welcome to my website!
      //   </div>
      // </div>
      <div>I'm an aspiring Software Engineer based in Minneapolis. Welcome to my portfolio.</div>;

      // <div className="right-0 top-[-50%] w-[50%] h-[150%] bg-black">
      //   {/* <BearToast/> */}
      // </div>
    // </div>  
  
  const currentlyDoing = "well, so far feeling very good. I'm so proud to make this big decision in my life in football. As you mentioned before, in Europe, my work, it's done. I won everything. I played in the most important clubs in Europe. And for me now is a new challenge."
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 pt-5">
      <div className="flex space-y-20 w-full">
        <div className="mx-auto w-auto max-w-[100rem] rounded-md overflow-hidden flex flex-col items-center justify-center">
          <div className="w-full h-auto pt-5">
            <Header centered={true} title={title} description={introduction}></Header>
          </div>


          <PageDivider marginBottom={2.5}></PageDivider>

          <div className="w-[90%]">
            <NoCardSlidingDiv>
                <div className="w-3/12 mr-[8.33%]">
                  <SubHeader title={"About Me"} description={currentlyDoing}></SubHeader>
                </div>
                <div className="w-8/12 m-0 bg-offwhite overflow-hidden rounded-lg zoom-on-hover">
                  <img src="projects/reddit.jpg" alt="image" className="h-[100%] object-cover"/>
                  Image
                </div>
            </NoCardSlidingDiv>
            <NoCardSlidingDiv reverse={true}>
                <div className="w-3/12 ml-[8.33%]">
                  <SubHeader title={"About Me"} description={currentlyDoing}></SubHeader>
                </div>
                <div className="w-8/12 m-0 bg-offwhite overflow-hidden rounded-lg zoom-on-hover">
                  <img src="about/food.jpg" alt="image" className="h-[100%] object-cover"/>
                  Image
                </div>
            </NoCardSlidingDiv>
            <NoCardSlidingDiv>
                <div className="w-3/12 mr-[8.33%]">
                  <SubHeader title={"Contact Information"} description={<div>intargam.com<br/>github.com<br/>linkedin.com<br/>email</div>}></SubHeader>
                </div>
                <div className="w-8/12 m-0 bg-offwhite overflow-hidden rounded-lg zoom-on-hover">
                  <img src="projects/reddit.jpg" alt="image" className="h-[100%] object-cover"/>
                  Image
                </div>
            </NoCardSlidingDiv>
          </div>

          <PageDivider marginBottom={2.5}></PageDivider>

          <SubHeader 
            title="Contact"
            description={
              <div className="flex">
                <div>intargam.com<br/>github.com<br/>linkedin.com<br/>email</div>
              </div>
            }
          />
        </div>
      </div>
    </main>
  )
}

export default AboutPage;