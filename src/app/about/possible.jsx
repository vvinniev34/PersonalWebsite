// "use client"
// import React from "react";
// import Header from "../components/headers/header.jsx"
// import PageDivider from '../components/pagedivider/pagedivider.jsx'
// import styled from 'styled-components';
// import styles from "./page.module.css"

// const StyledProject = styled.li`position: relative;
// display: grid;
// grid-gap: 10px;
// grid-template-columns: repeat(12, 1fr);
// align-items: center;

// &:not(:last-of-type) {
//   margin-bottom: 100px;

//   @media (max-width: 768px) {
//     margin-bottom: 70px;
//   }

//   @media (max-width: 480px) {
//     margin-bottom: 30px;
//   }
// }

// &:nth-of-type(odd) {
//     .project-content {
//         grid-column: 7 / -1;
//         text-align: right;

//         @media (max-width: 1080px) {
//         grid-column: 5 / -1;
//         }
//         @media (max-width: 768px) {
//         grid-column: 1 / -1;
//         padding: 40px 40px 30px;
//         text-align: left;
//         }
//         @media (max-width: 480px) {
//         padding: 25px 25px 20px;
//         }
//     }
//     .project-tech-list {
//         justify-content: flex-end;

//         @media (max-width: 768px) {
//         justify-content: flex-start;
//         }

//         li {
//         margin: 0 0 5px 20px;

//         @media (max-width: 768px) {
//             margin: 0 10px 5px 0;
//         }
//         }
//     }
//     .project-links {
//         justify-content: flex-end;
//         margin-left: 0;
//         margin-right: -10px;

//         @media (max-width: 768px) {
//         justify-content: flex-start;
//         margin-left: -10px;
//         margin-right: 0;
//         }
//     }
//     .project-image {
//         grid-column: 1 / 8;

//         @media (max-width: 768px) {
//         grid-column: 1 / -1;
//         }
//     }
// }

// .project-content {
//     position: relative;
//     grid-column: 1 / 7;
//     grid-row: 1 / -1;

//     @media (max-width: 1080px) {
//         grid-column: 1 / 9;
//     }

//     @media (max-width: 768px) {
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         height: 100%;
//         grid-column: 1 / -1;
//         padding: 40px 40px 30px;
//         z-index: 5;
//     }

//     @media (max-width: 480px) {
//         padding: 30px 25px 20px;
//     }
// }

// .project-overline {
// margin: 10px 0;
// color: green;
// font-family: black;
// font-size: 6px;
// font-weight: 400;
// }

// .project-title {
//     color: black;
//     font-weight: bold;
//     font-size: clamp(24px, 5vw, 28px);

//     @media (min-width: 768px) {
//         margin: 0 0 20px;
//     }

//     @media (max-width: 768px) {
//         color: white;

//         a {
//         position: static;

//             &:before {
//                 content: '';
//                 display: block;
//                 position: absolute;
//                 z-index: 0;
//                 width: 100%;
//                 height: 100%;
//                 top: 0;
//                 left: 0;
//             }
//         }
//     }
// }

// .project-description {
//     position: relative;
//     z-index: 2;
//     padding: 25px;
//     border-radius: 3px;
//     background-color: lightblue;
//     color:darkred;
//     font-size: 16px;

//     @media (max-width: 768px) {
//         padding: 20px 0;
//         background-color: transparent;
//         box-shadow: none;

//         &:hover {
//         box-shadow: none;
//         }
//     }

//     strong {
//         color: white;
//         font-weight: normal;
//     }
// }

// .project-tech-list {
//     display: flex;
//     flex-wrap: wrap;
//     position: relative;
//     z-index: 2;
//     margin: 25px 0 10px;
//     padding: 0;
//     list-style: none;

//     li {
//         margin: 0 20px 5px 0;
//         color: gray;
//         font-family: black;
//         font-size: 6px;
//         white-space: nowrap;
//     }

// @media (max-width: 768px) {
//     margin: 10px 0;

//     li {
//     margin: 0 10px 5px 0;
//     color: lightgray;
//     }
// }
// }

// .project-links {
// display: flex;
// align-items: center;
// position: relative;
// margin-top: 10px;
// margin-left: -10px;
// color: lightgray;

// a {
// padding: 10px;

// &.external {
//   svg {
//     width: 22px;
//     height: 22px;
//     margin-top: -4px;
//   }
// }

// svg {
//   width: 20px;
//   height: 20px;
// }
// }

// .cta {
// margin: 10px;
// }
// }

// .project-image {
// grid-column: 6 / -1;
// grid-row: 1 / -1;
// position: relative;
// z-index: 1;

