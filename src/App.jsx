import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeFeed from "./pages/HomeFeed";
import Profile from "./pages/Profile";
import Reels from "./pages/Reels";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeFeed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reels" element={<Reels />} />
      </Routes>
    </BrowserRouter>
  );
}
