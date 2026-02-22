"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        quote:
            "If you are looking for a motivated, reliable Real Estate agent to market your property, my wife and I would recommend Brittany to you. She is friendly, helpful, and knowledgeable. We highly recommend her to you.",
        author: "Satisfied Client",
        date: "27 January 2026",
        rating: 5,
    },
    {
        id: 2,
        quote:
            "Charlie and Brittany were fantastic throughout the whole process and were focused on me as the client.",
        author: "Happy Buyer",
        date: "10 September 2025",
        rating: 5,
    },
    {
        id: 3,
        quote:
            "My sales consultants Brittany and Charlie were amazing during the entire purchase process. They were very responsive to any questions we had. They went above and beyond to help us secure the house of our dreams.",
        author: "Dream Home Owner",
        date: "11 September 2025",
        rating: 5,
    },
    {
        id: 4,
        quote: "Trustworthy and awesome.",
        author: "Verified Client",
        date: "18 January 2026",
        rating: 5,
    },
    {
        id: 5,
        quote:
            "We sold our property with Brittany Fagaloa-Time and were very happy with the outcome. At every turn, Brittany went above and beyond for us and made sure that everything was going smoothly. We personally love how hands on and proactive she was, which made us always feel at ease with the process. She was available to answer any questions, give us sound advice and she'd always keep us in the loop with updates. We had no experience with selling a house and all the legalities that come with it, but Brittany's experience and expertise made that process a breeze. She always took care of all the little details so that we didn't have to, often juggling so many tasks and parties at once. Working with Brittany has genuinely been the best decision we made when it came to this sale, and we would highly recommend her to anyone who's looking to do the same.",
        author: "Brittany Fagaloa-Time Client",
        date: "16 January 2026",
        rating: 5,
    },
];

/* Subtle dot-grid SVG pattern injected as data URI */
const DOT_PATTERN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(201%2C169%2C110%2C0.12)'/%3E%3C/svg%3E")`;

