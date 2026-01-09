import stories from "../data/stories";
import StoryRing from "./StoryRing";

export default function StoryBar({ onStorySelect }) {
  return (
    <div className="flex space-x-4 px-4 py-3 overflow-x-auto scrollbar-hide">
      {stories.map(story => (
        <StoryRing
          key={story.id}
          story={story}
          onClick={() => onStorySelect(story)}
        />
      ))}
    </div>
  );
}
