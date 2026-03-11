"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  AcademicCapIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  LightBulbIcon,
  CheckBadgeIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Home = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative h-[100vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero.png"
              alt="SMP RAJAWALI Campus"
              fill
              className="object-cover object-center brightness-[0.7] dark:brightness-[0.4]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent dark:from-black dark:via-black/60 dark:to-transparent" />
          </div>

          <div className="mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className=""
            >
              <div className="mt-10 md:mt-0 inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-semibold mb-6">
                <CheckBadgeIcon className="h-4 w-4" />
                <span>Terakreditasi A (Unggul)</span>
              </div>
              <h1 className="text-display-xl md:text-display-3xl font-extrabold text-white leading-tight mb-6">
                Mencetak Generasi <span className="text-orange-500">Cerdas</span> & <span className="text-orange-500">Berakhlak Mulia</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-10">
                Di SMP RAJAWALI, kami percaya setiap anak memiliki potensi luar biasa. Dengan kurikulum modern dan lingkungan yang mendukung, kami membekali siswa untuk masa depan yang gemilang.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-lg shadow-orange-500/30 transition-all transition-duration-300 w-full sm:w-auto"
                  >
                    <span>Daftar Sekarang</span>
                    <ArrowRightIcon className="h-5 w-5" />
                  </motion.button>
                </Link>
                <Link href="/gallery-2026">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-2xl font-bold transition-all transition-duration-300 w-full sm:w-auto text-center"
                  >
                    Gallery Event Tahunan
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <div className="flex flex-col items-center space-y-2 text-white/50 text-xs tracking-widest uppercase">
              <span>Scroll Explores</span>
              <div className="w-1px h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </div>
          </motion.div>
        </section>

        {/* Event Silahturahmi Tahun 2026 */}
        <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block"
              >
                Dokumentasi Acara
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6"
              >
                Momen Silahturahmi <span className="text-orange-500">2026</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 dark:text-gray-400 text-lg mx-auto"
              >
                Kebersamaan yang tak terlupakan dalam rangkaian acara Silahturahmi Akbar SMP Rajawali.
                Menjalin rindu, berbagi cerita, dan membangun masa depan bersama.
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[1, 33, 20, 35, 17, 30, 28, 69].map((id) => (
                <motion.div
                  key={id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="relative group aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl"
                >
                  <Image
                    src={`/foto/${id}.jpeg`}
                    alt={`Event Photo ${id}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <p className="text-white font-bold">Momen Berharga</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 text-center"
            >
              <Link href="/gallery-2026">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(249 115 22 / 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-black inline-flex items-center space-x-3 shadow-xl transition-all duration-300"
                >
                  <span>Lihat Seluruh Gallery</span>
                  <ArrowRightIcon className="h-5 w-5 stroke-[3]" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50 dark:bg-slate-900 border-y border-gray-100 dark:border-gray-800 transition-colors">
          <div className="container mx-auto px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { label: "Siswa Aktif", value: "850+", icon: UserGroupIcon },
                { label: "Tenaga Pengajar", value: "45", icon: AcademicCapIcon },
                { label: "Ekstrakurikuler", value: "24", icon: RocketLaunchIcon },
                { label: "Alumni Sukses", value: "3000+", icon: LightBulbIcon },
              ].map((stat, idx) => (
                <motion.div key={idx} variants={itemVariants} className="text-center group">
                  <div className="inline-flex p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-xl group-hover:shadow-orange-500/10 transition-all duration-300 mb-4">
                    <stat.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="py-24 bg-gray-900 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 blur-3xl rounded-full translate-x-1/2 pointer-events-none" />
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl z-10">
                <Image src="/images/academic.png" alt="Siswa SMP" width={600} height={400} className="object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-orange-500 rounded-[3rem] z-0 hidden lg:block" />
              <div className="absolute top-20 -left-8 -translate-y-1/2 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl z-20 hidden lg:flex items-center space-x-4">
                <div className="h-12 w-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <UserGroupIcon className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-bold dark:text-white">Community Driven</p>
                  <p className="text-xs text-gray-500">Collaborative Environment</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-display-lg font-bold text-white mb-8 leading-tight">Membangun Kolaborasi Melalui Pembelajaran Inovatif</h2>
              <div className="space-y-6">
                {[
                  "Metode Belajar Berbasis Proyek (Project-Based Learning)",
                  "Fasilitas Lab Komputer & Multimedia Terkini",
                  "Guru-guru Berpengalaman dan Inspiratif",
                  "Integrasi Teknologi dalam Setiap Sesi Kelas"
                ].map((item, id) => (
                  <div key={id} className="flex items-start space-x-4">
                    <div className="mt-1 flex-shrink-0 h-6 w-6 rounded-full bg-orange-500/20 border border-orange-500 flex items-center justify-center">
                      <div className="h-2 w-2 bg-orange-500 rounded-full" />
                    </div>
                    <p className="text-gray-300 text-lg">{item}</p>
                  </div>
                ))}
              </div>
              <Link href="/">
                <motion.button
                  whileHover={{ x: 10 }}
                  className="mt-12 text-white font-bold flex items-center space-x-2 border-b-2 border-orange-500 pb-2 hover:text-orange-500 transition-colors"
                >
                  <span>Selengkapnya</span>
                  <ArrowRightIcon className="h-5 w-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Home;
