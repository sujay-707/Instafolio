import { Home, User, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 w-full bg-black border-t border-gray-800 flex justify-around py-3">
      <Link to="/"><Home /></Link>
      <Link to="/reels"><Play /></Link>
      <Link to="/profile"><User /></Link>
    </nav>
  );
}
