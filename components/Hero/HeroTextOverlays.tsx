"use client";

import { motion } from "framer-motion";

export default function HeroTextOverlays({ scrollYProgress }: { scrollYProgress: any }) {
  // We can tie text opacity/y-translate to the scroll
  return (
    <div className="absolute inset-0 pointer-events-none p-12 flex flex-col justify-between pt-32">
      {/* Top Row */}
      <div className="flex justify-between items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-xs"
        >
          <p className="text-white/80 font-medium tracking-widest uppercase text-sm">
            Your Digital Journey Starts Here
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-right max-w-sm"
        >
          <h2 className="text-2xl font-bold text-white mb-2">SAB Digitech Services</h2>
          <p className="text-white/70">Kolkata’s Best Digital Marketing Company</p>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="flex justify-between items-end pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-md"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            We turn ideas into <span className="text-[var(--color-accent)]">powerful</span> digital brands
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col gap-4 pointer-events-auto"
        >
          <button className="bg-[var(--color-accent)] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2">
            Get Started <span className="text-xl">→</span>
          </button>
          <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors">
            View Services
          </button>
        </motion.div>
      </div>
    </div>
  );
}
