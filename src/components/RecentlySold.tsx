"use client";

import Image from "next/image";
import { useRef } from "react";

const soldProperties = [
    {
        id: "sold1",
        title: "A Smart Start!",
        location: "Paraparaumu",
        description: "Enjoy comfort and everyday convenience in this well-presented townhouse, thoughtfully updated for easy living. The refreshed kitchen flows seamlessly into a ligh ...",
        details: "2 Beds • 1 Bath • 1 Garage",
        image: "/Sold1.jpg"
    },
    {
        id: "sold2",
        title: "Easy Living at the Beach",
        location: "Paraparaumu Beach",
        description: "Apartment 21 at The Pier is a smart choice for those seeking a secure lock-and-leave lifestyle or considering a quality downsizing option. With an approximate floor ...",
        details: "2 Beds • 2 Baths",
        image: "/Sold2.jpg"
    },
    {
        id: "sold3",
        title: "Solid start in central Paraparaumu - must be sold!",
        location: "Paraparaumu",
        description: "Looking for your first home, a smart investment, or the perfect downsize? You'll love what this central Paraparaumu brick beauty has to offer! This home combines ...",
        details: "3 Beds • 2 Baths • 1 Garage",
        image: "/Sold3.jpg"
    },
    {
        id: "sold4",
        title: "The beach is calling - and so is your first home!",
        location: "Titahi Bay",
        description: "Deadline Sale pulled forward, now 4pm Monday 7th July 2025 (will not be sold prior). Just moments from the beach, 96 Main Road, Titahi Bay offers spacious ...",
        details: "2 Beds • 1 Bath • 1 Garage",
        image: "/Sold4.jpg"
    }
];

export default function RecentlySold() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = direction === "left" ? -400 : 400;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section
            className="w-full relative overflow-hidden"
            style={{
                background: "var(--color-obsidian)",
                // Reduced top padding to bring it closer to the properties grid
                padding: "4rem clamp(1.25rem, 6vw, 6rem) 8rem",
            }}
        >
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <span
                                className="block h-px w-6 shrink-0"
                                style={{ background: "var(--color-gold-muted)" }}
                            />
                            <span
                                className="font-cinzel uppercase"
                                style={{ fontSize: "10px", letterSpacing: "0.3em", color: "var(--color-gold-muted)" }}
                            >
                                Track Record
                            </span>
                        </div>
                        <h2
                            className="font-cinzel font-light leading-tight"
                            style={{
                                fontSize: "clamp(2rem, 3vw, 2.75rem)",
                                color: "var(--color-parchment)",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            Recently <span style={{ color: "var(--color-gold-muted)" }}>Sold</span>
                        </h2>
                    </div>

                    {/* Parallel Description added */}
                    <div className="flex-1 max-w-[420px] pb-1">
                        <p className="text-sm mb-6 md:mb-0" style={{ color: "rgba(245,240,232,0.5)", lineHeight: 1.7 }}>
                            Review our portfolio of successfully marketed homes. We take pride in delivering exceptional results and matching clients with their perfect properties.
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => scroll("left")}
                            className="w-12 h-12 flex items-center justify-center border border-white/20 transition-all duration-300 hover:border-gold-muted group"
                        >
                            <span className="text-white/40 group-hover:text-gold-muted transition-colors text-xl font-light">&larr;</span>
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-12 h-12 flex items-center justify-center border border-white/20 transition-all duration-300 hover:border-gold-muted group"
                        >
                            <span className="text-white/40 group-hover:text-gold-muted transition-colors text-xl font-light">&rarr;</span>
                        </button>
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {soldProperties.map((prop) => (
                        <div
                            key={prop.id}
                            className="snap-start shrink-0 relative group flex flex-col h-full bg-white/[0.015] hover:bg-white/[0.03] border border-white/5 hover:border-gold-muted/40 transition-all duration-500"
                            style={{ width: "clamp(280px, 30vw, 400px)" }}
                        >
                            {/* Image Box */}
                            <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] overflow-hidden filter grayscale group-hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src={prop.image}
                                    alt={prop.title}
                                    fill
                                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-transparent transition-colors duration-700" />

                                {/* Sold Badge overlay (Only one tag on top) */}
                                <div className="absolute top-4 left-4 bg-obsidian/90 backdrop-blur-md px-3 py-1.5 border border-white/10 shadow-lg">
                                    <span className="font-cinzel text-[9px] uppercase tracking-widest text-parchment">
                                        RECENTLY SOLD
                                    </span>
                                </div>
                            </div>

                            {/* Text Info */}
                            <div className="p-6 md:p-8 flex flex-col h-full bg-obsidian">
                                <h3 className="font-cinzel text-lg text-parchment leading-tight line-clamp-2" title={prop.title}>{prop.title}</h3>
                                <p className="text-sm text-white/40 mt-1 mb-4">{prop.location}</p>

                                <p className="text-xs text-white/60 mb-6 leading-relaxed flex-1 italic line-clamp-3">
                                    "{prop.description}"
                                </p>

                                <div className="mt-auto border-t border-white/5 pt-5">
                                    <div className="flex items-center gap-4 text-[10px] font-cinzel tracking-widest text-gold-muted/80 uppercase">
                                        {prop.details}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
