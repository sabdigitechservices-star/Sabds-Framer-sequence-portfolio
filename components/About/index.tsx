import AboutText from "./AboutText";

export default function AboutSection() {
  return (
    <div id="about" className="relative h-[380vh] w-full">
      <div className="sticky top-0 h-screen w-full">
        <AboutText scrollYProgress={null} />
      </div>
    </div>
  );
}
