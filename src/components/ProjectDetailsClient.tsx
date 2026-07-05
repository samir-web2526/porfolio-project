"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projectData";
import { ArrowLeft, ArrowRight, Star, GitFork, Code, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Props {
    projectId: string;
}

export default function ProjectDetailsClient({ projectId }: Props) {
    const { t } = useTranslation();

    if (!projects || !projectId) notFound();

    const currentIndex = projects.findIndex((p) => p.id === projectId);

    if (currentIndex === -1) notFound();

    const project = projects[currentIndex];

    const totalProjects = projects.length;
    const prevProject = projects[(currentIndex - 1 + totalProjects) % totalProjects];
    const nextProject = projects[(currentIndex + 1) % totalProjects];

    return (
        <main className="min-h-screen pt-24 pb-20 px-6 max-w-[1280px] mx-auto relative z-10">

            {/* Back Button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-10"
            >
                <Link
                    href="/project"
                    className="inline-flex items-center gap-2 text-secondary font-label-md uppercase tracking-widest text-sm hover:gap-3 transition-all"
                >
                    <ArrowLeft className="w-4 h-4" />
                    {t("projects.backToProjects")}
                </Link>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Project Image Showcase */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="group relative h-80 lg:h-120 rounded-xl overflow-hidden border border-outline-variant/30 bg-surface-container-low/20"
                >
                    {(project.heroImage || project.image) && (
                        <Image
                            src={project.heroImage || project.image}
                            alt={project.title || t("projects.projectImage")}
                            fill
                            priority
                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        />
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent" />
                </motion.div>

                {/* Project Details Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col gap-6"
                >
                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="font-headline-lg text-4xl md:text-5xl text-on-surface font-bold"
                    >
                        {project.title}
                    </motion.h1>

                    {/* Technologies Used */}
                    {project.techStack && project.techStack.length > 0 && (
                        <div className="flex flex-col gap-3">
                            <h3 className="text-sm text-on-surface font-bold">{t("projects.technologiesUsed")}</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs font-label-md border border-outline-variant/50 bg-surface-container-low/50 text-on-surface rounded-md"
                                    >
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tags */}
                    {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-col gap-3">
                            <h3 className="text-sm text-on-surface font-bold">{t("projects.tags")}</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs font-label-md border border-secondary/30 bg-secondary/5 text-secondary rounded-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Category */}
                    {project.category && (
                        <div className="flex flex-col gap-2">
                            <h3 className="text-sm text-on-surface font-bold">{t("projects.category")}</h3>
                            <p className="text-on-surface-variant text-sm">{project.category}</p>
                        </div>
                    )}

                    {/* Links */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-sm text-on-surface font-bold">{t("projects.liveLink")}</h3>
                        <div className="flex flex-wrap items-center gap-4">
                            {project.frontendLink && (
                                <a
                                    href={project.frontendLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-secondary hover:text-secondary/80 transition-colors text-sm"
                                >
                                    <Code className="w-4 h-4" />
                                    {t("projects.frontend")}
                                </a>
                            )}
                            {project.backendLink && (
                                <a
                                    href={project.backendLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-secondary hover:text-secondary/80 transition-colors text-sm"
                                >
                                    <Code className="w-4 h-4" />
                                    {t("projects.backend")}
                                </a>
                            )}
                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-secondary hover:text-secondary/80 transition-colors text-sm"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    {t("projects.liveDemo")}
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Description */}
            {(project.description || project.descriptionExtended) && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-16 p-6 border border-outline-variant/30 rounded-xl bg-surface-container-low/30"
                >
                    <p className="font-body-lg text-on-surface-variant text-base leading-relaxed">
                        {project.description}
                    </p>
                    {project.descriptionExtended && (
                        <p className="font-body-lg text-on-surface-variant/70 text-sm leading-relaxed mt-3">
                            {project.descriptionExtended}
                        </p>
                    )}
                </motion.div>
            )}

            {/* Features & Challenges Grid */}
            {(project.features && project.features.length > 0) || (project.challenges && project.challenges.length > 0) ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {/* Features */}
                    {project.features && project.features.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h3 className="text-2xl font-bold text-on-surface mb-4">{t("projects.features")}</h3>
                            <ul className="flex flex-col gap-3">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-on-surface-variant text-sm leading-relaxed">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {/* Challenges */}
                    {project.challenges && project.challenges.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-on-surface mb-4">{t("projects.challenges")}</h3>
                            <ul className="flex flex-col gap-3">
                                {project.challenges.map((challenge, i) => (
                                    <li key={i} className="flex items-start gap-3 text-on-surface-variant text-sm leading-relaxed">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                        {challenge}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>
            ) : null}

            {/* Bottom Pagination / Project Navigation */}
            {prevProject && nextProject && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-20 pt-8 border-t border-outline-variant/30 flex justify-between items-center gap-4"
                >
                    <Link
                        href={`/project/${prevProject.id}`}
                        className="flex flex-col items-start gap-1 p-4 border border-outline-variant/30 rounded-xl hover:bg-secondary/5 transition-all text-left flex-1 max-w-70 group"
                    >
                        <span className="text-[9px] uppercase tracking-widest text-on-surface-variant/70">
                            {t("projects.previousProject")}
                        </span>
                        <span className="text-secondary font-bold text-sm flex items-center gap-1.5 group-hover:-translate-x-1 transition-transform duration-300">
                            <ArrowLeft className="w-4 h-4" />
                            {prevProject.title}
                        </span>
                    </Link>

                    <Link
                        href={`/project/${nextProject.id}`}
                        className="flex flex-col items-end gap-1 p-4 border border-outline-variant/30 rounded-xl hover:bg-secondary/5 transition-all text-right flex-1 max-w-70 group"
                    >
                        <span className="text-[9px] uppercase tracking-widest text-on-surface-variant/70">
                            {t("projects.nextProject")}
                        </span>
                        <span className="text-secondary font-bold text-sm flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-300">
                            {nextProject.title}
                            <ArrowRight className="w-4 h-4" />
                        </span>
                    </Link>
                </motion.div>
            )}
        </main>
    );
}
