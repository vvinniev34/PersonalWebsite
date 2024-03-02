import Splash from "./components/splash/splash";
import AboutPage from "./about/page";
import ExperiencePage from "./experience/experience"
import SkillsPage from "./skills/page";
import ProjectPage from "./projects/page"
import Footer from "./components/footer/footer";

import Featured from "./about/possible";

import VideoComponent from "./components/video/scrollingVideo"

import GlowingCursorContainer from "./components/divcontainers/glowingCursor"
import SideBar from "./components/navigation/sideBar"

export default function Home() {
  return (
      <>
        <Splash/>
        <div className="flex featured">
          <SideBar/>
          <div className="overflow-auto mobileFeatureWidth">
            <AboutPage/>
            {/* <Featured/> */}

            <ExperiencePage/>
            <GlowingCursorContainer>
              <SkillsPage/>
            
              <ProjectPage/>
              {/* <VideoComponent/> */}
            </GlowingCursorContainer>
          </div>
        </div>
        <Footer/>
      </>
  );
}
