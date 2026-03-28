"use client";

import { motion } from "framer-motion";

export default function AboutText({ scrollYProgress }: { scrollYProgress: any }) {
  return (
    <div className="absolute inset-0 pointer-events-none p-12 flex flex-col justify-between pt-32">
      {/* Top Row */}
      <div className="flex justify-between items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xs"
        >
          <p className="text-[var(--color-accent)] font-medium tracking-widest uppercase text-sm">
            Who We Are
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-right max-w-sm"
        >
          <h2 className="text-3xl font-bold text-white leading-tight">
            A Performance-Driven Digital Marketing Agency
          </h2>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="flex justify-between items-end pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-md"
        >
          <p className="text-2xl text-white/90">
            We help businesses grow with strategy, creativity & technology.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-[200px] text-right"
        >
          <p className="text-white/60 text-sm font-semibold uppercase tracking-wider">
            Trusted by brands across industries
          </p>
        </motion.div>
      </div>
    </div>
  );
}
