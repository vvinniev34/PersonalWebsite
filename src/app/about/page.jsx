import React from "react";
import Header from "../components/headers/header.jsx"
import SubHeader from "../components/headers/subheader.jsx"
import NoCardSlidingDiv from "../components/divcontainers/slidingdiv/noCardSlidingDiv.jsx"
import PageDivider from '../components/pagedivider/pagedivider.jsx'
import Contact from "../components/contact/contact.jsx"

const colors = ["darkorange", "cadetblue", "lightsalmon", "indianred", "darkcyan", "chocolate"]
const brightcolors = ["blueviolet", "deeppink"]

const AboutPage = () => {
  const title = "About";
  const introduction = <div>I'm an aspiring Software Engineer based in Minneapolis. Welcome to my portfolio.</div>;
  
  const currentlyDoing = "well, so far feeling very good. I'm so proud to make this big decision in my life in football. As you mentioned before, in Europe, my work, it's done. I won everything. I played in the most important clubs in Europe. And for me now is a new challenge."
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <div className="flex space-y-20 w-full">
        <div className="mx-auto w-auto max-w-[100rem] rounded-md overflow-hidden flex flex-col items-center justify-center">
          <div className="w-full h-auto pt-5">
            <Header centered={true} title={title} description={introduction} color={brightcolors[0]}></Header>
          </div>


          <PageDivider marginBottom={2.5}></PageDivider>

          <div className="w-[90%]">
            <NoCardSlidingDiv>
                <div className="w-3/12 mr-[8.33%]">
                  <SubHeader 
                    title={"About Me"} 
                    description={currentlyDoing} 
                    color={colors[0]}
                  />
                </div>
                <div className="w-8/12 m-0 bg-offwhite overflow-hidden rounded-lg zoom-on-hover">
                  <img src="projects/reddit.jpg" alt="image" className="h-[100%] object-cover"/>
                  Image
                </div>
            </NoCardSlidingDiv>
            <NoCardSlidingDiv reverse={true}>
                <div className="w-3/12 ml-[8.33%]">
                  <SubHeader 
                    title={"About Me"} 
                    description={currentlyDoing} 
                    color={colors[1]}
                  />
                </div>
                <div className="w-8/12 m-0 bg-offwhite overflow-hidden rounded-lg zoom-on-hover">
                  <img src="about/food.jpg" alt="image" className="h-[100%] object-cover"/>
                  Image
                </div>
            </NoCardSlidingDiv>
            <NoCardSlidingDiv>
                <div className="w-3/12 mr-[8.33%]">
                  <SubHeader 
                    title={"Contact Information"} 
                    description={<div>intargam.com<br/>github.com<br/>linkedin.com<br/>email</div>} 
                    color={colors[2]}
                  />
                </div>
                <div className="w-8/12 m-0 bg-offwhite overflow-hidden rounded-lg zoom-on-hover">
                  <img src="projects/reddit.jpg" alt="image" className="h-[100%] object-cover"/>
                  Image
                </div>
            </NoCardSlidingDiv>
          </div>

          <PageDivider marginBottom={2.5}></PageDivider>

          <Contact/>
        </div>
      </div>
    </main>
  )
}

export default AboutPage;