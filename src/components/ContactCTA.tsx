"use client";

import Image from "next/image";

export default function ContactCTA() {
    return (
        <section
            className="w-full relative overflow-hidden mb-12 md:mb-20"
            style={{
                background: "var(--color-obsidian)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
        >
            {/* ── Subtle dot-grid background pattern ── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(201%2C169%2C110%2C0.09)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* ── Gold radial glow (left) ── */}
            <div
                className="absolute pointer-events-none"
                style={{
                    top: "50%",
                    left: "0",
                    transform: "translateY(-50%)",
                    width: "500px",
                    height: "500px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)",
                }}
            />

            <div
                className="grid grid-cols-1 lg:grid-cols-[1fr_42%] relative"
                style={{ minHeight: "360px" }}
            >
                {/* ── LEFT: Text content ── */}
                <div
                    className="flex flex-col justify-center"
                    style={{ padding: "3rem clamp(1.25rem, 6vw, 6rem)" }}
                >
                    <div className="max-w-[1600px] w-full">

                        {/* Eyebrow */}
                        <div className="flex items-center gap-3 mb-5">
                            <span
                                className="block h-px w-5 shrink-0"
                                style={{ background: "var(--color-gold-muted)" }}
                            />
                            <span
                                className="font-cinzel uppercase"
                                style={{ fontSize: "9px", letterSpacing: "0.4em", color: "var(--color-gold-muted)" }}
                            >
                                Contact
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            className="font-cinzel font-light leading-tight mb-4"
                            style={{
                                fontSize: "clamp(1.8rem, 3vw, 3.2rem)",
                                color: "var(--color-parchment)",
                                letterSpacing: "-0.02em",
                                maxWidth: "620px",
                            }}
                        >
                            Experience{" "}
                            <span style={{ color: "var(--color-gold-muted)" }}>next level</span>
                            <br />
                            real estate service
                        </h2>

                        {/* Body */}
                        <p
                            className="text-sm leading-relaxed mb-6"
                            style={{ color: "rgba(245,240,232,0.45)", maxWidth: "520px" }}
                        >
                            Have you considered buying or selling a property? Or do you know of a
                            family member, friend or colleague who is considering buying or selling?
                            Contact Brittany Fagaloa-Time to experience next level service.
                        </p>

                        {/* ── Open Inline Contact Info ── */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mb-10 pt-4 border-t border-white/10">
                            {/* Name */}
                            <p
                                className="font-cinzel"
                                style={{
                                    fontSize: "clamp(1.1rem, 1.5vw, 1.35rem)",
                                    color: "var(--color-parchment)",
                                    letterSpacing: "0.04em",
                                    fontWeight: 400,
                                }}
                            >
                                Brittany <br />Fagaloa-Time
                            </p>

                            {/* Divider for desktop */}
                            <div className="hidden sm:block w-px h-8 bg-white/10" />

                            {/* Details (Phone & Email inline) */}
                            <div className="flex flex-col items-start sm:items-center gap-4">
                                {/* Phone */}
                                <div className="flex items-center gap-3">
                                    <span
                                        className="font-cinzel uppercase shrink-0"
                                        style={{
                                            fontSize: "10px",
                                            letterSpacing: "0.3em",
                                            color: "var(--color-gold-muted)",
                                        }}
                                    >
                                        M
                                    </span>
                                    <a
                                        href="tel:+64276144182"
                                        className="font-cinzel transition-colors duration-200 hover:text-gold-muted"
                                        style={{
                                            fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                                            color: "rgba(245,240,232,0.8)",
                                            textDecoration: "none",
                                            letterSpacing: "0.02em",
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-muted)")}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.8)")}
                                    >
                                        027 614 4182
                                    </a>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-3">
                                    <span
                                        className="font-cinzel uppercase shrink-0"
                                        style={{
                                            fontSize: "10px",
                                            letterSpacing: "0.3em",
                                            color: "var(--color-gold-muted)",
                                        }}
                                    >
                                        E
                                    </span>
                                    <a
                                        href="mailto:brittany.fagaloatime@pb.co.nz"
                                        className="font-cinzel transition-colors duration-200 hover:text-gold-muted"
                                        style={{
                                            fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                                            color: "rgba(245,240,232,0.8)",
                                            textDecoration: "none",
                                            letterSpacing: "0.02em",
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-muted)")}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.8)")}
                                    >
                                        brittany.fagaloatime@pb.co.nz
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ── CTA buttons ── */}
                        <div className="flex flex-col sm:flex-row gap-5">
                            {/* Primary Solid Button */}
                            <a
                                href="tel:+64276144182"
                                className="font-cinzel uppercase transition-all duration-300 text-center"
                                style={{
                                    fontSize: "11px",
                                    fontWeight: 600,
                                    letterSpacing: "0.35em",
                                    color: "var(--color-obsidian)",
                                    background: "var(--color-gold-muted)",
                                    border: "1px solid var(--color-gold-muted)",
                                    padding: "1.2rem 3.5rem",
                                    textDecoration: "none",
                                    display: "inline-block",
                                    whiteSpace: "nowrap",
                                    width: "100%",
                                    maxWidth: "280px",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "transparent";
                                    (e.currentTarget as HTMLElement).style.color = "var(--color-gold-muted)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "var(--color-gold-muted)";
                                    (e.currentTarget as HTMLElement).style.color = "var(--color-obsidian)";
                                }}
                            >
                                Call Now
                            </a>

                            {/* Secondary Outlined Button */}
                            <a
                                href="mailto:brittany.fagaloatime@pb.co.nz"
                                className="font-cinzel uppercase transition-all duration-300 text-center"
                                style={{
                                    fontSize: "11px",
                                    fontWeight: 600,
                                    letterSpacing: "0.35em",
                                    color: "var(--color-parchment)",
                                    background: "transparent",
                                    border: "1px solid rgba(201,169,110,0.4)",
                                    padding: "1.2rem 3.5rem",
                                    textDecoration: "none",
                                    display: "inline-block",
                                    whiteSpace: "nowrap",
                                    width: "100%",
                                    maxWidth: "280px",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "var(--color-gold-muted)";
                                    (e.currentTarget as HTMLElement).style.color = "var(--color-obsidian)";
                                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-gold-muted)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "transparent";
                                    (e.currentTarget as HTMLElement).style.color = "var(--color-parchment)";
                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.4)";
                                }}
                            >
                                Send Email
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── RIGHT: Decorative property image ── */}
                <div className="relative hidden lg:block">
                    <Image
                        src="/hero1.jpg"
                        alt="Property"
                        fill
                        className="object-cover"
                        style={{ filter: "brightness(0.4) saturate(0.75)" }}
                        sizes="42vw"
                    />
                    {/* Left-to-right fade so it blends into the left panel */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                "linear-gradient(to right, var(--color-obsidian) 0%, transparent 35%)",
                        }}
                    />
                    {/* Bottom-to-top subtle fade */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                "linear-gradient(to top, rgba(13,13,13,0.6) 0%, transparent 50%)",
                        }}
                    />

                    {/* Floating quote card on the image */}
                    <div
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 p-6"
                        style={{
                            background: "rgba(13,13,13,0.65)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(201,169,110,0.2)",
                            borderTop: "2px solid var(--color-gold-muted)",
                        }}
                    >
                        <p
                            className="font-cinzel font-light text-center"
                            style={{
                                fontSize: "clamp(0.7rem, 1vw, 0.875rem)",
                                color: "rgba(245,240,232,0.65)",
                                lineHeight: 1.7,
                                fontStyle: "italic",
                            }}
                        >
                            &ldquo;She always took care of all the little details so that we
                            didn&apos;t have to — working with Brittany has genuinely been the best
                            decision we made.&rdquo;
                        </p>
                        <p
                            className="font-cinzel uppercase text-center mt-3"
                            style={{ fontSize: "7px", letterSpacing: "0.3em", color: "var(--color-gold-muted)" }}
                        >
                            — Verified Client
                        </p>
                    </div>
                </div>
            </div>


        </section>
    );
}
