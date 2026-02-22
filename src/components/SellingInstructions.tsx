"use client";

import Image from "next/image";

const steps = [
    { num: "01", title: "Free Appraisal", desc: "We conduct an independent assessment to explain market trends and help you strategize to maximize your sale price." },
    { num: "02", title: "Instruct Us", desc: "We arrange professional photography, floorplans, and staging advice to present your property in its best light." },
    { num: "03", title: "Launch Online", desc: "Your photos are enhanced and approved, then your listing goes live across all major property portals immediately." },
    { num: "04", title: "Viewings & Feedback", desc: "We vet prospective buyers, handle all inquiries promptly, and provide accurate feedback after every scheduled viewing." },
    { num: "05", title: "Offers & Negotiation", desc: "We negotiate to secure the best price while strictly verifying each buyer's financial position and deposit." },
    { num: "06", title: "Exchange & Completion", desc: "We manage the entire conveyancing process, providing you with weekly updates until the keys are successfully handed over." }
];

export default function SellingInstructions() {
    return (
        <section
            className="w-full relative"
            style={{
                background: "var(--color-obsidian)",
                padding: "8rem clamp(1.25rem, 6vw, 6rem)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
        >
            {/* Background Pattern */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(201%2C169%2C110%2C0.05)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Split layout: Image spanning left side, Steps on right */}
            <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">

                {/* LEFT: Image Box with Overlay Text */}
                <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-auto lg:h-[450px] rounded-sm overflow-hidden flex flex-col justify-start p-8 sm:p-10 border border-white/10 shadow-2xl lg:sticky lg:top-32 group">
                    <Image
                        src="/hero1.jpg" // Differentiate from buying page image
                        alt="Selling Process Guidance"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        style={{ filter: "brightness(0.7) saturate(0.9)" }}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    {/* Dark gradient overlay so text is readable */}
                    <div className="absolute inset-0 bg-gradient-to-r from-obsidian/95 via-obsidian/60 to-transparent pointer-events-none" />

                    {/* Decorative inner border */}
                    <div className="absolute inset-[10px] pointer-events-none border border-gold-muted/20" />

                    <div className="relative z-10 mt-2">
                        <div className="flex items-center gap-3 mb-4">
                            <span
                                className="block h-px w-6 shrink-0 bg-gold-muted"
                            />
                            <span
                                className="font-cinzel uppercase text-[10px] tracking-[0.3em] text-gold-muted drop-shadow-md"
                            >
                                Step-by-Step
                            </span>
                        </div>
                        <h2
                            className="font-cinzel font-light leading-tight mb-4 text-parchment drop-shadow-lg"
                            style={{
                                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            How to sell<br />
                            <span className="text-gold-muted">with us</span>
                        </h2>
                        <p
                            className="text-sm text-white/80 max-w-[320px] leading-relaxed drop-shadow-md font-medium"
                        >
                            We manage every intricate detail of the sales process. Enjoy complete peace of mind while we secure the premium result your property deserves.
                        </p>
                    </div>
                </div>

                {/* RIGHT: Grid Steps (Now 6 steps, 2 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col group">
                            <div className="flex items-end gap-4 mb-4 pb-4 border-b border-white/10 relative overflow-hidden">
                                {/* Animated Gold Border on Hover */}
                                <div
                                    className="absolute bottom-0 left-0 h-[1px] bg-gold-muted transition-all duration-500 w-0 group-hover:w-full"
                                />
                                <span
                                    className="font-cinzel transition-colors duration-500 text-gold-muted opacity-60 group-hover:opacity-100"
                                    style={{
                                        fontSize: "clamp(2rem, 3vw, 2.5rem)",
                                        lineHeight: 0.8,
                                    }}
                                >
                                    {step.num}
                                </span>
                                <h3
                                    className="font-cinzel text-lg mb-1 transition-colors duration-500 group-hover:text-gold-muted"
                                    style={{ color: "var(--color-parchment)" }}
                                >
                                    {step.title}
                                </h3>
                            </div>
                            <p
                                className="text-sm"
                                style={{
                                    color: "rgba(245,240,232,0.5)",
                                    lineHeight: 1.7,
                                    maxWidth: "95%"
                                }}
                            >
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
