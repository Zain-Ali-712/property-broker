"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Buying", href: "/buying" },
    { label: "Selling", href: "/selling" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

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
            <nav
                className="w-full flex items-center justify-center md:justify-between"
                style={{ padding: "clamp(1.5rem, 3vw, 2.5rem) clamp(2rem, 6vw, 6rem)" }}
            >
                {/* Logo (Hidden on mobile) */}
                <Link
                    href="/"
                    className="hidden md:flex flex-col leading-none group"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                >
                    <span
                        className="text-[20px] lg:text-[26px] tracking-[0.2em] uppercase font-medium transition-colors duration-300"
                        style={{ color: "var(--color-parchment)" }}
                    >
                        Brittany Fagaloa - Time
                    </span>
                </Link>

                {/* Nav Links */}
                <ul className="flex items-center gap-5 md:gap-10 overflow-x-auto w-full md:w-auto justify-center md:justify-end">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <li key={link.label} className="shrink-0">
                                <Link
                                    href={link.href}
                                    className="relative text-[11px] md:text-[13px] lg:text-[15px] tracking-[0.2em] md:tracking-[0.25em] uppercase transition-all duration-300 group"
                                    style={{
                                        fontFamily: "var(--font-cinzel)",
                                        color: isActive ? "var(--color-gold-muted)" : "rgba(245, 240, 232, 0.75)",
                                        fontWeight: 400,
                                    }}
                                >
                                    <span className="group-hover:opacity-100 transition-opacity duration-300">
                                        {link.label}
                                    </span>
                                    {/* underline slide-in - persistent if active */}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                                        style={{ background: "var(--color-gold-muted)" }}
                                    />
                                </Link>
                            </li>
                        );
                    })}

                    {/* Search Property CTA (Hidden on mobile and tablet) */}
                    <li className="hidden lg:block">
                        <Link
                            href="/#property-search"
                            className="inline-block text-[12px] lg:text-[14px] tracking-[0.2em] uppercase px-4 py-1.5 border transition-all duration-300 rounded-sm"
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
