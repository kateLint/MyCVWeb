"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GraduationCap, Award } from "lucide-react";

const EDUCATION = [
    {
        degree: "M.Sc., Computer Science (Machine Learning)",
        institution: "Afeka College of Engineering",
        description: "Master's thesis on NLP + predictive modeling",
        icon: GraduationCap,
    },
    {
        degree: "B.Sc., Computer Science",
        institution: "Afeka College of Engineering",
        description: "",
        icon: GraduationCap,
    },
    {
        degree: "Python Certification",
        institution: "05–06/2020",
        description: "",
        icon: Award,
    },
];

export function Education() {
    return (
        <section id="education" className="relative w-full py-24 bg-slate-950/50">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
                    Education
                </h2>

                <div className="mx-auto max-w-4xl space-y-6">
                    {EDUCATION.map((edu, index) => {
                        const Icon = edu.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <GlassCard className="group border-slate-800 bg-slate-900/40 hover:bg-slate-800/60">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal-500/10 border border-teal-500/30">
                                            <Icon size={24} className="text-teal-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-teal-300 mb-1">
                                                {edu.degree}
                                            </h3>
                                            <h4 className="text-lg font-medium text-white mb-2">
                                                {edu.institution}
                                            </h4>
                                            {edu.description && (
                                                <p className="text-slate-400">{edu.description}</p>
                                            )}
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
