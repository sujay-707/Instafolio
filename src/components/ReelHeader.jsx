import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ReelHeader() {
  const navigate = useNavigate();

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={() => navigate(-1)}
        className="p-2 rounded-full bg-black/60 backdrop-blur-md"
      >
        <ArrowLeft />
      </button>
    </div>
  );
}
