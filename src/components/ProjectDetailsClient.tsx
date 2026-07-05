"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projectData";
import { ArrowLeft, ArrowRight, Star, GitFork, Code, Hospital, School, Layers, Globe, GitBranch, Database, Network, Server } from "lucide-react";
import { useTranslation } from "react-i18next";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  local_hospital: Hospital,
  school: School,
  layers: Layers,
  web: Globe,
  hub: GitBranch,
  storage: Database,
  account_tree: Network,
  dns: Server,
  star: Star,
  fork_left: GitFork,
  code: Code,
  arrow_forward: ArrowRight,
  arrow_back: ArrowLeft,
};

interface Props {
    projectId: string;
}

export default function ProjectDetailsClient({ projectId }: Props) {
    const { t } = useTranslation();

    if (!projects || !projectId) notFound();

    const currentIndex = projects.findIndex((p) => p.id === projectId);

    if (currentIndex === -1) notFound();

    const project = projects[currentIndex];

    // ২. নেভিগেশন ক্যালকুলেশন
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
                    {/* Header: Phase & Title */}
                    <div className="flex flex-col items-center text-center mb-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <span className="h-px w-8 bg-secondary" />
                            <span className="text-secondary font-label-md uppercase tracking-[0.3em] text-xs">
                                {project.phase || t("projects.project")}
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.1 }}
                            className="font-headline-lg text-5xl md:text-6xl text-white font-bold"
                        >
                            {project.title}
                            {project.icon && (() => {
                                const IconComponent = iconMap[project.icon];
                                return IconComponent ? <IconComponent className="w-10 h-10 text-secondary ml-3 align-middle inline-block" /> : null;
                            })()}
                        </motion.h1>
                    </div>

                    {/* Repository Stats */}
                    {project.stats && (
                        <div className="flex flex-wrap gap-4 items-center border-t border-b border-outline-variant/30 py-3 text-xs text-on-surface-variant">
                            <span className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-secondary" />
                                <strong>{project.stats.stars}</strong> {t("projects.stars")}
                            </span>
                            <span className="flex items-center gap-1">
                                <GitFork className="w-4 h-4 text-secondary" />
                                <strong>{project.stats.forks}</strong> {t("projects.forks")}
                            </span>
                            <span className="flex items-center gap-1">
                                <Code className="w-4 h-4 text-secondary" />
                                <strong>{project.stats.language}</strong>
                            </span>
                        </div>
                    )}

                    {/* Technology Tags */}
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

                    {/* Description Paragraphs */}
                    {(project.description || project.descriptionExtended) && (
                        <div className="flex flex-col gap-4">
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
                        </div>
                    )}

                    {/* System Architecture TechStack Grid */}
                    {project.techStack && project.techStack.length > 0 && (
                        <div className="flex flex-col gap-3">
                            <h3 className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">
                                {t("projects.systemArchitecture")}
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {project.techStack.map((tech, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 p-3 rounded-lg border border-outline-variant/30 bg-surface-container-low/20"
                                    >
                                        {tech.icon && (() => {
                                            const TechIcon = iconMap[tech.icon];
                                            return TechIcon ? <TechIcon className="w-5 h-5 text-secondary shrink-0" /> : null;
                                        })()}
                                        <div>
                                            <p className="text-xs font-bold text-white leading-none mb-1">{tech.name}</p>
                                            <p className="text-[10px] text-on-surface-variant/70 leading-none">{tech.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Performance Metrics */}
                    {project.metrics && (
                        <div className="grid grid-cols-2 gap-4 p-4 border border-outline-variant/30 rounded-lg bg-surface-container-low/30">
                            <div>
                                <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">{t("projects.performance")}</p>
                                <p className="text-secondary font-bold text-lg">{project.metrics.performance}</p>
                            </div>
                            <div>
                                <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">{t("projects.uptime")}</p>
                                <p className="text-secondary font-bold text-lg">{project.metrics.uptime}</p>
                            </div>
                        </div>
                    )}

                    {/* CTA Action Buttons */}
                    <div className="flex flex-col gap-3 pt-2">
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 border border-secondary/20 text-secondary font-label-md uppercase tracking-widest hover:bg-secondary/10 transition-all flex justify-between items-center px-4 rounded-lg group/btn active:scale-[0.98]"
                            >
                                {t("projects.liveLink")}
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                        )}

                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 border border-secondary/20 text-secondary font-label-md uppercase tracking-widest hover:bg-secondary/10 transition-all flex justify-between items-center px-4 rounded-lg group/btn active:scale-[0.98]"
                            >
                                {t("projects.githubRepo")}
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                        )}
                    </div>
                </motion.div>
            </div>

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
