"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";

const serviceCategories = [
  {
    title: "Architecture & Master Planning",
    description: "From concept to monumental reality, we provide comprehensive architectural solutions that merge functionality with avant-garde aesthetics.",
    features: [
      "Concept Development & Feasibility",
      "Comprehensive Master Planning",
      "Plan Approvals & Sanctioning (COA Verified)",
      "Detailed Construction Drawings",
      "BIM (Building Information Modeling)",
      "3D Rendering & Visualization"
    ]
  },
  {
    title: "Interior Architecture",
    description: "Crafting atmospheric interiors where light, texture, and volume are carefully manipulated to create deeply personal living and working environments.",
    features: [
      "Spatial Layout & Programming",
      "Bespoke Furniture Design",
      "Material & Finish Selection",
      "Lighting Design & Integration",
      "Acoustic & Environmental Comfort"
    ]
  },
  {
    title: "Landscape & Urban Intervention",
    description: "Designing the dialogue between the built form and the natural environment, ensuring ecological sensitivity and community connection.",
    features: [
      "Ecological Restoration Strategies",
      "Hardscape & Softscape Integration",
      "Public Realm & Plaza Design",
      "Water Feature Dynamics",
      "Sustainable Drainage Systems"
    ]
  },
  {
    title: "Strategic Consulting",
    description: "Expert advisory services that guide your project from inception to completion, mitigating risk while maximizing architectural potential.",
    features: [
      "Design Consultancy & Advisory",
      "Vastu Consultation & Compliance",
      "BOQs (Bill of Quantities) & Estimation",
      "Site Acquisition Analysis",
      "Project Lifecycle Management"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-12 mb-24 md:mb-32 relative">
        <div className="max-w-7xl mx-auto">
          <Reveal width="100%">
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-structure/40 mb-6 font-semibold">
              Our Disciplines
            </p>
          </Reveal>
          <Reveal delay={0.2} width="100%">
            <h1 className="text-5xl md:text-8xl font-serif text-structure leading-none mb-8">
              The Anatomy <br />
              <span className="italic text-primary">of Space.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.4} width="100%">
            <p className="text-xl md:text-2xl text-structure/60 font-light max-w-2xl leading-relaxed">
              We offer a holistic suite of architectural services designed to guide your project from the initial spark of imagination to its final, tangible construction. Our process is rooted in precision, empathy, and visionary design.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Breakdown Grid */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {serviceCategories.map((category, index) => (
              <div key={category.title} className="relative group">
                <Reveal delay={index * 0.1} width="100%">
                  <div className="space-y-8">
                    {/* Category Header */}
                    <div className="space-y-4 pb-8 border-b border-structure/10">
                      <div className="text-primary font-serif text-5xl opacity-20 mb-4 group-hover:opacity-100 transition-opacity duration-500">
                        0{index + 1}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-serif text-structure group-hover:text-primary transition-colors duration-500">
                        {category.title}
                      </h2>
                      <p className="text-structure/60 leading-relaxed font-light">
                        {category.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-4 pt-4">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-4">
                          <CheckCircle2 size={20} className="text-primary/60 shrink-0 mt-0.5" />
                          <span className="text-sm font-sans text-structure/80 uppercase tracking-widest font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Transition */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-structure text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-12 relative z-10">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-6xl font-serif">
              Ready to <span className="italic text-primary">begin?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2} width="100%">
            <p className="text-lg text-white/60 font-light">
              Whether you need strategic consultancy or full-scale architectural design, we are ready to bring your vision to life.
            </p>
          </Reveal>
          <Reveal delay={0.4} width="100%">
            <div className="flex justify-center">
              <Link
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  // fallback to homepage #contact if not on homepage
                  if (window.location.pathname !== '/') {
                    window.location.href = '/#contact';
                  }
                }}
                className="group flex items-center gap-4 bg-white text-structure px-8 py-4 rounded-full font-sans text-xs uppercase tracking-[0.2em] font-medium hover:bg-primary hover:text-white transition-all shadow-xl"
              >
                Get a Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
