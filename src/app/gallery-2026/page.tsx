"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PhotoIcon, VideoCameraIcon, XMarkIcon, SparklesIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const galleryItems = [
    // Photos
    { id: "img-1", type: "image", title: "Momen ke-1", category: "Ramadhan 2026", src: "/foto/0.1.jpeg" },
    { id: "img-2", type: "image", title: "Momen ke-2", category: "Ramadhan 2026", src: "/foto/0.2.jpeg" },
    { id: "img-3", type: "image", title: "Momen ke-3", category: "Ramadhan 2026", src: "/foto/1.1.jpeg" },
    { id: "img-4", type: "image", title: "Momen ke-4", category: "Ramadhan 2026", src: "/foto/1.2.jpeg" },
    { id: "img-5", type: "image", title: "Momen ke-5", category: "Ramadhan 2026", src: "/foto/2.1.jpeg" },
    { id: "img-6", type: "image", title: "Momen ke-6", category: "Ramadhan 2026", src: "/foto/2.2.jpeg" },
    { id: "img-7", type: "image", title: "Momen ke-7", category: "Ramadhan 2026", src: "/foto/3.1.jpeg" },
    { id: "img-8", type: "image", title: "Momen ke-8", category: "Ramadhan 2026", src: "/foto/3.2.jpeg" },
    { id: "img-9", type: "image", title: "Momen ke-9", category: "Ramadhan 2026", src: "/foto/4.1.jpeg" },
    { id: "img-10", type: "image", title: "Momen ke-10", category: "Ramadhan 2026", src: "/foto/4.2.jpeg" },
    { id: "img-11", type: "image", title: "Momen ke-11", category: "Ramadhan 2026", src: "/foto/4.3.jpeg" },
    { id: "img-12", type: "image", title: "Momen ke-12", category: "Ramadhan 2026", src: "/foto/5.1.jpeg" },
    { id: "img-13", type: "image", title: "Momen ke-13", category: "Ramadhan 2026", src: "/foto/5.2.jpeg" },
    { id: "img-14", type: "image", title: "Momen ke-14", category: "Ramadhan 2026", src: "/foto/5.3.jpeg" },
    { id: "img-15", type: "image", title: "Momen ke-15", category: "Ramadhan 2026", src: "/foto/5.4.jpeg" },
    { id: "img-16", type: "image", title: "Momen ke-16", category: "Ramadhan 2026", src: "/foto/5.5.jpeg" },
    { id: "img-17", type: "image", title: "Momen ke-17", category: "Ramadhan 2026", src: "/foto/5.6.jpeg" },
    { id: "img-18", type: "image", title: "Momen ke-18", category: "Ramadhan 2026", src: "/foto/6.1.jpeg" },
    { id: "img-19", type: "image", title: "Momen ke-19", category: "Ramadhan 2026", src: "/foto/6.2.jpeg" },
    { id: "img-20", type: "image", title: "Momen ke-20", category: "Ramadhan 2026", src: "/foto/6.3.jpeg" },
    { id: "img-21", type: "image", title: "Momen ke-21", category: "Ramadhan 2026", src: "/foto/6.4.jpeg" },
    { id: "img-22", type: "image", title: "Momen ke-22", category: "Ramadhan 2026", src: "/foto/7.1.jpeg" },
    { id: "img-23", type: "image", title: "Momen ke-23", category: "Ramadhan 2026", src: "/foto/7.2.jpeg" },
    { id: "img-24", type: "image", title: "Momen ke-24", category: "Ramadhan 2026", src: "/foto/7.3.jpeg" },
    { id: "img-25", type: "image", title: "Momen ke-25", category: "Ramadhan 2026", src: "/foto/7.4.jpeg" },
    { id: "img-26", type: "image", title: "Momen ke-26", category: "Ramadhan 2026", src: "/foto/7.5.jpeg" },
    { id: "img-27", type: "image", title: "Momen ke-27", category: "Ramadhan 2026", src: "/foto/7.6.jpeg" },
    { id: "img-28", type: "image", title: "Momen ke-28", category: "Ramadhan 2026", src: "/foto/7.7.jpeg" },
    { id: "img-29", type: "image", title: "Momen ke-29", category: "Ramadhan 2026", src: "/foto/7.8.jpeg" },
    { id: "img-30", type: "image", title: "Momen ke-30", category: "Ramadhan 2026", src: "/foto/8.1.jpeg" },
    { id: "img-31", type: "image", title: "Momen ke-31", category: "Ramadhan 2026", src: "/foto/8.2.jpeg" },
    { id: "img-32", type: "image", title: "Momen ke-32", category: "Ramadhan 2026", src: "/foto/8.3.jpeg" },
    { id: "img-33", type: "image", title: "Momen ke-33", category: "Ramadhan 2026", src: "/foto/8.4.jpeg" },
    { id: "img-34", type: "image", title: "Momen ke-34", category: "Ramadhan 2026", src: "/foto/8.5.jpeg" },
    { id: "img-35", type: "image", title: "Momen ke-35", category: "Ramadhan 2026", src: "/foto/8.6.jpeg" },
    { id: "img-36", type: "image", title: "Momen ke-36", category: "Ramadhan 2026", src: "/foto/8.7.jpeg" },
    { id: "img-37", type: "image", title: "Momen ke-37", category: "Ramadhan 2026", src: "/foto/8.8.jpeg" },
    { id: "img-38", type: "image", title: "Momen ke-38", category: "Ramadhan 2026", src: "/foto/8.9.jpeg" },
    { id: "img-39", type: "image", title: "Momen ke-39", category: "Ramadhan 2026", src: "/foto/alid.jpeg" },
    { id: "img-40", type: "image", title: "Momen ke-40", category: "Ramadhan 2026", src: "/foto/bambang1.jpeg" },
    { id: "img-42", type: "image", title: "Momen ke-42", category: "Ramadhan 2026", src: "/foto/basid.jpeg" },
    { id: "img-43", type: "image", title: "Momen ke-43", category: "Ramadhan 2026", src: "/foto/bayu.jpeg" },
    { id: "img-44", type: "image", title: "Momen ke-44", category: "Ramadhan 2026", src: "/foto/edi1.jpeg" },
    { id: "img-47", type: "image", title: "Momen ke-47", category: "Ramadhan 2026", src: "/foto/juhdi2.jpeg" },
    { id: "img-48", type: "image", title: "Momen ke-48", category: "Ramadhan 2026", src: "/foto/rahman.jpeg" },
    { id: "img-49", type: "image", title: "Momen ke-49", category: "Ramadhan 2026", src: "/foto/sinode.jpeg" },
    { id: "img-50", type: "image", title: "Momen ke-50", category: "Ramadhan 2026", src: "/foto/ucha.jpeg" },
    { id: "img-51", type: "image", title: "Momen ke-51", category: "Ramadhan 2026", src: "/foto/vina.jpeg" },
    { id: "img-52", type: "image", title: "Momen ke-52", category: "Ramadhan 2026", src: "/foto/9.1.jpeg" },
    { id: "img-53", type: "image", title: "Momen ke-53", category: "Ramadhan 2026", src: "/foto/9.2.jpeg" },
    { id: "img-54", type: "image", title: "Momen ke-54", category: "Ramadhan 2026", src: "/foto/9.3.jpeg" },
    { id: "img-55", type: "image", title: "Momen ke-55", category: "Ramadhan 2026", src: "/foto/9.4.jpeg" },
    { id: "img-56", type: "image", title: "Momen ke-56", category: "Ramadhan 2026", src: "/foto/10.1.jpeg" },
    { id: "img-57", type: "image", title: "Momen ke-57", category: "Ramadhan 2026", src: "/foto/10.2.jpeg" },
    { id: "img-58", type: "image", title: "Momen ke-58", category: "Ramadhan 2026", src: "/foto/10.3.jpeg" },
    { id: "img-59", type: "image", title: "Momen ke-59", category: "Ramadhan 2026", src: "/foto/10.4.jpeg" },
    { id: "img-60", type: "image", title: "Momen ke-60", category: "Ramadhan 2026", src: "/foto/10.5.jpeg" },
    { id: "img-61", type: "image", title: "Momen ke-61", category: "Ramadhan 2026", src: "/foto/10.6.jpeg" },
    { id: "img-62", type: "image", title: "Momen ke-62", category: "Ramadhan 2026", src: "/foto/10.7.jpeg" },
    { id: "img-63", type: "image", title: "Momen ke-63", category: "Ramadhan 2026", src: "/foto/10.8.jpeg" },
    { id: "img-64", type: "image", title: "Momen ke-64", category: "Ramadhan 2026", src: "/foto/10.9.jpeg" },
    { id: "img-65", type: "image", title: "Momen ke-65", category: "Ramadhan 2026", src: "/foto/11.1.jpeg" },
    { id: "img-66", type: "image", title: "Momen ke-66", category: "Ramadhan 2026", src: "/foto/11.2.jpeg" },
    { id: "img-67", type: "image", title: "Momen ke-67", category: "Ramadhan 2026", src: "/foto/11.3.jpeg" },
    { id: "img-68", type: "image", title: "Momen ke-68", category: "Ramadhan 2026", src: "/foto/11.4.jpeg" },
    { id: "img-69", type: "image", title: "Momen ke-69", category: "Ramadhan 2026", src: "/foto/11.5.jpeg" },
    { id: "img-70", type: "image", title: "Momen ke-70", category: "Ramadhan 2026", src: "/foto/11.6.jpeg" },
    { id: "img-71", type: "image", title: "Momen ke-71", category: "Ramadhan 2026", src: "/foto/11.7.jpeg" },
    { id: "img-72", type: "image", title: "Momen ke-72", category: "Ramadhan 2026", src: "/foto/11.8.jpeg" },
    { id: "img-73", type: "image", title: "Momen ke-73", category: "Ramadhan 2026", src: "/foto/12.1.jpg" },
    { id: "img-74", type: "image", title: "Momen ke-74", category: "Ramadhan 2026", src: "/foto/12.2.jpg" },
    { id: "img-75", type: "image", title: "Momen ke-75", category: "Ramadhan 2026", src: "/foto/12.3.jpg" },
    { id: "img-76", type: "image", title: "Momen ke-76", category: "Ramadhan 2026", src: "/foto/12.4.jpg" },
    { id: "img-77", type: "image", title: "Momen ke-77", category: "Ramadhan 2026", src: "/foto/12.5.jpg" },
    { id: "img-78", type: "image", title: "Momen ke-78", category: "Ramadhan 2026", src: "/foto/12.6.jpg" },
    { id: "img-79", type: "image", title: "Momen ke-79", category: "Ramadhan 2026", src: "/foto/12.7.jpg" },
    { id: "img-80", type: "image", title: "Momen ke-80", category: "Ramadhan 2026", src: "/foto/12.8.jpg" },
    { id: "img-81", type: "image", title: "Momen ke-81", category: "Ramadhan 2026", src: "/foto/12.9.jpg" },
    { id: "img-82", type: "image", title: "Momen ke-82", category: "Ramadhan 2026", src: "/foto/12.10.jpg" },
    { id: "img-83", type: "image", title: "Momen ke-83", category: "Ramadhan 2026", src: "/foto/2015.jpeg" },
    { id: "img-84", type: "image", title: "Momen ke-84", category: "Ramadhan 2026", src: "/foto2/1704a.jpeg" },
    { id: "img-85", type: "image", title: "Momen ke-85", category: "Ramadhan 2026", src: "/foto2/1704b.jpeg" },
    { id: "img-86", type: "image", title: "Momen ke-86", category: "Ramadhan 2026", src: "/foto2/1704c.jpeg" },
    { id: "img-87", type: "image", title: "Momen ke-87", category: "Ramadhan 2026", src: "/foto2/1704d.jpeg" },
    { id: "img-88", type: "image", title: "Momen ke-88", category: "Ramadhan 2026", src: "/foto2/1704e.jpeg" },
    { id: "img-89", type: "image", title: "Momen ke-89", category: "Ramadhan 2026", src: "/foto2/1704f.jpeg" },
    { id: "img-90", type: "image", title: "Momen ke-90", category: "Ramadhan 2026", src: "/foto2/1704g.jpeg" },
    // Videos
    { id: "vid-1", type: "video", title: "Video ke-1", category: "Ramadhan 2026", src: "/video/1.mp4" },
];

