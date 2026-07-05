"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projectData";
import { ExternalLink, Code } from "lucide-react";
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

        <h2 className="font-headline-lg text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-on-surface via-secondary to-on-surface bg-clip-text text-transparent">
          {t("projects.projectGallery")}
        </h2>

        <div className="h-0.5 w-32 bg-linear-to-r from-secondary via-secondary/50 to-transparent rounded-full" />
      </motion.header>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <div className="relative h-56 overflow-hidden bg-surface-container-low px-4 pt-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col grow">
              {/* Title */}
              <h3 className="font-headline-md text-on-surface text-xl group-hover:text-secondary transition-colors font-bold mb-2">
                {project.title}
              </h3>

              {/* Description */}
              {project.description && (
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
              )}

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] font-label-md border border-secondary/20 bg-secondary/5 text-secondary rounded-sm uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              <div className="flex items-center gap-3 mb-4 text-xs">
                {project.frontendLink && (
                  <a
                    href={project.frontendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-secondary/80 hover:text-secondary transition-colors"
                  >
                    <Code className="w-3.5 h-3.5" />
                    {t("projects.frontend")}
                  </a>
                )}
                {project.backendLink && (
                  <a
                    href={project.backendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-secondary/80 hover:text-secondary transition-colors"
                  >
                    <Code className="w-3.5 h-3.5" />
                    {t("projects.backend")}
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-secondary/80 hover:text-secondary transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {t("projects.liveDemo")}
                  </a>
                )}
              </div>

              {/* Button */}
              <div className="mt-auto">
                <Link
                  href={`/project/${project.id}`}
                  className="w-full py-3 border border-secondary/20 text-secondary font-label-md uppercase tracking-widest hover:bg-secondary/10 transition-all flex justify-center items-center px-4 rounded-lg group/btn active:scale-[0.98]"
                >
                  {t("projects.viewDetails")}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
