"use client";

import Navigation from "@/components/sections/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50/30 via-white to-orange-50/20">
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
