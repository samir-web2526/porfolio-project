"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Hand, History, Download } from "lucide-react";
import profileImg from "@/assets/images/banner.png";
import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = useMemo(() => [
    t("hero.roles.fullstackDeveloper"),
    t("hero.roles.javascriptSpecialist"),
    t("hero.roles.csStudent"),
    t("hero.roles.problemSolver"),
  ], [t]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleType = () => {
      const fullText = roles.at(currentRoleIndex) || "";
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);

        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(100);
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  const stats = [
    { value: t("hero.stats.yearsExperience"), label: t("hero.stats.codeExperience") },
    { value: t("hero.stats.completedProjects"), label: t("hero.stats.completedProjectsLabel") },
    { value: t("hero.stats.algorithmsSolved"), label: t("hero.stats.algorithmsSolvedLabel") },
    { value: t("hero.stats.technologiesUsed"), label: t("hero.stats.technologiesUsedLabel") },
  ];

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
          <span className="text-secondary font-label-caps text-[10px] uppercase tracking-widest font-bold">{t("hero.availableForProjects")}</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-on-surface leading-tight font-bold">
          {t("hero.architecting")}<span className="text-secondary">{t("hero.scalable")}</span>{t("hero.fullstackSolutions")}
        </motion.h1>

        <motion.div variants={itemVariants} className="font-headline-md text-xl sm:text-2xl md:text-3xl text-on-surface font-semibold flex items-center justify-center lg:justify-start gap-2 h-9">
          <span>{t("hero.imSamirA")}</span>
          <span className="text-secondary border-r-2 border-secondary pr-1.5 animate-pulse inline-block font-bold min-w-[20px]">{currentText}</span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-on-surface-variant font-body-lg text-base md:text-lg max-w-150 mx-auto lg:mx-0"
        >
          {t("hero.heroDesc")}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-md items-center justify-center lg:justify-start pt-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-secondary-container text-on-secondary-container font-label-md px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-secondary transition-all blue-glow group active:scale-95 font-medium"
          >
            {t("hero.letsTalk")}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <Link href="#" className="text-secondary font-label-md flex items-center gap-2 hover:text-on-surface transition-colors group p-4 font-medium">
            {t("hero.downloadCv")}
            <Download size={20} className="group-hover:rotate-45 transition-transform" />
          </Link>
        </motion.div>

        {/* Technical Chips */}
        <motion.div variants={containerVariants} className="pt-8 md:pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {stats.map((stat, i) => (
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
        className="flex-1 relative w-full max-w-100 lg:max-w-none"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-secondary/10 blur-[80px] md:blur-[120px] rounded-full scale-75 pointer-events-none"></div>

        {/* Main Image Container */}
        <div className="relative z-10 w-full aspect-square max-w-80 sm:max-w-105 md:max-w-125 mx-auto">
          <div className="absolute inset-0 border border-outline-variant rounded-full scale-105"></div>
          <div className="absolute inset-0 border border-secondary/30 rounded-full scale-110 transition-transform hover:scale-100 duration-500"></div>

          <div className="relative h-full w-full rounded-full overflow-hidden border border-outline-variant bg-secondary/20 shadow-2xl" style={{ backgroundColor: "rgba(0, 209, 178, 0.15)" }}>
            <Image
              alt={t("hero.profileAlt")}
              src={profileImg}
              fill
              className="object-cover transition-all duration-700 drop-shadow-2xl"
              priority
              sizes="(max-width: 640px) 320px, (max-width: 768px) 420px, 500px"
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
              <div className="text-on-surface font-bold text-[10px] md:text-sm">{t("hero.hiImSamir")}</div>
              <div className="text-on-surface-variant text-[8px] md:text-[10px] uppercase tracking-widest font-label-caps font-bold">{t("hero.fullstackExpert")}</div>
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
              <div className="text-on-surface font-bold text-[10px] md:text-sm">{t("hero.yearsBuilding")}</div>
              <div className="text-on-surface-variant text-[8px] md:text-[10px] uppercase tracking-widest font-label-caps font-bold">{t("hero.codeSolutions")}</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
