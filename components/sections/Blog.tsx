"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Code2, BookOpen, Star, GitFork, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const BLOG_POSTS = [
    {
        title: "Optimizing BERT for Android",
        excerpt: "How to quantize and prune transformer models for sub-50ms inference on mid-range devices.",
        date: "Dec 12, 2024",
        readTime: "8 min read",
        url: "https://medium.com/@ktlint/optimizing-bert-for-android-ef01dbf45cb0"
    },
    {
        title: "From MVVM to RAG",
        excerpt: "A senior architect's journey into the world of Generative AI. Lessons learned from building production pipelines.",
        date: "Nov 28, 2024",
        readTime: "12 min read",
        url: "https://medium.com/@ktlint/from-mvvm-to-rag-a-senior-architects-journey-into-generative-ai-ff8859a53bc3"
    },
    {
        title: "The Neural Glass Design System",
        excerpt: "Building a futuristic portfolio with Next.js, Framer Motion, and Tailwind CSS v4.",
        date: "Nov 15, 2024",
        readTime: "5 min read",
        url: "#"
    }
];

// Mock GitHub Data
const GITHUB_STATS = [
    { name: "mobile-vision-engine", stars: 128, forks: 34, lang: "Kotlin" },
    { name: "rag-pipeline-core", stars: 256, forks: 45, lang: "Python" },
    { name: "android-clean-arch", stars: 890, forks: 120, lang: "Kotlin" },
];

export function Blog() {
    return (
        <section id="blog" className="relative w-full py-24">
            <div className="container mx-auto px-4">

                <div className="grid gap-16 lg:grid-cols-2">

                    {/* Blog Section */}
                    <div>
                        <div className="mb-8 flex items-center gap-3">
                            <BookOpen className="text-teal-400" />
                            <h2 className="text-3xl font-bold text-white">Latest Thoughts</h2>
                        </div>

                        <div className="space-y-6">
                            {BLOG_POSTS.map((post, i) => (
                                <GlassCard
                                    key={i}
                                    className="group cursor-pointer border-slate-800 bg-slate-900/20 hover:bg-slate-800/40"
                                    onClick={() => post.url !== "#" && window.open(post.url, '_blank')}
                                >
                                    <div className="mb-2 flex items-center gap-3 text-xs text-slate-500">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold text-slate-200 group-hover:text-teal-300 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="mb-4 text-slate-400">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center text-sm font-medium text-teal-500 group-hover:underline">
                                        {post.url === "#" ? "Coming Soon" : "Read Article"} <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>

                    {/* GitHub Section */}
                    <div>
                        <div className="mb-8 flex items-center gap-3">
                            <Code2 className="text-white" />
                            <h2 className="text-3xl font-bold text-white">Open Source</h2>
                        </div>

                        <div className="grid gap-4">
                            {GITHUB_STATS.map((repo, i) => (
                                <GlassCard key={i} className="flex items-center justify-between border-slate-800 bg-slate-900/20 p-4 hover:bg-slate-800/40">
                                    <div>
                                        <h3 className="font-mono font-bold text-slate-200">{repo.name}</h3>
                                        <div className="mt-1 flex items-center gap-4 text-xs text-slate-400">
                                            <span className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-teal-500"></div> {repo.lang}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-400">
                                        <div className="flex items-center gap-1">
                                            <Star size={14} />
                                            <span className="text-sm font-medium">{repo.stars}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <GitFork size={14} />
                                            <span className="text-sm font-medium">{repo.forks}</span>
                                        </div>
                                    </div>
                                </GlassCard>
                            ))}

                            <GlassCard className="mt-4 flex flex-col items-center justify-center gap-4 border-dashed border-slate-700 bg-transparent py-8 text-center">
                                <p className="text-slate-400">Check out more on GitHub</p>
                                <Button variant="outline" size="sm" onClick={() => window.open('https://github.com/kateLint', '_blank')}>
                                    @kateLint
                                </Button>
                            </GlassCard>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
