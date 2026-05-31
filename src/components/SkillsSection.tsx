"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BadgeCheck, Layers, Gauge } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SkillsSection() {
  const { t } = useTranslation();

  const skills = [
    { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", percentage: 90 },
    { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", percentage: 88 },
    { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", percentage: 95 },
    { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", percentage: 92 },
    { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", percentage: 90 },
    { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", percentage: 93 },
    { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", percentage: 91 },
    { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", percentage: 88 },
    { name: "Express.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-logo.svg", percentage: 86 },
    { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", percentage: 85 },
    { name: "Prisma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", percentage: 88 },
    { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", percentage: 85 },
    { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", percentage: 80 },
    { name: "Go", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", percentage: 75 },
  ];

  const philosophyItems = [
    {
      title: t("skills.codeQuality"),
      desc: t("skills.codeQualityDesc"),
      icon: <BadgeCheck className="w-6 h-6" />,
    },
    {
      title: t("skills.modernArchitecture"),
      desc: t("skills.modernArchitectureDesc"),
      icon: <Layers className="w-6 h-6" />,
    },
    {
      title: t("skills.scalableSystems"),
      desc: t("skills.scalableSystemsDesc"),
      icon: <Gauge className="w-6 h-6" />,
    },
  ];

  return (
    <section className="pt-32 pb-24 overflow-x-hidden relative z-10">
      <div className="px-6 md:px-12 max-w-[1280px] mx-auto">
        {/* Hero Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <span className="font-label-md text-secondary uppercase tracking-[0.2em] mb-4 block">
            {t("skills.systemCapabilities")}
          </span>
          <h2 className="font-headline-lg text-4xl md:text-5xl lg:text-6xl text-on-surface mb-6 font-bold">
            {t("skills.coreExpertise")}
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-secondary to-transparent"></div>
        </motion.header>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 mb-32">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="glass-card p-6 rounded-lg border border-outline-variant/30 flex flex-col items-center justify-center gap-4 hover:border-secondary/50 transition-all group glow-cyan"
            >
              <div className="relative w-20 h-20">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-surface-container-highest" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" strokeWidth="4"></circle>
                  <circle className="text-secondary" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" strokeDasharray="226.2" strokeDashoffset={226.2 * (1 - skill.percentage / 100)} strokeWidth="4"></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center p-5 bg-transparent">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain dark:mix-blend-lighten group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <span className="font-label-md text-on-surface-variant group-hover:text-secondary transition-colors font-medium text-sm">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
