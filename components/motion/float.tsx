"use client";

import { motion } from "framer-motion";

export function Float({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}
