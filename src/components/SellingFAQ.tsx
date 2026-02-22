"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
    {
        question: "How do you determine the value of my property?",
        answer: "We conduct a comprehensive market appraisal considering recent local sales, current market demand, property condition, and unique features. We blend data-driven insights with our deep local expertise to recommend a competitive and achievable asking price."
    },
    {
        question: "What are your selling fees and when are they paid?",
        answer: "Our fees are transparent and strictly 'no sale, no fee'. We agree on a fixed percentage or flat fee during the initial consultation. You only pay us upon the successful completion of the sale, deducted seamlessly from the final settlement."
    },
    {
        question: "How should I prepare my home for viewings and photography?",
        answer: "First impressions are vital. We recommend decluttering, maximizing natural light, and addressing minor repairs. Prior to our professional photography session, we provide personalized staging advice to ensure your property looks its absolute best."
    },
    {
        question: "Do I need to be present during property viewings?",
        answer: "No, in fact, we highly recommend that sellers are not present. Buyers feel much more comfortable discussing the property and visualizing themselves living there when the owner is away. Our expert agents handle all viewings and questions on your behalf."
    },
    {
        question: "How long does it typically take to sell a property?",
        answer: "While timelines vary based on market conditions and property type, our proactive marketing typically secures an offer within 4 to 8 weeks. Once an offer is accepted, the conveyancing process usually takes another 8 to 12 weeks to reach completion."
    }
];

export default function SellingFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            className="w-full relative z-10 overflow-hidden"
            style={{
                background: "var(--color-obsidian)",
                padding: "0 0 8rem 0",
            }}
        >
            {/* Top Image Inset Header */}
            <div className="relative w-full h-[350px] mb-16">
                <Image
                    src="/hero1.jpg"
                    alt="FAQ Background"
                    fill
                    className="object-cover"
                    style={{ filter: "brightness(0.55) saturate(0.8)" }}
                    sizes="100vw"
                />

                {/* Dark overlay from bottom to top as requested */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/40 pointer-events-none" />
                <div className="absolute inset-0 bg-obsidian/40 mix-blend-multiply pointer-events-none" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="block h-px w-6 bg-gold-muted" />
                        <span className="font-cinzel uppercase text-[10px] tracking-[0.3em] text-gold-muted drop-shadow-md">Got Questions?</span>
                        <span className="block h-px w-6 bg-gold-muted" />
                    </div>
                    <h2
                        className="font-cinzel font-light leading-tight mb-6 drop-shadow-lg"
                        style={{
                            fontSize: "clamp(2rem, 3vw, 2.75rem)",
                            color: "var(--color-parchment)",
                            letterSpacing: "-0.01em",
                        }}
                    >
                        Selling <span className="text-gold-muted">FAQ</span>
                    </h2>
                </div>
            </div>

            <div className="max-w-[1000px] mx-auto px-4 md:px-0">
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="group transition-all duration-300 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-left flex items-center justify-between p-6 sm:p-8 cursor-pointer focus:outline-none"
                                >
                                    <h3
                                        className="font-cinzel text-base sm:text-lg pr-8 transition-colors duration-300 group-hover:text-gold-muted"
                                        style={{ color: isOpen ? "var(--color-gold-muted)" : "var(--color-parchment)" }}
                                    >
                                        {faq.question}
                                    </h3>
                                    <div
                                        className="relative w-4 h-4 shrink-0 transition-transform duration-500 ease-in-out"
                                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                                    >
                                        {/* Vertical line of the Plus (hides on open) */}
                                        <span
                                            className="absolute top-0 bottom-0 left-1/2 w-[1px] -translate-x-1/2 bg-gold-muted transition-opacity duration-300"
                                            style={{ opacity: isOpen ? 0 : 1 }}
                                        />
                                        {/* Horizontal line */}
                                        <span
                                            className="absolute left-0 right-0 top-1/2 h-[1px] -translate-y-1/2 bg-gold-muted"
                                        />
                                    </div>
                                </button>

                                <div
                                    className="px-6 sm:px-8 overflow-hidden transition-all duration-500 ease-in-out"
                                    style={{
                                        maxHeight: isOpen ? "200px" : "0px",
                                        opacity: isOpen ? 1 : 0,
                                        paddingBottom: isOpen ? "2rem" : "0",
                                    }}
                                >
                                    <p className="text-sm text-white/50 leading-relaxed max-w-[800px]">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
