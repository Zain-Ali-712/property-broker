import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PropertyFilter from "@/components/PropertyFilter";
import FeaturedProperties from "@/components/FeaturedProperties";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PropertyFilter />
      <FeaturedProperties />
    </main>
  );
}
