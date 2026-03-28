import HeroTextOverlays from "./HeroTextOverlays";

export default function HeroSection() {
  return (
    <div className="relative h-[380vh] w-full">
      <div className="sticky top-0 h-screen w-full">
        <HeroTextOverlays scrollYProgress={null} />
      </div>
    </div>
  );
}
