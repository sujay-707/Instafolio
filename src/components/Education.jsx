import profile from "../data/profile";

export default function Education() {
  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold mb-3">Education</h2>
      {profile.education.map((edu, i) => (
        <div key={i} className="mb-4">
          <p className="font-medium">{edu.degree}</p>
          <p className="text-sm text-gray-400">{edu.institute}</p>
          <p className="text-sm text-gray-400">
            {edu.year && `${edu.year} | `}{edu.score}
          </p>
        </div>
      ))}
    </div>
  );
}
