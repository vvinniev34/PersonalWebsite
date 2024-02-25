import React from "react";
import Header from "../components/headers/header.jsx"
import SubHeader from "../components/headers/subheader.jsx"
import NoCardSlidingDiv from "../components/divcontainers/slidingdiv/noCardSlidingDiv.jsx"
import PageDivider from '../components/pagedivider/pagedivider.jsx'
import styles from "./page.module.css"

const colors = ["cadetblue", "lightsalmon", "salmon", "darkorange", "indianred", "darkcyan", "chocolate"]
const brightcolors= ["brown", "indianred"]

const AboutPage = () => {
  const intro = <div>I'm a 3rd year Computer Science student at the <span className={`artifactWord ${styles.uofmn}`}>University of Minnesota</span>. I love diving into new ways to make my code better, and for me, computer science isn't just a degree—it's a <span className={`artifactWord ${styles.adventure}`}>lifelong adventure</span> of learning. I'm on a mission to create something awesome, and my goal is to do it with a fantastic team that brings out the best in each other.<br/><br/><span className={`artifactWord ${styles.magicWand}`}>Let's make some coding magic together!</span></div>
  const background = <div>Back in 2017, I embarked on my coding journey by creating my first <span className={`artifactWord ${styles.scratch}`}>Scratch</span> game as part of a school introduction class. Admittedly, the game itself wasn't a masterpiece, but the joy of crafting an <span className={`artifactWord ${styles.easterEgg}`}>Easter-egg</span>-filled Flappy Bird experience, pouring in every bit of time to make it the best I could, left an indelible mark on me. Little did I know, that goofy Scratch game would <span className={`artifactWord ${styles.fire}`}>ignite</span> a passion for coding and technology within me.<br/><br/>Fast forward to today, and I find myself kindling that passion through various projects. Currently, I'm immersed in <span className={`artifactWord ${styles.speech}`}>natural language</span> research within my lab, delving into the intricate <span className={`artifactWord ${styles.globe}`}>world of code and technology</span> with the same enthusiasm that started with that quirky Scratch game.</div>
  const interests = <div>When I need to unplug, you can catch me in the kitchen whipping up recipes I found online. Whether it's a <span className={`artifactWord ${styles.cremeBrulee}`}>crème brûlée</span> or a classic <span className={`artifactWord ${styles.steak}`}>steak au poivre</span>, I'm down to experiment. If you don't find me there, chances are that I'm at the gym, engaged in an intense <span className={`artifactWord ${styles.basketball}`}>hoop sesh</span>, or simply <span className={`artifactWord ${styles.couch}`}>lounging on my couch</span>, indulging in a nostalgic binge-watch of my favorite childhood sitcoms.</div>

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
                color={'#f6f7f2'}
                descriptionColor={'#f6f7f2'}
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
      className="section flex flex-col items-center justify-between" 
      style={{
        paddingBottom:'4.5rem', 
        paddingTop:'4.5rem',
      }}
      id="about"
    >
      <div 
        style={{
          background:'linear-gradient(to bottom, rgba(255,255,255,0) 20%, #0d2b52), url(oceanunderwatersurface.webp)', 
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat", 
          backgroundPosition: "center", 
          width: "100%", 
          minHeight: "100vh", 
          position: "absolute", 
          marginTop: "-4.5rem", 
          marginLeft:"-40%"
        }}
      />
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
          {/*1 2 1*/}
          <div className="w-[100%] flex flex-col items-center justify-center">
              {SlideIn("Hey, I'm Vincent!", intro, 1, "about/computer.png", false, true, false)}
              {SlideIn("Some Background", background, 1, "about/flappy_bird2.jpg", true)}
              {SlideIn("My Interests", interests, 1, "about/food.jpg", false, false, true)}
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutPage;