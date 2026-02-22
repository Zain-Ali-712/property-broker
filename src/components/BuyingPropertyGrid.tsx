"use client";

import Image from "next/image";
import Link from "next/link";

const allProperties = [
    {
        id: "prop-b1",
        title: "Spectacular Ocean Front Estate",
        address: "18 Marine Parade, Paraparaumu",
        description: "Experience unparalleled coastal luxury with panoramic sea views, expansive decking, and private beach access.",
        price: "$2,450,000",
        beds: 4,
        baths: 3,
        sqm: 280,
        image: "/hero1.jpg",
        tags: ["Waterfront", "Luxury"],
    },
    {
        id: "prop-b2",
        title: "Modern Minimalist Retreat",
        address: "74 Valley View Road, Levin",
        description: "A masterclass in contemporary design featuring floor-to-ceiling glass, polished concrete, and rural tranquility.",
        price: "$1,150,000",
        beds: 3,
        baths: 2,
        sqm: 195,
        image: "/hero2.jpg",
        tags: ["New Build", "Rural View"],
    },
    {
        id: "prop-b3",
        title: "Classic Heritage Villa",
        address: "12 Victoria Street, Foxton",
        description: "Meticulously restored character home blending historic charm with high-end modern conveniences.",
        price: "$895,000",
        beds: 4,
        baths: 2,
        sqm: 220,
        image: "/hero1.jpg",
        tags: ["Character", "Restored"],
    },
    {
        id: "prop-b4",
        title: "Contemporary Hillside Home",
        address: "9 Skyline Drive, Wellington",
        description: "Architectural brilliance perched above the city, offering dramatic views and seamless indoor-outdoor flow.",
        price: "$1,750,000",
        beds: 5,
        baths: 4,
        sqm: 310,
        image: "/hero2.jpg",
        tags: ["City Views", "Architectural"],
    },
    {
        id: "prop-b5",
        title: "Boutique Coastal Apartment",
        address: "Apt 4B, The Pier, Kapiti",
        description: "Secure, low-maintenance living steps from the sand. Perfect as a high-yield investment or weekend getaway.",
        price: "$780,000",
        beds: 2,
        baths: 1,
        sqm: 110,
        image: "/hero1.jpg",
        tags: ["Investment", "Beachside"],
    },
    {
        id: "prop-b6",
        title: "Expansive Country Manor",
        address: "220 Equestrian Way, Horowhenua",
        description: "A sprawling estate offering premium equestrian facilities, landscaped gardens, and ultimate privacy.",
        price: "$3,200,000",
        beds: 6,
        baths: 5,
        sqm: 450,
        image: "/hero2.jpg",
        tags: ["Equestrian", "Acreage"],
    }
];

