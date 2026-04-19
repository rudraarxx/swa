"use client";
// Triggering re-save for HMR

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, Send, ArrowRight, Loader2, Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { sendEnquiry } from "@/app/actions/contact";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const result = await sendEnquiry(formData);
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", projectType: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("An unexpected error occurred.");
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 bg-canvas min-h-screen text-structure overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-24 relative">
          <Reveal delay={0.2} width="100%">
            <h1 className="text-4xl md:text-7xl font-serif leading-tight mb-8 tracking-tighter text-structure">
              Crafting <br />
              <span className="text-primary italic font-normal">dialogue.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.4} width="100%">
            <p className="text-lg md:text-xl opacity-60 max-w-2xl font-serif leading-relaxed">
              Every great structure begins with a conversation. We're here to explore yours.
            </p>
          </Reveal>
          
          {/* Subtle background text */}
          <div className="absolute top-0 right-0 text-[15vw] font-sans font-extrabold opacity-[0.02] select-none pointer-events-none translate-x-1/4 -translate-y-1/4">
            CONNECT
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 mb-40 relative">
          {/* Background Atmospheric Glows for Form Section */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none -z-10" />

          {/* Left Column: Essential Information */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-12">
              <Reveal delay={0.5}>
                <div className="group flex gap-8">
                  <div className="w-14 h-14 rounded-full bg-structure/5 flex items-center justify-center group-hover:bg-primary group-hover:text-canvas transition-all duration-500 ease-out shrink-0">
                    <Mail size={22} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[10px] font-sans uppercase tracking-[0.3em] opacity-40 font-bold">Email Inquiries</h3>
                    <a 
                      href="mailto:shubhangiwahanearchitects@gmail.com" 
                      className="text-xl md:text-2xl font-serif hover:text-primary transition-colors block break-words max-w-xs md:max-w-none"
                    >
                      shubhangiwahanearchitects@gmail.com
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.6}>
                <div className="group flex gap-8">
                  <div className="w-14 h-14 rounded-full bg-structure/5 flex items-center justify-center group-hover:bg-primary group-hover:text-canvas transition-all duration-500 ease-out shrink-0">
                    <Phone size={22} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[10px] font-sans uppercase tracking-[0.3em] opacity-40 font-bold">Direct Line</h3>
                    <a 
                      href="tel:+917738700860" 
                      className="text-xl md:text-2xl font-serif hover:text-primary transition-colors"
                    >
                      +91 77387 00860
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.7}>
                <div className="group flex gap-8">
                  <div className="w-14 h-14 rounded-full bg-structure/5 flex items-center justify-center group-hover:bg-primary group-hover:text-canvas transition-all duration-500 ease-out shrink-0">
                    <MapPin size={22} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[10px] font-sans uppercase tracking-[0.3em] opacity-40 font-bold">The Studio</h3>
                    <p className="text-xl md:text-2xl font-serif leading-tight">
                      25, Red Cross Road, Sadar, <br />
                      Nagpur, MH 440001
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.8}>
              <div className="pt-12 border-t border-structure/10">
                <h3 className="text-[10px] font-sans uppercase tracking-[0.3em] opacity-40 font-bold mb-8">Follow Our Process</h3>
                <div className="flex flex-wrap gap-10">
                  <a 
                    href="https://www.instagram.com/shubbhangiwahane/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-primary transition-all font-serif text-sm md:text-base group"
                  >
                    <span className="w-8 h-8 rounded-full border border-structure/10 flex items-center justify-center group-hover:border-primary transition-colors">
                      <Instagram size={14} />
                    </span>
                    Instagram
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/shubhangi-wahane/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-primary transition-all font-serif text-sm md:text-base group"
                  >
                    <span className="w-8 h-8 rounded-full border border-structure/10 flex items-center justify-center group-hover:border-primary transition-colors">
                      <Linkedin size={14} />
                    </span>
                    LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interaction Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.6} width="100%">
              <div className="relative">
                <div className="mb-12 space-y-4">
                  <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-primary font-bold">Studio Dialogue</h2>
                  <p className="text-2xl md:text-3xl font-serif text-structure/80">Share your architectural perspective.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-16 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    <div className="space-y-2 relative group">
                      <input 
                        type="text" 
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent py-5 focus:outline-none transition-all font-serif text-base md:text-lg placeholder-transparent peer"
                      />
                      <label className="absolute left-0 -top-4 text-structure/30 text-[10px] uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-structure/40 peer-placeholder-shown:top-5 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-[10px] font-sans font-bold">
                        Name
                      </label>
                      <div className="absolute bottom-0 inset-x-0 h-px bg-structure/10" />
                      <div className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-700 peer-focus:w-full z-10" />
                    </div>
                    <div className="space-y-2 relative group">
                      <input 
                        type="email" 
                        required
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent py-5 focus:outline-none transition-all font-serif text-base md:text-lg placeholder-transparent peer"
                      />
                      <label className="absolute left-0 -top-4 text-structure/30 text-[10px] uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-structure/40 peer-placeholder-shown:top-5 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-[10px] font-sans font-bold">
                        Email
                      </label>
                      <div className="absolute bottom-0 inset-x-0 h-px bg-structure/10" />
                      <div className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-700 peer-focus:w-full z-10" />
                    </div>
                  </div>

                  <div className="space-y-2 relative group">
                    <select 
                      required
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-transparent py-5 focus:outline-none transition-all font-serif text-lg appearance-none cursor-pointer text-structure peer"
                    >
                      <option value="" disabled className="text-structure/40 bg-canvas">What are you looking for?</option>
                      <option value="residential" className="bg-canvas">Residential Narrative</option>
                      <option value="commercial" className="bg-canvas">Commercial Logic</option>
                      <option value="consultancy" className="bg-canvas">Strategic Consultancy</option>
                      <option value="other" className="bg-canvas">General Inquiry</option>
                    </select>
                    <label className="absolute left-0 -top-4 text-structure/30 text-[10px] uppercase tracking-[0.2em] font-sans font-bold transition-all">
                      Nature of Request
                    </label>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                      <ArrowRight size={16} className="rotate-90" />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 h-px bg-structure/10" />
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-700 peer-focus:w-full z-10" />
                  </div>

                  <div className="space-y-2 relative group">
                    <textarea 
                      rows={5}
                      required
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent py-5 focus:outline-none transition-all font-serif text-lg placeholder-transparent resize-none peer"
                    />
                    <label className="absolute left-0 -top-4 text-structure/30 text-[10px] uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-structure/40 peer-placeholder-shown:top-5 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-[10px] font-sans font-bold">
                      The Perspective
                    </label>
                    <div className="absolute bottom-0 inset-x-0 h-px bg-structure/10" />
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-700 peer-focus:w-full z-10" />
                  </div>

                  <div className="space-y-8">
                    <motion.button 
                      type="submit"
                      disabled={status === "submitting"}
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                      className="relative group inline-flex items-center justify-center px-16 py-6 bg-structure overflow-hidden rounded-full shadow-lg hover:shadow-primary/20 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                      
                      <span className="relative z-10 flex items-center gap-3 font-sans font-bold uppercase tracking-[0.3em] text-[10px] text-canvas group-hover:text-structure transition-colors">
                        {status === "submitting" ? (
                          <>
                            Engaging...
                            <Loader2 size={14} className="animate-spin" />
                          </>
                        ) : status === "success" ? (
                          <>
                            Inquiry Sent
                            <Check size={14} />
                          </>
                        ) : (
                          <>
                            Engage Studio
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </motion.button>

                    <AnimatePresence>
                      {status === "error" && (
                        <motion.p 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="pt-4 text-xs text-red-500 font-sans tracking-wide"
                        >
                          {errorMessage}
                        </motion.p>
                      )}

                      {status === "success" && (
                        <motion.p 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="pt-4 text-xs text-primary font-sans font-medium tracking-wide"
                        >
                          Perspective shared. We&apos;ll be in touch soon.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Edge-to-edge Map Section */}
      <div className="mt-20">
        <Reveal delay={0.9} width="100%">
          <div className="w-full h-[600px] relative group overflow-hidden bg-structure/5">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.893761361!2d79.0763261!3d21.1566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0fa64dec15b%3A0xe543b5735165ff3c!2s25%2C%20Red%20Cross%20Rd%2C%20Sadar%2C%20Nagpur%2C%20Maharashtra%20440001!5e0!3m2!1sen!2sin!4v1713560000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) contrast(1.1) brightness(0.9) invert(0.05)' }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="group-hover:filter-none transition-all duration-1000 ease-in-out opacity-80 group-hover:opacity-100"
              title="SWA Architects Office Location"
            />
            
            {/* Minimal Overlay for context */}
            <div className="absolute bottom-10 left-10 p-6 bg-white/90 backdrop-blur-xl border border-structure/10 rounded-2xl shadow-2xl max-w-sm hidden md:block group-hover:opacity-0 transition-opacity">
              <h4 className="font-serif text-lg mb-2">Nagpur Studio</h4>
              <p className="text-sm opacity-60 font-sans tracking-wide">25, Red Cross Road, Sadar, Nagpur</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
