"use client";

import { motion } from "framer-motion";

export default function ServicesText({ scrollYProgress }: { scrollYProgress: any }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

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
            What We Do
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-right max-w-sm"
        >
          <h2 className="text-3xl font-bold text-white leading-tight">
            Growth-Focused Digital Services
          </h2>
        </motion.div>
      </div>

      <div className="flex justify-between items-end pb-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="pointer-events-auto"
        >
          <ul className="text-3xl md:text-5xl font-bold text-white/90 space-y-4">
            {["SEO", "Performance Marketing", "Social Media Marketing", "Website Development"].map((service, idx) => (
              <motion.li 
                key={idx} 
                variants={itemVariants}
                className="hover:text-[var(--color-accent)] transition-colors cursor-pointer w-fit"
              >
                {service}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-[250px] text-right"
        >
          <p className="text-white text-xl font-medium tracking-wide">
            Scale Faster with<br/>
            <span className="text-[var(--color-accent)] font-bold">Data-Driven Strategies</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
