"use client";
import { useState } from "react";
import { CountdownBanner } from "@/components/landing/CountdownBanner";
import { CaptureSection } from "@/components/landing/CaptureSection";
import { InfluencerSection } from "@/components/landing/InfluencerSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import { ProgressiveBlur } from "@/components/landing/ProgressiveBlur";
import { QuizFunnel } from "@/components/landing/QuizFunnel";
import { ResultPage } from "@/components/landing/ResultPage";
import { BackRedirectHandler } from "@/components/landing/BackRedirectHandler";

export default function LandingPage() {
  const [quizOpen, setQuizOpen] = useState(false);
  const [result, setResult] = useState<{ name: string; profileKey: string } | null>(null);

  function handleComplete(name: string, profileKey: string) {
    setQuizOpen(false);
    setResult({ name, profileKey });
  }

  if (result) {
    return (
      <>
        <BackRedirectHandler />
        <ResultPage
          name={result.name}
          profileKey={result.profileKey}
          onClose={() => setResult(null)}
        />
      </>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#fdfbf7",
        backgroundImage: "radial-gradient(#e5e0d8 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        minHeight: "100dvh",
        overflowX: "hidden",
      }}
    >
      <BackRedirectHandler />
      {quizOpen && (
        <QuizFunnel
          onClose={() => setQuizOpen(false)}
          onComplete={handleComplete}
        />
      )}
      <CountdownBanner />
      <CaptureSection onOpenQuiz={() => setQuizOpen(true)} />
      <TestimonialsSection />
      <InfluencerSection />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection onOpenQuiz={() => setQuizOpen(true)} />
      <Footer />
      <ProgressiveBlur />
    </div>
  );
}
