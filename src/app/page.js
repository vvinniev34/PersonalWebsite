import AboutPage from "./about/page";
import Footer from "./components/footer/footer";
import Splash from "./components/splash/splash";
import ProjectPage from "./projects/page";

export default function Home() {
  return (
      <>
        <Splash/>
        <AboutPage/>
        <ProjectPage/>
        <Footer/>
      </>
  );
}
