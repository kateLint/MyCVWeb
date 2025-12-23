"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Briefcase, Smartphone, Zap } from "lucide-react";

const EXPERIENCES = [
    {
        company: "Bank Hapoalim",
        role: "Senior Android Dev & Lead",
        period: "2018 - Present",
        description: "Led 'Wonder' & Capital Market apps. Integrated HuggingFace models on-device. Managed Scrum teams.",
        icon: Briefcase,
        tags: ["Kotlin", "Jetpack Compose", "HuggingFace", "Scrum"],
    },
    {
        company: "Amgine",
        role: "Android Developer",
        period: "2015 - 2018",
        description: "Built End-to-End travel solutions with complex Reactive UI and real-time updates.",
        icon: Smartphone,
        tags: ["Java", "RxJava", "Animations"],
    },
    {
        company: "Diwip",
        role: "Android Game Lead",
        period: "2013 - 2015",
        description: "Built game engines using LibGDX. Implemented complex gaming physics and interactions.",
        icon: Zap,
        tags: ["LibGDX", "Game Physics", "OpenGL"],
    },
];

export function Experience() {
    return (
        <section id="experience" className="relative w-full pt-8 pb-24 scroll-mt-16">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
                    Professional Journey
                </h2>

                <div className="relative mx-auto max-w-4xl">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] top-0 h-full w-0.5 bg-gradient-to-b from-teal-500/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

                    {EXPERIENCES.map((exp, index) => {
                        const Icon = exp.icon;
                        const isLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative mb-12 flex flex-col gap-8 md:flex-row ${isLeft ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[20px] top-8 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-950 bg-teal-500 shadow-[0_0_15px_rgba(45,212,191,0.5)] md:left-1/2">
                                    <Icon size={18} className="text-slate-950" />
                                </div>

                                {/* Content Card */}
                                <div className="ml-12 w-full md:ml-0 md:w-1/2">
                                    <div className={isLeft ? "md:pl-12" : "md:pr-12"}>
                                        <GlassCard className="group border-slate-800 bg-slate-900/40 hover:bg-slate-800/60">
                                            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                                                <h3 className="text-xl font-bold text-teal-300">{exp.company}</h3>
                                                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-mono text-slate-400 border border-slate-700">{exp.period}</span>
                                            </div>
                                            <h4 className="mb-4 text-lg font-medium text-white">{exp.role}</h4>
                                            <p className="mb-4 text-slate-400">{exp.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.tags.map(tag => (
                                                    <span key={tag} className="text-xs font-medium text-teal-500/80">#{tag}</span>
                                                ))}
                                            </div>
                                        </GlassCard>
                                    </div>
                                </div>

                                {/* Empty Spacer for alternating layout */}
                                <div className="hidden w-1/2 md:block" />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Education Section */}
                <motion.div
                    id="education"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mx-auto mt-16 max-w-2xl text-center scroll-mt-16"
                >
                    <h3 className="mb-6 text-2xl font-bold text-white">Education</h3>
                    <div className="space-y-3 text-slate-400">
                        <p className="text-sm">
                            <span className="text-teal-300 font-medium">M.Sc., Computer Science (Machine Learning)</span> — Afeka College of Engineering
                            <br />
                            <span className="text-xs text-slate-500">Master's thesis on NLP + predictive modeling</span>
                        </p>
                        <p className="text-sm">
                            <span className="text-teal-300 font-medium">B.Sc., Computer Science</span> — Afeka College of Engineering
                        </p>
                        <p className="text-sm">
                            <span className="text-teal-300 font-medium">Certification: Python</span> — 05–06/2020
                        </p>
                    </div>
                </motion.div>

                {/* Featured Projects Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="mt-16 text-center"
                >
                    <h3 className="text-2xl font-bold text-white">Featured Projects</h3>
                </motion.div>
            </div>
        </section>
    );
}
