"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";

// ── Animated counter hook ──────────────────────────────────────────────────
function useCountUp(target: number, active: boolean, duration = 1000) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    if (!active) return;

    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      setCount(0);
    };
  }, [active, target, duration]);

  return count;
}

// ── Derive a short fallback label from a skill name ────────────────────────
function getFallbackText(name: string): string {
  const words = name.trim().split(/\s+/);
  if (words.length === 1) return name.slice(0, 2).toUpperCase();
  // Multi-word: take first letter of each word, max 3 chars
  return words.map((w) => w[0]).join("").slice(0, 3).toUpperCase();
}

// ── Skill card with icon↔counter swap ─────────────────────────────────────
function SkillCard({
  skill,
  index,
  circumference,
}: {
  skill: { name: string; image: string; percentage: number; forceFallback?: boolean };
  index: number;
  circumference: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(skill.forceFallback ?? false);
  const count = useCountUp(skill.percentage, hovered, 1000);
  const fallback = getFallbackText(skill.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: 0.06 * index }}
      whileHover={{ scale: 1.06, y: -4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative"
    >
      {/* Gradient border overlay on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, var(--color-secondary, #06b6d4) 0%, transparent 60%)",
          padding: "1px",
          borderRadius: "12px",
        }}
      />

      <div className="glass-card relative p-6 pt-7 pb-5 rounded-xl border border-outline-variant/30 group-hover:border-secondary/60 transition-all duration-300 flex flex-col items-center justify-center gap-4 overflow-hidden">
        {/* Inner glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--color-secondary, #06b6d4) 12%, transparent) 0%, transparent 70%)",
          }}
        />

        {/* Circular Progress */}
        <div className="relative w-22 h-22">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 88 88">
            <circle
              cx="44"
              cy="44"
              r="36"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="4.5"
              className="text-surface-container-highest"
            />
            <motion.circle
              cx="44"
              cy="44"
              r="36"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              animate={{
                strokeDashoffset: hovered
                  ? [circumference, circumference * (1 - skill.percentage / 100)]
                  : circumference * (1 - skill.percentage / 100),
              }}
              transition={{
                duration: hovered ? 1 : 0,
                ease: "easeOut",
              }}
              className="text-secondary drop-shadow-[0_0_6px_var(--color-secondary,#06b6d4)]"
            />
          </svg>

          {/* Icon — fades out on hover */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="w-9 h-9 flex items-center justify-center">
              {imgError ? (
                <span
                  className="text-white font-black leading-none tracking-tight select-none"
                  style={{
                    fontSize: fallback.length > 2 ? "11px" : "15px",
                    fontFamily: "'Courier New', Courier, monospace",
                    textShadow: "0 1px 6px rgba(0,0,0,0.5), 0 0 12px rgba(255,255,255,0.15)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {fallback}
                </span>
              ) : (
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={36}
                  height={36}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-contain dark:mix-blend-lighten transition-transform duration-300"
                />
              )}
            </div>
          </div>

          {/* Percentage counter — fades in on hover */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-lg font-bold text-secondary leading-none tabular-nums">
              {count}%
            </span>
          </div>
        </div>

        <span className="font-label-md text-on-surface-variant group-hover:text-secondary transition-colors duration-200 font-medium text-sm text-center leading-tight">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}

// ── Main Section ───────────────────────────────────────────────────────────
export default function SkillsSection() {
  const { t } = useTranslation();

  const skillCategories = [
    {
      label: "Frontend",
      skills: [
        { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", percentage: 90 },
        { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", percentage: 88 },
        { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", percentage: 95 },
        { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", percentage: 92 },
        { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", percentage: 90 },
        { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", percentage: 93 },
        { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", percentage: 91 },
      ],
    },
    {
      label: "Backend",
      skills: [
        { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", percentage: 88 },
        { name: "Express.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", percentage: 86, forceFallback: true },
        { name: "Go", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", percentage: 75 },
      ],
    },
    {
      label: "Database",
      skills: [
        { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", percentage: 85 },
        { name: "Prisma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", percentage: 88 },
        { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", percentage: 85 },
      ],
    },
    {
      label: "DevOps",
      skills: [
        { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", percentage: 80 },
      ],
    },
  ];

  const circumference = 2 * Math.PI * 36;

  return (
    <section className="pt-32 pb-24 overflow-x-hidden relative z-10">
      {/* Animated background glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-125 h-125 rounded-full bg-secondary/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-0 w-100 h-100 rounded-full bg-secondary/15 blur-[100px]"
        />
        {/* Dot grid background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" className="fill-secondary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>

      <div className="px-6 md:px-12 max-w-[1280px] mx-auto relative">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 relative"
        >
          <div className="absolute -top-8 -left-6 w-48 h-48 opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {Array.from({ length: 5 }).map((_, row) =>
                Array.from({ length: 5 }).map((_, col) => (
                  <rect
                    key={`${row}-${col}`}
                    x={col * 42 + 2}
                    y={row * 42 + 2}
                    width="34"
                    height="34"
                    rx="4"
                    className="stroke-secondary"
                    strokeWidth="1"
                    fill="none"
                  />
                ))
              )}
            </svg>
          </div>

          <h2 className="font-headline-lg text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-on-surface via-secondary to-on-surface bg-clip-text text-transparent">
            {t("skills.coreExpertise")}
          </h2>

          <div className="h-0.5 w-32 bg-linear-to-r from-secondary via-secondary/50 to-transparent rounded-full" />
        </motion.header>

        {/* Grouped Skills Grid */}
        <div className="mb-32 space-y-14">
          {skillCategories.map((category, catIndex) => (
            <div key={category.label}>
              {/* Category Label */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: 0.05 * catIndex }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary px-3 py-1 rounded-full border border-secondary/30 bg-secondary/5">
                  {category.label}
                </span>
                <div className="flex-1 h-px bg-linear-to-r from-secondary/20 to-transparent" />
              </motion.div>

              {/* Skills Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5">
                {category.skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                    circumference={circumference}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}