import React from "react";
import Header from "../components/headers/header.jsx"
import SubHeader from "../components/headers/subheader.jsx"
import NoCardSlidingDiv from "../components/divcontainers/slidingdiv/noCardSlidingDiv.jsx"
import PageDivider from '../components/pagedivider/pagedivider.jsx'

const colors = ["cadetblue", "lightsalmon", "salmon", "darkorange", "indianred", "darkcyan", "chocolate"]
const brightcolors= ["brown", "indianred"]

const AboutPage = () => {
  const title = "About";
  const introduction = <div>I'm an aspiring Software Engineer based in Minneapolis. Welcome to my portfolio.</div>;
  
  const introArtifacts = ["🚀"]
  const intro = <div>I'm a 3rd year Computer Science student at the <strong className="artifactWord">University of Minnesota</strong>. I love diving into new ways to make my code better, and for me, computer science isn't just a degree—it's a <strong className="artifactWord">lifelong adventure</strong> of learning. I'm on a mission to create something awesome, and my goal is to do it with a fantastic team that brings out the best in each other.<br/><br/><strong className="artifactWord">Let's make some coding magic together!</strong></div>
  const background = <div>Back in 2017, I embarked on my coding journey by creating my first <strong className="artifactWord">Scratch</strong> game as part of a school introduction to code class. Admittedly, the game itself wasn't a masterpiece, but the joy of crafting an <strong className="artifactWord">Easter-egg</strong>-filled Flappy Bird experience, pouring in every bit of time to make it the best I could, left an indelible mark on me. Little did I know, that goofy Scratch game would <strong className="artifactWord">ignite</strong> a passion for coding and technology within me.<br/><br/>Fast forward to today, and I find myself kindling that passion through various projects. Currently, I'm immersed in <strong className="artifactWord">natural language</strong> research within my lab, delving into the intricate <strong className="artifactWord">world of code and technology</strong> with the same enthusiasm that started with that quirky Scratch game.</div>
  const interests = <div>When I need to unplug, you can catch me in the kitchen whipping up recipes I found online. Whether it's a <strong className="artifactWord">crème brûlée</strong> or a classic <strong className="artifactWord">steak au poivre</strong>, I'm down to experiment. If you don't find me there, chances are that I'm at the gym, engaged in an intense <strong className="artifactWord">hoop sesh</strong>, or simply <strong className="artifactWord">lounging on my couch</strong>, indulging in a nostalgic binge-watch of my favorite childhood sitcoms.</div>

  function SlideIn(title, description, colorI, imgSrc, reverse=false, top=false, bottom=false) {
    return (
      <div 
        className={`w-[100%] rounded-lg flex items-center justify-center`} 
        style={top ? {borderTopLeftRadius:0, borderTopRightRadius:0, marginTop:"1%"} : 
              (bottom ? {borderBottomLeftRadius:0, borderBottomRightRadius:0, marginBottom:"1%"} : {})}
      >
        <div className="w-[90%]">
          <NoCardSlidingDiv reverse={reverse}>
            <div 
              style={reverse ? {marginLeft:"2.5%", width:"55%"} : {marginRight:"2.5%", width:"42.5%"}}
            >
              <SubHeader 
                title={title} 
                description={description} 
                color={brightcolors[colorI]}
              />
            </div>
            <div 
              className="m-0 bg-offwhite overflow-hidden rounded-lg"
              style={reverse ? {width:"42.5%"} : {width:"55%"}}
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
      className="adaptivePadding flex bg-offwhitemain flex-col items-center justify-between" 
      style={{paddingBottom:'4.5rem', paddingTop:'4.5rem'}}
      id="about"
    >
      <div className="flex space-y-20 w-full">
        <div className="mx-auto w-auto max-w-[100rem] rounded-md overflow-hidden flex flex-col items-center justify-center">
          <div className="w-full h-auto pt-5">
            <Header centered={true} title={title} description={introduction} color={brightcolors[0]}></Header>
          </div>

          <PageDivider marginBottom={0}></PageDivider>
          {/*1 2 1*/}
          <div className="w-[100%] bg-darkoffwhite flex flex-col items-center justify-center">
              {SlideIn("Hey, I'm Vincent!", intro, 1, "", false, true, false)}
              {SlideIn("Some Background", background, 1, "", true)}
              {SlideIn("My Interests", interests, 1, "about/food.jpg", false, false, true)}
          </div>

          <PageDivider marginBottom={2.5}></PageDivider>
        </div>
      </div>
    </section>
  )
}

export default AboutPage;