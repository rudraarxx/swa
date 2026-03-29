"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Residential", "Interior", "Sustainable"] as const;

export function BlogFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "All";
  const currentQuery = searchParams.get("q") || "";

  const [search, setSearch] = useState(currentQuery);

  // Sync internal search state with URL if URL changes (e.g. back button)
  useEffect(() => {
    setSearch(currentQuery);
  }, [currentQuery]);

  const updateParams = useCallback(
    (params: Record<string, string | null>) => {
      const newParams = new URLSearchParams(searchParams.toString());
      
      Object.entries(params).forEach(([key, value]) => {
        if (value === null || value === "All" || value === "") {
          newParams.delete(key);
        } else {
          newParams.set(key, value);
        }
      });

      router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search !== currentQuery) {
        updateParams({ q: search });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [search, currentQuery, updateParams]);

  const handleCategoryChange = (category: string) => {
    updateParams({ category });
  };

  const clearSearch = () => {
    setSearch("");
    updateParams({ q: null });
  };

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="relative border-b border-structure/5">
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar pb-4 md:pb-6 mask-fade-right">
          {CATEGORIES.map((cat) => {
            const isActive = currentCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className="relative group whitespace-nowrap px-1 py-2"
              >
                <span
                  className={cn(
                    "text-xs md:text-sm font-sans uppercase tracking-[0.2em] transition-all duration-300",
                    isActive 
                      ? "text-structure font-bold" 
                      : "text-structure/40 group-hover:text-structure/80"
                  )}
                >
                  {cat}
                </span>
                
                {/* Active Indicator (Bottom Border Animated) */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto md:mx-0">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-structure/30 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search perspectives..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-12 pr-12 h-14 bg-white border-structure/10 rounded-full focus-visible:ring-primary/20 transition-all font-serif text-lg shadow-sm"
        />
        {search && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-structure/40 hover:text-structure transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
