"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import profileImg from "@/assets/images/about.png";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-24 px-4 md:px-6 max-w-[1280px] mx-auto relative z-10" id="about">
      <div className="flex flex-col items-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-px w-8 bg-secondary"></span>
          <span className="text-secondary font-label-md uppercase tracking-[0.3em] text-xs">{t("about.intro")}</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="font-headline-lg text-5xl md:text-6xl text-white font-bold"
        >
          {t("about.about")} <span className="text-secondary">{t("about.me")}</span>
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left Column: Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 relative group"
        >
          {/* Decorative Frames based on Reference */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-secondary/40 rounded-tl-xl transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-secondary/40 rounded-br-xl transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>

          <div className="relative overflow-hidden rounded-xl border border-secondary/20 shadow-2xl bg-surface-container-low p-2">
            <div className="relative w-full aspect-4/5">
              <Image
                alt={t("about.portraitAlt")}
                src={profileImg}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out rounded-lg"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 ring-1 ring-inset ring-secondary/20 pointer-events-none rounded-xl"></div>
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 space-y-10"
        >
          <motion.header variants={itemVariants}>
            <h2 className="font-headline-lg text-4xl text-white mb-6 font-bold">{t("about.name")}</h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed text-lg">
              {t("about.hello")}<span className="text-secondary font-medium">{t("about.name")}</span>{t("about.aboutText")}
            </p>
          </motion.header>

          {/* Education / Academic Path */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-on-surface-variant/50 font-label-md uppercase tracking-widest text-xs">{t("about.academicPath")}</span>
              <div className="h-px grow bg-outline-variant/30"></div>
            </div>
            <div className="space-y-4 relative">
              {/* Vertical Timeline Glow Line */}
              <div className="absolute left-3.25 top-2 bottom-2 w-0.5 timeline-line opacity-50"></div>

              {/* Undergraduate Item */}
              <div className="education-card animate-stagger-1 flex gap-6 p-4 rounded-xl border border-transparent">
                <div className="relative z-10 flex flex-col items-center pt-2">
                  <div className="timeline-dot w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_rgba(65,228,192,0.4)] transition-all duration-300"></div>
                </div>
                <div className="grow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-headline-md text-lg text-primary-fixed-dim font-bold">{t("about.undergraduate")}</h3>
                    <span className="tech-badge px-3 py-1 text-[11px] rounded text-secondary font-semibold uppercase">
                      {t("about.undergradPeriod")}
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-1">{t("about.undergradSchool")}</p>
                  <p className="text-xs text-on-surface-variant/50 font-code-sm italic">{t("about.undergradMajor")}</p>
                </div>
              </div>

              {/* HSC Item */}
              <div className="education-card animate-stagger-2 flex gap-6 p-4 rounded-xl border border-transparent">
                <div className="relative z-10 flex flex-col items-center pt-2">
                  <div className="timeline-dot w-3 h-3 rounded-full border-2 border-secondary/60 bg-background transition-all duration-300"></div>
                </div>
                <div className="grow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-headline-md text-lg text-primary-fixed-dim font-bold">{t("about.hsc")}</h3>
                    <span className="tech-badge px-3 py-1 text-[11px] rounded text-on-surface-variant/70 border-outline-variant/30 font-semibold uppercase">
                      {t("about.hscPeriod")}
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-1">{t("about.hscSchool")}</p>
                  <p className="text-xs text-on-surface-variant/50 font-code-sm italic">{t("about.hscMajor")}</p>
                </div>
              </div>

              {/* SSC Item */}
              <div className="education-card animate-stagger-3 flex gap-6 p-4 rounded-xl border border-transparent">
                <div className="relative z-10 flex flex-col items-center pt-2">
                  <div className="timeline-dot w-3 h-3 rounded-full border-2 border-secondary/60 bg-background transition-all duration-300"></div>
                </div>
                <div className="grow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-headline-md text-lg text-primary-fixed-dim font-bold">{t("about.ssc")}</h3>
                    <span className="tech-badge px-3 py-1 text-[11px] rounded text-on-surface-variant/70 border-outline-variant/30 font-semibold uppercase">
                      {t("about.sscPeriod")}
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-1">{t("about.sscSchool")}</p>
                  <p className="text-xs text-on-surface-variant/50 font-code-sm italic">{t("about.sscMajor")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interests.json Section */}
          {/* <motion.div variants={itemVariants} className="glass-card rounded-xl p-6 border border-secondary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <div className="w-2 h-2 rounded-full bg-secondary/60"></div>
              </div>
              <span className="text-[10px] font-code-sm text-on-surface-variant/40 tracking-[0.2em] uppercase">{t("about.interestsJson")}</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2 px-4 py-2 border border-secondary/20 rounded-lg text-secondary text-sm font-label-md hover:bg-secondary/10 transition-colors cursor-default">
                <span className="material-symbols-outlined text-lg">sports_soccer</span>
                {t("about.sporting")}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 border border-secondary/20 rounded-lg text-secondary text-sm font-label-md hover:bg-secondary/10 transition-colors cursor-default">
                <span className="material-symbols-outlined text-lg">flight_takeoff</span>
                {t("about.travelling")}
              </span>
            </div>
          </motion.div> */}

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <button className="flex items-center gap-3 px-8 py-3.5 border border-secondary/30 rounded-lg text-secondary font-label-md text-sm hover:bg-secondary/10 transition-all duration-300 group">
              {t("about.learnMore")}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
