import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Manhattan Project 2.0 | Ashish Warudkar",
  description: "Creating Next Generation Intelligence Dominance. A journey into the future of intelligence itself.",
  keywords: ["Manhattan Project 2.0", "AI Governance", "GUDIYA", "Cognitive Systems", "Ashish Warudkar"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