const GalleryPage = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
    const [filter, setFilter] = useState("All");

    const filterOptions = ["All", "Foto", "Video"];
    const filteredItems = galleryItems
        .filter((item) => {
            if (filter === "All") return true;
            if (filter === "Foto") return item.type === "image";
            if (filter === "Video") return item.type === "video";
            return true;
        })
        .sort((a, b) => {
            // First sort by type
            if (a.type === "image" && b.type === "video") return -1;
            if (a.type === "video" && b.type === "image") return 1;

            // Then sort by the numerical part of the id
            const aNum = parseInt(a.id.replace(/\D/g, ""), 10) || 0;
            const bNum = parseInt(b.id.replace(/\D/g, ""), 10) || 0;
            return aNum - bNum;
        });

    const [columns, setColumns] = useState(3);

    useEffect(() => {
        const updateColumns = () => {
            if (window.innerWidth >= 1024) setColumns(3);
            else if (window.innerWidth >= 640) setColumns(2);
            else setColumns(1);
        };
        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, []);

    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [zoomOrigin, setZoomOrigin] = useState("center");

    const selectedItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

    const navigate = (direction: "prev" | "next") => {
        if (selectedItemIndex === null) return;
        setScale(1); // Reset zoom on navigate
        setPosition({ x: 0, y: 0 });
        if (direction === "next") {
            setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
        } else {
            setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
        }
    };

    const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (scale > 1) {
            setScale(1);
            setPosition({ x: 0, y: 0 });
            setZoomOrigin("center");
        } else {
            const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - left) / width) * 100;
            const y = ((e.clientY - top) / height) * 100;
            setZoomOrigin(`${x}% ${y}%`);
            setScale(2.5);
        }
    };

    // Helper for multi-touch pinch zoom
    const lastPinchDistance = useRef(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        if (e.touches.length === 2) {
            lastPinchDistance.current = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (e.touches.length === 2 && lastPinchDistance.current > 0) {
            const distance = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            const delta = distance / lastPinchDistance.current;
            setScale(prevScale => Math.min(Math.max(1, prevScale * delta), 5));
            lastPinchDistance.current = distance;
        }
    };

    const handleTouchEnd = () => {
        lastPinchDistance.current = 0;
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
                            Gallery <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-500">Visual</span>
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
                            className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${filter === opt
                                ? "bg-orange-600 text-white shadow-lg shadow-orange-600/30 scale-105"
                                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-orange-50 dark:hover:bg-slate-700"
                                }`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>

                {/* Masonry Grid with Left-to-Right distribution */}
                <div className="flex flex-row gap-6">
                    {Array.from({ length: columns }).map((_, colIndex) => (
                        <div key={colIndex} className="flex-1 flex flex-col gap-6">
                            {filteredItems
                                .filter((_, idx) => idx % columns === colIndex)
                                .map((item) => {
                                    // Find true index in original filteredItems for accurate lightbox navigation
                                    const originalIndex = filteredItems.findIndex(fi => fi.id === item.id);
                                    return (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.3 }}
                                            className="relative group cursor-pointer overflow-hidden rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-500"
                                            onClick={() => setSelectedItemIndex(originalIndex)}
                                        >
                                            {/* Media Preview */}
                                            <div className="relative overflow-hidden">
                                                {item.type === "video" ? (
                                                    <video
                                                        src={item.src}
                                                        className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                                        muted
                                                        playsInline
                                                        onMouseOver={(e) => {
                                                            const video = e.target as HTMLVideoElement;
                                                            video.play().catch(() => { });
                                                        }}
                                                        onMouseOut={(e) => {
                                                            const video = e.target as HTMLVideoElement;
                                                            video.pause();
                                                            video.currentTime = 0;
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="relative aspect-auto">
                                                        <Image
                                                            src={item.src}
                                                            alt={item.title}
                                                            width={500}
                                                            height={500}
                                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                            className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                                        />
                                                    </div>
                                                )}

                                                {/* Hover Info */}
                                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">{item.category}</p>
                                                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                        </div>
                    ))}
                </div>
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
                            className="absolute top-4 right-4 md:top-6 md:right-6 z-[130] p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-xl border border-white/20 hover:scale-110 active:scale-90"
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
                            className="w-full h-full flex items-center justify-center"
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
                                        className={`relative w-full h-full flex items-center justify-center overflow-hidden ${scale > 1 ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                                        onClick={handleImageClick}
                                        onTouchStart={handleTouchStart}
                                        onTouchMove={handleTouchMove}
                                        onTouchEnd={handleTouchEnd}
                                        onWheel={(e) => {
                                            if (e.ctrlKey) {
                                                const newScale = Math.min(Math.max(1, scale - e.deltaY * 0.01), 5);
                                                setScale(newScale);
                                            }
                                        }}
                                    >
                                        <motion.div
                                            drag={scale > 1}
                                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                            dragElastic={0.1}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                touchAction: scale > 1 ? 'none' : 'pan-y'
                                            }}
                                        >
                                            <motion.div
                                                animate={{
                                                    scale: scale,
                                                    x: position.x,
                                                    y: position.y,
                                                }}
                                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    position: 'relative',
                                                    transformOrigin: zoomOrigin
                                                }}
                                            >
                                                <Image
                                                    src={selectedItem.src}
                                                    alt={selectedItem.title}
                                                    fill
                                                    className="object-contain"
                                                    draggable={false}
                                                />
                                            </motion.div>
                                        </motion.div>
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
