import type { Metadata } from "next";
import { Geist, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Smit's Painting Company | Quality Craftsmanship, Every Stroke",
  description:
    "Professional painting services — interior, exterior, commercial, roof painting, waterproofing and plastering. Get a free quote today.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${dancingScript.variable}`}>
      <body className="bg-[#F5EDD9] text-[#2C1A0E] min-h-screen flex flex-col font-[family-name:var(--font-geist)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
