"use client";

import { BLOG_POSTS } from "@/data/posts";
import { useSearchParams } from "next/navigation";
import { BlogFilter } from "./blog-filter";
import { BlogGrid } from "./blog-grid";
import { useMemo } from "react";

export function BlogContainer() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "All";
  const query = searchParams.get("q") || "";

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery = 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.category.toLowerCase().includes(query.toLowerCase());
      
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="space-y-20">
      <BlogFilter />
      <BlogGrid posts={filteredPosts} />
    </div>
  );
}
