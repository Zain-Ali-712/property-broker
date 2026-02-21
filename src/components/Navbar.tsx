"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Selling", href: "/selling" },
    { label: "Buying", href: "/buying" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
            style={{
                background: scrolled
                    ? "rgba(13, 13, 13, 0.75)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: scrolled
                    ? "1px solid rgba(255,255,255,0.07)"
                    : "none",
            }}
        >
            <nav className="max-w-[1400px] mx-auto px-8 py-5 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex flex-col leading-none group"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                >
                    <span
                        className="text-[10px] tracking-[0.35em] uppercase transition-colors duration-300"
                        style={{ color: "var(--color-gold-muted)" }}
                    >
                        · Est. 2010 ·
                    </span>
                    <span
                        className="text-[18px] tracking-[0.2em] uppercase font-medium transition-colors duration-300"
                        style={{ color: "var(--color-parchment)" }}
                    >
                        Property Brokers
                    </span>
                </Link>

                {/* Nav Links */}
                <ul className="flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className="relative text-[11px] tracking-[0.25em] uppercase transition-all duration-300 group"
                                style={{
                                    fontFamily: "var(--font-cinzel)",
                                    color: "rgba(245, 240, 232, 0.75)",
                                    fontWeight: 400,
                                }}
                            >
                                <span className="group-hover:opacity-100 transition-opacity duration-300">
                                    {link.label}
                                </span>
                                {/* underline slide-in */}
                                <span
                                    className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                                    style={{ background: "var(--color-gold-muted)" }}
                                />
                            </Link>
                        </li>
                    ))}

                    {/* Search Property CTA */}
                    <li>
                        <Link
                            href="/search"
                            className="text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-300 rounded-sm"
                            style={{
                                fontFamily: "var(--font-cinzel)",
                                color: "var(--color-parchment)",
                                borderColor: "rgba(201, 169, 110, 0.5)",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.background =
                                    "rgba(201, 169, 110, 0.12)";
                                (e.currentTarget as HTMLElement).style.borderColor =
                                    "rgba(201, 169, 110, 0.9)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.background = "transparent";
                                (e.currentTarget as HTMLElement).style.borderColor =
                                    "rgba(201, 169, 110, 0.5)";
                            }}
                        >
                            Search Property
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
