import { useState } from "react";
import StoryBar from "../components/StoryBar";
import StoryViewer from "../components/StoryViewer";
import SkillStoryBar from "../components/SkillStoryBar";
import SkillStoryViewer from "../components/SkillStoryViewer";
import HomeInspiration from "../components/HomeInspiration";
// import Feed from "../components/Feed";


export default function HomeFeed() {
  const [activeStory, setActiveStory] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="pb-24">
    
    
      {/* Skills Stories */}
      <SkillStoryBar onSelect={setActiveSkill} />

      {/* Inspiration Feed */}
      <HomeInspiration />

    
      <StoryViewer story={activeStory} onClose={() => setActiveStory(null)} />
      <SkillStoryViewer
        skill={activeSkill}
        onClose={() => setActiveSkill(null)}
      />
    </div>
  );
}
