import profile from "../data/profile";

function Chip({ text }) {
  return (
    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
      {text}
    </span>
  );
}

export default function Skills() {
  const { skills } = profile;

  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold mb-3">Skills</h2>

      {Object.entries(skills).map(([key, values]) => (
        <div key={key} className="mb-4">
          <p className="text-sm text-gray-400 capitalize mb-2">{key}</p>
          <div className="flex flex-wrap gap-2">
            {values.map((v, i) => (
              <Chip key={i} text={v} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
