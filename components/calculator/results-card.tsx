"use client";

import { motion } from "framer-motion";
import { CalculationResult, formatCurrency } from "@/lib/calculator-logic";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResultsCardProps {
  result: CalculationResult | null;
  area: number;
}

export function ResultsCard({ result, area }: ResultsCardProps) {
  if (!result) return null;

  const breakdowns = [
    { label: "Labor Cost", value: result.breakdown.labor, color: "bg-primary", percentage: 25 },
    { label: "Material cost", value: result.breakdown.material, color: "bg-structure", percentage: 45 },
    { label: "Finishings", value: result.breakdown.finishings, color: "bg-secondary", percentage: 30 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      <Card className="border-structure/10 bg-canvas/50 backdrop-blur-sm overflow-hidden border-none shadow-2xl">
        <CardHeader className="bg-structure text-background p-8">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <CardTitle className="text-3xl font-serif italic">Estimation Summary</CardTitle>
              <CardDescription className="text-background/60 font-sans tracking-widest uppercase text-[10px]">
                Valid for Nagpur/Maharashtra Area
              </CardDescription>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-widest opacity-50">Total Est. Cost</p>
              <h3 className="text-3xl font-sans font-bold">{formatCurrency(result.totalCost)}</h3>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-8 space-y-8">
          {/* Main cost info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-structure/[0.03] rounded-lg border border-structure/5">
              <p className="text-[10px] uppercase tracking-widest text-structure/40 mb-1">Built-up Area</p>
              <p className="text-xl font-sans font-semibold">{area} <span className="text-sm font-normal opacity-60">sq.ft</span></p>
            </div>
            <div className="p-4 bg-structure/[0.03] rounded-lg border border-structure/5">
              <p className="text-[10px] uppercase tracking-widest text-structure/40 mb-1">Rate per sq.ft</p>
              <p className="text-xl font-sans font-semibold">{formatCurrency(result.ratePerSqFt)}</p>
            </div>
          </div>

          {/* Breakdown Section */}
          <div className="space-y-6">
            <h4 className="text-xs font-sans uppercase font-bold tracking-[0.2em] text-structure/60 border-b border-structure/10 pb-2">
              Cost Breakdown
            </h4>
            <div className="space-y-6">
              {breakdowns.map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-serif italic text-structure/80">{item.label}</span>
                    <span className="font-sans font-bold">{formatCurrency(item.value)}</span>
                  </div>
                  <div className="relative h-1.5 w-full bg-structure/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`absolute top-0 left-0 h-full ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Button className="flex-1 bg-structure hover:bg-primary text-background rounded-full py-6 transition-all group">
              Speak with an Architect
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-structure/20 hover:bg-structure/5">
                <Download className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-structure/20 hover:bg-structure/5">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <p className="text-[10px] text-center text-structure/40 font-sans uppercase tracking-[0.2em]">
            *Estimates are approximate and subject to site conditions.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
