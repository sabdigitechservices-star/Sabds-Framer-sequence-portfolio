import ServicesText from "./ServicesText";

export default function ServicesSection() {
  return (
    <div id="services" className="relative h-[380vh] w-full">
      <div className="sticky top-0 h-screen w-full">
        <ServicesText scrollYProgress={null} />
      </div>
    </div>
  );
}
