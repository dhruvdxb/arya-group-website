import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
    </main>
  );
}