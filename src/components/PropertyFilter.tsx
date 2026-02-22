"use client";

import { useState } from "react";
import Image from "next/image";

const propertyTypes = ["Residential", "Lifestyle", "Luxury"];

// Reusable select style — inline so the CSS reset never strips it
const selectStyle: React.CSSProperties = {
    fontFamily: "var(--font-cinzel)",
    color: "var(--color-parchment)",
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "0.75rem 0.875rem",
    fontSize: "0.875rem",
    width: "100%",
    cursor: "pointer",
    appearance: "auto" as const,
};

const optStyle: React.CSSProperties = {
    background: "#0d0d0d",
    color: "#f5f0e8",
};

const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-cinzel)",
    color: "rgba(245,240,232,0.35)",
    fontSize: "9px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.25em",
    display: "block",
    marginBottom: "0.5rem",
};

export default function PropertyFilter() {
    const [activeTab, setActiveTab] = useState("Residential");

    const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
        e.target.style.borderColor = "var(--color-gold-muted)";
    };
    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
        e.target.style.borderColor = "rgba(255,255,255,0.1)";
    };

    return (
        <section
            className="w-full relative z-20"
            style={{
                background: "var(--color-obsidian)",
                padding: "3rem clamp(2rem, 6vw, 6rem) 3.5rem",
            }}
        >
            <div className="max-w-[1600px] mx-auto w-full">

                {/* ═══════════════════════════════════════════════════
                    STATS ROW
                ═══════════════════════════════════════════════════ */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        paddingBottom: "2rem",
                        marginBottom: "2.5rem",
                        gap: 0,
                    }}
                >
                    {[
                        { value: "200+", label: "Homes to Buy" },
                        { value: "150+", label: "Homes for Rent" },
                        { value: "80+", label: "Luxury Listings" },
                        { value: "45", label: "New This Week" },
                    ].map((stat, i) => (
                        <div
                            key={stat.label}
                            style={{
                                paddingLeft: i === 0 ? "0" : "clamp(1.5rem, 3vw, 3rem)",
                                paddingRight: i < 3 ? "clamp(1.5rem, 3vw, 3rem)" : "0",
                                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: "var(--font-cinzel)",
                                    fontSize: "clamp(2rem, 2.8vw, 3.2rem)",
                                    color: "var(--color-gold-muted)",
                                    fontWeight: 300,
                                    letterSpacing: "-0.02em",
                                    lineHeight: 1,
                                    marginBottom: "0.5rem",
                                }}
                            >
                                {stat.value}
                            </p>
                            <p
                                style={{
                                    fontFamily: "var(--font-cinzel)",
                                    fontSize: "10px",
                                    textTransform: "uppercase" as const,
                                    letterSpacing: "0.24em",
                                    color: "rgba(245,240,232,0.3)",
                                }}
                            >
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ═══════════════════════════════════════════════════
                    HEADING + SMALL DECORATIVE IMAGE
                ═══════════════════════════════════════════════════ */}
                <div style={{ marginBottom: "1.5rem", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                    <div style={{ flex: 1 }}>
                        {/* Eyebrow */}
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                            <span style={{ height: "1px", width: "1.25rem", background: "var(--color-gold-muted)", display: "block", flexShrink: 0 }} />
                            <span
                                style={{
                                    fontFamily: "var(--font-cinzel)",
                                    fontSize: "9px",
                                    textTransform: "uppercase" as const,
                                    letterSpacing: "0.4em",
                                    color: "var(--color-gold-muted)",
                                }}
                            >
                                Find Your Property
                            </span>
                        </div>
                        <h2
                            style={{
                                fontFamily: "var(--font-cinzel)",
                                fontSize: "clamp(1.8rem, 3vw, 3rem)",
                                color: "var(--color-parchment)",
                                fontWeight: 300,
                                letterSpacing: "-0.01em",
                                lineHeight: 1.1,
                            }}
                        >
                            We help you find the home
                            <br />
                            <span style={{ color: "var(--color-gold-muted)" }}>that will be yours</span>
                        </h2>
                    </div>

                    {/* Stacked image deck */}
                    {/* MOBILE: 3-card stack */}
                    <div
                        className="sm:hidden"
                        style={{
                            position: "relative",
                            flexShrink: 0,
                            marginLeft: "1.5rem",
                            width: "calc(80px + 44px)",
                            height: "112px",
                        }}
                    >
                        {[
                            { offset: 44, rotate: "6deg", zIndex: 1, brightness: 0.4 },
                            { offset: 22, rotate: "3deg", zIndex: 2, brightness: 0.7 },
                            { offset: 0, rotate: "0deg", zIndex: 3, brightness: 1 },
                        ].map((card, i) => (
                            <div
                                key={i}
                                style={{
                                    position: "absolute",
                                    left: `${card.offset}px`,
                                    top: 0,
                                    width: "80px",
                                    height: "100%",
                                    zIndex: card.zIndex,
                                    border: "1px solid rgba(201,169,110,0.25)",
                                    overflow: "hidden",
                                    transform: `rotate(${card.rotate})`,
                                    transformOrigin: "bottom center",
                                    boxShadow: "4px 6px 18px rgba(0,0,0,0.45)",
                                }}
                            >
                                <Image
                                    src="/hero2.jpg"
                                    alt={`Property ${i + 1}`}
                                    fill
                                    style={{ objectFit: "cover", filter: `brightness(${card.brightness})` }}
                                />
                            </div>
                        ))}
                        {/* Badge — bottom center */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-1.1rem",
                                left: "50%",
                                transform: "translateX(-50%)",
                                zIndex: 20,
                                background: "var(--color-gold-muted)",
                                padding: "0.25rem 0.5rem",
                                display: "flex",
                                flexDirection: "column" as const,
                                alignItems: "center",
                                lineHeight: 1.1,
                                boxShadow: "0 4px 14px rgba(0,0,0,0.4)",
                                whiteSpace: "nowrap" as const,
                            }}
                        >
                            <span style={{ fontFamily: "var(--font-cinzel)", fontSize: "12px", fontWeight: 600, color: "var(--color-obsidian)" }}>43+</span>
                            <span style={{ fontFamily: "var(--font-cinzel)", fontSize: "7px", textTransform: "uppercase" as const, letterSpacing: "0.2em", color: "rgba(13,13,13,0.7)", marginTop: "2px" }}>For Sale</span>
                        </div>
                    </div>

                    {/* DESKTOP: 6-card stack */}
                    <div
                        className="hidden sm:block"
                        style={{
                            position: "relative",
                            flexShrink: 0,
                            marginLeft: "2.5rem",
                            width: "calc(clamp(76px, 9.5vw, 104px) + 110px)",
                            height: "clamp(110px, 15vw, 148px)",
                        }}
                    >
                        {[
                            { offset: 100, rotate: "9deg", zIndex: 1, brightness: 0.3 },
                            { offset: 88, rotate: "6.5deg", zIndex: 2, brightness: 0.45 },
                            { offset: 66, rotate: "4.5deg", zIndex: 3, brightness: 0.57 },
                            { offset: 44, rotate: "3deg", zIndex: 4, brightness: 0.68 },
                            { offset: 22, rotate: "1.5deg", zIndex: 5, brightness: 0.83 },
                            { offset: 0, rotate: "0deg", zIndex: 6, brightness: 1 },
                        ].map((card, i) => (
                            <div
                                key={i}
                                style={{
                                    position: "absolute",
                                    left: `${card.offset}px`,
                                    top: 0,
                                    width: "clamp(76px, 9.5vw, 104px)",
                                    height: "100%",
                                    zIndex: card.zIndex,
                                    border: "1px solid rgba(201,169,110,0.25)",
                                    overflow: "hidden",
                                    transform: `rotate(${card.rotate})`,
                                    transformOrigin: "bottom center",
                                    transition: "transform 0.4s ease",
                                    boxShadow: "4px 6px 18px rgba(0,0,0,0.45)",
                                }}
                            >
                                <Image
                                    src="/hero2.jpg"
                                    alt={`Property ${i + 1}`}
                                    fill
                                    style={{ objectFit: "cover", filter: `brightness(${card.brightness})` }}
                                />
                            </div>
                        ))}

                        {/* Floating badge — bottom center */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: "-1rem",
                                left: "0%",
                                transform: "translateX(-50%)",
                                zIndex: 20,
                                background: "var(--color-gold-muted)",
                                padding: "0.3rem 0.6rem",
                                display: "flex",
                                flexDirection: "column" as const,
                                alignItems: "center",
                                lineHeight: 1.1,
                                boxShadow: "0 4px 14px rgba(0,0,0,0.4)",
                                whiteSpace: "nowrap" as const,
                            }}
                        >
                            <span style={{ fontFamily: "var(--font-cinzel)", fontSize: "13px", fontWeight: 600, color: "var(--color-obsidian)", letterSpacing: "0.02em" }}>43+</span>
                            <span style={{ fontFamily: "var(--font-cinzel)", fontSize: "7px", textTransform: "uppercase" as const, letterSpacing: "0.2em", color: "rgba(13,13,13,0.7)", marginTop: "2px" }}>For Sale</span>
                        </div>
                    </div>
                </div>

                {/* ═══════════════════════════════════════════════════
                    PROPERTY TYPE TABS
                ═══════════════════════════════════════════════════ */}
                <div
                    style={{
                        display: "flex",
                        gap: "2.5rem",
                        marginBottom: "1.25rem",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        paddingBottom: "0",
                    }}
                >
                    {propertyTypes.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                fontFamily: "var(--font-cinzel)",
                                fontSize: "0.75rem",
                                textTransform: "uppercase" as const,
                                letterSpacing: "0.2em",
                                color: activeTab === tab ? "var(--color-parchment)" : "rgba(245,240,232,0.3)",
                                background: "none",
                                border: "none",
                                position: "relative" as const,
                                paddingBottom: "1rem",
                                cursor: "pointer",
                                transition: "color 0.3s",
                            }}
                        >
                            {tab}
                            {activeTab === tab && (
                                <span
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: "1.5px",
                                        background: "var(--color-gold-muted)",
                                    }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* ═══════════════════════════════════════════════════
                    FILTER ROW — 7 fields + Search button, all inline
                ═══════════════════════════════════════════════════ */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap" as const,
                        alignItems: "flex-end",
                        gap: "1rem",
                        marginBottom: "3rem",
                    }}
                >
                    {/* Category */}
                    <div style={{ display: "flex", flexDirection: "column" as const, flex: "1 1 140px" }}>
                        <label style={labelStyle}>Category</label>
                        <select style={selectStyle} onFocus={handleFocus} onBlur={handleBlur}>
                            <option style={optStyle}>All Types</option>
                            <option style={optStyle}>House</option>
                            <option style={optStyle}>Apartment</option>
                            <option style={optStyle}>Townhouse</option>
                            <option style={optStyle}>Estate</option>
                        </select>
                    </div>

                    {/* Region */}
                    <div style={{ display: "flex", flexDirection: "column" as const, flex: "1 1 140px" }}>
                        <label style={labelStyle}>Region</label>
                        <select style={selectStyle} onFocus={handleFocus} onBlur={handleBlur}>
                            <option style={optStyle}>Any Region</option>
                            <option style={optStyle}>Horowhenua</option>
                            <option style={optStyle}>Wellington</option>
                            <option style={optStyle}>Kapiti</option>
                        </select>
                    </div>

                    {/* City/Town */}
                    <div style={{ display: "flex", flexDirection: "column" as const, flex: "1 1 140px" }}>
                        <label style={labelStyle}>City / Town</label>
                        <select style={selectStyle} onFocus={handleFocus} onBlur={handleBlur}>
                            <option style={optStyle}>Any City</option>
                            <option style={optStyle}>Levin</option>
                            <option style={optStyle}>Foxton</option>
                            <option style={optStyle}>Paraparaumu</option>
                            <option style={optStyle}>Ōtaki</option>
                        </select>
                    </div>

                    {/* Price Range */}
                    <div style={{ display: "flex", flexDirection: "column" as const, flex: "1 1 140px" }}>
                        <label style={labelStyle}>Price Range</label>
                        <select style={selectStyle} onFocus={handleFocus} onBlur={handleBlur}>
                            <option style={optStyle}>Any Price</option>
                            <option style={optStyle}>Under $500K</option>
                            <option style={optStyle}>$500K – $1M</option>
                            <option style={optStyle}>$1M – $2M</option>
                            <option style={optStyle}>$2M+</option>
                        </select>
                    </div>

                    {/* Bedrooms */}
                    <div style={{ display: "flex", flexDirection: "column" as const, flex: "0 1 96px" }}>
                        <label style={labelStyle}>Beds</label>
                        <select style={selectStyle} onFocus={handleFocus} onBlur={handleBlur}>
                            <option style={optStyle}>Any</option>
                            <option style={optStyle}>1+</option>
                            <option style={optStyle}>2+</option>
                            <option style={optStyle}>3+</option>
                            <option style={optStyle}>4+</option>
                            <option style={optStyle}>5+</option>
                        </select>
                    </div>

                    {/* Bathrooms */}
                    <div style={{ display: "flex", flexDirection: "column" as const, flex: "0 1 96px" }}>
                        <label style={labelStyle}>Baths</label>
                        <select style={selectStyle} onFocus={handleFocus} onBlur={handleBlur}>
                            <option style={optStyle}>Any</option>
                            <option style={optStyle}>1+</option>
                            <option style={optStyle}>2+</option>
                            <option style={optStyle}>3+</option>
                        </select>
                    </div>

                    {/* Location */}
                    <div style={{ display: "flex", flexDirection: "column" as const, flex: "1 1 140px" }}>
                        <label style={labelStyle}>Location</label>
                        <select style={selectStyle} onFocus={handleFocus} onBlur={handleBlur}>
                            <option style={optStyle}>Any Location</option>
                            <option style={optStyle}>Paraparaumu</option>
                            <option style={optStyle}>Wellington</option>
                            <option style={optStyle}>Levin</option>
                        </select>
                    </div>

                    {/* Search — inline at the end */}
                    <div style={{ display: "flex", alignItems: "flex-end" }}>
                        <button
                            style={{
                                fontFamily: "var(--font-cinzel)",
                                fontSize: "11px",
                                textTransform: "uppercase" as const,
                                letterSpacing: "0.22em",
                                background: "var(--color-gold-muted)",
                                color: "var(--color-obsidian)",
                                border: "none",
                                padding: "0.9rem 2rem",
                                cursor: "pointer",
                                whiteSpace: "nowrap" as const,
                                transition: "background 0.3s, color 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.background = "var(--color-parchment)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.background = "var(--color-gold-muted)";
                            }}
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/* ═══════════════════════════════════════════════════
                    MAP SUBSECTION
                ═══════════════════════════════════════════════════ */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "2fr 3fr",
                        gap: "2rem",
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        paddingTop: "2rem",
                    }}
                    className="max-sm:flex max-sm:flex-col"
                >
                    {/* Left — heading + text + image */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            gap: "1.5rem",
                            paddingRight: "clamp(1rem, 3vw, 3rem)",
                            borderRight: "1px solid rgba(255,255,255,0.06)",
                        }}
                    >
                        <div>
                            <span
                                style={{
                                    display: "block",
                                    fontFamily: "var(--font-cinzel)",
                                    fontSize: "9px",
                                    textTransform: "uppercase" as const,
                                    letterSpacing: "0.4em",
                                    color: "var(--color-gold-muted)",
                                    marginBottom: "0.75rem",
                                }}
                            >
                                Featured Location
                            </span>
                            <h3
                                style={{
                                    fontFamily: "var(--font-cinzel)",
                                    fontSize: "clamp(1.4rem, 1.8vw, 2rem)",
                                    color: "var(--color-parchment)",
                                    fontWeight: 300,
                                    lineHeight: 1.2,
                                    letterSpacing: "-0.01em",
                                    marginBottom: "1rem",
                                }}
                            >
                                11 Kodex Place
                                <br />
                                <span style={{ color: "var(--color-gold-muted)" }}>Paraparaumu</span>
                            </h3>
                            <p
                                style={{
                                    fontSize: "0.8125rem",
                                    lineHeight: 1.7,
                                    color: "rgba(245,240,232,0.4)",
                                    maxWidth: "300px",
                                }}
                            >
                                A sought-after coastal locale where refined architecture meets natural tranquility.
                            </p>
                        </div>

                        {/* Framed property image */}
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                aspectRatio: "5/3",
                                overflow: "hidden",
                                border: "1px solid rgba(201,169,110,0.2)",
                            }}
                        >
                            <Image
                                src="/hero2.jpg"
                                alt="11 Kodex Place, Paraparaumu"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        <button
                            style={{
                                fontFamily: "var(--font-cinzel)",
                                fontSize: "12px",
                                textTransform: "uppercase" as const,
                                letterSpacing: "0.25em",
                                color: "rgba(245,240,232,0.35)",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                padding: 0,
                                transition: "color 0.3s",
                            }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-gold-muted)")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(245,240,232,0.35)")}
                        >
                            Explore area →
                        </button>
                    </div>

                    {/* Right — colored Google Map — on mobile this goes below via order */}
                    <div className="max-sm:order-2" style={{ position: "relative", minHeight: "200px" }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1521.9056157011406!2d174.9961816!3d-40.9168472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d40ba44a6c0c2bb%3A0xe104cf28670da5!2s11%20Kodex%20Place%2C%20Paraparaumu%205032%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                display: "block",
                                position: "absolute",
                                inset: 0,
                            }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="11 Kodex Place, Paraparaumu Map"
                        />
                        {/* Address badge */}
                        <div
                            style={{
                                position: "absolute",
                                top: "1.25rem",
                                left: "1.25rem",
                                background: "rgba(245,240,232,0.92)",
                                backdropFilter: "blur(8px)",
                                border: "1px solid rgba(201,169,110,0.3)",
                                padding: "0.4rem 0.875rem",
                                zIndex: 10,
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "var(--font-cinzel)",
                                    fontSize: "10px",
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase" as const,
                                    color: "var(--color-obsidian)",
                                }}
                            >
                                11 Kodex Place · Paraparaumu
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}