// @media (max-width: 768px) {
// grid-column: 1 / -1;
// height: 100%;
// opacity: 0.25;
// }

// a {
// width: 100%;
// height: 100%;
// background-color: green;
// border-radius: 1rem;
// vertical-align: middle;

// &:hover,
// &:focus {
//   background: transparent;
//   outline: 0;

//   &:before,
//   .img {
//     background: transparent;
//     filter: none;
//   }
// }

// &:before {
//   content: '';
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   z-index: 3;
//   transition: 1s;
//   background-color: navyblue;
//   mix-blend-mode: screen;
// }
// }

// .img {
// border-radius: 1rem;
// mix-blend-mode: multiply;
// filter: grayscale(100%) contrast(1) brightness(90%);

// @media (max-width: 768px) {
//   object-fit: cover;
//   width: auto;
//   height: 100%;
//   filter: grayscale(100%) contrast(1) brightness(50%);
// }
// }
// }`

// const StyledProjectsGrid = styled.ul`
//   a {
//     position: relative;
//     z-index: 1;
//   }
// `;

// const Featured = () => {
//   const title = "About";
//   const introduction = <div>I'm an aspiring Software Engineer based in Minneapolis. Welcome to my portfolio.</div>;

//   const intro = <div>I'm a 3rd year Computer Science student at the <span className={`artifactWord ${styles.uofmn}`}>University of Minnesota</span>. I love diving into new ways to make my code better, and for me, computer science isn't just a degree—it's a <span className={`artifactWord ${styles.adventure}`}>lifelong adventure</span> of learning. I'm on a mission to create something awesome, and my goal is to do it with a fantastic team that brings out the best in each other.<br/><br/><span className={`artifactWord ${styles.magicWand}`}>Let's make some coding magic together!</span></div>
//   const background = <div>Back in 2017, I embarked on my coding journey by creating my first <span className={`artifactWord ${styles.scratch}`}>Scratch</span> game as part of a school introduction class. Admittedly, the game itself wasn't a masterpiece, but the joy of crafting an <span className={`artifactWord ${styles.easterEgg}`}>Easter-egg</span>-filled Flappy Bird experience, pouring in every bit of time to make it the best I could, left an indelible mark on me. Little did I know, that goofy Scratch game would <span className={`artifactWord ${styles.fire}`}>ignite</span> a passion for coding and technology within me.<br/><br/>Fast forward to today, and I find myself kindling that passion through various projects. Currently, I'm immersed in <span className={`artifactWord ${styles.speech}`}>natural language</span> research within my lab, delving into the intricate <span className={`artifactWord ${styles.globe}`}>world of code and technology</span> with the same enthusiasm that started with that quirky Scratch game.</div>
//   const interests = <div>When I need to unplug, you can catch me in the kitchen whipping up recipes I found online. Whether it's a <span className={`artifactWord ${styles.cremeBrulee}`}>crème brûlée</span> or a classic <span className={`artifactWord ${styles.steak}`}>steak au poivre</span>, I'm down to experiment. If you don't find me there, chances are that I'm at the gym, engaged in an intense <span className={`artifactWord ${styles.basketball}`}>hoop sesh</span>, or simply <span className={`artifactWord ${styles.couch}`}>lounging on my couch</span>, indulging in a nostalgic binge-watch of my favorite childhood sitcoms.</div>

//   const aboutSections = [
//     {title: "Hey, I'm Vincent!", text: intro}, 
//     {title: "Some Background", text: background}, 
//     {title: "Interests", text: interests}
//   ]
  
//   return (
//     <section 
//       className="flex flex-col items-center justify-between bg-gradient-to-b from-sunlight-zone to-twilight-zone-start" 
//       style={{padding: "200px", paddingBottom:'4.5rem', paddingTop:'4.5rem'}}
//       id="about"
//     >
//       <div className="w-full h-auto pt-5" style={{paddingLeft:"1rem", paddingRight:"1rem"}}>
//         <Header centered={true} title={title} description={introduction} color={"navyblue"}></Header>
//       </div>

//       <PageDivider marginBottom={0}></PageDivider>

//       <StyledProjectsGrid>
//         {aboutSections.map((entry) =>{
//           return (
//             <StyledProject>
//               <div className="project-content">
//                 <div>
//                   <h3 className="project-title">
//                     <a>{entry.title}</a>
//                   </h3>
//                   <div className="project-description">
//                     {entry.text}
//                   </div>
//                 </div>
//               </div>

//               <div className="project-image">
//                 <a>
//                   <img src="about/computer.png" alt=""/>
//                 </a>
//               </div>
//             </StyledProject>
//           )
//         })}
//       </StyledProjectsGrid>
//     </section>
//   );
// };

// export default Featured;