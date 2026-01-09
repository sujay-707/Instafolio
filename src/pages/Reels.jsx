import ReelFeed from "../components/ReelFeed";
import ReelHeader from "../components/ReelHeader";

export default function Reels() {
  return (
    <div className="h-screen bg-black relative">
      <ReelHeader />
      <ReelFeed />
    </div>
  );
}
