"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowUpRight, Brain, Smartphone, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

const PROJECTS = [
    {
        title: "AfekaFinalCode",
        description: "Cracking the code: How words predict project success. NLP research predicting success probability based on text.",
        tags: ["Python", "NLP", "Research"],
        icon: Brain,
        color: "text-pink-400",
        url: "https://github.com/kateLint/AfekaFinalCode",
    },
    {
        title: "AIAgent",
        description: "Autonomous AI that thinks for itself. A machine learning agent framework for autonomous decision making.",
        tags: ["Python", "Machine Learning", "Agents"],
        icon: Brain,
        color: "text-teal-400",
        url: "https://github.com/kateLint/AIAgent",
    },
    {
        title: "SmartSketchbook",
        description: "Your ideas, digitized and amplified. An Android creative tool integrating intelligent features.",
        tags: ["Kotlin", "Android", "Creative Tools"],
        icon: Smartphone,
        color: "text-indigo-400",
        url: "https://github.com/kateLint/SmartSketchbook",
    },
    {
        title: "virtual-food-photographe",
        description: "Making food look Michelin-star worthy, algorithmically. Computer vision automation for food photography.",
        tags: ["TypeScript", "Computer Vision", "Automation"],
        icon: Search,
        color: "text-yellow-400",
        url: "https://github.com/kateLint/virtual-food-photographe",
    },
];

export function Projects() {
    return (
        <section id="projects" className="relative w-full py-24">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
                    Featured Projects
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {PROJECTS.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <GlassCard
                                key={index}
                                gradient
                                className="group flex flex-col justify-between border-slate-800 bg-slate-900/40 hover:-translate-y-2 hover:bg-slate-800/60"
                            >
                                <div>
                                    <div className={`mb-6 inline-flex rounded-xl bg-slate-950 p-3 ring-1 ring-inset ring-slate-800 ${project.color}`}>
                                        <Icon size={32} />
                                    </div>

                                    <h3 className="mb-3 text-xl font-bold text-slate-100 group-hover:text-white">
                                        {project.title}
                                    </h3>

                                    <p className="mb-6 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    <div className="mb-6 flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="rounded-md bg-slate-800/50 px-2 py-1 text-xs font-medium text-slate-400 border border-slate-700/50">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="w-full justify-between border border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white"
                                        onClick={() => window.open(project.url, '_blank')}
                                    >
                                        View Source <ArrowUpRight size={16} />
                                    </Button>
                                </div>
                            </GlassCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
