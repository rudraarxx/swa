"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalculationResult, formatCurrency } from "@/lib/calculator-logic";
import { sendWhatsAppLead } from "@/lib/whatsapp";

interface ResultsCardProps {
  result: CalculationResult | null;
  area: number;
  city: string;
  quality: string;
  scope: string;
}

export function ResultsCard({ result, area, city, quality, scope }: ResultsCardProps) {
  if (!result) return null;

  const handleWhatsApp = () => {
    sendWhatsAppLead({
      area,
      city,
      quality,
      scope,
      totalCost: result.totalCost,
    });
  };

  const breakdowns = [
    { label: "Labor Allocation", value: result.breakdown.labor, percentage: 25 },
    { label: "Structural Materials", value: result.breakdown.material, percentage: 45 },
    { label: "Architectural Finishes", value: result.breakdown.finishings, percentage: 30 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-full"
    >
      <div className="relative h-full bg-white rounded-3xl shadow-2xl border border-structure/5 overflow-hidden flex flex-col group">
        {/* Subtle Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-sans font-black text-structure/2 select-none pointer-events-none group-hover:scale-110 transition-transform duration-[2s]">
          SWA.
        </div>

        {/* Header Section */}
        <div className="p-12 pb-8 border-b border-structure/5 relative bg-linear-to-b from-structure/2 to-transparent">
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <span className="font-sans font-bold text-[10px] tracking-[0.3em] uppercase text-primary">Preliminary Roadmap</span>
                <h3 className="text-4xl font-serif italic text-structure">Estimate Summary</h3>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-widest text-structure/30 font-sans font-bold">Generated for</p>
                <p className="font-serif italic text-lg">{city}</p>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-[10px] uppercase tracking-widest text-structure/40 font-sans font-bold mb-2">Total Project Investment</p>
              <h2 className="text-6xl font-sans font-black tracking-tight text-structure">
                {formatCurrency(result.totalCost)}
                <span className="text-sm font-serif italic text-structure/40 ml-4">*</span>
              </h2>
            </div>
          </div>
        </div>
        
        <div className="p-12 pt-10 space-y-12 flex-1">
          {/* Main Key Info */}
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-1 border-l border-primary/20 pl-6">
              <p className="text-[10px] uppercase tracking-widest text-structure/30 font-sans font-bold">Planned Scale</p>
              <p className="text-2xl font-serif italic">{area} <span className="text-xs uppercase font-sans tracking-widest opacity-40 font-bold ml-2">sq.ft</span></p>
            </div>
            <div className="space-y-1 border-l border-primary/20 pl-6">
              <p className="text-[10px] uppercase tracking-widest text-structure/30 font-sans font-bold">Efficiency Rate</p>
              <p className="text-2xl font-serif italic">{formatCurrency(result.ratePerSqFt)} <span className="text-[10px] uppercase font-sans tracking-widest opacity-40 font-bold ml-2">/ft</span></p>
            </div>
          </div>

          {/* Breakdown List */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-sans uppercase font-bold tracking-[0.3em] text-structure/40 flex items-center gap-4">
              Resource Breakdown
              <div className="h-px bg-structure/5 flex-1" />
            </h4>
            <div className="space-y-10">
              {breakdowns.map((item) => (
                <div key={item.label} className="group/item">
                  <div className="flex justify-between items-end mb-4">
                    <div className="space-y-1">
                      <span className="font-serif italic text-xl text-structure/80 block">{item.label}</span>
                      <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-structure/30">{item.percentage}% Allocation</span>
                    </div>
                    <span className="font-sans font-bold text-lg">{formatCurrency(item.value)}</span>
                  </div>
                  <div className="relative h-px w-full bg-structure/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-0 left-0 h-full bg-primary"
                    />
                    {/* Tick Mark */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                      className="absolute top-0 h-2 w-px bg-primary"
                      style={{ left: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA & Disclaimer */}
          <div className="pt-12 space-y-8">
            <div className="flex flex-col gap-4">
              <Button 
                onClick={handleWhatsApp}
                className="w-full bg-structure hover:bg-primary text-background rounded-full py-10 transition-all group shadow-2xl shadow-structure/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative font-sans font-black uppercase tracking-widest text-xs">Request Full Consultation on WhatsApp</span>
                <ArrowRight className="ml-4 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <p className="text-[9px] text-center text-structure/30 font-sans uppercase tracking-[0.3em] leading-relaxed max-w-[280px] mx-auto">
              *Preliminary roadmap generated by SWA Engine. Site-specific factors may influence final perspective by 10-15%.
            </p>
          </div>
        </div>

        {/* Decorative SWA Tag */}
        <div className="absolute top-0 right-0 p-8">
            <span className="font-serif italic text-6xl text-structure/5 select-none font-black leading-none">v1.2</span>
        </div>
      </div>
    </motion.div>
  );
}
