"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Message {
    id: number;
    type: "user" | "bot";
    text: string;
}

const PRE_FILLED_PROMPTS = [
    "Tell me about your time at Bank Hapoalim",
    "Do you know Python?",
    "What is your experience with RAG?",
    "How do you optimize mobile apps?",
];

const KNOWLEDGE_BASE: Record<string, string> = {
    default: "I'm Keren's digital avatar. I can answer questions based on her CV. Try asking about her experience or skills!",
    "bank hapoalim": "At Bank Hapoalim (2018-Present), Keren led the 'Wonder' and Capital Market apps. She integrated HuggingFace models on-device and managed Scrum teams.",
    "python": "Yes! Keren uses Python for Generative AI pipelines, LangChain integrations, and Data Science tasks (NumPy/Pandas). She bridges the gap between Python research and Android production.",
    "rag": "Keren has built enterprise-grade RAG pipelines integrating local documents with LLMs using LangChain and Vector Databases.",
    "mobile": "Keren has over 10 years of experience in Android development, building high-performance apps with complex UI and real-time updates.",
    "optimize": "She specializes in on-device inference optimization, using techniques like quantization (TFLite INT8) to balance accuracy and performance.",
};

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 0, type: "bot", text: "Hi! I'm Keren's AI Assistant. Ask me anything about her experience!" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async (text: string) => {
        if (!text.trim()) return;

        // User Message
        const userMsg: Message = { id: Date.now(), type: "user", text };
        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        // Simulate Network/Processing Delay
        setTimeout(() => {
            // Simple keyword matching logic
            const lowerText = text.toLowerCase();
            let response = KNOWLEDGE_BASE["default"];

            if (lowerText.includes("bank") || lowerText.includes("hapoalim")) response = KNOWLEDGE_BASE["bank hapoalim"];
            else if (lowerText.includes("python")) response = KNOWLEDGE_BASE["python"];
            else if (lowerText.includes("rag")) response = KNOWLEDGE_BASE["rag"];
            else if (lowerText.includes("mobile") || lowerText.includes("android")) response = KNOWLEDGE_BASE["mobile"];
            else if (lowerText.includes("optim")) response = KNOWLEDGE_BASE["optimize"];

            const botMsg: Message = { id: Date.now() + 1, type: "bot", text: response };
            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                <AnimatePresence>
                    {!isOpen && (
                        <motion.button
                            initial={{ scale: 0, rotate: 180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: -180 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={() => setIsOpen(true)}
                            className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 text-slate-950 shadow-[0_0_20px_rgba(45,212,191,0.6)]"
                        >
                            <MessageSquare size={24} fill="currentColor" />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 right-6 z-50 flex h-[600px] w-[90vw] max-w-[400px] flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/90 shadow-2xl backdrop-blur-xl sm:bottom-6 sm:right-24"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800/50 p-4">
                            <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/20 text-teal-400">
                                    <Sparkles size={16} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">Ask My Resume</h3>
                                    <div className="flex items-center gap-1 text-xs text-green-400">
                                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                                        Online
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${msg.type === "user"
                                                ? "bg-teal-500 text-slate-950 rounded-br-none"
                                                : "bg-slate-800 text-slate-200 rounded-bl-none"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-slate-800 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Suggestions */}
                        {messages.length === 1 && (
                            <div className="p-4 pt-0 grid grid-cols-1 gap-2">
                                {PRE_FILLED_PROMPTS.map((prompt, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSendMessage(prompt)}
                                        className="text-left text-xs text-teal-400 hover:text-teal-300 hover:bg-slate-800/50 p-2 rounded transition-colors border border-teal-900/30 truncate"
                                    >
                                        {prompt}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input */}
                        <div className="border-t border-slate-700 bg-slate-800/30 p-4">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSendMessage(inputValue);
                                }}
                                className="flex items-center gap-2"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask a question..."
                                    className="flex-1 rounded-full bg-slate-950 px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim() || isTyping}
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-slate-950 hover:bg-teal-400 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
