"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  calculateConstructionCost, 
  CalculationResult 
} from "@/lib/calculator-logic";
import ratesData from "@/data/rates.json";
import { ResultsCard } from "./results-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calculator, MapPin, Ruler, Sparkles, RefreshCcw, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = "origin" | "dimension" | "paradigm" | "materiality" | "results";

const STEPS = [
  { id: "origin", label: "01. Origin", description: "Location & Context" },
  { id: "dimension", label: "02. Dimension", description: "Scale & Volume" },
  { id: "paradigm", label: "03. Paradigm", description: "Project Intent" },
  { id: "materiality", label: "04. Materiality", description: "Finishing Quality" },
];

export function CalculatorMain() {
  const [step, setStep] = useState<Step>("origin");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [area, setArea] = useState<string>("1500");
  const [floors, setFloors] = useState<string>("1");
  const [scope, setScope] = useState<string>("turnkey");
  const [quality, setQuality] = useState<string>("premium");
  const [result, setResult] = useState<CalculationResult | null>(null);

  const selectedState = useMemo(() => 
    ratesData.states.find((s) => s.id === state), 
    [state]
  );

  const selectedCity = useMemo(() => 
    selectedState?.cities.find((c) => c.name === city),
    [selectedState, city]
  );

  const calculate = () => {
    if (!selectedCity) return;
    
    const selectedQuality = ratesData.qualities.find(q => q.id === quality);
    const selectedScope = ratesData.scopes.find(s => s.id === scope);
    if (!selectedQuality || !selectedScope) return;

    const res = calculateConstructionCost(
      selectedCity.multiplier,
      selectedCity.baseRate,
      Number(area),
      selectedQuality.multiplier,
      selectedScope.multiplier
    );
    
    setResult(res);
    setStep("results");
  };

  const reset = () => {
    setStep("origin");
    setResult(null);
  };

  const stepIndex = STEPS.findIndex(s => s.id === step);
  const currentStep = step === "results" ? null : STEPS[stepIndex];

  const containerVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <div className="flex flex-col lg:flex-row gap-20 items-stretch">
        {/* Left Side: Form Steps */}
        <div className="flex-1 w-full space-y-12">
          {/* Custom Stepper */}
          <div className="hidden md:flex gap-12 border-b border-structure/5 pb-8">
            {STEPS.map((s, idx) => {
              const isActive = s.id === step;
              const isPast = stepIndex > idx;
              return (
                <div key={s.id} className="flex-1 space-y-3 relative">
                  <div className="flex justify-between items-end">
                    <span className={cn(
                      "font-sans font-bold text-[10px] tracking-[0.2em] transition-colors duration-500",
                      isActive ? "text-primary" : (isPast ? "text-structure" : "text-structure/20")
                    )}>
                      {s.label}
                    </span>
                    {isActive && (
                      <motion.span 
                        layoutId="active-dot"
                        className="w-1 h-1 rounded-full bg-primary" 
                      />
                    )}
                  </div>
                  <div className="h-[2px] w-full bg-structure/5 relative rounded-full overflow-hidden">
                    <motion.div 
                      initial={false}
                      animate={{ 
                        width: isActive || isPast ? "100%" : "0%",
                        backgroundColor: isActive ? "var(--primary)" : "var(--structure)"
                      }}
                      className="absolute top-0 left-0 h-full origin-left"
                    />
                  </div>
                  <p className={cn(
                    "font-serif italic text-xs transition-opacity duration-500",
                    isActive ? "opacity-100" : "opacity-0"
                  )}>
                    {s.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="space-y-4 md:hidden">
            <h2 className="text-3xl font-serif italic text-structure leading-tight">
              {currentStep?.description || "Calculation Complete"}
            </h2>
            <p className="text-structure/40 font-sans text-[10px] tracking-widest uppercase">
              {currentStep?.label || "v1.2 // SWA"}
            </p>
          </div>

          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {step === "origin" && (
                <motion.div
                  key="origin"
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-12"
                >
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-primary/40">
                        <MapPin className="w-4 h-4" />
                        <h3 className="font-sans font-bold uppercase tracking-widest text-[10px]">Context</h3>
                      </div>
                      <h4 className="text-2xl font-serif italic text-structure">Where is the sanctuary <br/>being built?</h4>
                    </div>

                    <div className="space-y-8">
                      <div className="group space-y-3">
                        <Label className="text-[10px] uppercase tracking-widest text-structure/40 group-focus-within:text-primary transition-colors">Select State</Label>
                        <Select value={state} onValueChange={(val) => { setState(val); setCity(""); }}>
                          <SelectTrigger className="border-none bg-structure/2 hover:bg-structure/5 rounded-0 h-16 text-lg font-serif italic px-0 border-b border-structure/10 focus:ring-0">
                            <SelectValue placeholder="Chose state..." />
                          </SelectTrigger>
                          <SelectContent className="border-structure/10 shadow-2xl">
                            {ratesData.states.map((s) => (
                              <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <AnimatePresence>
                        {state && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="group space-y-3"
                          >
                            <Label className="text-[10px] uppercase tracking-widest text-structure/40 group-focus-within:text-primary transition-colors">Select City</Label>
                            <Select value={city} onValueChange={setCity}>
                              <SelectTrigger className="border-none bg-structure/2 hover:bg-structure/5 rounded-0 h-16 text-lg font-serif italic px-0 border-b border-structure/10 focus:ring-0">
                                <SelectValue placeholder="Chose city..." />
                              </SelectTrigger>
                              <SelectContent className="border-structure/10 shadow-2xl">
                                {selectedState?.cities.map((c) => (
                                  <SelectItem key={c.name} value={c.name}>{c.name}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="flex justify-end pt-12 border-t border-structure/5">
                    <Button 
                      disabled={!city}
                      onClick={() => setStep("dimension")}
                      className="group bg-structure hover:bg-primary text-background rounded-full px-12 py-8 transition-all flex items-center gap-4"
                    >
                      <span className="font-sans font-bold uppercase tracking-widest text-xs">Continue</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === "dimension" && (
                <motion.div
                  key="dimension"
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-12"
                >
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-primary/40">
                        <Ruler className="w-4 h-4" />
                        <h3 className="font-sans font-bold uppercase tracking-widest text-[10px]">Volume</h3>
                      </div>
                      <h4 className="text-2xl font-serif italic text-structure">What is the scale of <br/>your vision?</h4>
                    </div>

                    <div className="space-y-12">
                      <div className="group space-y-4">
                        <Label className="text-[10px] uppercase tracking-widest text-structure/40 group-focus-within:text-primary transition-colors">Built-up Area</Label>
                        <div className="relative">
                          <Input 
                            id="area"
                            type="number"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            className="border-none bg-transparent rounded-0 h-16 text-4xl font-serif italic px-0 border-b border-structure/10 focus-visible:ring-0 focus-visible:border-primary transition-all pr-12"
                            placeholder="1500"
                          />
                          <span className="absolute right-0 bottom-4 font-sans font-bold text-[10px] uppercase tracking-widest opacity-20 text-structure">sq.ft</span>
                        </div>
                      </div>

                      <div className="group space-y-4">
                        <Label className="text-[10px] uppercase tracking-widest text-structure/40 group-focus-within:text-primary transition-colors">Elevation Level</Label>
                        <RadioGroup value={floors} onValueChange={setFloors} className="grid grid-cols-3 gap-3">
                          {[
                            { id: "1", label: "G", sub: "1 Floor" },
                            { id: "2", label: "G+1", sub: "2 Floors" },
                            { id: "3", label: "G+2", sub: "3 Floors" },
                          ].map((f) => (
                            <Label
                              key={f.id}
                              className={cn(
                                "flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer transition-all aspect-square",
                                floors === f.id ? "border-primary bg-primary/5 text-primary" : "border-structure/10 hover:bg-structure/2 sm:bg-white text-structure/40"
                              )}
                            >
                              <RadioGroupItem value={f.id} className="sr-only" />
                              <span className="font-serif italic text-xl mb-1">{f.label}</span>
                              <span className="font-sans font-bold text-[8px] tracking-widest uppercase opacity-60">{f.sub}</span>
                            </Label>
                          ))}
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-12 border-t border-structure/5">
                    <Button 
                      variant="ghost"
                      onClick={() => setStep("origin")}
                      className="font-sans font-bold uppercase tracking-widest text-[10px] hover:text-primary"
                    >
                      ← Back
                    </Button>
                    <Button 
                      onClick={() => setStep("paradigm")}
                      className="group bg-structure hover:bg-primary text-background rounded-full px-12 py-8 transition-all flex items-center gap-4"
                    >
                      <span className="font-sans font-bold uppercase tracking-widest text-xs">Define paradigm</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === "paradigm" && (
                <motion.div
                  key="paradigm"
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-12"
                >
                   <div className="space-y-4">
                      <div className="flex items-center gap-3 text-primary/40">
                        <Sparkles className="w-4 h-4" />
                        <h3 className="font-sans font-bold uppercase tracking-widest text-[10px]">Intent</h3>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-serif italic text-structure">Select your project paradigm.</h2>
                    </div>

                  <RadioGroup value={scope} onValueChange={setScope} className="grid gap-6">
                    {ratesData.scopes.map((s) => (
                      <Label
                        key={s.id}
                        className={cn(
                          "relative group flex items-start gap-8 p-8 border rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden",
                          scope === s.id ? "border-primary bg-primary/3" : "border-structure/10 bg-white hover:border-structure/20"
                        )}
                      >
                        <RadioGroupItem value={s.id} className="sr-only" />
                        <div className={cn(
                          "w-12 h-12 flex items-center justify-center rounded-full border transition-colors",
                          scope === s.id ? "border-primary/20 bg-primary/10 text-primary" : "border-structure/10 text-structure/20 grayscale"
                        )}>
                           <span className="font-sans font-black text-sm">{s.id[0].toUpperCase()}</span>
                        </div>
                        <div className="flex-1 space-y-1">
                          <span className="font-serif italic text-2xl text-structure">{s.name}</span>
                          <p className="text-[10px] text-structure/50 uppercase tracking-widest leading-relaxed max-w-sm">
                            {s.description}
                          </p>
                        </div>
                        {scope === s.id && (
                          <motion.div 
                            layoutId="selection-glow"
                            className="absolute inset-0 bg-primary/2 pointer-events-none"
                          />
                        )}
                      </Label>
                    ))}
                  </RadioGroup>

                  <div className="flex justify-between items-center pt-8 border-t border-structure/5">
                    <Button 
                      variant="ghost"
                      onClick={() => setStep("dimension")}
                      className="font-sans font-bold uppercase tracking-widest text-[10px] hover:text-primary"
                    >
                      ← Back
                    </Button>
                    <Button 
                      onClick={() => setStep("materiality")}
                      className="group bg-structure hover:bg-primary text-background rounded-full px-12 py-8 transition-all flex items-center gap-4"
                    >
                      <span className="font-sans font-bold uppercase tracking-widest text-xs">Specify Materiality</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === "materiality" && (
                <motion.div
                  key="materiality"
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-12"
                >
                  <div className="space-y-4">
                      <div className="flex items-center gap-3 text-primary/40">
                        <Sparkles className="w-4 h-4" />
                        <h3 className="font-sans font-bold uppercase tracking-widest text-[10px]">Finish</h3>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-serif italic text-structure">Choose your tactile standard.</h2>
                    </div>

                  <RadioGroup value={quality} onValueChange={setQuality} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {ratesData.qualities.map((q) => (
                      <Label
                        key={q.id}
                        className={cn(
                          "relative flex flex-col p-8 border rounded-2xl cursor-pointer transition-all duration-500",
                          quality === q.id ? "border-primary bg-primary/3 shadow-xl shadow-primary/5" : "border-structure/10 bg-white hover:border-structure/20"
                        )}
                      >
                        <RadioGroupItem value={q.id} className="sr-only" />
                        <span className={cn(
                          "font-sans font-black text-[10px] tracking-widest uppercase mb-4",
                          quality === q.id ? "text-primary" : "text-structure/20"
                        )}>
                          {q.id}
                        </span>
                        <span className="font-serif italic text-2xl text-structure mb-4">{q.name}</span>
                        <p className="text-[10px] text-structure/50 uppercase tracking-widest leading-relaxed">
                          {q.description}
                        </p>
                        {quality === q.id && (
                          <motion.div 
                            layoutId="quality-line"
                            className="absolute bottom-4 right-8 w-8 h-[2px] bg-primary"
                          />
                        )}
                      </Label>
                    ))}
                  </RadioGroup>

                  <div className="flex justify-between items-center pt-8 border-t border-structure/5">
                    <Button 
                      variant="ghost"
                      onClick={() => setStep("paradigm")}
                      className="font-sans font-bold uppercase tracking-widest text-[10px] hover:text-primary"
                    >
                      ← Back
                    </Button>
                    <Button 
                      onClick={calculate}
                      className="group bg-structure hover:bg-primary text-background rounded-full px-12 py-8 transition-all flex items-center gap-4 shadow-2xl shadow-structure/20"
                    >
                      <span className="font-sans font-bold uppercase tracking-widest text-xs">Generate Estimate</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === "results" && (
                <motion.div
                  key="complete"
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col items-center justify-center py-24 text-center space-y-8"
                >
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary relative"
                  >
                    <div className="absolute inset-0 border border-primary/20 rounded-full animate-ping" />
                    <Calculator className="w-10 h-10" />
                  </motion.div>
                  <div className="space-y-2">
                    <h3 className="text-4xl font-serif italic text-structure">Estimate Complete</h3>
                    <p className="text-structure/40 font-sans text-xs uppercase tracking-widest">
                      v1.2 // Architectural Logic
                    </p>
                  </div>
                  <p className="text-structure/60 text-lg font-serif italic max-w-sm mx-auto">
                    Your preliminary construction roadmap has been generated based on current precision data for {city}.
                  </p>
                  <div className="pt-8">
                    <Button 
                      onClick={reset}
                      variant="outline"
                      className="border-structure/10 text-structure rounded-full py-8 px-12 hover:bg-structure/5 hover:border-structure/30 group transition-all"
                    >
                      <RefreshCcw className="w-4 h-4 mr-3 transition-transform group-hover:rotate-180" />
                      <span className="font-sans font-bold uppercase tracking-widest text-xs">New Session</span>
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Results Card / Info */}
        <div className="w-full lg:w-[480px] shrink-0">
          <div className="sticky top-40 h-fit">
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute -inset-10 bg-slate-100/50 rounded-[4rem] -z-10 blur-3xl opacity-50" />
              
              {result ? (
                <ResultsCard 
                  result={result} 
                  area={Number(area)} 
                  city={city}
                  quality={ratesData.qualities.find(q => q.id === quality)?.name || quality}
                  scope={ratesData.scopes.find(s => s.id === scope)?.name || scope}
                />
              ) : (
                <div className="h-full min-h-[500px] border border-structure/5 rounded-3xl flex flex-col items-center justify-center p-16 text-center bg-white shadow-xl relative overflow-hidden group">
                  <motion.div 
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-structure/5 w-20 h-20 rounded-full flex items-center justify-center text-structure/20 mb-8 relative"
                  >
                    <div className="absolute inset-0 bg-structure/5 rounded-full scale-150 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Calculator className="w-10 h-10" />
                  </motion.div>
                  <p className="font-serif italic text-structure/80 text-2xl leading-relaxed mb-4">
                    The vision is <br/>waiting to be <br/><span className="text-primary not-italic font-normal">quantified.</span>
                  </p>
                  <p className="text-[10px] text-structure/40 uppercase tracking-[0.3em] font-sans">
                    Complete your perspective <br/>to view costs
                  </p>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-structure/5 to-transparent shadow-sm" />
                  <div className="absolute bottom-12 right-12 font-sans font-black text-6xl opacity-[0.02] pointer-events-none uppercase">
                    SWA.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
