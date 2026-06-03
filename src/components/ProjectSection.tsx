"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projectData";
import { useTranslation } from "react-i18next";

export default function ProjectSection() {
  const { t } = useTranslation();

  return (
    <section
      className="pt-32 pb-20 px-6 max-w-[1280px] mx-auto relative z-10"
      id="projects"
    >
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

        <span className="font-label-md text-secondary uppercase tracking-[0.2em] mb-4 block">
          {t("projects.deploymentArchive")}
        </span>

        <h2 className="font-headline-lg text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-on-surface via-secondary to-on-surface bg-clip-text text-transparent">
          {t("projects.projectGallery")}
        </h2>

        <div className="h-0.5 w-32 bg-linear-to-r from-secondary via-secondary/50 to-transparent rounded-full" />
      </motion.header>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card overflow-hidden group rounded-xl border border-outline-variant/30 bg-surface-container-low/50 backdrop-blur-md flex flex-col h-full"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden bg-surface-container-low">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col grow">
              {/* Title */}
              <h3 className="font-headline-md text-on-surface text-xl group-hover:text-secondary transition-colors font-bold mb-6">
                {project.title}
              </h3>

              {/* Button */}
              <div className="mt-auto">
                <Link
                  href={`/project/${project.id}`}
                  className="w-full py-3 border border-secondary/20 text-secondary font-label-md uppercase tracking-widest hover:bg-secondary/10 transition-all flex justify-between items-center px-4 rounded-lg group/btn active:scale-[0.98]"
                >
                  {t("projects.viewDetails")}
                  <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
