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
    // Initial preload for immediate viewing
    preloadWindow(1);
  }, []);

  const preloadWindow = (currentIndex: number) => {
    // Determine a window of frames to load: e.g., 30 frames behind and 60 ahead
    const start = Math.max(1, currentIndex - 30);
    const end = Math.min(totalFrames, currentIndex + 60);

    // Unload frames outside a larger safety buffer to conserve memory
    const keepStart = Math.max(1, currentIndex - 150);
    const keepEnd = Math.min(totalFrames, currentIndex + 150);

    // Array to hold the queue of frames we need to load
    const framesToLoad: number[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      if (i < keepStart || i > keepEnd) {
        // Unload distant frames
        if (images.current[i - 1]) {
          const img = images.current[i - 1];
          // Try to cancel any ongoing fetch by removing the src
          if (img) {
            img.onload = null;
            img.src = "";
          }
          images.current[i - 1] = null;
        }
      } else if (i >= start && i <= end) {
        // If within our active window and not loaded, add to queue
        if (!images.current[i - 1]) {
          framesToLoad.push(i);
        }
      }
    }

    // Lazy load logic: sort queue by closest distance to our current view priority
    framesToLoad.sort((a, b) => Math.abs(a - Math.floor(currentIndex)) - Math.abs(b - Math.floor(currentIndex)));

    // Load sequentially based on priority
    framesToLoad.forEach(i => {
      const { folder, local } = getFrameDetails(i);
      const img = new Image();
      const paddedLocal = local.toString().padStart(3, "0");
      img.src = `/${folder}/ezgif-frame-${paddedLocal}.png`;
      
      img.onload = () => {
        // Re-render immediately if this became the current active frame
        if (Math.floor(nextFrame.get()) === i || i === 1) {
          renderFrame(i);
        }
      };
      images.current[i - 1] = img;
    });
  };

  const renderFrame = (index: number) => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d", { alpha: false });
    if (!ctx) return;
    
    const imgIndex = Math.floor(index) - 1;
    const safeIndex = Math.max(0, Math.min(imgIndex, totalFrames - 1));
    const img = images.current[safeIndex];
    
    if (img && img.complete) {
      // Ensure canvas matches screen dimensions
      if (canvasRef.current.width !== window.innerWidth || canvasRef.current.height !== window.innerHeight) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
      
      const scale = Math.max(canvasRef.current.width / img.width, canvasRef.current.height / img.height);
      const x = (canvasRef.current.width / 2) - (img.width / 2) * scale;
      const y = (canvasRef.current.height / 2) - (img.height / 2) * scale;
      
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }
  };

  useMotionValueEvent(nextFrame, "change", (latest: number) => {
    const currentIndex = Math.floor(latest);
    // Load incoming frames as we scroll
    preloadWindow(currentIndex);
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
