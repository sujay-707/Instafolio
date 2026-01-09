import ProfileHeader from "../components/ProfileHeader";
import ProfileStats from "../components/ProfileStats";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ResumeCTA from "../components/ResumeCTA";

export default function Profile() {
  return (
    <div className="px-4 pt-8 max-w-md mx-auto">
      <ProfileHeader />
      <ProfileStats />
      <Education />
      <Skills />
      <Projects />
      <ResumeCTA />
    </div>
  );
}
