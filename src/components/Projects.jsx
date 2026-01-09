const projects = [
  {
    title: "Wanderlust",
    tech: "Node, Express, MongoDB",
    live: "https://majorprojectwanderlust-uu9y.onrender.com/listings",
    code: "https://github.com/sujay-707/MajorProjectWanderLust",
  },
  {
    title: "CineLock",
    tech: "React, Bootstrap",
    live: "https://cinelockz.netlify.app/",
    code: "https://github.com/sujay-707/CineLockz",
  },
  {
    title: "Simon Game",
    tech: "HTML, CSS, JS",
    live: "https://simon-game-sujay.netlify.app/",
    code: "https://github.com/sujay-707/SimonGame",
  },
  {
    title: "Weather App",
    tech: "React",
    live: "https://weather-react-by-sujay.netlify.app/",
    code: "https://github.com/sujay-707/Mini-Weather-App",
  },
];

export default function Projects() {
  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold mb-4">Projects</h2>

      <div className="space-y-4">
        {projects.map((p, i) => (
          <div key={i} className="p-4 bg-white/5 rounded-xl">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-400">{p.tech}</p>

            <div className="flex gap-4 mt-2 text-sm underline">
              <a href={p.live} target="_blank"rel="noreferrer">Live</a>
              <a href={p.code} target="_blank"rel="noreferrer">Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
