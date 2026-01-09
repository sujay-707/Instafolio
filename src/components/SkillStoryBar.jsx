import skillStories from "../data/skillStories";
import SkillStoryRing from "./SkillStoryRing";

export default function SkillStoryBar({ onSelect }) {
  return (
    <div className="px-4 py-4">
      <h3 className="text-sm text-gray-400 mb-3">
        Skills • Technologies • 2026
      </h3>

      <div className="flex space-x-4 overflow-x-auto">
        {skillStories.map((skill) => (
          <SkillStoryRing
            key={skill.id}
            skill={skill}
            onClick={() => onSelect(skill)}
          />
        ))}
      </div>
    </div>
  );
}
