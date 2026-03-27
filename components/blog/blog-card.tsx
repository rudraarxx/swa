"use client";

import { BlogPost } from "@/data/posts";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`} className="block space-y-5">
        {/* Image Container */}
        <div className="relative aspect-16/10 rounded-2xl overflow-hidden group">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale"
          />
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 bg-background/90 backdrop-blur-md text-[10px] uppercase tracking-widest font-sans font-bold text-structure rounded-full">
              {post.category}
            </span>
          </div>
          <div className="absolute inset-0 bg-structure/0 group-hover:bg-structure/5 transition-colors duration-500" />
          
          <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-structure shadow-sm">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-structure/40 font-sans">
            <Calendar size={12} className="text-primary/60" />
            {post.date}
          </div>
          
          <h3 className="text-2xl md:text-3xl font-serif italic text-structure group-hover:text-primary transition-colors leading-tight">
            {post.title}
          </h3>
          
          <p className="text-sm text-structure/60 font-serif leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
