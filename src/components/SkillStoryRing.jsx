export default function SkillStoryRing({ skill, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex flex-col items-center space-y-1"
    >
      {/* Gradient Ring */}
      <div className="p-[2px] rounded-full bg-gradient-to-tr from-pink-500 to-purple-500">
        {/* Inner Circle */}
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
          <img
            src={skill.image}
            alt={skill.title}
            className="w-8 h-8 object-contain"
          />
        </div>
      </div>

      <span className="text-xs text-gray-300 text-center">
        {skill.title}
      </span>
    </div>
  );
}
