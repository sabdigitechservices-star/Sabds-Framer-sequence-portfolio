"use client";

import { motion } from "framer-motion";

export default function GlobalText({ scrollYProgress }: { scrollYProgress: any }) {
  return (
    <div className="absolute inset-0 pointer-events-none p-12 flex flex-col justify-between pt-32">
      <div className="flex justify-between items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xs"
        >
          <p className="text-[var(--color-accent)] font-medium tracking-widest uppercase text-sm">
            Global Reach
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-right max-w-sm"
        >
          <h2 className="text-3xl font-bold text-white leading-tight">
            We Take Your Brand Worldwide
          </h2>
        </motion.div>
      </div>

      <div className="flex justify-between items-end pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-md"
        >
          <p className="text-2xl text-white/90">
            Reach audiences across borders with powerful digital campaigns.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col items-end gap-4 pointer-events-auto"
        >
          <p className="text-white/80 font-semibold tracking-wider uppercase mb-2">Let’s Grow Together 🚀</p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2">
            Contact Us <span className="text-xl">→</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