export default function BuyingPropertyGrid() {
    return (
        <section
            className="w-full relative z-10"
            style={{
                background: "var(--color-obsidian)",
                padding: "2rem clamp(1.25rem, 6vw, 6rem) 4rem",
            }}
        >
            <div className="max-w-[1600px] mx-auto">

                {/* Separator before section */}
                <div className="w-full h-px bg-white/10 mb-16" />

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span
                                className="block h-px w-6 shrink-0"
                                style={{ background: "var(--color-gold-muted)" }}
                            />
                            <span
                                className="font-cinzel uppercase"
                                style={{ fontSize: "10px", letterSpacing: "0.3em", color: "var(--color-gold-muted)" }}
                            >
                                Current Portfolio
                            </span>
                        </div>
                        <h2
                            className="font-cinzel font-light leading-tight"
                            style={{
                                fontSize: "clamp(2rem, 3vw, 2.75rem)",
                                color: "var(--color-parchment)",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            Available <span style={{ color: "var(--color-gold-muted)" }}>Properties</span>
                        </h2>
                    </div>
                    {/* Parallel Description added */}
                    <p className="text-sm" style={{ color: "rgba(245,240,232,0.5)", maxWidth: "420px", lineHeight: 1.7 }}>
                        Explore a meticulously curated selection of exceptional homes, estates, and investment opportunities tailored for discerning buyers.
                    </p>
                </div>

                {/* ── Redesigned Property Grid ── */}
                {/* Applied grid layout, ensuring each Link acts as an independent Flex Column child */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProperties.map((prop) => (
                        <Link href={`#`} key={prop.id} className="group flex flex-col w-full overflow-hidden bg-white/[0.015] hover:bg-white/[0.03] border border-white/5 hover:border-gold-muted/40 transition-all duration-500">
                            {/* Image Wrapper */}
                            <div className="relative w-full aspect-[4/3] overflow-hidden shrink-0">
                                <Image
                                    src={prop.image}
                                    alt={prop.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                {/* Overlay Fade */}
                                <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-transparent transition-colors duration-500" />

                                {/* ONLY ONE Main Tag on top */}
                                <div className="absolute top-4 left-4">
                                    <span className="font-cinzel text-[9px] uppercase tracking-widest bg-obsidian/90 backdrop-blur-md text-gold-muted px-3 py-1.5 border border-white/10 shadow-lg">
                                        {prop.tags[0]}
                                    </span>
                                </div>
                            </div>

                            {/* Info Wrapper - flex-1 expands it to match row height */}
                            <div className="p-6 md:p-8 flex flex-col flex-1 bg-obsidian min-h-[250px]">
                                <h3 className="font-cinzel text-xl text-parchment mb-2 group-hover:text-gold-muted transition-colors leading-tight">{prop.title}</h3>
                                <p className="text-sm text-white/40 mb-4">{prop.address}</p>

                                <p className="text-sm text-white/60 mb-6 leading-relaxed flex-1">
                                    {prop.description}
                                </p>

                                <div className="mt-auto shrink-0 border-t border-white/5 pt-5">
                                    {/* Stats & Secondary Tag Row */}
                                    <div className="flex flex-wrap items-center justify-between mb-4 gap-y-4">
                                        <div className="flex items-center gap-4 text-[10px] font-cinzel tracking-widest text-white/60">
                                            <span className="flex items-center gap-1"><span className="text-gold-muted text-xs">{prop.beds}</span> BEDS</span>
                                            <span className="flex items-center gap-1"><span className="text-gold-muted text-xs">{prop.baths}</span> BATHS</span>
                                        </div>
                                        <span className="text-[9px] font-cinzel tracking-widest uppercase text-white/40 bg-white/5 px-2 py-1 rounded-sm">
                                            {prop.tags[1]}
                                        </span>
                                    </div>

                                    {/* Price and More Details Button Row */}
                                    <div className="flex items-end justify-between mt-2">
                                        <p className="font-cinzel text-2xl text-gold-muted tracking-wide font-light">{prop.price}</p>
                                        <div className="flex items-center gap-2 group-hover:text-gold-muted transition-colors">
                                            <span className="font-cinzel text-[10px] tracking-widest text-white/40 uppercase group-hover:text-gold-muted transition-colors">
                                                More Details
                                            </span>
                                            <span className="text-gold-muted transform translate-x-0 group-hover:translate-x-1 transition-all duration-300 text-lg font-light">
                                                &rarr;
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center mt-12 md:mt-16">
                    <button
                        className="font-cinzel uppercase transition-all duration-300 relative overflow-hidden group"
                        style={{
                            fontSize: "10px",
                            letterSpacing: "0.25em",
                            color: "var(--color-obsidian)",
                            background: "var(--color-gold-muted)",
                            padding: "1rem 3rem",
                            border: "1px solid var(--color-gold-muted)",
                        }}
                    >
                        <span className="relative z-10 group-hover:text-gold-muted transition-colors duration-300">Load More Properties</span>
                        <div className="absolute inset-0 bg-obsidian translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </section>
    );
}
