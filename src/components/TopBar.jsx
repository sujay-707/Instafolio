import Logo from "./Logo";

export default function TopBar() {
  return (
    <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center">
        <Logo />
      </div>
    </div>
  );
}
