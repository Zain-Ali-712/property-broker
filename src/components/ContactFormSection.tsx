"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        propertyInterest: "Let me help you find your perfect property",
        message: "",
    });

    // We'll use local state to track focus for floating labels if needed, 
    // but a simpler elegant approach is bottom-border only with placeholder-shown styling.

    return (
        <section
            className="w-full relative"
            style={{
                background: "var(--color-obsidian)",
                padding: "8rem clamp(1.25rem, 6vw, 6rem)",
            }}
        >
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-start">

                {/* ── LEFT: The Form ── */}
                <div className="flex flex-col">

                    {/* ── Mobile/Tablet Portrait (Hidden on Desktop) ── */}
                    <div
                        className="relative w-full mb-12 block lg:hidden rounded-sm overflow-hidden border border-white/10 shadow-2xl"
                        style={{ aspectRatio: "16/7" }}
                    >
                        <Image
                            src="/contactme.jpg"
                            alt="Contact"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-3 pointer-events-none border border-gold-muted/30" />
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: "linear-gradient(to top, var(--color-obsidian) 0%, transparent 35%)",
                            }}
                        />
                    </div>

                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span
                                className="block h-px w-6 shrink-0"
                                style={{ background: "var(--color-gold-muted)" }}
                            />
                            <span
                                className="font-cinzel uppercase"
                                style={{ fontSize: "10px", letterSpacing: "0.3em", color: "var(--color-gold-muted)" }}
                            >
                                Let's Connect
                            </span>
                        </div>
                        <h2
                            className="font-cinzel font-light leading-tight"
                            style={{
                                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                                letterSpacing: "-0.02em",
                                color: "var(--color-parchment)",
                            }}
                        >
                            Send Your <span style={{ color: "var(--color-gold-muted)" }}>Enquiry</span>
                        </h2>
                        <p
                            className="text-sm mt-4"
                            style={{ color: "rgba(245,240,232,0.45)", maxWidth: "500px", lineHeight: 1.8 }}
                        >
                            Whether you're looking to buy your dream home, sell a property, or just have a general question, please fill out the details below and I will get back to you shortly.
                        </p>
                    </div>

                    <form
                        className="flex flex-col gap-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        {/* 2-Column Grid for Name & Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Name */}
                            <div className="relative group">
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full font-cinzel transition-all duration-300 bg-transparent peer"
                                    style={{
                                        borderBottom: "1px solid rgba(255,255,255,0.15)",
                                        padding: "0.5rem 0",
                                        color: "var(--color-parchment)",
                                        fontSize: "0.95rem",
                                        outline: "none",
                                    }}
                                    onFocus={(e) => (e.target.style.borderBottomColor = "var(--color-gold-muted)")}
                                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(255,255,255,0.15)")}
                                />
                                <label
                                    className={`absolute left-0 font-cinzel uppercase transition-all duration-300 pointer-events-none ${formData.name ? "-top-4 text-[9px] text-gold-muted" : "top-2 text-[11px] text-white/40"
                                        }`}
                                    style={{ letterSpacing: "0.15em" }}
                                >
                                    Your Name *
                                </label>
                            </div>

                            {/* Phone */}
                            <div className="relative group">
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full font-cinzel transition-all duration-300 bg-transparent peer"
                                    style={{
                                        borderBottom: "1px solid rgba(255,255,255,0.15)",
                                        padding: "0.5rem 0",
                                        color: "var(--color-parchment)",
                                        fontSize: "0.95rem",
                                        outline: "none",
                                    }}
                                    onFocus={(e) => (e.target.style.borderBottomColor = "var(--color-gold-muted)")}
                                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(255,255,255,0.15)")}
                                />
                                <label
                                    className={`absolute left-0 font-cinzel uppercase transition-all duration-300 pointer-events-none ${formData.phone ? "-top-4 text-[9px] text-gold-muted" : "top-2 text-[11px] text-white/40"
                                        }`}
                                    style={{ letterSpacing: "0.15em" }}
                                >
                                    Phone Number *
                                </label>
                            </div>
                        </div>

                        {/* Email - Full Width */}
                        <div className="relative group">
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full font-cinzel transition-all duration-300 bg-transparent peer"
                                style={{
                                    borderBottom: "1px solid rgba(255,255,255,0.15)",
                                    padding: "0.5rem 0",
                                    color: "var(--color-parchment)",
                                    fontSize: "0.95rem",
                                    outline: "none",
                                }}
                                onFocus={(e) => (e.target.style.borderBottomColor = "var(--color-gold-muted)")}
                                onBlur={(e) => (e.target.style.borderBottomColor = "rgba(255,255,255,0.15)")}
                            />
                            <label
                                className={`absolute left-0 font-cinzel uppercase transition-all duration-300 pointer-events-none ${formData.email ? "-top-4 text-[9px] text-gold-muted" : "top-2 text-[11px] text-white/40"
                                    }`}
                                style={{ letterSpacing: "0.15em" }}
                            >
                                Email Address *
                            </label>
                        </div>

                        {/* Dropdown - Full Width */}
                        <div className="relative group mt-2">
                            <label
                                className="absolute left-0 -top-4 font-cinzel uppercase pointer-events-none text-[9px]"
                                style={{ letterSpacing: "0.15em", color: "var(--color-gold-muted)" }}
                            >
                                How can I help you?
                            </label>
                            <select
                                value={formData.propertyInterest}
                                onChange={(e) => setFormData({ ...formData, propertyInterest: e.target.value })}
                                className="w-full font-cinzel transition-all duration-300 appearance-none cursor-pointer bg-transparent"
                                style={{
                                    borderBottom: "1px solid rgba(255,255,255,0.15)",
                                    padding: "0.5rem 0",
                                    color: "var(--color-parchment)",
                                    fontSize: "0.95rem",
                                    outline: "none",
                                }}
                                onFocus={(e) => (e.target.style.borderBottomColor = "var(--color-gold-muted)")}
                                onBlur={(e) => (e.target.style.borderBottomColor = "rgba(255,255,255,0.15)")}
                            >
                                <option value="Let me help you find your perfect property" style={{ background: "var(--color-obsidian)" }}>
                                    Let me help you find your perfect property
                                </option>
                                <option value="I am looking to sell my property" style={{ background: "var(--color-obsidian)" }}>
                                    I am looking to sell my property
                                </option>
                                <option value="General enquiry" style={{ background: "var(--color-obsidian)" }}>
                                    General enquiry
                                </option>
                            </select>
                            {/* Custom dropdown arrow */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gold-muted text-xs">
                                ▼
                            </div>
                        </div>

                        {/* Message */}
                        <div className="relative group mt-4">
                            <textarea
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full font-cinzel transition-all duration-300 resize-none bg-transparent peer"
                                style={{
                                    borderBottom: "1px solid rgba(255,255,255,0.15)",
                                    padding: "0.5rem 0",
                                    color: "var(--color-parchment)",
                                    fontSize: "0.95rem",
                                    outline: "none",
                                    minHeight: "100px",
                                }}
                                onFocus={(e) => (e.target.style.borderBottomColor = "var(--color-gold-muted)")}
                                onBlur={(e) => (e.target.style.borderBottomColor = "rgba(255,255,255,0.15)")}
                            />
                            <label
                                className={`absolute left-0 font-cinzel uppercase transition-all duration-300 pointer-events-none ${formData.message ? "-top-4 text-[9px] text-gold-muted" : "top-2 text-[11px] text-white/40"
                                    }`}
                                style={{ letterSpacing: "0.15em" }}
                            >
                                Additional Details
                            </label>
                        </div>

                        {/* Bottom Row: ReCaptcha, Privacy, Submit */}
                        <div className="flex flex-col gap-8 mt-2">

                            {/* Sleek ReCaptcha & Trust Badges */}
                            <div className="flex flex-wrap items-center justify-between gap-6 border-y border-white/5 py-5">
                                <div className="flex items-center gap-4 cursor-pointer group">
                                    <div
                                        className="transition-colors duration-300 flex items-center justify-center"
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                            border: "1px solid rgba(201,169,110,0.4)",
                                            background: "rgba(255,255,255,0.02)",
                                        }}
                                    >
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold-muted text-xs">✓</span>
                                    </div>
                                    <span className="font-cinzel text-xs text-white/40 uppercase tracking-widest group-hover:text-gold-muted transition-colors">
                                        I am human
                                    </span>
                                </div>

                                <div className="flex items-center gap-6">
                                    <a
                                        href="/privacy"
                                        className="font-cinzel text-[10px] uppercase tracking-widest text-white/30 hover:text-gold-muted transition-colors"
                                    >
                                        Privacy Policy
                                    </a>
                                    <span style={{ color: "rgba(255,255,255,0.1)", fontSize: "10px" }}>|</span>
                                    <div className="flex items-center gap-2">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gold-muted opacity-70">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                        <span className="font-cinzel text-[10px] uppercase tracking-widest text-white/30">
                                            SSL Secured
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="relative overflow-hidden group font-cinzel font-light tracking-[0.2em] uppercase transition-all duration-500 w-full sm:w-auto self-start"
                                style={{
                                    border: "1px solid var(--color-gold-muted)",
                                    padding: "1.25rem 3.5rem",
                                    fontSize: "0.85rem",
                                    color: "var(--color-parchment)",
                                    background: "transparent",
                                    cursor: "pointer",
                                }}
                            >
                                <span className="relative z-10 group-hover:text-obsidian transition-colors duration-500">
                                    Send Message
                                </span>
                                <div
                                    className="absolute inset-0 bg-gold-muted translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                                />
                            </button>
                        </div>
                    </form>
                </div>

                {/* ── RIGHT: Layered Image Composition ── */}
                <div className="relative w-full h-full min-h-[500px] hidden lg:block group rounded-sm overflow-hidden">

                    {/* Background architectural image (fills the tall space) */}
                    <Image
                        src="/hero2.jpg"
                        alt="Property background"
                        fill
                        className="object-cover"
                        style={{ filter: "brightness(0.55) saturate(0.8)" }}
                        sizes="50vw"
                    />

                    {/* Gradient blending for the architectural background */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: "linear-gradient(to top, var(--color-obsidian) 0%, transparent 40%)",
                        }}
                    />

                    {/* Decorative background frame */}
                    <div
                        className="absolute inset-[10%] pointer-events-none"
                        style={{
                            border: "1px solid rgba(201,169,110,0.15)",
                        }}
                    />

                    {/* The inset portrait of the agent (fixes the crop issue) */}
                    <div
                        className="absolute z-10 overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.02]"
                        style={{
                            top: "8%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "85%",         // Wider width
                            maxWidth: "460px",
                            aspectRatio: "16/10", // Much wider aspect ratio to fit the girl clearly
                            border: "1px solid rgba(201,169,110,0.4)"
                        }}
                    >
                        <Image
                            src="/contactme.jpg"
                            alt="Contact"
                            fill
                            className="object-cover transition-all duration-700"
                            sizes="460px"
                        />
                        {/* Subtle inner gold frame on portrait */}
                        <div
                            className="absolute inset-3 pointer-events-none border border-gold-muted/20"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
