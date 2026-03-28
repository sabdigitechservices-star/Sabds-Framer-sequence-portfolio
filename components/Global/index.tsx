import GlobalText from "./GlobalText";

export default function GlobalSection() {
  return (
    <div id="work" className="relative h-[60vh] w-full">
      <div className="sticky top-0 h-screen w-full">
        <GlobalText scrollYProgress={null} />
      </div>
    </div>
  );
}
