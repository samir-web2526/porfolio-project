"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projectData";

export default function ProjectSection() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-[1280px] mx-auto relative z-10" id="projects">
      {/* Section Header */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-[1px] w-12 bg-secondary"></span>
          <span className="font-label-md text-secondary uppercase tracking-[0.2em] text-xs">Deployment Archive</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-headline-lg text-on-surface leading-none mb-6 text-4xl md:text-5xl lg:text-6xl font-bold"
        >
          PROJECT_GALLERY
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body-lg text-on-surface-variant max-w-2xl text-lg"
        >
          A curated selection of architectural blueprints and full-stack implementations.
        </motion.p>
      </div>

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
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
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
                  View Details
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