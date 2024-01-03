"use client";

import CompetenceSection from "@/app/_components/competence-section/competence-section";
import FaqSection from "@/app/_components/faq-section/faq-section";
import HeroSection from "@/app/_components/hero-section/hero-section";
import SolutionSection from "@/app/_components/solution-section/solution-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SolutionSection />
      <CompetenceSection />
      <FaqSection />
    </main>
  );
}
