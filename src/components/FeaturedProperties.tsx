"use client";

import { useState } from "react";
import Image from "next/image";

const property = {
    title: "Modern Coastal Estate",
    tagline: "Your primary home might begin to feel left out",
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
            style={{
                background: "var(--color-obsidian)",
                padding: "5rem clamp(2rem, 6vw, 6rem)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
        >
            <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
                {/* Top row */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "3rem",
                        alignItems: "flex-end",
                        marginBottom: "2.75rem",
                    }}
                    className="max-md:grid-cols-1 max-md:gap-4"
                >
                    <div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                marginBottom: "1rem",
                            }}
                        >
                            <span
                                style={{
                                    height: "1px",
                                    width: "1.25rem",
                                    background: "var(--color-gold-muted)",
                                    display: "block",
                                    flexShrink: 0,
                                }}
                            />
                            <span
                                style={{
                                    fontFamily: "var(--font-cinzel)",
                                    fontSize: "9px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.4em",
                                    color: "var(--color-gold-muted)",
                                }}
                            >
                                Featured Property
                            </span>
                        </div>
                        <h2
                            style={{
                                fontFamily: "var(--font-cinzel)",
                                fontSize: "clamp(1.7rem, 2.8vw, 3rem)",
                                color: "var(--color-parchment)",
                                fontWeight: 300,
                                lineHeight: 1.15,
                                letterSpacing: "-0.02em",
                            }}
                        >
                            {property.tagline}
                        </h2>
                    </div>
                    <p
                        style={{
                            fontSize: "0.875rem",
                            lineHeight: 1.85,
                            color: "rgba(245,240,232,0.38)",
                            maxWidth: "480px",
                        }}
                    >
                        {property.description}
                    </p>
                </div>

                {/* Main 3-column layout (responsive) */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.5fr 1.1fr 0.85fr",
                        gap: "1rem",
                        alignItems: "stretch",
                    }}
                    className="max-lg:grid-cols-1 max-lg:gap-6"
                >
                    {/* Column 1: Large main image */}
                    <div
                        style={{
                            position: "relative",
                            overflow: "hidden",
                            minHeight: "420px",
                        }}
                        className="max-lg:min-h-[300px]"
                    >
                        <Image
                            src={property.images[slots[0]]}
                            alt={property.title}
                            fill
                            style={{ objectFit: "cover", transition: "transform 0.7s ease" }}
                            priority
                            sizes="(max-width: 1024px) 100vw, 45vw"
                        />
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "linear-gradient(to top, rgba(13,13,13,0.5) 0%, transparent 45%)",
                                pointerEvents: "none",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                bottom: "1.25rem",
                                left: "1.25rem",
                                borderTop: "2px solid var(--color-gold-muted)",
                                paddingTop: "0.4rem",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "var(--font-cinzel)",
                                    fontSize: "9px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.28em",
                                    color: "rgba(245,240,232,0.7)",
                                    display: "block",
                                    marginBottom: "0.2rem",
                                }}
                            >
                                {property.location}
                            </span>
                        </div>
                    </div>

                    {/* Column 2: Secondary image + property details */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                            border: "1px solid rgba(255,255,255,0.05)",
                        }}
                    >
                        {/* Secondary image */}
                        <div
                            style={{
                                position: "relative",
                                flex: "0 0 52%",
                                overflow: "hidden",
                                minHeight: "180px",
                            }}
                        >
                            <Image
                                src={property.images[slots[1]]}
                                alt="Property view"
                                fill
                                style={{ objectFit: "cover", transition: "all 0.55s ease" }}
                                sizes="(max-width: 1024px) 100vw, 28vw"
                            />
                        </div>

                        {/* Details panel (separate from image) */}
                        <div
                            style={{
                                flex: 1,
                                padding: "1.75rem 1.5rem",
                                background: "rgba(245,240,232,0.04)",
                                backdropFilter: "blur(2px)",
                                borderTop: "1px solid rgba(255,255,255,0.06)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                            }}
                        >
                            {/* Property title (instead of duplicate price) */}
                            <h3
                                style={{
                                    fontFamily: "var(--font-cinzel)",
                                    fontSize: "1.5rem",
                                    color: "var(--color-parchment)",
                                    fontWeight: 300,
                                    letterSpacing: "-0.01em",
                                    lineHeight: 1.2,
                                }}
                            >
                                {property.title}
                            </h3>

                            {/* Features row - larger */}
                            <div
                                style={{
                                    display: "flex",
                                    gap: "2rem",
                                    borderTop: "1px solid rgba(255,255,255,0.1)",
                                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                                    padding: "1rem 0",
                                }}
                            >
                                {property.features.map((f) => (
                                    <div key={f.label}>
                                        <div
                                            style={{
                                                fontFamily: "var(--font-cinzel)",
                                                fontSize: "1.4rem",
                                                color: "var(--color-gold-muted)",
                                                fontWeight: 400,
                                                lineHeight: 1,
                                            }}
                                        >
                                            {f.value}
                                        </div>
                                        <div
                                            style={{
                                                fontFamily: "var(--font-cinzel)",
                                                fontSize: "0.65rem",
                                                textTransform: "uppercase",
                                                letterSpacing: "0.15em",
                                                color: "rgba(245,240,232,0.4)",
                                                marginTop: "4px",
                                            }}
                                        >
                                            {f.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Price + Button */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: "1rem",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "var(--font-cinzel)",
                                        fontSize: "1.8rem",
                                        color: "var(--color-parchment)",
                                        fontWeight: 300,
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    {property.price}
                                </span>
                                <button
                                    style={{
                                        fontFamily: "var(--font-cinzel)",
                                        fontSize: "0.75rem",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.25em",
                                        color: "var(--color-parchment)",
                                        background: "transparent",
                                        border: "1px solid rgba(201,169,110,0.4)",
                                        padding: "0.75rem 1.5rem",
                                        cursor: "pointer",
                                        transition: "all 0.25s",
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

                    {/* Column 3: Third image + nav + text */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.25rem",
                        }}
                    >
                        <div
                            style={{
                                position: "relative",
                                flex: 1,
                                overflow: "hidden",
                                minHeight: "300px",
                            }}
                        >
                            <Image
                                src={property.images[slots[2]]}
                                alt="Property exterior"
                                fill
                                style={{ objectFit: "cover", transition: "all 0.55s ease" }}
                                sizes="(max-width: 1024px) 100vw, 20vw"
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: "1rem",
                                    right: "1rem",
                                    display: "flex",
                                    gap: "0.4rem",
                                    zIndex: 10,
                                }}
                            >
                                {["←", "→"].map((arrow, i) => (
                                    <button
                                        key={arrow}
                                        onClick={i === 0 ? handlePrev : handleNext}
                                        style={{
                                            width: "34px",
                                            height: "34px",
                                            background: "rgba(13,13,13,0.65)",
                                            backdropFilter: "blur(4px)",
                                            border: "1px solid rgba(201,169,110,0.3)",
                                            cursor: "pointer",
                                            fontSize: "13px",
                                            color: "var(--color-parchment)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "all 0.2s",
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
                        <p
                            style={{
                                fontSize: "0.78rem",
                                lineHeight: 1.85,
                                color: "rgba(245,240,232,0.32)",
                            }}
                        >
                            {property.description}
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div
                    style={{
                        width: "100%",
                        height: "1px",
                        background: "rgba(255,255,255,0.05)",
                        marginTop: "4rem",
                    }}
                />
            </div>
        </section>
    );
}