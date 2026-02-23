"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { propertiesData, Property } from "@/data/properties";
import PropertyModal from "./PropertyModal";

const CINZEL = "var(--font-cinzel)";
const GOLD = "var(--color-gold-muted)";
const PARCHMENT = "var(--color-parchment)";
const OBSIDIAN = "var(--color-obsidian)";

export default function PropertiesGrid() {
    const [visibleRows, setVisibleRows] = useState(1);
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

    const itemsPerRow = 3;
    const visibleCount = visibleRows * itemsPerRow;
    const hasMore = visibleCount < propertiesData.length;

    const showMore = () => {
        if (hasMore) setVisibleRows((prev) => prev + 1);
    };

    return (
        <section
            className="w-full"
            style={{
                background: OBSIDIAN,
                padding: "5rem clamp(1.25rem, 6vw, 6rem)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
        >
            <div className="max-w-[1600px] mx-auto">
                {/* Header with description */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-end mb-10 md:mb-14">
                    {/* Left: Eyebrow + Heading */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                            <span style={{ height: "1px", width: "1.5rem", background: GOLD, display: "block", flexShrink: 0 }} />
                            <span
                                style={{
                                    fontFamily: CINZEL,
                                    fontSize: "0.6rem",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.4em",
                                    color: GOLD,
                                }}
                            >
                                Properties
                            </span>
                        </div>
                        <h2
                            style={{
                                fontFamily: CINZEL,
                                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                                color: PARCHMENT,
                                fontWeight: 300,
                                lineHeight: 1.2,
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Curated for the
                            <br />
                            <span style={{ color: "var(--color-gold-muted)" }}>Discerning buyers</span>
                        </h2>
                    </div>

                    {/* Right: Description + Button */}
                    <div className="flex flex-col items-start md:items-end gap-4">
                        <p
                            style={{
                                fontSize: "0.875rem",
                                lineHeight: 1.7,
                                color: "rgba(245,240,232,0.5)",
                                maxWidth: "400px",
                                textAlign: "left",
                            }}
                            className="md:text-right"
                        >
                            Handpicked residences offering timeless elegance and modern comfort in the world's most desirable locations.
                        </p>
                        <Link href="/buying" passHref>
                            <button
                                style={{
                                    fontFamily: CINZEL,
                                    fontSize: "0.7rem",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.25em",
                                    color: PARCHMENT,
                                    background: "transparent",
                                    border: "1px solid rgba(201,169,110,0.5)",
                                    padding: "0.75rem 2rem",
                                    cursor: "pointer",
                                    transition: "all 0.3s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = GOLD;
                                    e.currentTarget.style.color = OBSIDIAN;
                                    e.currentTarget.style.borderColor = GOLD;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "transparent";
                                    e.currentTarget.style.color = PARCHMENT;
                                    e.currentTarget.style.borderColor = "rgba(201,169,110,0.5)";
                                }}
                            >
                                See All Properties
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {propertiesData.slice(0, visibleCount).map((p) => (
                        <div
                            key={p.id}
                            className="flex flex-col cursor-pointer group"
                            style={{
                                border: "1px solid rgba(255,255,255,0.06)",
                                overflow: "hidden",
                                transition: "box-shadow 0.3s, border-color 0.3s",
                                background: "rgba(255,255,255,0.02)",
                            }}
                            onClick={() => setSelectedProperty(p)}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = "0 10px 25px -10px rgba(0,0,0,0.5)";
                                e.currentTarget.style.borderColor = "rgba(201,169,110,0.3)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "none";
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                            }}
                        >
                            <div style={{ position: "relative", aspectRatio: "4/3", width: "100%", overflow: "hidden" }}>
                                <Image
                                    src={p.images[0]}
                                    alt={p.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                            <div className="flex flex-col flex-1" style={{ padding: "1.5rem" }}>
                                {/* Rating stars */}
                                <div style={{ display: "flex", gap: "0.2rem", marginBottom: "0.5rem", color: GOLD }}>
                                    {"★".repeat(5)}
                                </div>
                                <h3
                                    className="line-clamp-1"
                                    style={{
                                        fontFamily: CINZEL,
                                        fontSize: "1.2rem",
                                        color: PARCHMENT,
                                        fontWeight: 400,
                                        marginBottom: "0.25rem",
                                    }}
                                    title={p.title}
                                >
                                    {p.title}
                                </h3>
                                <p className="line-clamp-1" style={{ fontSize: "0.7rem", color: "rgba(245,240,232,0.5)", marginBottom: "0.75rem" }}>
                                    {p.address}
                                </p>

                                {/* Tags with gold dots */}
                                <div style={{ display: "flex", gap: "1rem", fontSize: "0.7rem", color: "rgba(245,240,232,0.6)", marginBottom: "1rem", alignItems: "center" }}>
                                    <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                                        <span style={{ color: GOLD, fontSize: "0.8rem" }}>•</span> {p.beds} beds
                                    </span>
                                    <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                                        <span style={{ color: GOLD, fontSize: "0.8rem" }}>•</span> {p.baths} baths
                                    </span>
                                    <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                                        <span style={{ color: GOLD, fontSize: "0.8rem" }}>•</span> {p.garages} garages
                                    </span>
                                </div>

                                <div className="mt-auto pt-4" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                                    <span style={{ fontFamily: CINZEL, fontSize: "1.4rem", color: GOLD, fontWeight: 300 }}>
                                        ID: {p.propertyId}
                                    </span>
                                    <button
                                        style={{
                                            fontFamily: CINZEL,
                                            fontSize: "0.6rem",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.2em",
                                            color: PARCHMENT,
                                            background: "transparent",
                                            border: "1px solid rgba(201,169,110,0.4)",
                                            padding: "0.5rem 1rem",
                                            cursor: "pointer",
                                            transition: "all 0.2s",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = GOLD;
                                            e.currentTarget.style.color = OBSIDIAN;
                                            e.currentTarget.style.borderColor = GOLD;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "transparent";
                                            e.currentTarget.style.color = PARCHMENT;
                                            e.currentTarget.style.borderColor = "rgba(201,169,110,0.4)";
                                        }}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show more */}
                {hasMore && (
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
                        <button
                            onClick={showMore}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                fontFamily: CINZEL,
                                fontSize: "0.7rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.15em",
                                color: "rgba(245,240,232,0.3)",
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.3)")}
                        >
                            <span>Show more</span>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            <PropertyModal
                property={selectedProperty}
                onClose={() => setSelectedProperty(null)}
            />
        </section>
    );
}