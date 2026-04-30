"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Hand, History } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-8 py-8 md:py-12 lg:py-xl flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 min-h-[calc(100vh-80px)]">
      {/* Left Side: Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left w-full"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-sm px-4 py-2 bg-secondary-container/10 border border-secondary-container/20 rounded-full mx-auto lg:mx-0">
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse mr-2"></span>
          <span className="text-secondary font-label-caps text-[10px] uppercase tracking-widest font-bold">Available for New Projects</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-on-surface leading-tight font-bold">
          Architecting <span className="text-secondary">Scalable</span> Fullstack Solutions
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-on-surface-variant font-body-lg text-base md:text-lg max-w-[600px] mx-auto lg:mx-0"
        >
          Hi, I'm Samir Baishnab. I bridge the gap between complex backend architecture and seamless frontend experiences to build robust, high-performance web applications.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-md items-center justify-center lg:justify-start pt-4">
          <button className="w-full sm:w-auto bg-secondary-container text-on-secondary-container font-label-md px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-secondary transition-all blue-glow group active:scale-95 border-0 font-medium">
            Let&apos;s Talk
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <Link href="#" className="text-secondary font-label-md flex items-center gap-2 hover:text-on-surface transition-colors group p-4 font-medium">
            Portfolio
            <ExternalLink size={20} className="group-hover:rotate-45 transition-transform" />
          </Link>
        </motion.div>

        {/* Technical Chips */}
        <motion.div variants={containerVariants} className="pt-8 md:pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {[
            { value: "13+", label: "Years of Exp." },
            { value: "250+", label: "Global Projects" },
            { value: "100%", label: "Client Success" },
            { value: "99.9%", label: "Uptime Goal" },
          ].map((stat, i) => (
            <motion.div key={i} variants={itemVariants} className="p-4 glass-card rounded-xl">
              <div className="text-secondary text-xl md:text-2xl font-headline-md mb-1 font-medium">{stat.value}</div>
              <div className="text-on-surface/60 text-[8px] md:text-[10px] font-label-caps uppercase font-bold tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Side: Profile Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="flex-1 relative w-full max-w-[400px] lg:max-w-none"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-secondary/10 blur-[80px] md:blur-[120px] rounded-full scale-75 pointer-events-none"></div>

        {/* Main Image Container */}
        <div className="relative z-10 w-full aspect-square max-w-[320px] sm:max-w-[420px] md:max-w-[500px] mx-auto">
          <div className="absolute inset-0 border-[1px] border-outline-variant rounded-full scale-105"></div>
          <div className="absolute inset-0 border-[1px] border-secondary/30 rounded-full scale-110 transition-transform hover:scale-100 duration-500"></div>

          <div className="relative h-full w-full rounded-full overflow-hidden border border-outline-variant bg-secondary/20 shadow-2xl" style={{ backgroundColor: "rgba(0, 209, 178, 0.15)" }}>
            <Image
              alt="Samir Baishnab"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5bYkCi631RfKzpTCLeW_IU_NDT0O75YQejDfZuZ-7QosqMPDvoDRjh5th47sjUP4QwM5nTFlbe3WNAw53_oph_S2ElbNKDU1742LitjMSOH0s3JR2O27M-QeAxrbgslP-ariYoBszplcwIFUlNzXdwg3UrJKsMOhSEz3JXQwLyEnYwIEbruvQOOA2N8-af8xu5UJk9QtZoiJkjEfEhppdCKl7N-7fE275uhIPtKbFZvMKOsbSt7h3AAdZD8PUqtcltot5CIkLL2mI"
              fill
              className="object-cover transition-all duration-700 drop-shadow-2xl"
            />
          </div>

          {/* Floating Badge 1 */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:flex absolute -top-4 -left-4 md:-top-6 md:-left-6 glass-card px-4 md:px-6 py-3 md:py-4 rounded-2xl items-center gap-3 md:gap-4 z-20 shadow-xl"
          >
            <div className="bg-secondary/20 p-2 rounded-lg">
              <Hand className="text-secondary" size={24} />
            </div>
            <div>
              <div className="text-on-surface font-bold text-[10px] md:text-sm">Hi, I&apos;m Samir</div>
              <div className="text-on-surface-variant text-[8px] md:text-[10px] uppercase tracking-widest font-label-caps font-bold">Fullstack Expert</div>
            </div>
          </motion.div>

          {/* Floating Badge 2 */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden sm:flex absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 glass-card px-4 md:px-6 py-3 md:py-4 rounded-2xl items-center gap-3 md:gap-4 z-20 shadow-xl border-secondary/20"
          >
            <div className="bg-secondary p-2 rounded-lg">
              <History className="text-on-secondary-container" size={24} />
            </div>
            <div>
              <div className="text-on-surface font-bold text-[10px] md:text-sm">13 Years</div>
              <div className="text-on-surface-variant text-[8px] md:text-[10px] uppercase tracking-widest font-label-caps font-bold">Of Experience</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
