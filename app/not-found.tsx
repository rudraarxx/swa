"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-canvas text-structure overflow-hidden">
      {/* Background Decorative Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1.2 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span className="text-[20rem] md:text-[40rem] font-sans font-bold leading-none select-none">
          404
        </span>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.h1
              initial={{ letterSpacing: "0.2em" }}
              animate={{ letterSpacing: "0.5em" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-sm md:text-base font-sans uppercase font-bold tracking-[0.5em] opacity-40"
            >
              Lost in Space
            </motion.h1>
            <h2 className="text-2xl md:text-4xl font-serif leading-tight">
              A missed perspective, <br />
              <span className="text-primary font-normal">an absent plan.</span>
            </h2>
          </div>

          <p className="text-base md:text-lg font-serif opacity-70 leading-relaxed max-w-md mx-auto">
            The structure you're looking for was never drafted, or perhaps it has been reimagined. Let's return to the sanctuary.
          </p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="pt-8"
          >
            <Link
              href="/"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-structure text-canvas rounded-full transition-all duration-500 hover:pr-10 overflow-hidden"
            >
              <div className="w-lg h-128 rounded-full bg-primary/20 blur-3xl" />
              <span className="relative z-10 flex items-center gap-2 font-sans font-medium uppercase tracking-widest text-xs">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Return to Sanctuary
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Architectural Line Details */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-1/4 left-0 h-px bg-structure"
        />
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute top-0 right-1/4 w-px bg-structure"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 1.1 }}
          className="absolute bottom-1/4 right-0 h-px bg-structure"
        />
      </div>

      {/* Floating Circles - similar to Preloader */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-48 -right-24 w-lg h-128 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"
      />
    </div>
  );
}
