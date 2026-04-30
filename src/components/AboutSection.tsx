"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Plane, Activity } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
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

export default function AboutSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-8 py-16 md:py-24 lg:py-32 flex flex-col gap-12 md:gap-16 relative z-10">
      {/* Header */}
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="space-y-4 md:space-y-6 text-center"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 md:gap-4">
          <span className="h-[1px] w-8 md:w-12 bg-secondary shadow-[0_0_10px_#41e4c0]"></span>
          <span className="text-secondary font-label-md uppercase tracking-[0.2em] text-[10px] md:text-sm font-bold">
            Intro
          </span>
          <span className="h-[1px] w-8 md:w-12 bg-secondary shadow-[0_0_10px_#41e4c0] sm:hidden"></span>
        </motion.div>
        
        <motion.h2 variants={itemVariants} className="font-headline-lg text-3xl md:text-5xl lg:text-6xl text-white font-bold">
          About <span className="text-secondary">Me</span>
        </motion.h2>
      </motion.header>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
        
        {/* Visual Element (Portrait) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group w-full max-w-[400px] lg:max-w-none lg:w-[40%] px-4 md:px-0 order-1"
        >
          {/* Background Glow */}
          <div className="absolute -inset-4 bg-secondary/10 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
          
          <div className="relative overflow-hidden rounded-2xl border-2 border-secondary/20 shadow-2xl aspect-[4/5]">
            <Image
              alt="Samir Baishnab"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8E65Avpmn-s_C5JnSxUR39uomJm36ZG93GQSqtlf5IiHO0LLcp3XebVFGEd-G1vXwViUD2mUpECrfKf0bNvTb9kh8mGqnwisALp9VlX5V5N19MaTrS4H8eLrbdTcM0dz8oEEX5gujqNvqEvMZhQGxpsuirIs8mdieKl6UeiehdIVXPOM4ER6Xv4QwfoIlvdyAVnagIdlFUq68czshqb56_1wIzCssfvkA7V4tNxrb9tM-BqUQhNAaVUrQQWsEUIfHagcYpIHdioxz"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="hidden sm:block absolute -bottom-6 -right-6 w-24 md:w-32 h-24 md:h-32 border-r-2 border-b-2 border-secondary/40 rounded-br-3xl transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <div className="hidden sm:block absolute -top-6 -left-6 w-24 md:w-32 h-24 md:h-32 border-l-2 border-t-2 border-secondary/40 rounded-tl-3xl transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
        </motion.div>

        {/* Content Elements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8 flex-1 order-2 w-full"
        >
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            <motion.h3 variants={itemVariants} className="font-headline-md text-2xl md:text-3xl lg:text-4xl text-primary font-bold">
              Samir Baishnab
            </motion.h3>
            <motion.p variants={itemVariants} className="font-body-lg text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Hello! I'm <span className="text-secondary font-medium">Samir Baishnab</span>, a Fullstack Expert Web Developer with over 13 years of experience. I am experienced with all stages of the development cycle for dynamic web projects, having an in-depth knowledge including advanced React, Next.js, Node.js, and complex system architecture. Strong background in management and leadership.
            </motion.p>
          </div>

          {/* Skills Terminal-style Display */}
          <motion.div variants={itemVariants} className="glass-card p-5 md:p-6 rounded-xl space-y-5 w-full shadow-lg border border-secondary/10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              <div className="w-3 h-3 rounded-full bg-secondary-container"></div>
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <span className="ml-2 font-code-sm text-on-surface-variant/60 text-[10px] md:text-xs tracking-widest uppercase">
                Interests.json
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-surface-container/80 border border-secondary/30 text-secondary font-label-md text-xs md:text-sm rounded-full hover:bg-secondary/10 hover:border-secondary/60 transition-all cursor-default"
              >
                <Activity size={16} />
                Sporting
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-surface-container/80 border border-secondary/30 text-secondary font-label-md text-xs md:text-sm rounded-full hover:bg-secondary/10 hover:border-secondary/60 transition-all cursor-default"
              >
                <Plane size={16} />
                Travelling
              </motion.span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start pt-4">
            <button className="flex items-center gap-2 text-secondary font-label-md text-sm md:text-base group hover:bg-secondary/10 py-3 px-6 border border-secondary/30 hover:border-secondary rounded-xl transition-all duration-300 blue-glow font-medium">
              Learn More
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
