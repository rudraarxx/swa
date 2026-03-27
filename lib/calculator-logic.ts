import ratesData from "@/data/rates.json";

export interface CalculationResult {
  totalCost: number;
  ratePerSqFt: number;
  breakdown: {
    labor: number;
    material: number;
    finishings: number;
  };
}

export function calculateConstructionCost(
  cityMultiplier: number,
  baseRate: number,
  areaSqFt: number,
  qualityMultiplier: number
): CalculationResult {
  const finalRatePerSqFt = baseRate * cityMultiplier * qualityMultiplier;
  const totalCost = finalRatePerSqFt * areaSqFt;

  return {
    totalCost,
    ratePerSqFt: finalRatePerSqFt,
    breakdown: {
      labor: totalCost * ratesData.baseRatios.labor,
      material: totalCost * ratesData.baseRatios.material,
      finishings: totalCost * ratesData.baseRatios.finishings,
    },
  };
}

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};
