"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-12 px-8 py-4 transition-all duration-300 rounded-full",
        isScrolled ? "bg-black/20 backdrop-blur-md border border-white/10" : "bg-transparent"
      )}
    >
      <div className="text-xl font-bold tracking-tight text-white flex items-center gap-1 whitespace-nowrap">
        <span className="text-[var(--color-accent)]">SAB</span> DIGITECH
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80 whitespace-nowrap">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#work" className="hover:text-white transition-colors">Work</a>
        <button className="bg-[var(--color-accent)] text-black px-5 py-2 rounded-full font-bold hover:scale-105 transition-transform">
          Start Project
        </button>
      </nav>
    </motion.header>
  );
}
