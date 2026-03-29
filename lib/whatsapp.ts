import { CalculationResult, formatCurrency } from "./calculator-logic";

export interface WhatsAppLeadData {
  area: number;
  city: string;
  quality: string;
  scope: string;
  level: string;
  totalCost: number;
}

export function sendWhatsAppLead(data: WhatsAppLeadData) {
  const phoneNumber = "917738700860"; 
  const architectName = "Shubhangi Wahane";
  
  const message = `Hi ${architectName}, I just used your calculator. My project is a ${data.level} of ${data.area} sq.ft. in ${data.city} (${data.scope}) with ${data.quality} finishes. My estimated budget is ${formatCurrency(data.totalCost)}. Can we connect?`;
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, "_blank");
}
