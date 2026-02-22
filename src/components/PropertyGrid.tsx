"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Dummy property data – replace with real content later
const properties = [
    {
        id: 1,
        name: "The Warna Cottage",
        location: "Warna, East Java",
        rating: 5,
        beds: 3,
        baths: 3,
        garages: 2,
        price: "$140,000",
        image: "/hero2.jpg",
    },
    {
        id: 2,
        name: "DE Santa Mansion",
        location: "Kahitna, California",
        rating: 4,
        beds: 4,
        baths: 5,
        garages: 3,
        price: "$120,000",
        image: "/hero1.jpg",
    },
    {
        id: 3,
        name: "ELORA®",
        location: "Elora, Ontario",
        rating: 5,
        beds: 3,
        baths: 2,
        garages: 1,
        price: "$95,000",
        image: "/hero2.jpg",
    },
    {
        id: 4,
        name: "Villa Azure",
        location: "Nice, France",
        rating: 5,
        beds: 5,
        baths: 4,
        garages: 2,
        price: "$320,000",
        image: "/hero2.jpg",
    },
    {
        id: 5,
        name: "The Glasshouse",
        location: "Sydney, Australia",
        rating: 4,
        beds: 4,
        baths: 3,
        garages: 2,
        price: "$210,000",
        image: "/hero1.jpg",
    },
    {
        id: 6,
        name: "Pinecrest Lodge",
        location: "Aspen, Colorado",
        rating: 5,
        beds: 6,
        baths: 5,
        garages: 3,
        price: "$550,000",
        image: "/Kash.jpg",
    },
];

const CINZEL = "var(--font-cinzel)";
const GOLD = "var(--color-gold-muted)";
const PARCHMENT = "var(--color-parchment)";
const OBSIDIAN = "var(--color-obsidian)";

export default function PropertiesGrid() {
    const [visibleRows, setVisibleRows] = useState(1);
    const itemsPerRow = 3;
    const visibleCount = visibleRows * itemsPerRow;
    const hasMore = visibleCount < properties.length;

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
                    {properties.slice(0, visibleCount).map((p) => (
                        <div
                            key={p.id}
                            style={{
                                border: "1px solid rgba(255,255,255,0.06)",
                                overflow: "hidden",
                                transition: "box-shadow 0.3s, border-color 0.3s",
                                background: "rgba(255,255,255,0.02)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = "0 10px 25px -10px rgba(0,0,0,0.5)";
                                e.currentTarget.style.borderColor = "rgba(201,169,110,0.3)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "none";
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                            }}
                        >
                            <div style={{ position: "relative", aspectRatio: "4/3", width: "100%" }}>
                                <Image src={p.image} alt={p.name} fill style={{ objectFit: "cover" }} />
                            </div>
                            <div style={{ padding: "1.5rem" }}>
                                {/* Rating stars */}
                                <div style={{ display: "flex", gap: "0.2rem", marginBottom: "0.5rem", color: GOLD }}>
                                    {"★".repeat(p.rating)}
                                </div>
                                <h3
                                    style={{
                                        fontFamily: CINZEL,
                                        fontSize: "1.2rem",
                                        color: PARCHMENT,
                                        fontWeight: 400,
                                        marginBottom: "0.25rem",
                                    }}
                                >
                                    {p.name}
                                </h3>
                                <p style={{ fontSize: "0.7rem", color: "rgba(245,240,232,0.5)", marginBottom: "0.75rem" }}>
                                    {p.location}
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

                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <span style={{ fontFamily: CINZEL, fontSize: "1.4rem", color: GOLD, fontWeight: 300 }}>
                                        {p.price}
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
        </section>
    );
}