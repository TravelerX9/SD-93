"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhotoIcon, VideoCameraIcon, XMarkIcon, SparklesIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const galleryItems = [
    // Photos
    { id: "img-1", type: "image", title: "Momen ke-1", category: "Ramadhan 2026", src: "/foto/1.jpeg" },
    { id: "img-2", type: "image", title: "Momen ke-2", category: "Ramadhan 2026", src: "/foto/2.jpeg" },
    { id: "img-3", type: "image", title: "Momen ke-3", category: "Ramadhan 2026", src: "/foto/3.jpeg" },
    { id: "img-4", type: "image", title: "Momen ke-4", category: "Ramadhan 2026", src: "/foto/4.jpeg" },
    { id: "img-5", type: "image", title: "Momen ke-5", category: "Ramadhan 2026", src: "/foto/5.jpeg" },
    { id: "img-6", type: "image", title: "Momen ke-6", category: "Ramadhan 2026", src: "/foto/6.jpeg" },
    { id: "img-7", type: "image", title: "Momen ke-7", category: "Ramadhan 2026", src: "/foto/7.jpeg" },
    { id: "img-8", type: "image", title: "Momen ke-8", category: "Ramadhan 2026", src: "/foto/8.jpeg" },
    { id: "img-9", type: "image", title: "Momen ke-9", category: "Ramadhan 2026", src: "/foto/9.jpeg" },
    { id: "img-10", type: "image", title: "Momen ke-10", category: "Ramadhan 2026", src: "/foto/10.jpeg" },
    { id: "img-11", type: "image", title: "Momen ke-11", category: "Ramadhan 2026", src: "/foto/11.jpeg" },
    { id: "img-12", type: "image", title: "Momen ke-12", category: "Ramadhan 2026", src: "/foto/12.jpeg" },
    { id: "img-13", type: "image", title: "Momen ke-13", category: "Ramadhan 2026", src: "/foto/13.jpeg" },
    { id: "img-14", type: "image", title: "Momen ke-14", category: "Ramadhan 2026", src: "/foto/14.jpeg" },
    { id: "img-15", type: "image", title: "Momen ke-15", category: "Ramadhan 2026", src: "/foto/15.jpeg" },
    { id: "img-16", type: "image", title: "Momen ke-16", category: "Ramadhan 2026", src: "/foto/16.jpeg" },
    { id: "img-17", type: "image", title: "Momen ke-17", category: "Ramadhan 2026", src: "/foto/17.jpeg" },
    { id: "img-18", type: "image", title: "Momen ke-18", category: "Ramadhan 2026", src: "/foto/18.jpeg" },
    { id: "img-19", type: "image", title: "Momen ke-19", category: "Ramadhan 2026", src: "/foto/19.jpeg" },
    { id: "img-20", type: "image", title: "Momen ke-20", category: "Ramadhan 2026", src: "/foto/20.jpeg" },
    { id: "img-21", type: "image", title: "Momen ke-21", category: "Ramadhan 2026", src: "/foto/21.jpeg" },
    { id: "img-22", type: "image", title: "Momen ke-22", category: "Ramadhan 2026", src: "/foto/22.jpeg" },
    { id: "img-23", type: "image", title: "Momen ke-23", category: "Ramadhan 2026", src: "/foto/23.jpeg" },
    { id: "img-24", type: "image", title: "Momen ke-24", category: "Ramadhan 2026", src: "/foto/24.jpeg" },
    { id: "img-25", type: "image", title: "Momen ke-25", category: "Ramadhan 2026", src: "/foto/25.jpeg" },
    { id: "img-26", type: "image", title: "Momen ke-26", category: "Ramadhan 2026", src: "/foto/26.jpeg" },
    { id: "img-28", type: "image", title: "Momen ke-28", category: "Ramadhan 2026", src: "/foto/28.jpeg" },
    { id: "img-29", type: "image", title: "Momen ke-29", category: "Ramadhan 2026", src: "/foto/29.jpeg" },
    { id: "img-30", type: "image", title: "Momen ke-30", category: "Ramadhan 2026", src: "/foto/30.jpeg" },
    { id: "img-31", type: "image", title: "Momen ke-31", category: "Ramadhan 2026", src: "/foto/31.jpeg" },
    { id: "img-32", type: "image", title: "Momen ke-32", category: "Ramadhan 2026", src: "/foto/32.jpeg" },
    { id: "img-33", type: "image", title: "Momen ke-33", category: "Ramadhan 2026", src: "/foto/33.jpeg" },
    { id: "img-34", type: "image", title: "Momen ke-34", category: "Ramadhan 2026", src: "/foto/34.jpeg" },
    { id: "img-35", type: "image", title: "Momen ke-35", category: "Ramadhan 2026", src: "/foto/35.jpeg" },
    { id: "img-36", type: "image", title: "Momen ke-36", category: "Ramadhan 2026", src: "/foto/36.jpeg" },
    { id: "img-37", type: "image", title: "Momen ke-37", category: "Ramadhan 2026", src: "/foto/37.jpeg" },
    { id: "img-38", type: "image", title: "Momen ke-38", category: "Ramadhan 2026", src: "/foto/38.jpeg" },
    { id: "img-39", type: "image", title: "Momen ke-39", category: "Ramadhan 2026", src: "/foto/39.jpeg" },
    { id: "img-40", type: "image", title: "Momen ke-40", category: "Ramadhan 2026", src: "/foto/40.jpeg" },
    { id: "img-41", type: "image", title: "Momen ke-41", category: "Ramadhan 2026", src: "/foto/41.jpeg" },
    { id: "img-42", type: "image", title: "Momen ke-42", category: "Ramadhan 2026", src: "/foto/42.jpeg" },
    { id: "img-43", type: "image", title: "Momen ke-43", category: "Ramadhan 2026", src: "/foto/43.jpeg" },
    { id: "img-44", type: "image", title: "Momen ke-44", category: "Ramadhan 2026", src: "/foto/44.jpeg" },
    { id: "img-45", type: "image", title: "Momen ke-45", category: "Ramadhan 2026", src: "/foto/45.jpeg" },
    { id: "img-46", type: "image", title: "Momen ke-46", category: "Ramadhan 2026", src: "/foto/46.jpeg" },
    { id: "img-47", type: "image", title: "Momen ke-47", category: "Ramadhan 2026", src: "/foto/47.jpeg" },
    { id: "img-48", type: "image", title: "Momen ke-48", category: "Ramadhan 2026", src: "/foto/48.jpeg" },
    { id: "img-49", type: "image", title: "Momen ke-49", category: "Ramadhan 2026", src: "/foto/49.jpeg" },
    { id: "img-50", type: "image", title: "Momen ke-50", category: "Ramadhan 2026", src: "/foto/50.jpeg" },
    { id: "img-51", type: "image", title: "Momen ke-51", category: "Ramadhan 2026", src: "/foto/51.jpeg" },
    { id: "img-52", type: "image", title: "Momen ke-52", category: "Ramadhan 2026", src: "/foto/52.jpeg" },
    { id: "img-53", type: "image", title: "Momen ke-53", category: "Ramadhan 2026", src: "/foto/53.jpeg" },
    { id: "img-54", type: "image", title: "Momen ke-54", category: "Ramadhan 2026", src: "/foto/54.jpeg" },
    { id: "img-55", type: "image", title: "Momen ke-55", category: "Ramadhan 2026", src: "/foto/55.jpeg" },
    { id: "img-56", type: "image", title: "Momen ke-56", category: "Ramadhan 2026", src: "/foto/56.jpeg" },
    { id: "img-57", type: "image", title: "Momen ke-57", category: "Ramadhan 2026", src: "/foto/57.jpeg" },
    // Videos
    { id: "vid-1", type: "video", title: "Video ke-1", category: "Ramadhan 2026", src: "/video/1.mp4" },
    { id: "vid-2", type: "video", title: "Video ke-2", category: "Ramadhan 2026", src: "/video/2.mp4" },
    { id: "vid-3", type: "video", title: "Video ke-3", category: "Ramadhan 2026", src: "/video/3.mp4" },
    { id: "vid-4", type: "video", title: "Video ke-4", category: "Ramadhan 2026", src: "/video/4.mp4" },
    { id: "vid-5", type: "video", title: "Video ke-5", category: "Ramadhan 2026", src: "/video/5.mp4" },
    { id: "vid-6", type: "video", title: "Video ke-6", category: "Ramadhan 2026", src: "/video/6.mp4" },
    { id: "vid-7", type: "video", title: "Video ke-7", category: "Ramadhan 2026", src: "/video/7.mp4" },
    { id: "vid-8", type: "video", title: "Video ke-8", category: "Ramadhan 2026", src: "/video/8.mp4" },
    { id: "vid-9", type: "video", title: "Video ke-9", category: "Ramadhan 2026", src: "/video/9.mp4" },
    { id: "vid-10", type: "video", title: "Video ke-10", category: "Ramadhan 2026", src: "/video/10.mp4" },
    { id: "vid-11", type: "video", title: "Video ke-11", category: "Ramadhan 2026", src: "/video/11.mp4" },
    { id: "vid-12", type: "video", title: "Video ke-12", category: "Ramadhan 2026", src: "/video/12.mp4" },
    { id: "vid-13", type: "video", title: "Video ke-13", category: "Ramadhan 2026", src: "/video/13.mp4" },
];

