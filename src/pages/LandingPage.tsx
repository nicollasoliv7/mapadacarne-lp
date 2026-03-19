"use client";
import { CountdownBanner } from "@/components/landing/CountdownBanner";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { InfluencerSection } from "@/components/landing/InfluencerSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import { ProgressiveBlur } from "@/components/landing/ProgressiveBlur";

export default function LandingPage() {
  return (
    <div
      style={{
        backgroundColor: "#fdfbf7",
        backgroundImage: "radial-gradient(#e5e0d8 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <CountdownBanner />
      <Navbar />
      <HeroSection />
      <InfluencerSection />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <ProgressiveBlur />
    </div>
  );
}
