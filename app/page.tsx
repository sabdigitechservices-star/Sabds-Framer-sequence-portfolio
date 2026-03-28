"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import ServicesSection from "@/components/Services";
import GlobalSection from "@/components/Global";
import ContactSection from "@/components/Contact";
import GlobalSequenceCanvas from "@/components/GlobalSequenceCanvas";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll over the entire monolithic timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-black min-h-screen selection:bg-[var(--color-accent)] selection:text-black">
      <Navbar />
      
      {/* Monolithic Scrollytelling Timeline */}
      <section ref={containerRef} className="relative w-full">
        {/* Total Height based on our sections: 380+380+380+60 = 1200vh */}
        <div style={{ height: "1200vh" }}>
          
          {/* The Single Sticky Canvas representing the entire video string */}
          <GlobalSequenceCanvas scrollYProgress={scrollYProgress} />
          
          {/* Text Overlay Section Wrappers */}
          <div className="absolute top-0 w-full z-10">
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <GlobalSection />
          </div>
        </div>
      </section>
      
      {/* Final Wrap-up Out of the Scroll Timeline */}
      <ContactSection />
    </main>
  );
}