const GalleryPage = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
    const [filter, setFilter] = useState("All");

    const filterOptions = ["All", "Foto", "Video"];
    const filteredItems = galleryItems.filter((item) => {
        if (filter === "All") return true;
        if (filter === "Foto") return item.type === "image";
        if (filter === "Video") return item.type === "video";
        return true;
    });

    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomOrigin, setZoomOrigin] = useState("center");

    const selectedItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

    const navigate = (direction: "prev" | "next") => {
        if (selectedItemIndex === null) return;
        setIsZoomed(false); // Reset zoom on navigate
        if (direction === "next") {
            setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
        } else {
            setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
        }
    };

    const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isZoomed) {
            setIsZoomed(false);
            setZoomOrigin("center");
        } else {
            const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - left) / width) * 100;
            const y = ((e.clientY - top) / height) * 100;
            setZoomOrigin(`${x}% ${y}%`);
            setIsZoomed(true);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 font-sans">
            {/* Head is managed via metadata in layout or handled by Next.js in App Router */}

            <main className="mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header Section */}
                <div className="text-center mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 mb-4 tracking-wider uppercase">
                            <SparklesIcon className="w-4 h-4 mr-2" />
                            Moments of 2026
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
                            Gallery <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Visual</span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mx-auto leading-relaxed">
                            Arsip kenangan, acara, ngopi bareng, teman SMP Rajawali dalam menjalin silahturahmi dan persahabatan.
                        </p>
                    </motion.div>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {filterOptions.map((opt) => (
                        <button
                            key={opt}
                            onClick={() => setFilter(opt)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${filter === opt
                                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-orange-50 dark:hover:bg-slate-700"
                                }`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>

                {/* Masonry-like Grid */}
                <motion.div
                    layout
                    className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-500"
                                onClick={() => setSelectedItemIndex(index)}
                            >
                                {/* Media Preview */}
                                <div className="relative aspect-video sm:aspect-auto overflow-hidden">
                                    {item.type === "video" ? (
                                        <video
                                            src={item.src}
                                            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                            muted
                                            playsInline
                                            onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                                            onMouseOut={(e) => {
                                                const video = e.target as HTMLVideoElement;
                                                video.pause();
                                                video.currentTime = 0;
                                            }}
                                        />
                                    ) : (
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                        />
                                    )}

                                    {/* Media Icon Overlay */}
                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-xl text-white">
                                        {item.type === "video" ? (
                                            <VideoCameraIcon className="w-5 h-5" />
                                        ) : (
                                            <PhotoIcon className="w-5 h-5" />
                                        )}
                                    </div>

                                    {/* Hover Information */}
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">{item.category}</p>
                                        <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </main>

            {/* Full-Screen Lightbox */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[110] flex items-center justify-center bg-black/98 backdrop-blur-md"
                        onClick={() => setSelectedItemIndex(null)}
                    >
                        {/* Close Button - Top Right */}
                        <button
                            onClick={() => setSelectedItemIndex(null)}
                            className="absolute top-4 right-4 md:top-6 md:right-6 z-[130] p-2.5 md:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-xl border border-white/20 hover:scale-110 active:scale-90"
                        >
                            <XMarkIcon className="w-4 h-4" />
                        </button>

                        {/* Navigation Controls - Bottom Center */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[130] flex items-center gap-6">
                            <button
                                onClick={(e) => { e.stopPropagation(); navigate("prev"); }}
                                className="p-3.5 bg-black/40 hover:bg-white/10 text-white rounded-full transition-all duration-300 backdrop-blur-md border border-white/10 active:scale-95 group"
                            >
                                <ChevronLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); navigate("next"); }}
                                className="p-3.5 bg-black/40 hover:bg-white/10 text-white rounded-full transition-all duration-300 backdrop-blur-md border border-white/10 active:scale-95 group"
                            >
                                <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Full-Screen Media Display */}
                        <motion.div
                            key={selectedItem.id}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="w-full h-full flex items-center justify-center overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                {selectedItem.type === "video" ? (
                                    <video
                                        src={selectedItem.src}
                                        controls
                                        autoPlay
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <div
                                        className={`relative w-full h-full flex items-center justify-center overflow-hidden ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                                        onClick={handleImageClick}
                                    >
                                        <img
                                            src={selectedItem.src}
                                            alt={selectedItem.title}
                                            className="w-full h-full object-contain transition-transform duration-500 ease-in-out"
                                            style={{
                                                transform: isZoomed ? "scale(3)" : "scale(1)",
                                                transformOrigin: zoomOrigin
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
};

export default GalleryPage;
