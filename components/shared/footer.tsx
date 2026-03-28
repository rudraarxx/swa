"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-structure text-background py-16 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col h-full">
        {/* Conversation Starter */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-b border-background/10 pb-20">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">
              Ready to draft <br />
              <span className="text-primary not-italic font-normal">your next perspective?</span>
            </h2>
            <p className="text-lg opacity-60 font-serif max-w-md">
              Whether you're planning a sanctuary or a structure of scale, our doors are open for dialogue.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 lg:justify-end">
            <a 
              href={`https://wa.me/917738700860?text=${encodeURIComponent("Hi Shubhangi, I'm ready to discuss my project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-5 bg-background text-structure rounded-full font-sans font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all shadow-xl group"
            >
              Connect on WhatsApp
              <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            </a>
            <a 
              href="tel:+917738700860"
              className="flex items-center justify-center gap-3 px-8 py-5 border border-background/20 text-background rounded-full font-sans font-bold uppercase tracking-widest text-xs hover:border-primary transition-all"
            >
              Direct Call
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="w-48">
            <div className="mb-6">
              <div className="flex flex-col">
                <span className="text-6xl md:text-7xl font-serif tracking-tighter text-background leading-none">
                  SWA
                  <span className="text-secondary">.</span>
                </span>
                <span className="mt-4 text-xs font-sans tracking-[0.3em] uppercase font-bold text-background/80">
                  Shubhangi Wahane
                </span>
                <span className="text-xs font-sans tracking-[0.3em] uppercase text-background/40">
                  Architects
                </span>
              </div>
            </div>
            </div>
            <p className="text-lg md:text-xl opacity-80 max-w-sm font-serif leading-relaxed">
              Grounding ethereal concepts into architectural reality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-7 flex flex-col space-y-4">
            <h3 className="font-sans text-sm uppercase tracking-widest opacity-50 mb-2">
              Explore
            </h3>
            {[
              { name: "Projects", href: "/projects" },
              { name: "Services", href: "/services" },
              { name: "About", href: "/about" },
              { name: "Blog", href: "/blog" },
              { name: "Calculator", href: "/calculator" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-serif text-lg hover:text-primary transition-colors w-fit"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-3 flex flex-col space-y-8">
            <div className="space-y-4">
              <h3 className="font-sans text-sm uppercase tracking-widest opacity-50 mb-2">
                Contact
              </h3>
              <div className="flex flex-col space-y-2 font-serif text-lg">
                <a
                  href="mailto:shubhangiwahanearchitects@gmail.com"
                  aria-label="Send email to Shubhangi Wahane Architects"
                  className="hover:text-primary transition-colors w-fit"
                >
                  shubhangiwahanearchitects@gmail.com
                </a>
                <a
                  href="tel:+917738700860"
                  aria-label="Call Shubhangi Wahane Architects"
                  className="hover:text-primary transition-colors w-fit"
                >
                  +91 77387 00860
                </a>
                <p className="opacity-70 mt-2">Nagpur, Maharashtra</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-sans text-sm uppercase tracking-widest opacity-50 mb-2">
                Socials
              </h3>
              <div className="flex space-x-6">
                {[
                  { name: "Instagram", href: "https://www.instagram.com/shubbhangiwahane/" },
                  { name: "LinkedIn", href: "https://www.linkedin.com/in/shubhangi-wahane/" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-base hover:text-primary transition-colors border-b border-transparent hover:border-primary"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-background/10 pt-8 mt-auto">
          <p className="text-xs opacity-50 font-sans tracking-wide">
            © {new Date().getFullYear()} Shubhangi Wahane Architects. All rights
            reserved.
          </p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[10rem] md:text-[16rem] font-sans font-bold leading-none opacity-[0.03] select-none absolute -bottom-16 right-0 pointer-events-none"
          >
            SWA
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
