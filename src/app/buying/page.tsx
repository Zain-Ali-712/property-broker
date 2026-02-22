import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import PropertyFilter from "@/components/PropertyFilter";
import BuyingHero from "@/components/BuyingHero";
import BuyingInstructions from "@/components/BuyingInstructions";
import BuyingPropertyGrid from "@/components/BuyingPropertyGrid";
import RecentlySold from "@/components/RecentlySold";

export default function BuyingPage() {
    return (
        <main>
            <Navbar />

            {/* ── 1. Hero Section ── */}
            <BuyingHero />

            {/* ── 2. Instructions to Buy ── */}
            <BuyingInstructions />

            {/* ── 3. Property Search Filter ── */}
            {/* Reusing the homepage search filter as requested */}
            <PropertyFilter />

            {/* ── 4. All Properties (New Design) ── */}
            <BuyingPropertyGrid />

            {/* ── 5. Recently Sold Properties ── */}
            <RecentlySold />

            {/* ── 6. Universal CTA & Footer ── */}
            <ContactCTA />
            <Footer />
        </main>
    );
}