export default function Testimonials() {
    const [active, setActive] = useState(0);

    const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
    const next = () => setActive((i) => (i + 1) % testimonials.length);

    const t = testimonials[active];

    return (
        <section
            className="w-full relative overflow-hidden"
            style={{
                background: "var(--color-obsidian)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
        >
            {/* ── Background dot pattern ── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: DOT_PATTERN, opacity: 1 }}
            />

            {/* ── Gold diagonal accent stripe (top-right corner) ── */}
            <div
                className="absolute pointer-events-none"
                style={{
                    top: 0,
                    right: 0,
                    width: "40%",
                    height: "100%",
                    background:
                        "linear-gradient(135deg, transparent 60%, rgba(201,169,110,0.04) 100%)",
                }}
            />

            {/* ─────────────── MAIN GRID: left image panel | right testimonial ─────────────── */}
            <div
                className="grid grid-cols-1 lg:grid-cols-[42%_1fr] relative"
                style={{ minHeight: "520px" }}
            >
                {/* ── LEFT: Property image with overlaid stats ── */}
                <div className="relative overflow-hidden hidden lg:block">
                    <Image
                        src="/hero2.jpg"
                        alt="Luxury property"
                        fill
                        className="object-cover"
                        style={{ filter: "brightness(0.35) saturate(0.7)" }}
                        sizes="42vw"
                    />

                    {/* Dark overlay gradient → right */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to right, rgba(13,13,13,0.1) 0%, rgba(13,13,13,0.85) 100%)",
                        }}
                    />

                    {/* Content on image */}
                    <div className="absolute inset-0 flex flex-col justify-start gap-8 p-10 z-10">
                        {/* Top label */}
                        <div className="flex items-center gap-3">
                            <span
                                className="block h-px w-5 shrink-0"
                                style={{ background: "var(--color-gold-muted)" }}
                            />
                            <span
                                className="font-cinzel uppercase"
                                style={{ fontSize: "9px", letterSpacing: "0.4em", color: "var(--color-gold-muted)" }}
                            >
                                Client Stories
                            </span>
                        </div>

                        {/* Big heading */}
                        <div>
                            <h2
                                className="font-cinzel font-light leading-tight mb-6"
                                style={{
                                    fontSize: "clamp(2rem, 3vw, 3.2rem)",
                                    color: "var(--color-parchment)",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Trusted by<br />
                                <span style={{ color: "var(--color-gold-muted)" }}>
                                    families &amp; investors
                                </span>
                            </h2>

                            {/* Rich stat cards */}
                            <div className="flex flex-col gap-3">
                                {/* Stat 1 — Rating */}
                                <div
                                    className="flex items-stretch gap-0 overflow-hidden"
                                    style={{
                                        border: "1px solid rgba(201,169,110,0.18)",
                                        background: "rgba(0,0,0,0.25)",
                                        backdropFilter: "blur(4px)",
                                    }}
                                >
                                    {/* Left gold accent bar */}
                                    <div style={{ width: "3px", background: "var(--color-gold-muted)", flexShrink: 0 }} />
                                    <div className="flex items-center justify-between flex-1 px-4 py-3">
                                        <div>
                                            <p
                                                className="font-cinzel"
                                                style={{ fontSize: "2rem", color: "var(--color-gold-muted)", lineHeight: 1, fontWeight: 300, letterSpacing: "-0.02em" }}
                                            >
                                                5.0
                                            </p>
                                            <p
                                                className="font-cinzel uppercase mt-1"
                                                style={{ fontSize: "7px", letterSpacing: "0.3em", color: "rgba(245,240,232,0.4)" }}
                                            >
                                                Average Rating
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <span style={{ color: "var(--color-gold-muted)", fontSize: "0.75rem", letterSpacing: "3px" }}>★★★★★</span>
                                            <span
                                                className="font-cinzel uppercase"
                                                style={{ fontSize: "6px", letterSpacing: "0.2em", color: "rgba(245,240,232,0.22)" }}
                                            >
                                                out of 5
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Stat 2 — Satisfaction */}
                                <div
                                    className="flex items-stretch gap-0 overflow-hidden"
                                    style={{
                                        border: "1px solid rgba(201,169,110,0.18)",
                                        background: "rgba(0,0,0,0.25)",
                                        backdropFilter: "blur(4px)",
                                    }}
                                >
                                    <div style={{ width: "3px", background: "var(--color-gold-muted)", flexShrink: 0 }} />
                                    <div className="flex items-center justify-between flex-1 px-4 py-3">
                                        <div>
                                            <p
                                                className="font-cinzel"
                                                style={{ fontSize: "2rem", color: "var(--color-gold-muted)", lineHeight: 1, fontWeight: 300, letterSpacing: "-0.02em" }}
                                            >
                                                100%
                                            </p>
                                            <p
                                                className="font-cinzel uppercase mt-1"
                                                style={{ fontSize: "7px", letterSpacing: "0.3em", color: "rgba(245,240,232,0.4)" }}
                                            >
                                                Client Satisfaction
                                            </p>
                                        </div>
                                        {/* Circular check badge */}
                                        <div
                                            className="flex items-center justify-center shrink-0"
                                            style={{
                                                width: "34px",
                                                height: "34px",
                                                border: "1px solid rgba(201,169,110,0.35)",
                                                borderRadius: "50%",
                                            }}
                                        >
                                            <span style={{ color: "var(--color-gold-muted)", fontSize: "13px", lineHeight: 1 }}>✓</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Stat 3 — Reviews */}
                                <div
                                    className="flex items-stretch gap-0 overflow-hidden"
                                    style={{
                                        border: "1px solid rgba(201,169,110,0.18)",
                                        background: "rgba(0,0,0,0.25)",
                                        backdropFilter: "blur(4px)",
                                    }}
                                >
                                    <div style={{ width: "3px", background: "var(--color-gold-muted)", flexShrink: 0 }} />
                                    <div className="flex items-center justify-between flex-1 px-4 py-3">
                                        <div>
                                            <p
                                                className="font-cinzel"
                                                style={{ fontSize: "2rem", color: "var(--color-gold-muted)", lineHeight: 1, fontWeight: 300, letterSpacing: "-0.02em" }}
                                            >
                                                5+
                                            </p>
                                            <p
                                                className="font-cinzel uppercase mt-1"
                                                style={{ fontSize: "7px", letterSpacing: "0.3em", color: "rgba(245,240,232,0.4)" }}
                                            >
                                                Glowing Reviews
                                            </p>
                                        </div>
                                        <div
                                            className="font-cinzel uppercase px-2 py-1"
                                            style={{
                                                fontSize: "6px",
                                                letterSpacing: "0.25em",
                                                color: "var(--color-gold-muted)",
                                                border: "1px solid rgba(201,169,110,0.3)",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            Verified
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── RIGHT: Testimonial carousel ── */}
                <div
                    className="flex flex-col justify-center relative"
                    style={{ padding: "5rem clamp(1.5rem, 5vw, 5rem)" }}
                >
                    {/* Oversized decorative quote mark watermark */}
                    <div
                        className="absolute select-none pointer-events-none font-cinzel"
                        style={{
                            fontSize: "18rem",
                            lineHeight: 1,
                            color: "rgba(201,169,110,0.05)",
                            top: "-1rem",
                            right: "-1rem",
                            fontWeight: 700,
                        }}
                        aria-hidden
                    >
                        &ldquo;
                    </div>

                    {/* ── Section heading (visible on all screen sizes in right panel) ── */}
                    <div className="relative z-10 mb-10">
                        <div className="flex items-center gap-3 mb-3">
                            <span
                                className="block h-px w-5 shrink-0"
                                style={{ background: "var(--color-gold-muted)" }}
                            />
                            <span
                                className="font-cinzel uppercase"
                                style={{ fontSize: "9px", letterSpacing: "0.4em", color: "var(--color-gold-muted)" }}
                            >
                                Client Stories
                            </span>
                        </div>
                        <h2
                            className="font-cinzel font-light leading-tight"
                            style={{
                                fontSize: "clamp(1.5rem, 2.2vw, 2.4rem)",
                                color: "var(--color-parchment)",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            What our clients{" "}
                            <span style={{ color: "var(--color-gold-muted)" }}>say about us</span>
                        </h2>
                    </div>

                    {/* ─── Active testimonial ─── */}
                    <div key={t.id} className="relative z-10">
                        {/* Stars */}
                        <div className="flex gap-1 mb-5">
                            {Array.from({ length: t.rating }).map((_, i) => (
                                <span
                                    key={i}
                                    style={{ color: "var(--color-gold-muted)", fontSize: "0.85rem" }}
                                >
                                    ★
                                </span>
                            ))}
                        </div>

                        {/* Thin gold top border accent */}
                        <div
                            className="mb-6"
                            style={{ width: "2.5rem", height: "2px", background: "var(--color-gold-muted)" }}
                        />

                        {/* Quote */}
                        <blockquote
                            className="overflow-y-auto pr-1"
                            style={{
                                maxHeight: "200px",
                                fontFamily: "Georgia, 'Times New Roman', serif",
                                fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)",
                                lineHeight: 1.9,
                                color: "rgba(245,240,232,0.72)",
                                letterSpacing: "0.01em",
                                scrollbarWidth: "thin",
                                scrollbarColor: "rgba(201,169,110,0.2) transparent",
                            }}
                        >
                            {t.quote}
                        </blockquote>

                        {/* Fade hint for overflow */}
                        <div
                            className="pointer-events-none"
                            style={{
                                height: "2rem",
                                marginTop: "-2rem",
                                background: "linear-gradient(to top, var(--color-obsidian) 10%, transparent 100%)",
                            }}
                        />

                        {/* Author row */}
                        <div
                            className="flex items-center justify-between gap-4 flex-wrap mt-6 pt-6"
                            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Monogram circle */}
                                <div
                                    className="flex items-center justify-center shrink-0"
                                    style={{
                                        width: "42px",
                                        height: "42px",
                                        border: "1px solid rgba(201,169,110,0.3)",
                                        borderRadius: "50%",
                                        background: "rgba(201,169,110,0.06)",
                                    }}
                                >
                                    <span
                                        className="font-cinzel"
                                        style={{ fontSize: "14px", color: "var(--color-gold-muted)", lineHeight: 1 }}
                                    >
                                        {t.author.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <p
                                        className="font-cinzel"
                                        style={{ fontSize: "0.8rem", color: "var(--color-parchment)", letterSpacing: "0.05em", marginBottom: "3px" }}
                                    >
                                        {t.author}
                                    </p>
                                    <p
                                        className="font-cinzel uppercase"
                                        style={{ fontSize: "7px", letterSpacing: "0.25em", color: "rgba(245,240,232,0.28)" }}
                                    >
                                        {t.date}
                                    </p>
                                </div>
                            </div>

                            {/* Arrow nav */}
                            <div className="flex items-center gap-2">
                                {(["←", "→"] as const).map((arrow, i) => (
                                    <button
                                        key={arrow}
                                        onClick={i === 0 ? prev : next}
                                        className="flex items-center justify-center w-9 h-9 transition-all duration-200 cursor-pointer"
                                        style={{
                                            background: "transparent",
                                            border: "1px solid rgba(201,169,110,0.25)",
                                            color: "var(--color-parchment)",
                                            fontSize: "13px",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "var(--color-gold-muted)";
                                            e.currentTarget.style.color = "var(--color-obsidian)";
                                            e.currentTarget.style.borderColor = "var(--color-gold-muted)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "transparent";
                                            e.currentTarget.style.color = "var(--color-parchment)";
                                            e.currentTarget.style.borderColor = "rgba(201,169,110,0.25)";
                                        }}
                                        aria-label={i === 0 ? "Previous" : "Next"}
                                    >
                                        {arrow}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ─── Dot indicators ─── */}
                    <div className="flex items-center gap-2 mt-10">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className="cursor-pointer transition-all duration-300"
                                style={{
                                    width: i === active ? "28px" : "6px",
                                    height: "6px",
                                    borderRadius: "3px",
                                    background: i === active ? "var(--color-gold-muted)" : "rgba(245,240,232,0.12)",
                                    border: "none",
                                    padding: 0,
                                }}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                        <span
                            className="font-cinzel uppercase ml-3"
                            style={{ fontSize: "8px", letterSpacing: "0.28em", color: "rgba(245,240,232,0.2)" }}
                        >
                            {active + 1} / {testimonials.length}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
