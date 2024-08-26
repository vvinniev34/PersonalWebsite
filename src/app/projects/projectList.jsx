import ProjectContainer from "../components/projectcontainer/projectcontainer.jsx";
import StackSVG from "../components/projectcontainer/svgs.jsx";
import Carousel from "../components/carousel/carousel.jsx";
import SubHeader from "../components/headers/subheader.jsx";

const projects = [
  <ProjectContainer
    title={"RedditReels"}
    image="/projects/reddit.jpg"
    color={"indianred"}
    description={
      <div>
        Automatic short-form video content generator and uploader for TikTok,
        YouTube, and Instagram.
        <br />
        About 30,000,000 annual views.
      </div>
    }
  />,
  <ProjectContainer
    title={"User-Level Thread Library"}
    svg={<StackSVG />}
    color={"indianred"}
    description={
      <div>
        User-level thread library and API.
        <br />
        Contains vital functions such as thread creation, scheduling,
        synchronization, and termination.
      </div>
    }
  />,
  <ProjectContainer
    title={"VoiceNotes"}
    image="/projects/voicenotes.jpg"
    color={"indianred"}
    description={
      <div>Fully voice controlled note-taking app for hands-free use.</div>
    }
  />,
  <ProjectContainer
    title={"GroupFinder"}
    image="/projects/group.png"
    color={"indianred"}
    description={
      <div>
        Clusters user-submitted data based upon similarity.
        <br />
        Uses a parallelized implementation of a k-means clustering ML algorithm.
      </div>
    }
  />,
  <ProjectContainer
    title={"IMDb Personal Assistant"}
    image="/projects/imdb.jpg"
    color={"indianred"}
    description={
      <div>
        Developed a movie recommendation system, providing personalized suggestions based upon user watch history and head-to-head picks
      </div>
    }
  />,
];

export default function ProjectCarousel() {
  return (
    <div className="w-[100%] flex items-center justify-center p-8 pb-0">
      <div className="overflow-hidden">
        <SubHeader title={"Explore More"} color={"#f6f7f2"} />
        <div className="w-full rounded-lg shadow-lg">
          <Carousel projectList={projects} />
        </div>
      </div>
    </div>
  );
}
