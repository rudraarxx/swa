import projects from "@/data/projects.json";

export interface ChatResponse {
  content: string;
  action?: string;
  metadata?: any;
}

export async function processChatMessage(message: string): Promise<ChatResponse> {
  const input = message.toLowerCase();
  
  // Knowledge base logic
  if (input.includes("project") || input.includes("work")) {
    const featuredProjects = projects.filter(p => p.featured).slice(0, 2);
    const titles = featuredProjects.map(p => p.title).join(" and ");
    return {
      content: `We have completed many great projects like ${titles}. Would you like to see our Residential or Office designs?`,
      action: "suggest_categories"
    };
  }

  if (input.includes("contact") || input.includes("hire") || input.includes("meeting")) {
    return {
      content: "I can help you book a meeting with Ar. Shubhangi Wahane. Would you like to connect on WhatsApp or share your email?",
      action: "contact_inquiry"
    };
  }

  if (input.includes("location") || input.includes("office") || input.includes("where")) {
    return {
      content: "SWA Architects operates from Nagpur and Mumbai. We are available for projects across India. Our main office is in Nagpur.",
      action: "show_location"
    };
  }

  if (input.includes("price") || input.includes("cost") || input.includes("budget")) {
    return {
      content: "Project costs depend on the size and type of work. I can help you with our cost calculator or give you a custom quote.",
      action: "show_calculator"
    };
  }

  // Default response
  return {
    content: "That sounds good! We specialize in creating beautiful and comfortable spaces. Can you tell me more about what you are looking for?",
  };
}
