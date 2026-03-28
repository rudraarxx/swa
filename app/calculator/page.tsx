import { Metadata } from "next";
import { CalculatorMain } from "@/components/calculator/calculator-main";
import { Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "Construction Cost Calculator | SWA Architects",
  description: "Estimate your home construction cost with our intelligent architectural planning tool. Get breakdowns for labor, materials, and finishings based on Indian tier 1 & 2 cities.",
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-canvas pt-44 pb-44">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-structure/10 pb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3 text-primary">
              <Calculator className="w-5 h-5" />
              <span className="font-sans font-bold uppercase tracking-[0.3em] text-[10px]">Planning Tools</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif italic text-structure leading-tight">
              Calculated <br />
              <span className="text-primary not-italic font-normal">Perspectives.</span>
            </h1>
            <p className="text-lg text-structure/70 font-serif leading-relaxed">
              Financial transparency is the foundation of every successful project. 
              Our intelligent calculator provides precise estimates tailored to your 
              location and vision.
            </p>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-structure text-background p-6 rounded-2xl flex items-center gap-6">
              <div className="text-4xl font-sans font-bold opacity-10">01</div>
              <div className="max-w-[150px]">
                <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Current Version</p>
                <p className="text-sm font-sans font-medium">v1.2 // 2026 Update</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <CalculatorMain />

        {/* FAQ / Info Section */}
        <div className="mt-32 grid md:grid-cols-3 gap-12 border-t border-structure/10 pt-20">
          <div className="space-y-4">
            <h3 className="text-xl font-serif italic text-structure">How it works</h3>
            <p className="text-sm text-structure/60 font-sans leading-relaxed">
              We aggregate current commodity prices and labor rates across major Indian hubs to provide you with a realistic baseline for your construction budget.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-serif italic text-structure">Location specific</h3>
            <p className="text-sm text-structure/60 font-sans leading-relaxed">
              Material logistics and specialized labor vary by up to 40% between cities. Our multipliers account for these geographical nuances.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-serif italic text-structure">Disclaimer</h3>
            <p className="text-sm text-structure/60 font-sans leading-relaxed">
              These figures are preliminary estimates. Final costs depend on site soil quality, architectural complexity, and market fluctuations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
