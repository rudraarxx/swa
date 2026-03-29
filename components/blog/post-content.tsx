"use client";

import { BlogPost } from "@/data/posts";
import { motion } from "framer-motion";

interface PostContentProps {
  post: BlogPost;
}

export function PostContent({ post }: PostContentProps) {
  return (
    <section className="bg-canvas border-t border-structure/5 pt-20 pb-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="prose prose-lg md:prose-xl prose-serif prose-structure max-w-none 
            prose-h3:text-3xl prose-h3:font-serif prose-h3:mt-16 prose-h3:mb-8
            prose-p:text-structure/70 prose-p:leading-relaxed prose-p:mb-8
            prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-8 prose-blockquote:px-10 prose-blockquote:text-2xl prose-blockquote:font-serif prose-blockquote:font-medium prose-blockquote:text-primary prose-blockquote:rounded-sm
            prose-strong:text-structure prose-strong:font-bold"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Footer info or share buttons could go here */}
        <div className="mt-20 pt-10 border-t border-structure/5 flex items-center justify-between text-[10px] uppercase tracking-widest font-sans font-bold text-structure/30">
          <span>Published in {post.category}</span>
          <span>© SWA Architects 2026</span>
        </div>
      </div>
    </section>
  );
}
