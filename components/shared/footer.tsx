"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-structure text-background py-16 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col h-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="w-48">
              <Image
                src="/logo_light.png"
                alt="SWA Logo"
                width={200}
                height={80}
                className="w-full h-auto object-contain"
              />
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
              { name: "About", href: "/about" },
              { name: "Career", href: "/career" },
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
                  href="mailto:hello@swa-arch.com"
                  className="hover:text-primary transition-colors w-fit"
                >
                  hello@swa-arch.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary transition-colors w-fit"
                >
                  +91 (123) 456-7890
                </a>
                <p className="opacity-70 mt-2">Nagpur, Maharashtra</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-sans text-sm uppercase tracking-widest opacity-50 mb-2">
                Socials
              </h3>
              <div className="flex space-x-4">
                {["Instagram", "LinkedIn", "Houzz"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="font-serif text-base hover:text-primary transition-colors border-b border-transparent hover:border-primary"
                  >
                    {social}
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
