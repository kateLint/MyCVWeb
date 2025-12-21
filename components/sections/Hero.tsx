"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, User } from "lucide-react";
import { Button } from "@/components/ui/Button"; // Requires manual import of Button
import { HeroNetwork } from "@/components/sections/HeroNetwork";
import confetti from "canvas-confetti";

export function Hero() {
    const triggerConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#2dd4bf", "#f8fafc", "#94a3b8"], // teal, white, slate
            disableForReducedMotion: true,
        });
    };

    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-slate-950 px-4 pt-32 text-center">
            {/* Background Neural Network */}
            <HeroNetwork />

            {/* Floating Gradient Orb for mood */}
            <div className="absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[120px]" />

            <div className="relative z-10 max-w-5xl space-y-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto w-fit rounded-full border border-teal-500/30 bg-teal-500/10 px-5 py-1.5 backdrop-blur-md"
                >
                    <span className="text-sm font-medium tracking-wide text-teal-300">Open to Work</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-7xl font-thin tracking-[0.02em] text-white sm:text-8xl md:text-9xl lg:text-[10rem]"
                >
                    <span className="block font-extralight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-50 to-slate-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        Keren
                    </span>
                    <span className="block font-light bg-gradient-to-br from-teal-300 via-teal-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(45,212,191,0.5)] mt-2">
                        Lint
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mx-auto max-w-2xl text-lg text-slate-400 sm:text-xl"
                >
                    Code Architect & AI Innovator.
                    <br />
                    I turn caffeine into production-grade code and impossible problems into elegant solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Button size="lg" onClick={triggerConfetti} className="group">
                        <User className="mr-2 h-5 w-5" />
                        Download CV
                    </Button>
                    <Button
                        variant="ghost"
                        size="lg"
                        className="text-slate-300 hover:text-white"
                        onClick={() => window.open('https://github.com/kateLint', '_blank')}
                    >
                        <Github className="mr-2 h-5 w-5" />
                        GitHub Profile
                    </Button>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 animate-bounce"
            >
                <ArrowDown className="h-6 w-6 text-slate-500" />
            </motion.div>
        </section>
    );
}
