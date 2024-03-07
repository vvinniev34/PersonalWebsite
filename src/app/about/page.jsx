import React from "react";
import SubHeader from "../components/headers/subheader.jsx"
import NoCardSlidingDiv from "../components/divcontainers/slidingdiv/noCardSlidingDiv.jsx"
import styles from "./page.module.css"
import Image from 'next/image';

const AboutPage = () => {
  const intro = <div>I'm a 3rd year Computer Science student at the <span className={`artifactWord ${styles.uofmn}`}>University of Minnesota</span>. I love diving into new ways to make my code better, and for me, computer science isn't just a degree—it's a <span className={`artifactWord ${styles.adventure}`}>lifelong adventure</span> of learning. I'm on a mission to create something awesome, and my goal is to do it with a fantastic team that brings out the best in each other.<br/><br/><span className={`artifactWord ${styles.magicWand}`}>Let's make some coding magic together!</span></div>
  const background = <div>Back in 2017, I embarked on my coding journey by creating my first <span className={`artifactWord ${styles.scratch}`}>Scratch</span> game as part of a school introduction class. Admittedly, the game itself wasn't a masterpiece, but the joy of crafting an <span className={`artifactWord ${styles.easterEgg}`}>Easter-egg</span>-filled Flappy Bird experience, pouring in every bit of time to make it the best I could, left an indelible mark on me. Little did I know, that goofy Scratch game would <span className={`artifactWord ${styles.fire}`}>ignite</span> a passion for coding and technology within me.<br/><br/>Fast forward to today, and I find myself kindling that passion through various projects. Currently, I'm immersed in <span className={`artifactWord ${styles.speech}`}>natural language</span> research within my lab, delving into the intricate <span className={`artifactWord ${styles.globe}`}>world of code and technology</span> with the same enthusiasm that started with that quirky Scratch game.</div>
  const interests = <div>When I need to unplug, you can catch me in the kitchen whipping up recipes I found online. Whether it's a <span className={`artifactWord ${styles.cremeBrulee}`}>crème brûlée</span> or a classic <span className={`artifactWord ${styles.steak}`}>steak au poivre</span>, I'm down to experiment. If you don't find me there, chances are that I'm at the gym, engaged in an intense <span className={`artifactWord ${styles.basketball}`}>hoop sesh</span>, or simply <span className={`artifactWord ${styles.couch}`}>lounging on my couch</span>, indulging in a nostalgic binge-watch of my favorite childhood sitcoms.</div>

  function SlideIn(title, description, imgSrc, reverse=false, top=false, bottom=false) {
    return (
      <div 
        className={`w-[100%] rounded-lg flex items-center justify-center`} 
        style={top ? {borderTopLeftRadius:0, borderTopRightRadius:0, paddingBottom: "1rem"} : 
              (bottom ? {borderBottomLeftRadius:0, borderBottomRightRadius:0, paddingTop: "1rem"} : {})}
      >
        <div className="w-[90%]">
          <NoCardSlidingDiv reverse={reverse}>
            <div className={reverse ? "reverseTextVisiblityByWindow" : "textVisiblityByWindow"}>
              <SubHeader 
                title={title} 
                description={description}
                color={'#f6f7f2'}
                descriptionColor={'#f6f7f2'}
              />
            </div>
            <div 
              className={`m-0 bg-offwhite overflow-hidden rounded-lg ${reverse ? "reverseImageVisiblityByWindow" : "imageVisiblityByWindow"}`}
              style={reverse ? {
                height: 'calc(100% - 1.25rem)',
                position: 'absolute',
                left: '1.25rem'
              } : {
                height: 'calc(100% - 1.25rem)',
                position: 'absolute',
                right: '1.25rem'
              }}
            >
              <div className="h-[100%] object-cover zoom-on-hover">
                <Image src={imgSrc} alt="about image" style={{ height:"100%", objectFit:"cover", objectPosition:"center" }}/>
              </div>
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
      <div className="mobileImageBackground">
        <div 
          style={{ 
            background:'linear-gradient(to bottom, rgba(255,255,255,0) 20%, #0d2b52)',
            width:"100%",
            height:"100%",
            position:"absolute",
            zIndex:1
          }}
        />
        <Image 
          src="/oceanunderwatersurface.png"
          alt="ocean underwater surface"
          layout="fill" 
					objectFit="cover" 
					objectPosition="center"
        />
      </div>
      <div className="flex space-y-20 w-full featuredRightPadding">
        <div className="mx-auto w-auto max-w-[100rem] rounded-md overflow-hidden flex flex-col items-center justify-center">
          {/*1 2 1*/}
          <div className="w-[100%] flex flex-col items-center justify-center">
              {SlideIn("Hey, I'm Vincent!", intro, "/about/minimalist_coding_background.png", false, true, false)}
              {SlideIn("Some Background", background, "/about/flappy_bird2.jpg", true)}
              {SlideIn("My Interests", interests, "/about/food.jpg", false, false, true)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage;