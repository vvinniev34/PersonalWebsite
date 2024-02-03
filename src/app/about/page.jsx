import React from "react";
import Header from "../components/headers/header.jsx"
import SubHeader from "../components/headers/subheader.jsx"
import NoCardSlidingDiv from "../components/divcontainers/slidingdiv/noCardSlidingDiv.jsx"
import PageDivider from '../components/pagedivider/pagedivider.jsx'

const colors = ["cadetblue", "lightsalmon", "salmon", "darkorange", "indianred", "darkcyan", "chocolate"]
const brightcolors= ["indianred"]

const AboutPage = () => {
  const title = "About";
  const introduction = <div>I'm an aspiring Software Engineer based in Minneapolis. Welcome to my portfolio.</div>;
  
  const intro = <div>I'm a 3rd year student at the University of Minnesota majoring in Computer Science. </div>
  const background = <div>In 2017, I made my first scratch game as part of a school mandated Everybody Needs To Code class. The game itself was awful, but the little bits of time I took to make it the best game I could make stuck with me. Little would I know, my goofy Scratch game would become the catalyst into kindling my passion for the world of coding and technology. Fast forward to today, and</div>
  const interests = <div>When I need to unplug, you can catch me in the kitchen whipping up recipes I found online. Whether it's a crème brûlée or a classic steak au poivre, I'm down to experiment. If you don't find me there, chances are that I'm at the gym, engaged in an intense hoop sesh, or simply lounging on my couch, indulging in a nostalgic binge-watch of my childhood sitcoms.</div>

  function SlideIn(title, description, colorI, imgSrc, reverse=false, top=false, bottom=false) {
    return (
      <div 
        className={`w-[100%] rounded-lg flex items-center justify-center`} 
        style={top ? {borderTopLeftRadius:0, borderTopRightRadius:0} : (bottom ? {borderBottomLeftRadius:0, borderBottomRightRadius:0} : {})}
      >
        <div className="w-[90%]">
          <NoCardSlidingDiv reverse={reverse}>
            <div 
              // className={`w-3/12 ${reverse ? "ml-[8.33%]" : "mr-[8.33%]"}`}
              style={reverse ? {marginLeft:"2.5%", width:"42.5%"} : {marginRight:"2.5%", width:"42.5%"}}
            >
              <SubHeader 
                title={title} 
                description={description} 
                color={colors[colorI]}
              />
            </div>
            <div 
              className="w-8/12 m-0 bg-offwhite overflow-hidden rounded-lg"
              style={{width:"55%"}}
            >
              <img src={imgSrc} alt="image" className="h-[100%] object-cover zoom-on-hover"/>
            </div>
          </NoCardSlidingDiv>
        </div>
      </div>
    );
  }

  return (
    <section 
      className="adaptivePadding flex bg-gradient-to-b from-offwhitemain to-lightgray min-h-screen flex-col items-center justify-between" 
      style={{paddingBottom:'0%', paddingTop:'4.5rem'}}
      id="about"
    >
      <div className="flex space-y-20 w-full">
        <div className="mx-auto w-auto max-w-[100rem] rounded-md overflow-hidden flex flex-col items-center justify-center">
          <div className="w-full h-auto pt-5">
            <Header centered={true} title={title} description={introduction} color={brightcolors[0]}></Header>
          </div>

          <PageDivider marginBottom={0}></PageDivider>

          <div className="w-[100%] bg-darkoffwhite flex flex-col items-center justify-center">
              {SlideIn("Hey, I'm Vincent!", intro, 1, "projects/reddit.jpg", false, true, false)}
              {SlideIn("Some Background", background, 2, "projects/reddit.jpg", true)}
              {SlideIn("My Interests", interests, 1, "about/food.jpg", false, false, true)}
          </div>

          <PageDivider marginBottom={2.5}></PageDivider>
        </div>
      </div>
    </section>
  )
}

export default AboutPage;