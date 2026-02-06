"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full bg-structure text-background py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col justify-between h-full min-h-[40vh]">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif">SWA</h2>
            <p className="text-sm md:text-base opacity-80 max-w-md font-sans">
              Grounding ethereal concepts into architectural reality.
            </p>
          </div>
          
          <div className="flex flex-col space-y-2 mt-10 md:mt-0 font-sans text-right">
            <a href="#" className="hover:opacity-70 transition-opacity">Projects</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Studio</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Contact</a>
          </div>
        </div>

        <div className="flex justify-between items-end mt-20">
          <p className="text-xs opacity-50">© {new Date().getFullYear()} Shubhangi Wahane Architects</p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-8xl md:text-[12rem] font-serif leading-none opacity-10 select-none absolute bottom-[-4rem] right-0 pointer-events-none"
          >
            SWA
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
