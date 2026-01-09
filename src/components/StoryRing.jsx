export default function StoryRing({ story, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex flex-col items-center space-y-1"
    >
      <div className="p-[2px] rounded-full bg-gradient-to-tr from-pink-500 to-purple-600">
        <img
          src={story.image} alt="story"
          className="w-16 h-16 rounded-full object-cover border-2 border-black"
        />
      </div>
      <span className="text-xs text-gray-300">{story.title}</span>
    </div>
  );
}
