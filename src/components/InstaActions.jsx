import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import { useState } from "react";

export default function InstaActions() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="flex justify-between items-center pt-3">
      {/* Left actions */}
      <div className="flex gap-4">
        <button onClick={() => setLiked(!liked)}>
          <Heart
            className={`w-6 h-6 ${
              liked ? "fill-red-500 text-red-500" : ""
            }`}
          />
        </button>

        <button>
          <MessageCircle className="w-6 h-6" />
        </button>

        <button>
          <Send className="w-6 h-6" />
        </button>
      </div>

      {/* Save */}
      <button onClick={() => setSaved(!saved)}>
        <Bookmark
          className={`w-6 h-6 ${
            saved ? "fill-white text-white" : ""
          }`}
        />
      </button>
    </div>
  );
}
