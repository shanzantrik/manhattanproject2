"use client";

import Hero from "@/components/Hero";
import AboutAuthor from "@/components/AboutAuthor";
import AboutBook from "@/components/AboutBook";
import PurchaseSection from "@/components/PurchaseSection";

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <AboutBook />
      <AboutAuthor />
      <PurchaseSection />
    </div>
  );
}
