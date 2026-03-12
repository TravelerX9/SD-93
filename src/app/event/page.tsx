"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarIcon, MapPinIcon, ClockIcon, SparklesIcon } from "@heroicons/react/24/outline";

const events = [
    {
        id: 1,
        title: "Pentas Seni & Budaya 2026",
        date: "15 Mei 2026",
        time: "08:00 - 15:00",
        location: "Aula Utama SMP Rajawali",
        category: "Culture",
        image: "https://images.unsplash.com/photo-1514525253361-bee8718a74a2?auto=format&fit=crop&q=80&w=800",
        color: "from-purple-500 to-indigo-500",
    },
    {
        id: 2,
        title: "Rajawali Science Fair",
        date: "22 Juni 2026",
        time: "09:00 - 17:00",
        location: "Laboratorium Terpadu",
        category: "Education",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
        color: "from-blue-500 to-cyan-500",
    },
    {
        id: 3,
        title: "Eco-School Movement",
        date: "10 Juli 2026",
        time: "07:00 - 12:00",
        location: "Area Taman Sekolah",
        category: "Environment",
        image: "https://images.unsplash.com/photo-1542601906970-d4d8153b216d?auto=format&fit=crop&q=80&w=800",
        color: "from-green-500 to-teal-500",
    },
];

const EventPage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
            {/* Head is managed via metadata in layout or handled by Next.js in App Router */}

            <main>
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 dark:opacity-20 pointer-events-none">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse delay-700" />
                    </div>

                    <div className="mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 mb-6">
                                <SparklesIcon className="w-4 h-4 mr-2" />
                                School Agenda 2026
                            </span>
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
                                Kegiatan & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-500">Event Seru</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mx-auto mb-10">
                                Temukan berbagai agenda menarik mulai dari seni, sains, hingga kegiatan sosial yang dirancang untuk menginspirasi siswa SMP Rajawali.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Featured Events Group */}
                <section className="py-12 bg-gray-50 dark:bg-slate-800/50 transition-colors duration-300">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {events.map((event, index) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-4 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${event.color} shadow-lg`}>
                                                {event.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 transition-colors">
                                            {event.title}
                                        </h3>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                                <CalendarIcon className="w-5 h-5 mr-3 text-orange-600" />
                                                {event.date}
                                            </div>
                                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                                <ClockIcon className="w-5 h-5 mr-3 text-orange-600" />
                                                {event.time}
                                            </div>
                                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                                <MapPinIcon className="w-5 h-5 mr-3 text-orange-600" />
                                                {event.location}
                                            </div>
                                        </div>

                                        <button className="w-full py-4 px-4 bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white font-bold rounded-2xl hover:bg-orange-600 hover:text-white dark:hover:bg-orange-700 transition-all duration-300 transform active:scale-95">
                                            Lihat Detail
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter / CTA */}
                <section className="py-20">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gradient-to-br from-orange-600 to-pink-600 rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-black/10 rounded-full blur-3xl" />

                            <div className="relative">
                                <h2 className="text-3xl md:text-4xl font-black mb-6">Jangan Lewatkan Keseruan!</h2>
                                <p className="text-lg md:text-xl text-orange-50 mb-10 mx-auto">
                                    Daftarkan diri Anda untuk mendapatkan notifikasi event terbaru langsung melalui WhatsApp atau Email.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <input
                                        type="email"
                                        placeholder="Masukkan Email Anda"
                                        className="px-8 py-4 rounded-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300"
                                    />
                                    <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-2xl shadow-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95">
                                        Ikuti Sekarang
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default EventPage;
