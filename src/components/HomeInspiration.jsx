import homeFeed from "../data/homeFeed";
import HomeCard from "./HomeCard";

export default function HomeInspiration() {
  return (
    <div className="space-y-6 px-4 max-w-md mx-auto">
      {homeFeed.map((item) => (
        <HomeCard key={item.id} item={item} />
      ))}
    </div>
  );
}
