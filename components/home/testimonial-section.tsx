"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const testimonials = [
  {
    name: "Rajesh K.",
    role: "Residential Client",
    text: "Ar. Shubhangi and her team provided excellent service for our home. They were quick, cost-efficient, and highly professional throughout the process.",
    rating: 5,
  },
  {
    name: "Sunita M.",
    role: "Interior Design Project",
    text: "The blend of art and architecture is truly visible in their work. Their attention to detail in interior design transformed our living space completely.",
    rating: 5,
  },
  {
    name: "Pratik S.",
    role: "Commercial Developer",
    text: "Highly recommended for modern, sustainable, and aesthetically pleasing designs. SWA is now our go-to for all our development projects in Nagpur.",
    rating: 5,
  },
  {
    name: "Anita V.",
    role: "Landscape Client",
    text: "The landscape intervention changed the way we interact with our outdoor space. Truly 'Spatial Alchemy' in action. Professional and creative.",
    rating: 5,
  },
];

export function TestimonialSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden text-white border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <Reveal width="100%">
          <div className="space-y-4 text-center">
            <h2 className="text-xs font-sans uppercase tracking-[0.3em] text-white/40">
              Kind Words
            </h2>
            <p className="text-4xl md:text-6xl font-serif leading-tight">
              What our <span className="italic text-primary">clients say.</span>
            </p>
          </div>
        </Reveal>
      </div>

      {/* Infinite Marquee */}
      <div className="flex overflow-hidden gap-8 mask-fade">
        <motion.div 
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, -1032] }} // Adjust based on content width
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i}
              className="w-[300px] md:w-[450px] p-8 md:p-12 rounded-2xl bg-white/3 backdrop-blur-3xl border border-white/10 flex flex-col gap-8 shrink-0 relative transition-colors hover:bg-white/5"
            >
              <Quote className="absolute top-8 right-8 text-primary/20" size={40} />
              
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed whitespace-normal italic font-serif">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-sans font-semibold tracking-wider">
                    {t.name}
                  </h4>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">
                    {t.role}
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                  <img src="https://www.google.com/favicon.ico" className="w-3 h-3 grayscale contrast-200" alt="Google" />
                  <span className="text-[8px] uppercase tracking-tighter text-white/40">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      <style jsx>{`
        .mask-fade {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}
