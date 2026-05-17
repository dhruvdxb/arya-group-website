import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroSection from "../sections/HeroSection";
import StatsSection from "../sections/StatsSection";
import ServicesSection from "../sections/ServicesSection";
import WhyChooseSection from "../sections/WhyChooseSection";
import ProjectsSection from "../sections/ProjectsSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import CTASection from "../sections/CTASection";

export default function Home() {
  return (
    <main>
      <Navbar />

      <HeroSection />

      <StatsSection />

      <ServicesSection />

      <WhyChooseSection />

      <ProjectsSection />

      <TestimonialsSection />

      <CTASection />

      <Footer />
    </main>
  );
}