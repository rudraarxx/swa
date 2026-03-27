import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { Cursor } from "@/components/ui/cursor";
import { Preloader } from "@/components/ui/preloader";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SWA | Shubhangi Wahane Architects | Architecture & Interiors",
  description: "Bespoke architectural and interior design sanctuary based in Nagpur, India. We create spaces that breathe — where contemporary elegance meets everyday warmth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lora.variable} antialiased`}>
        <Preloader />
        <Cursor />
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
