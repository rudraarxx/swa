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
import { Calculator, MapPin, Ruler, Sparkles, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = "location" | "details" | "quality" | "results";

export function CalculatorMain() {
  const [step, setStep] = useState<Step>("location");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [area, setArea] = useState<string>("1500");
  const [floors, setFloors] = useState<string>("1");
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
    if (!selectedQuality) return;

    const res = calculateConstructionCost(
      selectedCity.multiplier,
      selectedCity.baseRate,
      Number(area),
      selectedQuality.multiplier
    );
    
    setResult(res);
    setStep("results");
  };

  const reset = () => {
    setStep("location");
    setResult(null);
  };

  const containerVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left Side: Form Steps */}
        <div className="flex-1 w-full space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-serif italic text-structure leading-tight">
              Estimate your <br />
              <span className="text-primary not-italic font-normal">dream architecture.</span>
            </h2>
            <p className="text-structure/60 font-sans text-sm tracking-wide">
              Step {step === "results" ? 4 : (step === "location" ? 1 : step === "details" ? 2 : 3)} of 3
            </p>
          </div>

          <div className="bg-canvas border border-structure/10 rounded-2xl p-8 shadow-sm">
            <AnimatePresence mode="wait">
              {step === "location" && (
                <motion.div
                  key="location"
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 text-primary mb-2">
                    <MapPin className="w-5 h-5" />
                    <h3 className="font-sans font-bold uppercase tracking-widest text-xs">Project Location</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Select value={state} onValueChange={(val) => { setState(val); setCity(""); }}>
                        <SelectTrigger className="bg-white border-structure/20 rounded-xl h-12">
                          <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                        <SelectContent>
                          {ratesData.states.map((s) => (
                            <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Select 
                        value={city} 
                        onValueChange={setCity}
                        disabled={!state}
                      >
                        <SelectTrigger className="bg-white border-structure/20 rounded-xl h-12">
                          <SelectValue placeholder={state ? "Select City" : "Select state first"} />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedState?.cities.map((c) => (
                            <SelectItem key={c.name} value={c.name}>{c.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button 
                    disabled={!city}
                    onClick={() => setStep("details")}
                    className="w-full bg-structure hover:bg-primary text-background rounded-full py-6 transition-all"
                  >
                    Next Step
                  </Button>
                </motion.div>
              )}

              {step === "details" && (
                <motion.div
                  key="details"
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 text-primary mb-2">
                    <Ruler className="w-5 h-5" />
                    <h3 className="font-sans font-bold uppercase tracking-widest text-xs">Project Dimensions</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="area">Built-up Area (Sq. Ft.)</Label>
                      <Input 
                        id="area"
                        type="number"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="bg-white border-structure/20 rounded-xl h-12 text-lg font-sans"
                        placeholder="e.g. 1500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="floors">Number of Floors</Label>
                      <Select value={floors} onValueChange={setFloors}>
                        <SelectTrigger className="bg-white border-structure/20 rounded-xl h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Ground Floor Only (G)</SelectItem>
                          <SelectItem value="2">G + 1 Floor</SelectItem>
                          <SelectItem value="3">G + 2 Floors</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <Button 
                      variant="outline"
                      onClick={() => setStep("location")}
                      className="border-structure/20 text-structure rounded-full py-6 px-8 hover:bg-structure/5"
                    >
                      Back
                    </Button>
                    <Button 
                      onClick={() => setStep("quality")}
                      className="flex-1 bg-structure hover:bg-primary text-background rounded-full py-6 transition-all"
                    >
                      Next Step
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === "quality" && (
                <motion.div
                  key="quality"
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 text-primary mb-2">
                    <Sparkles className="w-5 h-5" />
                    <h3 className="font-sans font-bold uppercase tracking-widest text-xs">Finishing Quality</h3>
                  </div>

                  <RadioGroup value={quality} onValueChange={setQuality} className="grid gap-4">
                    {ratesData.qualities.map((q) => (
                      <Label
                        key={q.id}
                        className={cn(
                          "flex flex-col p-4 border rounded-xl cursor-pointer transition-all hover:bg-structure/[0.02]",
                          quality === q.id ? "border-primary bg-primary/[0.03]" : "border-structure/10 bg-white"
                        )}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-serif italic text-lg text-structure">{q.name}</span>
                          <RadioGroupItem value={q.id} className="sr-only" />
                          {quality === q.id && <div className="w-2 h-2 rounded-full bg-primary" />}
                        </div>
                        <span className="text-[10px] text-structure/50 uppercase tracking-widest leading-relaxed">
                          {q.description}
                        </span>
                      </Label>
                    ))}
                  </RadioGroup>

                  <div className="flex gap-4 pt-2">
                    <Button 
                      variant="outline"
                      onClick={() => setStep("details")}
                      className="border-structure/20 text-structure rounded-full py-6 px-8 hover:bg-structure/5"
                    >
                      Back
                    </Button>
                    <Button 
                      onClick={calculate}
                      className="flex-1 bg-structure hover:bg-primary text-background rounded-full py-6 transition-all shadow-lg shadow-structure/10"
                    >
                      Calculate Cost
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === "results" && (
                <motion.div
                  key="reset"
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                    <Calculator className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif italic text-structure mb-2">Calculation Complete</h3>
                  <p className="text-structure/60 text-sm mb-8 max-w-xs mx-auto">
                    Your preliminary construction estimate has been generated based on current market rates.
                  </p>
                  <Button 
                    onClick={reset}
                    variant="outline"
                    className="border-structure/20 text-structure rounded-full py-6 px-10 hover:bg-structure/5"
                  >
                    <RefreshCcw className="w-4 h-4 mr-2" />
                    New Calculation
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Results Card / Info */}
        <div className="w-full md:w-[400px]">
          {result ? (
            <ResultsCard result={result} area={Number(area)} />
          ) : (
            <div className="h-full min-h-[400px] border-2 border-dashed border-structure/10 rounded-2xl flex flex-col items-center justify-center p-12 text-center bg-structure/[0.01]">
              <div className="bg-structure/5 w-16 h-16 rounded-full flex items-center justify-center text-structure/20 mb-4">
                <Calculator className="w-8 h-8" />
              </div>
              <p className="font-serif italic text-structure/30 text-lg">
                Complete the steps to see your estimated costs here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
