"use client";

import { useState } from "react";
import Image from "next/image";

const property = {
    title: "Modern Coastal Estate",
    location: "11 Kodex Place, Paraparaumu",
    price: "$2,450,000",
    description:
        "An exquisite architect‑designed residence offering panoramic ocean views, private gardens, and impeccable craftsmanship throughout.",
    features: [
        { label: "Beds", value: "5" },
        { label: "Baths", value: "4" },
        { label: "Garage", value: "3" },
        { label: "Land", value: "1.2 ac" },
    ],
    images: ["/hero2.jpg", "/hero2.jpg", "/hero2.jpg"],
};

const generalDescription =
    "Discover our curated collection of exceptional properties in New Zealand's most sought-after locations. Each home is selected for its architectural merit, location, and lifestyle potential.";

export default function FeaturedProperties() {
    const [slots, setSlots] = useState([0, 1, 2]);

    const handlePrev = () =>
        setSlots(([a, b, c]) => [
            (a - 1 + property.images.length) % property.images.length,
            (b - 1 + property.images.length) % property.images.length,
            (c - 1 + property.images.length) % property.images.length,
        ]);

    const handleNext = () =>
        setSlots(([a, b, c]) => [
            (a + 1) % property.images.length,
            (b + 1) % property.images.length,
            (c + 1) % property.images.length,
        ]);

    return (
        <section
            className="w-full bg-obsidian border-t border-white/[0.06]"
            style={{ padding: "5rem clamp(1.25rem, 6vw, 6rem)" }}
        >
            <div className="max-w-[1600px] mx-auto">

                {/* Top row: heading left | description right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-end mb-10 md:mb-14">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="block h-px w-5 bg-gold-muted shrink-0" />
                            <span
                                className="font-cinzel text-gold-muted uppercase tracking-[0.4em]"
                                style={{ fontSize: "9px" }}
                            >
                                Featured Property
                            </span>
                        </div>
                        <h2
                            className="font-cinzel text-parchment font-light leading-[1.15] tracking-tight"
                            style={{ fontSize: "clamp(1.6rem, 2.8vw, 3rem)" }}
                        >
                            Your Primary home might
                            <br />
                            <span style={{ color: "var(--color-gold-muted)" }}>begin to feel left out</span>
                        </h2>
                    </div>
                    <p
                        className="text-sm leading-loose"
                        style={{ color: "rgba(245,240,232,0.38)" }}
                    >
                        {generalDescription}
                    </p>
                </div>

                {/* Main layout: responsive grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1.1fr_0.85fr] gap-4 items-stretch">

                    {/* COL 1: Large main image */}
                    <div className="relative overflow-hidden min-h-[260px] md:min-h-[360px] lg:min-h-[460px] md:col-span-2 lg:col-span-1">
                        <Image
                            src={property.images[slots[0]]}
                            alt={property.title}
                            fill
                            className="object-cover transition-transform duration-700"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 45vw"
                        />
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{ background: "linear-gradient(to top, rgba(13,13,13,0.5) 0%, transparent 45%)" }}
                        />
                        <div
                            className="absolute bottom-5 left-5 pt-1.5"
                            style={{ borderTop: "2px solid var(--color-gold-muted)" }}
                        >
                            <span
                                className="font-cinzel uppercase text-parchment/70 block"
                                style={{ fontSize: "9px", letterSpacing: "0.28em" }}
                            >
                                {property.location}
                            </span>
                        </div>
                    </div>

                    {/* COL 2: Secondary image + detail card */}
                    <div className="flex flex-col h-full">
                        {/* Image with fixed aspect ratio */}
                        <div className="relative w-full aspect-[16/9] overflow-hidden">
                            <Image
                                src={property.images[slots[1]]}
                                alt="Property view"
                                fill
                                className="object-cover transition-all duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 28vw"
                            />
                        </div>

                        {/* Detail panel — no fixed height, content determines size */}
                        <div className="flex flex-col items-center justify-center flex-1 gap-4 p-4 md:p-6 text-center">
                            <p
                                className="font-cinzel text-parchment font-light"
                                style={{ fontSize: "clamp(1rem, 3vw, 1.15rem)", lineHeight: 1.3 }}
                            >
                                {property.title}
                            </p>

                            <div className="w-full h-px bg-white/[0.06]" />

                            {/* Features row — wrap on small screens */}
                            <div className="flex flex-wrap gap-4 justify-center">
                                {property.features.map((f) => (
                                    <div key={f.label} className="flex flex-col items-center">
                                        <div
                                            className="font-cinzel text-gold-muted"
                                            style={{ fontSize: "clamp(1.2rem, 4vw, 1.5rem)", lineHeight: 0.8, fontWeight: 400 }}
                                        >
                                            {f.value}
                                        </div>
                                        <div
                                            className="font-cinzel uppercase mt-1"
                                            style={{
                                                fontSize: "8px",
                                                letterSpacing: "0.22em",
                                                color: "rgba(245,240,232,0.4)",
                                            }}
                                        >
                                            {f.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="w-full h-px bg-white/[0.06]" />

                            {/* Price and Button Row */}
                            <div className="w-full flex flex-wrap items-center justify-between gap-3">
                                <span
                                    className="font-cinzel text-parchment font-light"
                                    style={{ fontSize: "clamp(1.2rem, 4vw, 1.8rem)", letterSpacing: "-0.01em" }}
                                >
                                    {property.price}
                                </span>

                                <button
                                    className="font-cinzel uppercase text-parchment cursor-pointer transition-all duration-250 px-5 py-2.5 md:px-8 md:py-3"
                                    style={{
                                        fontSize: "8px",
                                        letterSpacing: "0.35em",
                                        background: "transparent",
                                        border: "1px solid rgba(201,169,110,0.4)",
                                        whiteSpace: "nowrap",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "var(--color-gold-muted)";
                                        e.currentTarget.style.color = "var(--color-obsidian)";
                                        e.currentTarget.style.borderColor = "var(--color-gold-muted)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "transparent";
                                        e.currentTarget.style.color = "var(--color-parchment)";
                                        e.currentTarget.style.borderColor = "rgba(201,169,110,0.4)";
                                    }}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* COL 3: Third image + nav arrows + text */}
                    <div className="flex flex-col gap-5">
                        {/* Image with nav arrows */}
                        <div className="relative overflow-hidden flex-1 min-h-[220px] md:min-h-[280px]">
                            <Image
                                src={property.images[slots[2]]}
                                alt="Property exterior"
                                fill
                                className="object-cover transition-all duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                            />
                            <div className="absolute top-3 right-3 flex gap-1.5 z-10">
                                {(["←", "→"] as const).map((arrow, i) => (
                                    <button
                                        key={arrow}
                                        onClick={i === 0 ? handlePrev : handleNext}
                                        className="flex items-center justify-center w-8 h-8 transition-all duration-200 cursor-pointer"
                                        style={{
                                            fontSize: "13px",
                                            background: "rgba(13,13,13,0.65)",
                                            backdropFilter: "blur(4px)",
                                            border: "1px solid rgba(201,169,110,0.3)",
                                            color: "var(--color-parchment)",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "var(--color-gold-muted)";
                                            e.currentTarget.style.color = "var(--color-obsidian)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "rgba(13,13,13,0.65)";
                                            e.currentTarget.style.color = "var(--color-parchment)";
                                        }}
                                        aria-label={i === 0 ? "Previous" : "Next"}
                                    >
                                        {arrow}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Extra description below third image */}
                        <p
                            className="text-xs leading-loose hidden md:block"
                            style={{ color: "rgba(245,240,232,0.32)" }}
                        >
                            {property.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}