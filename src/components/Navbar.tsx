"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { SunIcon, MoonIcon, AcademicCapIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="sticky top-0 z-50 w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300"
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left Section: Logo & Text */}
                    <Link href="/">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-3 cursor-pointer group"
                        >
                            <div className="p-2 bg-gradient-to-tr from-orange-500 to-orange-400 rounded-xl shadow-lg group-hover:shadow-orange-500/20 transition-all duration-300">
                                <AcademicCapIcon className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                                SDN Belitung Selatan 2 '93
                            </span>
                        </motion.div>
                    </Link>

                    <div className="flex items-center space-x-8">
                        <div className="hidden md:flex items-center space-x-1">
                            <Link href="/" className={`px-4 py-3 text-sm transition-colors duration-200 rounded-lg ${pathname === '/' ? 'font-bold text-orange-500' : 'font-medium text-gray-500 dark:text-gray-400 hover:text-orange-700'}`}>
                                Home
                            </Link>
                            <span className="text-gray-300 dark:text-gray-700 mx-1">|</span>
                            <Link href="/gallery-2026" className={`px-4 py-3 text-sm transition-colors duration-200 rounded-lg ${pathname === '/gallery-2026' ? 'font-bold text-orange-500' : 'font-medium text-gray-500 dark:text-gray-400 hover:text-orange-700'}`}>
                                Gallery - 2026
                            </Link>
                        </div>

                        <div className="flex items-center space-x-3 md:space-x-8">
                            {/* Mobile Menu Button - Left of Dark Mode on Mobile */}
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-3 rounded-xl md:hidden bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-orange-500 hover:ring-2 hover:ring-orange-500 transition-all duration-300"
                                aria-label="Toggle Mobile Menu"
                            >
                                {isMenuOpen ? (
                                    <XMarkIcon className="h-6 w-6" />
                                ) : (
                                    <Bars3Icon className="h-6 w-6" />
                                )}
                            </motion.button>

                            {/* Dark Mode Toggle */}
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="relative p-3 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-yellow-400 hover:ring-2 hover:ring-orange-500 transition-all duration-300 overflow-hidden"
                                aria-label="Toggle Dark Mode"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {theme === "dark" ? (
                                        <motion.div
                                            key="moon"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <MoonIcon className="h-5 w-5" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="sun"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <SunIcon className="h-5 w-5" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 overflow-hidden"
                    >
                        <div className="px-6 py-8 space-y-4">
                            <Link href="/" onClick={() => setIsMenuOpen(false)}>
                                <div className={`flex items-center space-x-4 p-4 rounded-2xl transition-all ${pathname === '/' ? 'bg-orange-500 text-white font-bold' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'}`}>
                                    <span className="text-lg">Home</span>
                                </div>
                            </Link>
                            <Link href="/gallery-2026" onClick={() => setIsMenuOpen(false)}>
                                <div className={`flex items-center space-x-4 p-4 rounded-2xl transition-all ${pathname === '/gallery-2026' ? 'bg-orange-500 text-white font-bold' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'}`}>
                                    <span className="text-lg">Gallery - 2026</span>
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
