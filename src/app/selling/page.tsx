import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import SellingHero from "@/components/SellingHero";
import SellingInstructions from "@/components/SellingInstructions";
import SellingFAQ from "@/components/SellingFAQ";
import WhySellWithUs from "@/components/WhySellWithUs";

export default function SellingPage() {
    return (
        <main>
            <Navbar />

            {/* ── 1. Hero Section ── */}
            <SellingHero />

            {/* ── 2. The 6-Step Selling Process ── */}
            <SellingInstructions />

            {/* ── 3. Why Choose Us ── */}
            <WhySellWithUs />

            {/* ── 4. Selling FAQs ── */}
            <SellingFAQ />

            {/* ── 5. Universal CTA & Footer ── */}
            <ContactCTA />
            <Footer />
        </main>
    );
}
