"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function AboutMe() {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState("0px");

    // Dynamic height calculation for smooth accordion
    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : "0px");
        }
    }, [isExpanded]);

    return (
        <section
            className="w-full relative z-10 overflow-hidden"
            style={{
                background: "var(--color-obsidian)",
                padding: "3rem clamp(1.25rem, 6vw, 6rem) 4rem",
            }}
        >
            {/* Background Texture & Glow */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83v58.34h-58.34l-.83-.83V0h58.34zM53.8 2.49H1.66v55.02h52.14V2.49z' fill='%23C9A96E' fillLinerule='evenodd' opacity='0.05'/%3E%3C/svg%3E")`,
                }}
            />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-muted/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">

                    {/* LEFT: Image Composition */}
                    <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] sm:max-w-xl mx-auto lg:mx-0 group rounded-sm overflow-hidden bg-obsidian border border-white/5 shadow-2xl">

                        {/* Background for transparent PNG */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/Featured3.jpg"
                                alt="Frame Background"
                                fill
                                className="object-cover opacity-[0.35] transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Dark gradient overlay blending to the bottom */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/20 to-obsidian/90 pointer-events-none" />
                        </div>

                        {/* Main Image (Transparent PNG) */}
                        <div className="absolute inset-0 z-10">
                            <Image
                                src="/Brittany-Fagaloatime.png"
                                alt="Brittany Fagaloa-Time"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.8)) brightness(0.95)", objectPosition: "bottom center" }}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                        </div>

                        {/* Secondary Image Overlay (Bottom Right Frame - Landscape) */}
                        <div className="absolute -bottom-6 -right-6 w-[85%] max-w-[320px] lg:max-w-none lg:w-[90%] aspect-[16/9] border-[6px] sm:border-[8px] border-obsidian z-20 shadow-[-10px_-10px_30px_rgba(0,0,0,0.5)] overflow-hidden hidden md:block group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-700">
                            <Image
                                src="/contactme.jpg"
                                alt="Brittany Contact"
                                fill
                                className="object-cover"
                                style={{ filter: "brightness(0.95)" }}
                                sizes="(max-width: 1024px) 33vw, 25vw"
                            />
                        </div>

                        {/* Overlays & Borders */}
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute inset-4 border border-gold-muted/20 pointer-events-none" />

                        <div className="absolute bottom-8 left-8 z-30 pointer-events-none">
                            <p className="font-cinzel text-xl text-parchment drop-shadow-lg">Brittany<br />Fagaloa-Time</p>
                        </div>
                    </div>

                    {/* RIGHT: Biography Content */}
                    <div className="flex flex-col items-start lg:pl-10">

                        <div className="flex items-center gap-3 mb-6">
                            <span className="block h-px w-6 shrink-0 bg-gold-muted" />
                            <span className="font-cinzel uppercase text-[10px] tracking-[0.3em] text-gold-muted">
                                Meet Your Agent
                            </span>
                            <span className="block h-px w-6 shrink-0 bg-gold-muted" />
                        </div>

                        <h2
                            className="font-cinzel font-light leading-snug mb-6"
                            style={{
                                color: "var(--color-parchment)",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            <span className="block" style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}>
                                Speak with <span className="text-gold-muted italic">intention</span>,
                            </span>
                            <span className="block" style={{ fontSize: "clamp(1.5rem, 2.75vw, 2.5rem)", opacity: 0.9 }}>
                                act with <span className="text-gold-muted italic">purpose</span>,
                            </span>
                            <span className="block" style={{ fontSize: "clamp(1.1rem, 2vw, 1.85rem)", opacity: 0.8 }}>
                                deliver with <span className="text-gold-muted italic">results</span>.
                            </span>
                        </h2>

                        {/* Always Visible Short Intro */}
                        <div className="text-sm font-medium leading-relaxed mb-4 space-y-4" style={{ color: "rgba(245,240,232,0.8)" }}>
                            <p>
                                Introducing Brittany Fagaloa-Time – originally from Miramar, Brittany has spent many of her childhood holidays on the beautiful Kapiti Coast, and over the years she’s developed a strong connection to this stunning region.
                            </p>
                            <p>
                                With over 3 years of real estate experience, Brittany has gained invaluable insight working alongside a highly successful agent at one of Wellington’s top real estate companies. With her parents being long members of the property industry - her mother a property manager and father a builder, she’s been immersed in the property world from an early age.
                            </p>
                        </div>

                        {/* Expandable Content Container */}
                        <div
                            ref={contentRef}
                            className="overflow-hidden transition-all duration-700 ease-in-out w-full"
                            style={{ maxHeight, opacity: isExpanded ? 1 : 0 }}
                        >
                            <div className="pb-6 text-sm font-medium leading-relaxed space-y-4" style={{ color: "rgba(245,240,232,0.6)" }}>
                                <p>
                                    In December of 2023, with her husband Ethan and their two dogs Nyla and Zeke, she left behind city life and made the move to the Kapiti Coast, where they purchased their first home. Since moving here, she’s enjoyed taking her dogs on hikes, playing bowls, and exploring all that this beautiful region has to offer. Brittany is always reminded about the beauty of Kapiti, particularly when driving down Transmission Gully with the beach and Kapiti Island in sight.
                                </p>
                                <p>
                                    Brittany brings a fresh, energetic approach to real estate. She is focused on offering innovative solutions while maintaining the reliability and trust you can depend on. Brittany values loyalty and commitment, ensuring that they are prioritized both personally and professionally. She is ready to take action and do whatever it takes to ensure the best possible outcome for all her clients.
                                </p>
                                <p className="text-gold-muted pt-2 text-base">
                                    Whether you're a buyer or considering selling your home, I'm always here for a chat. No question is too big or small!
                                </p>
                            </div>
                        </div>

                        {/* Interactive Toggle Button */}
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="group mt-4 flex items-center gap-3 font-cinzel text-xs tracking-widest uppercase transition-colors duration-300"
                            style={{ color: isExpanded ? "var(--color-parchment)" : "var(--color-gold-muted)" }}
                        >
                            <span className="relative flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300 pointer-events-none"
                                style={{ borderColor: isExpanded ? "rgba(245,240,232,0.3)" : "rgba(201,169,110,0.5)" }}>
                                {/* Plus/Minus Icon Animation */}
                                <span className="absolute w-3 h-px transition-all duration-300 bg-current" />
                                <span
                                    className="absolute w-px h-3 transition-all duration-300 bg-current"
                                    style={{ transform: isExpanded ? "rotate(90deg) scale(0)" : "rotate(0deg) scale(1)" }}
                                />
                            </span>
                            <span className="border-b border-transparent group-hover:border-current transition-colors">
                                {isExpanded ? "Read Less" : "Discover More"}
                            </span>
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
}
