import { Metadata } from "next";
import { HomeContent } from "@/components/home/home-content";

export const metadata: Metadata = {
  title: "SWA Architects | Architecture & Interiors in Nagpur & Mumbai",
  description: "Bespoke architectural and interior design by Ar. Shubhangi Wahane. Specializing in minimalism, sustainable spaces, and contemporary elegance across Nagpur and Mumbai.",
  keywords: ["architect in nagpur", "interior design mumbai", "minimalist architecture", "sustainable design", "Ar. Shubhangi Wahane"],
};

export default function Home() {
  return <HomeContent />;
}
