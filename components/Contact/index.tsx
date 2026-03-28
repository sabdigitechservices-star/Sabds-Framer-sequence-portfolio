"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="bg-black text-white py-32 px-8 border-t border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none blur-[150px] bg-[var(--color-accent)] rounded-full mix-blend-screen" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
        >
          Ready to scale your <span className="text-[var(--color-accent)]">digital presence?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Join hundreds of brands that trust SAB Digitech Services to deliver outstanding results through data-driven strategies and creative excellence.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="w-full sm:w-auto bg-[var(--color-accent)] text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
            Start Your Project 🚀
          </button>
          <button className="w-full sm:w-auto bg-transparent border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
            Book a Call
          </button>
        </motion.div>
      </div>
      
      {/* Minimal Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-white/40 gap-4"
      >
        <p>© {new Date().getFullYear()} SAB Digitech Services. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Twitter</a>
          <a href="#" className="hover:text-[var(--color-accent)] transition-colors">LinkedIn</a>
        </div>
      </motion.div>
    </section>
  );
}
