"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
    { label: "Property Search", href: "/buying" },
    { label: "Solds", href: "/solds" },
    { label: "About Me", href: "/about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
    { label: "Request an Appraisal", href: "/appraisal" },
];

export default function Footer() {
    return (
        <footer
            className="w-full"
            style={{
                background: "var(--color-obsidian)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                position: "relative",
            }}
        >
            {/* Warm gold radial glow — bottom left */}
            <div
                className="absolute pointer-events-none"
                style={{
                    inset: 0,
                    background: "radial-gradient(ellipse 70% 80% at 0% 100%, rgba(201,169,110,0.09) 0%, transparent 65%)",
                }}
            />
            {/* Subtle gold-tinted dot pattern */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='1' cy='1' r='0.8' fill='rgba(201%2C169%2C110%2C0.1)'/%3E%3C/svg%3E")`,
                }}
            />
            {/* Gold shimmer line at the very top */}
            <div
                className="absolute top-0 left-0 right-0 pointer-events-none"
                style={{
                    height: "2px",
                    background: "linear-gradient(to right, transparent 0%, rgba(201,169,110,0.5) 30%, rgba(201,169,110,0.8) 50%, rgba(201,169,110,0.5) 70%, transparent 100%)",
                }}
            />

            {/* ── TOP BAR: logo left | nav links right – enhanced with gold gradient ── */}
            <div
                style={{
                    padding: "1.25rem clamp(1.25rem, 6vw, 6rem)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    background: "linear-gradient(180deg, rgba(201,169,110,0.08) 0%, transparent 100%)",
                }}
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span
                            className="font-cinzel font-bold"
                            style={{ fontSize: "1.25rem", color: "var(--color-parchment)", letterSpacing: "0.02em" }}
                        >
                            Property Brokers
                        </span>
                        <span
                            className="flex items-center justify-center font-cinzel font-bold"
                            style={{
                                width: "18px",
                                height: "18px",
                                borderRadius: "4px",
                                background: "var(--color-gold-muted)",
                                color: "var(--color-obsidian)",
                                fontSize: "10px",
                                lineHeight: 1,
                            }}
                        >
                            B
                        </span>
                    </div>

                    {/* Nav links */}
                    <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="font-cinzel uppercase transition-colors duration-200"
                                style={{
                                    fontSize: "11px",
                                    letterSpacing: "0.18em",
                                    color: "rgba(245,240,232,0.5)",
                                    textDecoration: "none",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.color = "var(--color-gold-muted)")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.color = "rgba(245,240,232,0.5)")
                                }
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* ── MIDDLE BODY: left agent info | right office + image ── */}
            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                style={{ padding: "2rem clamp(1.25rem, 6vw, 6rem)" }}
            >
                {/* LEFT: Social + Agent info */}
                <div className="flex flex-col gap-5">
                    {/* Social icons */}
                    <div className="flex items-center gap-3">
                        {/* Facebook */}
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="flex items-center justify-center transition-all duration-200"
                            style={{
                                width: "36px",
                                height: "36px",
                                border: "1px solid rgba(255,255,255,0.12)",
                                color: "rgba(245,240,232,0.5)",
                                borderRadius: "50%",
                                textDecoration: "none",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-gold-muted)";
                                (e.currentTarget as HTMLElement).style.color = "var(--color-gold-muted)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                                (e.currentTarget as HTMLElement).style.color = "rgba(245,240,232,0.5)";
                            }}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="flex items-center justify-center transition-all duration-200"
                            style={{
                                width: "36px",
                                height: "36px",
                                border: "1px solid rgba(255,255,255,0.12)",
                                color: "rgba(245,240,232,0.5)",
                                borderRadius: "50%",
                                textDecoration: "none",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-gold-muted)";
                                (e.currentTarget as HTMLElement).style.color = "var(--color-gold-muted)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                                (e.currentTarget as HTMLElement).style.color = "rgba(245,240,232,0.5)";
                            }}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                            </svg>
                        </a>
                    </div>

                    {/* Agent details */}
                    <div className="flex flex-col gap-2">
                        <p
                            className="font-cinzel"
                            style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.7)", letterSpacing: "0.03em" }}
                        >
                            Brittany Fagaloa-Time
                            <span style={{ color: "rgba(245,240,232,0.25)", margin: "0 0.5rem" }}>|</span>
                            <span style={{ color: "rgba(245,240,232,0.45)", fontStyle: "italic" }}>
                                Residential/Lifestyle Sales Consultant
                            </span>
                        </p>
                        {[
                            { label: "M", value: "027 614 4182", href: "tel:+64276144182" },
                            { label: "E", value: "brittany.fagaloatime@pb.co.nz", href: "mailto:brittany.fagaloatime@pb.co.nz" },
                        ].map(({ label, value, href }) => (
                            <div key={label} className="flex items-center gap-4">
                                <span
                                    className="font-cinzel uppercase"
                                    style={{ fontSize: "10px", letterSpacing: "0.22em", color: "var(--color-gold-muted)", width: "14px", flexShrink: 0 }}
                                >
                                    {label}
                                </span>
                                <a
                                    href={href}
                                    className="font-cinzel transition-colors duration-200"
                                    style={{ fontSize: "0.875rem", color: "rgba(245,240,232,0.55)", textDecoration: "none" }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-muted)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.55)")}
                                >
                                    {value}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: Office details + larger thumbnail */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-end gap-8">
                    {/* Office text */}
                    <div className="flex flex-col gap-2 md:text-right">
                        <p
                            className="font-cinzel font-semibold"
                            style={{ fontSize: "0.95rem", color: "var(--color-parchment)", letterSpacing: "0.04em" }}
                        >
                            Kapiti Coast
                        </p>
                        <p
                            className="font-cinzel"
                            style={{ fontSize: "0.85rem", color: "rgba(245,240,232,0.45)" }}
                        >
                            <span style={{ color: "rgba(245,240,232,0.28)", marginRight: "0.4rem" }}>Telephone</span>
                            04 9745074
                        </p>
                        <p
                            className="font-cinzel"
                            style={{ fontSize: "0.85rem", color: "rgba(245,240,232,0.45)" }}
                        >
                            11 Kodex Place, Paraparaumu
                        </p>
                        <a
                            href="https://propertybrokers.co.nz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-cinzel uppercase mt-1 transition-colors duration-200"
                            style={{
                                fontSize: "10px",
                                letterSpacing: "0.2em",
                                color: "var(--color-gold-muted)",
                                textDecoration: "none",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                        >
                            Back to Main Site ↗
                        </a>
                    </div>

                    {/* Office thumbnail – bigger now */}
                    <div
                        className="relative shrink-0 overflow-hidden"
                        style={{ width: "140px", height: "92px", border: "1px solid rgba(201,169,110,0.18)" }}
                    >
                        <Image
                            src="/kapiti-coast.jpg"
                            alt="Kapiti Coast office"
                            fill
                            className="object-cover"
                            style={{ filter: "brightness(0.6) saturate(0.8)" }}
                            sizes="140px"
                        />
                    </div>
                </div>
            </div>

            {/* ── BOTTOM STRIP: legal ── */}
            <div
                className="flex flex-col sm:flex-row items-center justify-between gap-2 flex-wrap"
                style={{
                    padding: "0.9rem clamp(1.25rem, 6vw, 6rem)",
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                }}
            >
                {/* Legal links */}
                <div className="flex items-center gap-4 flex-wrap">
                    {[
                        { label: "Disclaimer", href: "/disclaimer" },
                        { label: "Privacy", href: "/privacy" },
                    ].map((item, i, arr) => (
                        <span key={item.label} className="flex items-center gap-4">
                            <Link
                                href={item.href}
                                className="font-cinzel uppercase transition-colors duration-200"
                                style={{ fontSize: "10px", letterSpacing: "0.18em", color: "rgba(245,240,232,0.25)", textDecoration: "none" }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-muted)")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.25)")}
                            >
                                {item.label}
                            </Link>
                            {i < arr.length - 1 && (
                                <span style={{ color: "rgba(255,255,255,0.1)", fontSize: "10px" }}>|</span>
                            )}
                        </span>
                    ))}
                    <span style={{ color: "rgba(255,255,255,0.1)", fontSize: "10px" }}>|</span>
                    <span
                        className="font-cinzel uppercase"
                        style={{ fontSize: "10px", letterSpacing: "0.15em", color: "rgba(245,240,232,0.2)" }}
                    >
                        Property Brokers Licensed under the REAA 2008
                    </span>
                </div>

                {/* Powered by */}
                <span
                    className="font-cinzel uppercase"
                    style={{ fontSize: "8px", letterSpacing: "0.2em", color: "rgba(245,240,232,0.15)" }}
                >
                    Powered by PropertySuite
                </span>
            </div>
        </footer>
    );
}