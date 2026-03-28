"use client";

import { useRef, useEffect } from "react";
import { useScroll, useTransform, useMotionValueEvent, useSpring, MotionValue } from "framer-motion";

function getFrameDetails(globalIndex: number) {
  // Map 1-760 to specific folder and local index
  if (globalIndex <= 240) {
    return { folder: "sequence", local: globalIndex };
  } else if (globalIndex <= 480) {
    return { folder: "sequence2", local: globalIndex - 240 };
  } else if (globalIndex <= 720) {
    return { folder: "sequence3", local: globalIndex - 480 };
  } else {
    return { folder: "sequence4", local: globalIndex - 720 };
  }
}

export default function GlobalSequenceCanvas({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const totalFrames = 760;
  const images = useRef<(HTMLImageElement | null)[]>(new Array(totalFrames).fill(null));
  
  // Apply physics-based smoothing so fast scrolls still play through intermediate frames smoothly!
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform smooth scroll progress to 1-760
  const nextFrame = useTransform(smoothProgress, [0, 1], [1, totalFrames]);

  useEffect(() => {
    // Basic smart preloader
    // Start loading first 100 frames immediately
    const preloadChunk = (start: number, end: number) => {
      for (let i = start; i <= end; i++) {
        const { folder, local } = getFrameDetails(i);
        const img = new Image();
        const paddedLocal = local.toString().padStart(3, "0");
        img.src = `/${folder}/ezgif-frame-${paddedLocal}.png`;
        images.current[i - 1] = img;
        
        if (i === 1) {
          img.onload = () => renderFrame(1);
        }
      }
    };

    preloadChunk(1, 100);

    // Queue the rest after a short delay
    setTimeout(() => {
      preloadChunk(101, totalFrames);
    }, 500);
  }, []);

  const renderFrame = (index: number) => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d", { alpha: false });
    if (!ctx) return;
    
    const imgIndex = Math.floor(index) - 1;
    const safeIndex = Math.max(0, Math.min(imgIndex, totalFrames - 1));
    const img = images.current[safeIndex];
    
    if (img && img.complete) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      
      const scale = Math.max(canvasRef.current.width / img.width, canvasRef.current.height / img.height);
      const x = (canvasRef.current.width / 2) - (img.width / 2) * scale;
      const y = (canvasRef.current.height / 2) - (img.height / 2) * scale;
      
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }
  };

  useMotionValueEvent(nextFrame, "change", (latest: number) => {
    requestAnimationFrame(() => renderFrame(latest));
  });

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full object-cover"
        role="img"
        aria-label="SAB Digitech - Monolithic Scrollytelling Animation"
      />
    </div>
  );
}
