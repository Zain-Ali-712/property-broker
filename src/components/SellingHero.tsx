"use client";

import Image from "next/image";

export default function SellingHero() {
    return (
        <section
            className="w-full relative flex items-center justify-center overflow-hidden"
            style={{
                height: "65vh",
                minHeight: "550px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/Otaki-main.jpg" // Using real property image
                    alt="Selling Property Hero"
                    fill
                    className="object-cover"
                    style={{ filter: "brightness(0.7) saturate(0.9)" }}
                    priority
                />
            </div>

            {/* Gradient Overlays */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "linear-gradient(to bottom, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.95) 100%)",
                }}
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at center, transparent 0%, rgba(13,13,13,0.5) 100%)",
                }}
            />

            {/* Subtle Texture Overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 99h100v1H0zM99 0h1v100h-1z' fill='rgba(201%2C169%2C110%2C0.1)'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative z-10 flex flex-col items-center text-center px-4 mt-16 max-w-4xl">

                {/* Minimalist Tagline */}
                <div className="flex items-center gap-4 mb-6">
                    <span
                        className="block h-px w-12 shrink-0"
                        style={{ background: "linear-gradient(to right, transparent, var(--color-gold-muted))" }}
                    />
                    <span
                        className="font-cinzel uppercase"
                        style={{ fontSize: "11px", letterSpacing: "0.4em", color: "var(--color-gold-muted)" }}
                    >
                        Seller's Guide
                    </span>
                    <span
                        className="block h-px w-12 shrink-0"
                        style={{ background: "linear-gradient(to left, transparent, var(--color-gold-muted))" }}
                    />
                </div>

                {/* Main Heading */}
                <h1
                    className="font-cinzel font-light mb-6"
                    style={{
                        fontSize: "clamp(3rem, 6vw, 5.5rem)",
                        color: "var(--color-parchment)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                        textShadow: "0 10px 30px rgba(0,0,0,0.8)",
                    }}
                >
                    Maximize <span style={{ color: "var(--color-gold-muted)" }}>Your Sale</span>
                </h1>

                {/* Body Text */}
                <p
                    className="text-sm sm:text-base leading-relaxed"
                    style={{
                        color: "rgba(245,240,232,0.6)",
                        maxWidth: "600px",
                        fontWeight: 300,
                        textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                    }}
                >
                    Experience a strategic, results-driven approach to selling your home. From accurate valuations to flawless marketing and expert negotiation, we ensure a premium outcome.
                </p>

                {/* Decorative Scroll indicator */}
                <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
                    <span className="font-cinzel text-[9px] uppercase tracking-widest text-gold-muted">Scroll</span>
                    <div className="w-[1px] h-12" style={{ background: "linear-gradient(to bottom, var(--color-gold-muted), transparent)" }} />
                </div>
            </div>
        </section>
    );
}
