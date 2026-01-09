import profile from "../data/profile";

export default function ProfileStats() {
  return (
    <div className="flex justify-between mt-8 text-center">
      {profile.stats.map((s, i) => (
        <div key={i} className="flex-1">
          <p className="text-xl font-bold">{s.value}</p>
          <p className="text-gray-400 text-sm">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
