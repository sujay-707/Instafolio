import { useEffect, useRef } from "react";

export default function ReelCard({ reel }) {
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const isReadyRef = useRef(false);

  useEffect(() => {
    let observer;

    const createPlayer = () => {
      if (!window.YT || !window.YT.Player || playerRef.current) return;

      playerRef.current = new window.YT.Player(iframeRef.current, {
        videoId: reel.youtubeId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          start: reel.start || 0,
          playsinline: 1,
          mute: 1,
        },
        events: {
          onReady: (e) => {
            isReadyRef.current = true;
            e.target.mute();
          },
        },
      });
    };

    // Load player safely
    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;
    }

    // Intersection Observer (SAFE)
    observer = new IntersectionObserver(
      ([entry]) => {
        const player = playerRef.current;

        // 🔒 HARD SAFETY GATE
        if (!player || !isReadyRef.current) return;

        if (entry.isIntersecting) {
          player.playVideo();
        } else {
          player.pauseVideo();
        }
      },
      { threshold: 0.6 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
        isReadyRef.current = false;
      }
    };
  }, [reel.youtubeId, reel.start]);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full snap-start relative bg-black"
    >
      {/* YouTube iframe target */}
      <div
        ref={iframeRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="absolute bottom-24 left-0 right-0 px-6 space-y-2 z-10 text-white">
        <h2 className="text-2xl font-bold">{reel.title}</h2>
        <p className="text-sm text-gray-300">{reel.tech}</p>
        <p className="text-sm text-gray-400">{reel.description}</p>

        <div className="flex gap-3 pt-3">
          <a
            href={reel.live}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 bg-white text-black rounded-full text-sm font-medium"
          >
            Live
          </a>
          <a
            href={reel.code}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 bg-white/10 border border-white/30 rounded-full text-sm"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
