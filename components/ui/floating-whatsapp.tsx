"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const whatsappNumber = "917738700860"; 
  const message = encodeURIComponent("Hi, I'm interested in your architectural services. Can we connect?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ y: -5 }}
      transition={{ 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 2 
      }}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 h-14 bg-structure text-background rounded-full shadow-2xl transition-transform hover:shadow-structure/20 border border-structure/10 backdrop-blur-sm group"
      aria-label="Contact on WhatsApp"
    >
      <div className="relative">
        <MessageCircle className="w-5 h-5 fill-current transition-transform duration-500 group-hover:rotate-12" />
        <span className="absolute -top-1 -right-1 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
        </span>
      </div>
      <span className="font-sans font-bold uppercase tracking-[0.2em] text-[10px]">
        Consultation
      </span>
    </motion.a>
  );
}
