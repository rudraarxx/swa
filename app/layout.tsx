import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { MainLayout } from "@/components/layout/MainLayout";
import { Cursor } from "@/components/ui/cursor";
import { Preloader } from "@/components/ui/preloader";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shubhangiwahane.com"), // Base URL for OG images
  title: {
    default: "SWA Architects | Ar. Shubhangi Wahane | Nagpur & Mumbai",
    template: "%s | SWA Architects",
  },
  description: "Bespoke architectural and interior design sanctuary. Ar. Shubhangi Wahane creates spaces that breathe — where contemporary elegance meets everyday warmth across Nagpur & Mumbai.",
  keywords: ["Architect", "Interior Design", "Nagpur", "Mumbai", "Minimalism", "Sustainable Architecture", "Ar. Shubhangi Wahane"],
  authors: [{ name: "Ar. Shubhangi Wahane" }],
  creator: "SWA Architects",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shubhangiwahane.com",
    title: "SWA Architects | Bespoke Architectural & Interior Design",
    description: "Creating spaces that breathe. Explore the architectural narratives of Ar. Shubhangi Wahane.",
    siteName: "SWA Architects",
    images: [
      {
        url: "/og-image.jpg", // Ensure this exists or use a representative image
        width: 1200,
        height: 630,
        alt: "SWA Architects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SWA Architects | Ar. Shubhangi Wahane",
    description: "Bespoke architectural and interior design based in Nagpur & Mumbai.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SWA Architects",
  "image": "https://shubhangiwahane.com/logo.png",
  "@id": "https://shubhangiwahane.com",
  "url": "https://shubhangiwahane.com",
  "telephone": "+917738700860",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nagpur Office",
    "addressLocality": "Nagpur",
    "addressRegion": "Maharashtra",
    "postalCode": "440001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 21.1458,
    "longitude": 79.0882
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "10:00",
    "closes": "19:00"
  },
  "sameAs": [
    "https://www.instagram.com/shubbhangiwahane/",
    "https://www.linkedin.com/in/shubhangi-wahane/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        <Cursor />
        <SmoothScroll>
          <MainLayout>
            {children}
          </MainLayout>
        </SmoothScroll>
      </body>
    </html>
  );
}
