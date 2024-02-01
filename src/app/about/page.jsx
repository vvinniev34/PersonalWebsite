import React from "react";
import Header from "../components/headers/header.jsx"
import SubHeader from "../components/headers/subheader.jsx"
import NoCardSlidingDiv from "../components/divcontainers/slidingdiv/noCardSlidingDiv.jsx"
import PageDivider from '../components/pagedivider/pagedivider.jsx'
import Contact from "../components/contact/contact.jsx"
import Footer from "../components/footer/footer.jsx"

const colors = ["darkorange", "cadetblue", "lightsalmon", "indianred", "darkcyan", "chocolate"]
// const brightcolors = ["blueviolet", "deeppink"]
const brightcolors= ["indianred"]

const AboutPage = () => {
  const title = "About";
  const introduction = <div>I'm an aspiring Software Engineer based in Minneapolis. Welcome to my portfolio.</div>;
  
  const currentlyDoing = "well, so far feeling very good. I'm so proud to make this big decision in my life in football. As you mentioned before, in Europe, my work, it's done. I won everything. I played in the most important clubs in Europe. And for me now is a new challenge."
  
  function SlideIn(title, description, colorI, imgSrc, reverse=false, top=false, bottom=false) {
    return (
      <div 
        className={`w-[100%] rounded-lg flex items-center justify-center`} 
        style={top ? {borderTopLeftRadius:0, borderTopRightRadius:0} : (bottom ? {borderBottomLeftRadius:0, borderBottomRightRadius:0} : {})}
      >
        <div className="w-[90%]">
          <NoCardSlidingDiv reverse={reverse}>
            <div className={`w-3/12 ${reverse ? "ml-[8.33%]" : "mr-[8.33%]"}`}>
              <SubHeader 
                title={title} 
                description={description} 
                color={colors[colorI]}
              />
            </div>
            <div className="w-8/12 m-0 bg-offwhite overflow-hidden rounded-lg zoom-on-hover">
              <img src={imgSrc} alt="image" className="h-[100%] object-cover"/>
              Image
            </div>
          </NoCardSlidingDiv>
        </div>
      </div>
    );
  }

  return (
    <section 
      className="flex bg-gradient-to-b from-offwhitemain to-lightgray min-h-screen flex-col items-center justify-between p-20" 
      style={{paddingLeft:'15%', paddingRight:'15%', paddingBottom:'0%'}}
      id="about"
    >
      <div className="flex space-y-20 w-full">
        <div className="mx-auto w-auto max-w-[100rem] rounded-md overflow-hidden flex flex-col items-center justify-center">
          <div className="w-full h-auto pt-5">
            <Header centered={true} title={title} description={introduction} color={brightcolors[0]}></Header>
          </div>

          {/* <PageDivider marginBottom={2.5}></PageDivider> */}
          <PageDivider marginBottom={0}></PageDivider>

          <div className="w-[100%] bg-darkoffwhite flex flex-col items-center justify-center">
              {SlideIn("About Me", currentlyDoing, 0, "projects/reddit.jpg", false, true, false)}
              {SlideIn("About Me", currentlyDoing, 1, "about/food.jpg", true)}
              {SlideIn("About Me", currentlyDoing, 2, "projects/reddit.jpg", false, false, true)}
          </div>

          <PageDivider marginBottom={2.5}></PageDivider>
        </div>
      </div>
    </section>
  )
}

export default AboutPage;