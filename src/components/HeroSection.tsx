"use client";

import Image from "next/image";

function FacebookIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

const socialLinks = [
    { icon: <FacebookIcon />, label: "Facebook", href: "#" },
    { icon: <InstagramIcon />, label: "Instagram", href: "#" },
    { icon: <LinkedInIcon />, label: "LinkedIn", href: "#" },
];

export default function HeroSection() {
    return (
        <section
            className="relative w-full h-[100dvh] min-h-[600px] flex flex-col"
        >

            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/hero2.jpg"
                    alt="Luxury property — scenic farmhouse at dusk"
                    fill
                    priority
                    quality={90}
                    sizes="100vw"
                    style={{ objectFit: "cover", objectPosition: "center 55%" }}
                />
            </div>


            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to right, rgba(6,6,6,0.92) 0%, rgba(6,6,6,0.72) 35%, rgba(6,6,6,0.20) 65%, rgba(6,6,6,0.04) 100%)",
                }}
            />
            {/* Bottom-up fade — grounds the accent card */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to top, rgba(6,6,6,0.75) 0%, transparent 38%)",
                }}
            />
            {/* Top vignette — keeps transparent navbar readable */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(6,6,6,0.40) 0%, transparent 18%)",
                }}
            />

            {/* ── Content Layer ─────────────────────────────────── */}
            {/*
       * This wrapper is relative z-10 and uses flex column + h-full to let
       * justify-between push the bottom row to the footer of the hero.
       */}
            <div
                className="relative z-10 flex flex-col flex-1"
                style={{ padding: "0 clamp(2rem, 6vw, 6rem)" }}
            >
                {/* Spacer: pushes content below the fixed navbar (~80px tall) */}
                <div style={{ height: "96px", flexShrink: 0 }} />

                {/* ── Left Hero Content ─────────────────────────── */}
                <div className="flex-1 flex flex-col justify-center" style={{ maxWidth: "min(520px, 50vw)" }}>

                    {/* Gold eyebrow */}
                    <div
                        className="flex items-center gap-3 mb-8 animate-fade-in delay-100"
                    >
                        <span
                            className="block h-px w-6 flex-shrink-0"
                            style={{ background: "var(--color-gold-muted)" }}
                        />
                        <span
                            style={{
                                fontFamily: "var(--font-cinzel)",
                                fontSize: "0.6rem",
                                letterSpacing: "0.42em",
                                textTransform: "uppercase",
                                color: "var(--color-gold-muted)",
                            }}
                        >
                            Property Brokers
                        </span>
                        <span
                            className="block h-px w-6 flex-shrink-0"
                            style={{ background: "var(--color-gold-muted)" }}
                        />
                    </div>

                    {/* INTRODUCING */}
                    <p
                        className="animate-fade-in-up delay-200"
                        style={{
                            fontFamily: "var(--font-cinzel)",
                            fontSize: "0.65rem",
                            letterSpacing: "0.52em",
                            textTransform: "uppercase",
                            color: "rgba(245,240,232,0.45)",
                            fontWeight: 400,
                            marginBottom: "0.75rem",
                        }}
                    >
                        Introducing
                    </p>

                    {/* Agent Name — clamp prevents overflow / mid-word wraps */}
                    <h1
                        className="animate-fade-in-up delay-300"
                        style={{
                            fontFamily: "var(--font-cinzel)",
                            /* clamp(min, preferred, max) — prefer larger text */
                            fontSize: "clamp(2.5rem, 4.5vw, 5rem)",
                            lineHeight: 1.08,
                            letterSpacing: "0.03em",
                            fontWeight: 400,
                            color: "var(--color-parchment)",
                            marginBottom: "1.75rem",
                            /* Never allow the browser to break inside a word */
                            wordBreak: "keep-all",
                            overflowWrap: "normal",
                        }}
                    >
                        Brittany
                        <br />
                        <span style={{ color: "var(--color-gold-muted)" }}>
                            {/* non-breaking hyphen so "Fagaloa‑Time" never splits */}
                            Fagaloa&#8209;Time
                        </span>
                    </h1>

                    {/* Description */}
                    <p
                        className="animate-fade-in delay-500"
                        style={{
                            fontFamily: "var(--font-cinzel)",
                            fontSize: "clamp(0.65rem, 0.9vw, 0.78rem)",
                            letterSpacing: "0.07em",
                            lineHeight: 2,
                            color: "rgba(245,240,232,0.55)",
                            fontWeight: 400,
                            maxWidth: "380px",
                            marginBottom: "2rem",
                        }}
                    >
                        Dedicated to finding your perfect home with integrity,
                        expertise, and personal care — every step of the journey.
                    </p>

                    {/* Thin gold divider */}
                    <div
                        className="animate-fade-in delay-500"
                        style={{
                            width: "44px",
                            height: "1px",
                            background: "rgba(201,169,110,0.35)",
                            marginBottom: "2rem",
                        }}
                    />

                    {/* Social Icons */}
                    <div className="flex items-center gap-3 animate-fade-in delay-700">
                        {socialLinks.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                aria-label={s.label}
                                className="flex items-center justify-center rounded-full transition-all duration-300"
                                style={{
                                    width: "36px",
                                    height: "36px",
                                    border: "1px solid rgba(255,255,255,0.14)",
                                    background: "rgba(255,255,255,0.05)",
                                    color: "rgba(245,240,232,0.55)",
                                    flexShrink: 0,
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.background = "rgba(201,169,110,0.14)";
                                    el.style.borderColor = "rgba(201,169,110,0.6)";
                                    el.style.color = "var(--color-gold-muted)";
                                    el.style.transform = "translateY(-2px)";
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.background = "rgba(255,255,255,0.05)";
                                    el.style.borderColor = "rgba(255,255,255,0.14)";
                                    el.style.color = "rgba(245,240,232,0.55)";
                                    el.style.transform = "translateY(0)";
                                }}
                            >
                                {s.icon}
                            </a>
                        ))}
                        <span
                            style={{
                                fontFamily: "var(--font-cinzel)",
                                fontSize: "0.58rem",
                                letterSpacing: "0.35em",
                                textTransform: "uppercase",
                                color: "rgba(245,240,232,0.25)",
                                marginLeft: "6px",
                            }}
                        >
                            Follow
                        </span>
                    </div>
                </div>

                <div
                    className="flex items-end justify-between animate-fade-in delay-900 mt-auto"
                    style={{ paddingBottom: "clamp(1.5rem, 3vh, 2.5rem)" }}
                >
                    {/* Scroll indicator */}
                    <div className="flex items-center gap-3">
                        <div
                            style={{
                                width: "1px",
                                height: "36px",
                                background:
                                    "linear-gradient(to bottom, transparent, rgba(201,169,110,0.55))",
                            }}
                        />
                        <span
                            style={{
                                fontFamily: "var(--font-cinzel)",
                                fontSize: "0.58rem",
                                letterSpacing: "0.45em",
                                textTransform: "uppercase",
                                color: "rgba(245,240,232,0.3)",
                            }}
                        >
                            Scroll
                        </span>
                    </div>

                    {/* Property Preview Accent Card */}
                    <div
                        className="flex flex-col md:flex-row items-start md:items-center gap-4"
                        style={{
                            background: "rgba(10,10,10,0.58)",
                            backdropFilter: "blur(18px)",
                            WebkitBackdropFilter: "blur(18px)",
                            border: "1px solid rgba(255,255,255,0.09)",
                            borderRadius: "4px",
                            padding: "14px 18px",
                            maxWidth: "min(340px, 38vw)",
                        }}
                    >
                        {/* Overlapping circular previews */}
                        <div className="flex items-center flex-shrink-0">
                            {["/ParaparaumuBeach-main.jpg", "/RaumatiBeach-main.jpg"].map((src, i) => (
                                <div
                                    key={src}
                                    className="rounded-full overflow-hidden relative"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        border: "2px solid rgba(10,10,10,0.85)",
                                        marginLeft: i === 0 ? 0 : "-10px",
                                        zIndex: 2 - i,
                                        flexShrink: 0,
                                    }}
                                >
                                    <Image
                                        src={src}
                                        alt="Property preview"
                                        fill
                                        sizes="40px"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            ))}
                            {/* +N pill */}
                            <div
                                className="flex items-center justify-center rounded-full flex-shrink-0"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    background: "rgba(201,169,110,0.14)",
                                    border: "2px solid rgba(10,10,10,0.85)",
                                    marginLeft: "-10px",
                                    zIndex: 0,
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "var(--font-cinzel)",
                                        fontSize: "0.6rem",
                                        color: "var(--color-gold-muted)",
                                    }}
                                >
                                    +8
                                </span>
                            </div>
                        </div>

                        {/* Text */}
                        <div>
                            <p
                                style={{
                                    fontFamily: "var(--font-cinzel)",
                                    fontSize: "clamp(0.6rem, 0.85vw, 0.72rem)",
                                    letterSpacing: "0.04em",
                                    color: "var(--color-parchment)",
                                    fontWeight: 400,
                                    lineHeight: 1.5,
                                    marginBottom: "4px",
                                }}
                            >
                                Every week there is a set for two tours
                            </p>
                            <p
                                style={{
                                    fontFamily: "var(--font-cinzel)",
                                    fontSize: "0.58rem",
                                    letterSpacing: "0.06em",
                                    color: "rgba(245,240,232,0.38)",
                                    fontWeight: 400,
                                }}
                            >
                                High-quality photos · Verified floor plans
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
