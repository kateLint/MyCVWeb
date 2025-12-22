"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
];

export function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.nav
            className={cn(
                "fixed top-0 inset-x-0 z-40 transition-all duration-300",
                isScrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800" : "bg-transparent"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <a href="#" className="text-xl font-bold tracking-tighter text-white">
                    KL<span className="text-teal-400">.</span>
                </a>

                <div className="hidden gap-8 md:flex">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 transition-colors hover:text-teal-400"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile menu button placeholder */}
                <button className="text-white md:hidden">
                    {/* Menu Icon */}
                    <div className="space-y-1.5">
                        <span className="block h-0.5 w-6 bg-white"></span>
                        <span className="block h-0.5 w-6 bg-white"></span>
                    </div>
                </button>
            </div>
        </motion.nav>
    );
}
