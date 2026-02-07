"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function Cursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Initially hidden to prevent jump

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for the cursor movement
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const paramX = useSpring(mouseX, springConfig);
  const paramY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-hover") // Custom class for manual trigger
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  // Hide on touch devices (simple check)
  if (typeof navigator !== "undefined" && typeof window !== "undefined") {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return null;
  }

  return (
    <motion.div
      className={cn(
        "fixed top-0 left-0 z-9999 pointer-events-none mix-blend-difference",
        !isVisible && "opacity-0",
      )}
      style={{
        x: paramX,
        y: paramY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        className={cn(
          "bg-white rounded-full",
          isHovered ? "h-8 w-8 opacity-100" : "h-4 w-4 opacity-100",
        )}
        layoutId="cursor-shape"
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.5, // Lighter mass for quicker response
        }}
      />
    </motion.div>
  );
}
