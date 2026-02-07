"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useGravity } from "@/store/useGravity";
import { cn } from "@/lib/utils";
import { Menu, X, Instagram, Linkedin, Facebook } from "lucide-react"; // Assuming these icons exist
import Link from "next/link";
import { BrandLogo } from "@/icons/brandLogo";

export function Navbar() {
  const { isMenuOpen, setMenuOpen } = useGravity();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest <= 100 && isScrolled) {
      setIsScrolled(false);
    }
  });

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Career", href: "/career" },
    { name: "Blog", href: "/blog" },
    { name: "Calculator", href: "/calculator" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <AnimatePresence>
        {/* Full Header State (Initial) */}
        {!isScrolled && !isMenuOpen && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 pointer-events-none"
          >
            {/* Left: Brand */}
            <Link
              href="/"
              className="pointer-events-auto flex items-center gap-2"
            >
              <div className="w-20">
                <BrandLogo />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] leading-tight font-sans tracking-widest uppercase font-bold text-structure">
                  Shubhangi Wahane
                </span>
                <span className="text-[10px] leading-tight font-sans tracking-widest uppercase text-structure/60">
                  Architects
                </span>
              </div>
            </Link>

            {/* Center: Pill Menu */}
            <div className="pointer-events-auto hidden md:flex items-center bg-structure/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-white/10">
              <div className="flex items-center space-x-6">
                {navLinks.slice(0, 4).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-background font-sans text-sm font-medium hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="w-px h-4 bg-background/20 mx-2" />
                <button
                  onClick={toggleMenu}
                  className="w-6 h-6 rounded-full bg-background flex items-center justify-center text-structure text-xs font-bold hover:scale-110 transition-transform"
                >
                  {navLinks.length}
                </button>
              </div>
            </div>

            {/* Right: Socials */}
            <div className="pointer-events-auto flex items-center gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-structure hover:bg-structure hover:text-white transition-all shadow-sm border border-structure/5"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button State (Scrolled) */}
      <motion.div
        className="fixed top-6 right-6 md:top-8 md:right-12 z-50 pointer-events-none"
        animate={{
          y: isScrolled || isMenuOpen ? 0 : -100,
          opacity: isScrolled || isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
      >
        <button
          onClick={toggleMenu}
          className="pointer-events-auto h-14 w-14 rounded-full bg-structure text-background flex items-center justify-center hover:bg-primary transition-all shadow-lg"
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <div className="flex flex-col space-y-6 text-center font-sans text-4xl md:text-6xl font-medium tracking-tight">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-primary transition-colors hover:italic"
                  >
                    {item.name}
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
