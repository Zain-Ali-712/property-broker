import Navbar from "@/components/Navbar";
import Image from "next/image";
import ContactFormSection from "@/components/ContactFormSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <main>
            <Navbar />

            {/* ── Rich Image Hero for Contact Page ── */}
            <section
                className="w-full relative flex items-center justify-center overflow-hidden"
                style={{
                    height: "50vh",
                    minHeight: "450px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
            >
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/hero2.jpg"
                        alt="Contact Hero"
                        fill
                        className="object-cover"
                        style={{ filter: "brightness(0.6) saturate(0.8)" }}
                        priority
                    />
                </div>

                {/* Overlays for depth */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "linear-gradient(to bottom, rgba(13,13,13,0.3) 0%, var(--color-obsidian) 100%)",
                    }}
                />
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "radial-gradient(circle at center, transparent 0%, rgba(13,13,13,0.6) 100%)",
                    }}
                />

                {/* Subtle Grid Pattern Overlay */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-30"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 39h40v1H0zM39 0h1v40h-1z' fill='rgba(201%2C169%2C110%2C0.1)'/%3E%3C/svg%3E")`,
                    }}
                />

                <div className="relative z-10 flex flex-col items-center text-center px-4 mt-10">
                    <div className="flex items-center gap-4 mb-4">
                        <span
                            className="block h-px w-10 shrink-0"
                            style={{ background: "linear-gradient(to right, transparent, var(--color-gold-muted))" }}
                        />
                        <span
                            className="font-cinzel uppercase"
                            style={{ fontSize: "11px", letterSpacing: "0.4em", color: "var(--color-gold-muted)" }}
                        >
                            Get in Touch
                        </span>
                        <span
                            className="block h-px w-10 shrink-0"
                            style={{ background: "linear-gradient(to left, transparent, var(--color-gold-muted))" }}
                        />
                    </div>

                    <h1
                        className="font-cinzel font-light"
                        style={{
                            fontSize: "clamp(3rem, 6vw, 5rem)",
                            color: "var(--color-parchment)",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.1,
                            textShadow: "0 10px 30px rgba(0,0,0,0.8)",
                        }}
                    >
                        Contact <span style={{ color: "var(--color-gold-muted)" }}>Me</span>
                    </h1>
                </div>
            </section>

            <ContactFormSection />

            <ContactCTA />

            <Footer />
        </main>
    );
}
