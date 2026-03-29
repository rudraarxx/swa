import { Metadata } from "next";
import { BlogContainer } from "@/components/blog/blog-container";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Shubhangi Wahane Architects",
  description: "Exploring the intersections of architecture, design, and sustainability. Perspectives from SWA Architects.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-canvas pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3 text-primary">
              <span className="font-sans font-bold uppercase tracking-[0.3em] text-[10px]">Perspectives</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-structure leading-tight">
              Architectural <br />
              <span className="text-primary font-normal text-stroke-thin">Narratives.</span>
            </h1>
            <p className="text-lg text-structure/70 font-serif leading-relaxed">
              A curated collection of thoughts on space, structure, and the 
              emotional resonance of the built environment.
            </p>
          </div>
          
          <div className="hidden lg:block">
            <div className="text-xs font-sans tracking-[0.5em] uppercase text-structure/20 vertical-text h-32 flex items-center justify-center border-l border-structure/10 pl-8">
              Insight // Dialogue // Design
            </div>
          </div>
        </div>

        {/* Main Content with Suspense for SearchParams */}
        <Suspense fallback={
          <div className="flex items-center justify-center py-32">
            <Loader2 className="w-8 h-8 animate-spin text-primary/40" />
          </div>
        }>
          <BlogContainer />
        </Suspense>
      </div>
    </div>
  );
}
