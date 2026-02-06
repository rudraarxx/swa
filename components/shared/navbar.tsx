"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGravity } from "@/store/useGravity";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const { isMenuOpen, setMenuOpen } = useGravity();

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 pointer-events-none"
      >
        <Link href="/" className="pointer-events-auto">
          <span className="font-serif text-2xl md:text-3xl text-structure font-bold tracking-tight">SWA</span>
        </Link>

        <button 
          onClick={toggleMenu}
          className="pointer-events-auto h-12 w-12 rounded-full bg-background/50 backdrop-blur-md border border-structure/10 flex items-center justify-center hover:bg-background/80 transition-all shadow-sm"
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-5 h-5 text-structure" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu className="w-5 h-5 text-structure" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-background/90 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <div className="flex flex-col space-y-8 text-center font-serif text-5xl md:text-7xl">
              {["Projects", "Studio", "Contact"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-primary transition-colors hover:italic"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
