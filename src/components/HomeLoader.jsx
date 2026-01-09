export default function HomeLoader() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-4">
      <div className="w-16 h-16 rounded-full border-2 border-white/20 border-t-white animate-spin" />

      <p className="text-gray-400 text-sm tracking-wide">
        Loading instaFolio
      </p>
    </div>
  );
}
