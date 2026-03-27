"use client";

import { BLOG_POSTS, BlogPost } from "@/data/posts";
import { motion } from "framer-motion";
import { BlogCard } from "./blog-card";

interface RelatedPostsProps {
  currentPost: BlogPost;
}

export function RelatedPosts({ currentPost }: RelatedPostsProps) {
  const relatedPosts = BLOG_POSTS.filter(
    (post) => post.category === currentPost.category && post.id !== currentPost.id
  ).slice(0, 3);

  if (relatedPosts.length === 0) {
    // If no same-category posts, show 3 most recent
    relatedPosts.push(...BLOG_POSTS.filter(p => p.id !== currentPost.id).slice(0, 3));
  }

  return (
    <section className="bg-canvas/50 border-t border-structure/5 pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-primary">
              Continue Reading
            </span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-structure leading-tight">
              Related <br />
              <span className="text-primary not-italic font-normal text-stroke-thin">Perspectives.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {relatedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
