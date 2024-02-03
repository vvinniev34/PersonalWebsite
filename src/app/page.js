import Splash from "./components/splash/splash";
import AboutPage from "./about/page";
import ExperiencePage from "./experience/experience"
import ProjectPage from "./projects/page";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
      <>
        <Splash/>
        <AboutPage/>
        {/* <ExperiencePage/> */}
        <ProjectPage/>
        <Footer/>
      </>
  );
}
