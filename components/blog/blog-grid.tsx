"use client";

import { BlogPost } from "@/data/posts";
import { AnimatePresence, motion } from "framer-motion";
import { BlogCard } from "./blog-card";
import { SearchX } from "lucide-react";

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-32 space-y-6 text-center"
      >
        <div className="w-20 h-20 rounded-full bg-structure/5 flex items-center justify-center text-structure/20">
          <SearchX className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-serif italic text-structure">No perspectives found</h3>
          <p className="text-structure/40 font-sans text-sm max-w-xs mx-auto">
            Try adjusting your search or category filters to find what you're looking for.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
      <AnimatePresence mode="popLayout" initial={false}>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </AnimatePresence>
    </div>
  );
}
