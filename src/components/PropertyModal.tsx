"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Property } from "@/data/properties";

interface PropertyModalProps {
    property: Property | null;
    onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
    const [currentImageIdx, setCurrentImageIdx] = useState(0);

    // Reset image index when property changes
    useEffect(() => {
        if (property) {
            setCurrentImageIdx(0);
        }
    }, [property]);

    // Handle escape key to close
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (property) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [property]);

    if (!property) return null;

    const handlePrevImage = () => {
        setCurrentImageIdx((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIdx((prev) => (prev === property.images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/95 backdrop-blur-md p-4 sm:p-6 lg:p-12 transition-all">
            {/* Modal Container */}
            <div className="relative w-full max-w-6xl max-h-full bg-obsidian border border-white/10 shadow-2xl flex flex-col lg:flex-row overflow-hidden rounded-sm">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-parchment hover:text-gold-muted hover:border-gold-muted/50 transition-all duration-300"
                    aria-label="Close modal"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                {/* LEFT: Image Carousel */}
                <div className="relative w-full lg:w-[60%] h-[350px] sm:h-[450px] lg:h-auto bg-black flex-shrink-0 group">
                    <Image
                        src={property.images[currentImageIdx]}
                        alt={`Image ${currentImageIdx + 1} of ${property.title}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
                    />

                    {/* Navigation Arrows */}
                    {property.images.length > 1 && (
                        <>
                            <button
                                onClick={handlePrevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-parchment hover:text-gold-muted hover:border-gold-muted/50 transition-all duration-300 opacity-0 group-hover:opacity-100"
                                aria-label="Previous image"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-parchment hover:text-gold-muted hover:border-gold-muted/50 transition-all duration-300 opacity-0 group-hover:opacity-100"
                                aria-label="Next image"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </>
                    )}

                    {/* Image Counter Badge */}
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
                        <span className="font-cinzel text-xs text-parchment tracking-widest">
                            {currentImageIdx + 1} / {property.images.length}
                        </span>
                    </div>
                </div>

                {/* RIGHT: Data Content */}
                <div className="w-full lg:w-[40%] flex flex-col h-[400px] lg:h-[700px] overflow-y-auto bg-obsidian p-6 sm:p-8 lg:p-10 custom-scrollbar">

                    {/* Badge / ID */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="block h-px w-6 bg-gold-muted shrink-0" />
                        <span className="font-cinzel text-gold-muted uppercase tracking-[0.3em] text-[10px]">
                            ID: {property.propertyId}
                        </span>
                    </div>

                    <h2 className="font-cinzel text-parchment text-2xl sm:text-3xl lg:text-4xl font-light mb-2 leading-tight">
                        {property.title}
                    </h2>

                    <p className="font-cinzel text-parchment/60 text-sm tracking-wide mb-8">
                        {property.address}
                    </p>

                    <div className="font-cinzel text-gold-muted text-xl sm:text-2xl tracking-wide mb-8 pb-8 border-b border-white/10">
                        {property.price}
                    </div>

                    {/* Primary Stats */}
                    <div className="flex flex-wrap gap-8 items-center mb-8 pb-8 border-b border-white/10">
                        <div className="flex flex-col">
                            <span className="font-cinzel text-parchment text-2xl">{property.beds}</span>
                            <span className="font-cinzel uppercase text-parchment/40 text-[10px] tracking-widest mt-1">Beds</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-cinzel text-parchment text-2xl">{property.baths}</span>
                            <span className="font-cinzel uppercase text-parchment/40 text-[10px] tracking-widest mt-1">Baths</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-cinzel text-parchment text-2xl">{property.garages}</span>
                            <span className="font-cinzel uppercase text-parchment/40 text-[10px] tracking-widest mt-1">Garages</span>
                        </div>
                    </div>

                    <div className="flex-1">
                        <h3 className="font-cinzel text-parchment mb-4 text-sm tracking-widest uppercase border-b border-white/10 pb-2 inline-block">
                            Property Description
                        </h3>
                        <p className="text-sm leading-relaxed text-parchment/70 mb-8 whitespace-pre-line">
                            {property.description}
                        </p>

                        {/* Additional Features (If Any) */}
                        {property.features.length > 0 && (
                            <>
                                <h3 className="font-cinzel text-parchment mb-4 text-sm tracking-widest uppercase border-b border-white/10 pb-2 inline-block">
                                    Property Features
                                </h3>
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    {property.features.map((feature, i) => (
                                        <div key={i} className="flex justify-between items-end border-b border-white/5 pb-2">
                                            <span className="font-cinzel uppercase text-parchment/40 text-[10px] tracking-widest">
                                                {feature.label}
                                            </span>
                                            <span className="font-cinzel text-gold-muted text-sm text-right">
                                                {feature.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-12 flex flex-col sm:flex-row gap-4">
                        <button className="flex-1 font-cinzel text-xs tracking-[0.2em] uppercase py-4 bg-gold-muted text-obsidian hover:bg-parchment transition-colors duration-300">
                            Book Appraisal
                        </button>
                        <button className="flex-1 font-cinzel text-xs tracking-[0.2em] uppercase py-4 bg-transparent text-parchment border border-gold-muted/50 hover:border-gold-muted transition-colors duration-300">
                            Enquire Now
                        </button>
                    </div>

                </div>
            </div>

            {/* Custom scrollbar styles for Modal Data Content */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.02);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(201, 169, 110, 0.3);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(201, 169, 110, 0.5);
                }
            `}</style>
        </div>
    );
}
