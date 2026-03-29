"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function QuoteSection() {
  return (
    <section className="relative py-24 md:py-48 bg-white overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32">
          {/* Left Side: Contact Info */}
          <div className="space-y-16">
            <div className="space-y-6">
              <Reveal width="100%">
                <h2 className="text-3xl md:text-5xl font-serif leading-tight text-structure">
                  Bringing architectural <br />
                  <span className="text-primary font-bold">dreams to life.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2} width="100%">
                <p className="text-lg text-structure/60 leading-relaxed font-light font-sans max-w-sm">
                  Ready to transform your space? Let&apos;s discuss your project
                  and explore the architectural potential of your dream.
                </p>
              </Reveal>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-structure/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-structure/40 mb-1">
                    Email us
                  </p>
                  <a
                    href="mailto:shubhangiwahanearchitects@gmail.com"
                    className="text-lg font-sans text-structure hover:text-primary transition-colors"
                  >
                    shubhangiwahanearchitects@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-structure/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-structure/40 mb-1">
                    Our Studio
                  </p>
                  <p className="text-lg font-sans text-structure">
                    Nagpur — Mumbai, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            <Reveal delay={0.4} width="100%">
              <form className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 relative">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b border-structure/20 py-4 focus:outline-none focus:border-primary transition-colors text-structure peer placeholder-transparent"
                    />
                    <label className="absolute left-0 -top-3.5 text-structure/40 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-structure/40 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs">
                      Name
                    </label>
                  </div>
                  <div className="space-y-2 relative">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-transparent border-b border-structure/20 py-4 focus:outline-none focus:border-primary transition-colors text-structure peer placeholder-transparent"
                    />
                    <label className="absolute left-0 -top-3.5 text-structure/40 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-structure/40 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs">
                      Email
                    </label>
                  </div>
                </div>

                <div className="space-y-2 relative">
                  <select className="w-full bg-transparent border-b border-structure/20 py-4 focus:outline-none focus:border-primary transition-colors text-structure peer appearance-none cursor-pointer">
                    <option value="">What are you looking for?</option>
                    <option value="architecture">Architecture</option>
                    <option value="interior">Interior Design</option>
                    <option value="urban">Urban Planning</option>
                    <option value="consultancy">Consultancy</option>
                    <option value="other">Other</option>
                  </select>
                  <label className="absolute left-0 -top-3.5 text-structure/40 text-xs uppercase tracking-widest transition-all">
                    Project Type
                  </label>
                </div>

                <div className="space-y-2 relative">
                  <textarea
                    rows={4}
                    placeholder="Message"
                    className="w-full bg-transparent border-b border-structure/20 py-4 focus:outline-none focus:border-primary transition-colors text-structure resize-none peer placeholder-transparent"
                  />
                  <label className="absolute left-0 -top-3.5 text-structure/40 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-structure/40 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs">
                    Message
                  </label>
                </div>

                <button className="group relative w-full overflow-hidden rounded-full border border-structure/20 bg-structure text-white py-6 hover:border-primary transition-all duration-500">
                  <div className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                  <span className="relative z-10 flex items-center justify-center gap-4 text-xs font-sans uppercase tracking-[0.3em] font-medium group-hover:text-structure transition-colors">
                    Send Inquiry
                    <ArrowRight size={16} />
                  </span>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
