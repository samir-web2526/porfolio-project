"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projectData";

interface Props {
    projectId: string;
}

export default function ProjectDetailsClient({ projectId }: Props) {
    const project = projects.find((p) => p.id === projectId);

    if (!project) notFound();

    return (
        <main className="min-h-screen pt-24 pb-20 px-6 max-w-[1280px] mx-auto relative z-10">

            {/* Back Button */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
                <Link
                    href="/project"
                    className="inline-flex items-center gap-2 text-secondary font-label-md uppercase tracking-widest text-sm hover:gap-3 transition-all"
                >
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    Back to Projects
                </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="relative h-80 lg:h-[480px] rounded-xl overflow-hidden border border-outline-variant/30"
                >
                    <Image
                        src={project.heroImage || project.image}
                        alt={project.title}
                        fill
                        className="object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </motion.div>

                {/* Details */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col gap-6"
                >
                    {/* Phase + Title */}
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="h-[1px] w-8 bg-secondary" />
                            <span className="font-label-md text-secondary uppercase tracking-[0.2em] text-xs">
                                {project.phase || "Project"}
                            </span>
                        </div>
                        <div className="flex justify-between items-start">
                            <h1 className="font-headline-lg text-on-surface text-3xl md:text-4xl font-bold leading-tight">
                                {project.title}
                            </h1>
                            <span className="material-symbols-outlined text-secondary text-2xl flex-shrink-0 ml-4">
                                {project.icon}
                            </span>
                        </div>
                    </div>

                    {/* Tags */}
                    {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-[10px] font-label-md border border-secondary/30 bg-secondary/5 text-secondary rounded-sm uppercase tracking-wider"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Description */}
                    {project.description && (
                        <p className="font-body-lg text-on-surface-variant text-base leading-relaxed">
                            {project.description}
                        </p>
                    )}
                    {project.descriptionExtended && (
                        <p className="font-body-lg text-on-surface-variant/70 text-sm leading-relaxed">
                            {project.descriptionExtended}
                        </p>
                    )}

                    {/* Metrics */}
                    {project.metrics && (
                        <div className="grid grid-cols-2 gap-4 p-4 border border-outline-variant/30 rounded-lg bg-surface-container-low/30">
                            <div>
                                <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">Performance</p>
                                <p className="text-secondary font-bold text-lg">{project.metrics.performance}</p>
                            </div>
                            <div>
                                <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">Uptime</p>
                                <p className="text-secondary font-bold text-lg">{project.metrics.uptime}</p>
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 pt-2">
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 border border-secondary/20 text-secondary font-label-md uppercase tracking-widest hover:bg-secondary/10 transition-all flex justify-between items-center px-4 rounded-lg group/btn active:scale-[0.98]"
                        >
                            Live Link
                            <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                                arrow_forward
                            </span>
                        </a>

                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 border border-secondary/20 text-secondary font-label-md uppercase tracking-widest hover:bg-secondary/10 transition-all flex justify-between items-center px-4 rounded-lg group/btn active:scale-[0.98]"
                        >
                            GitHub Repo
                            <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                                arrow_forward
                            </span>
                        </a>
                    </div>

                </motion.div>
            </div >

        </main >
    );
}