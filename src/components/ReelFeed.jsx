import reels from "../data/reels";
import ReelCard from "./ReelCard";

export default function ReelFeed() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {reels.map((reel) => (
        <ReelCard key={reel.id} reel={reel} />
      ))}
    </div>
  );
}
