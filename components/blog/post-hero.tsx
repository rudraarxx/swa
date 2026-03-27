"use client";

import { BlogPost } from "@/data/posts";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import Link from "next/link";

interface PostHeroProps {
  post: BlogPost;
}

export function PostHero({ post }: PostHeroProps) {
  return (
    <section className="relative w-full pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-structure/40 hover:text-primary transition-colors font-sans text-sm uppercase tracking-widest font-bold"
          >
            <div className="w-8 h-8 rounded-full border border-structure/10 flex items-center justify-center group-hover:border-primary/30 transition-colors">
              <ChevronLeft size={16} />
            </div>
            Back to Perspectives
          </Link>
        </motion.div>

        {/* Content Overlay */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4"
            >
              <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.2em] font-sans font-bold rounded-full">
                {post.category}
              </span>
              <div className="h-px w-8 bg-structure/10" />
              <div className="flex items-center gap-4 text-structure/40 text-[10px] uppercase tracking-widest font-sans font-bold">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-primary/40" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} className="text-primary/40" />
                  {post.readingTime}
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-structure leading-[1.1] tracking-tight"
            >
              {post.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl md:text-2xl text-structure/60 font-serif leading-relaxed max-w-xl"
            >
              {post.excerpt}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square md:aspect-4/3 lg:aspect-square overflow-hidden rounded-sm shadow-2xl"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
