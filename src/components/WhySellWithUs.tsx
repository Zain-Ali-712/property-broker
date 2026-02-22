"use client";

import Image from "next/image";

const reasons = [
    {
        title: "Unrivalled Market Reach",
        desc: "We leverage exclusive global syndications and targeted digital campaigns to ensure your property is seen by the right high-net-worth buyers, not just the local market.",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
        title: "Premium Presentation",
        desc: "Every listing receives the white-glove treatment: bespoke copywriting, architectural photography, aerial drone footage, and elegant staging advice to maximize appeal.",
        icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    },
    {
        title: "Tailored Strategy",
        desc: "There is no one-size-fits-all approach. We build a personalized marketing and pricing strategy specifically designed for your property's unique architecture and location.",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
    },
    {
        title: "Discreet & Professional",
        desc: "For clients requiring ultimate privacy, our off-market sales division connects sellers directly with thoroughly vetted buyers without a public digital footprint.",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    }
];

export default function WhySellWithUs() {
    return (
        <section
            className="w-full relative z-10"
            style={{
                background: "var(--color-obsidian)",
                padding: "4rem clamp(1.25rem, 6vw, 6rem)",
            }}
        >
            <div className="max-w-[1400px] mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/10 pb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="block h-px w-6 shrink-0 bg-gold-muted" />
                            <span className="font-cinzel uppercase text-[10px] tracking-[0.3em] text-gold-muted">
                                Our Difference
                            </span>
                        </div>
                        <h2
                            className="font-cinzel font-light leading-tight"
                            style={{
                                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                                color: "var(--color-parchment)",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            Why Sell <span className="text-gold-muted">With Us</span>
                        </h2>
                    </div>

                    <p className="text-sm text-white/50 max-w-[400px] leading-relaxed">
                        We don't just list properties; we launch them. Our distinguished agency is built on trust, transparency, and a relentless commitment to achieving record-breaking results.
                    </p>
                </div>

                {/* 4-Column Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="group relative p-8 sm:p-10 border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent hover:from-white/[0.04] hover:to-white/[0.01] transition-all duration-500 flex flex-col items-start overflow-hidden rounded-sm hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-gold-muted/5"
                        >
                            {/* Accent Top Border */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-muted/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />

                            {/* Icon Wrapper */}
                            <div className="w-14 h-14 rounded-full bg-white/[0.02] border border-gold-muted/20 flex items-center justify-center mb-8 group-hover:bg-gold-muted/10 group-hover:border-gold-muted/40 transition-colors duration-500 shadow-inner">
                                <svg
                                    className="w-6 h-6 text-gold-muted/80 group-hover:text-gold-muted transition-colors duration-500"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d={reason.icon} />
                                </svg>
                            </div>

                            <h3 className="font-cinzel text-xl text-parchment mb-4 group-hover:text-gold-muted transition-colors">
                                {reason.title}
                            </h3>

                            <p className="text-sm text-white/50 leading-relaxed">
                                {reason.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

            {/* Bottom Separator */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
        </section>
    );
}
