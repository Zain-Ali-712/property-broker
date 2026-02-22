import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PropertyFilter from "@/components/PropertyFilter";
import FeaturedProperties from "@/components/FeaturedProperties";
import PropertyGrid from "@/components/PropertyGrid";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";




export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PropertyFilter />
      <FeaturedProperties />
      <PropertyGrid />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
