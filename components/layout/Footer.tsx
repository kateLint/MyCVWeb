export function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 py-12 text-center text-slate-400">
            <div className="container mx-auto px-4">
                <div className="mb-6 flex justify-center gap-6">
                    <a href="https://github.com/kateLint" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">GitHub</a>
                    <a href="https://www.linkedin.com/in/keren-katya-lint-4a0a3645/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">LinkedIn</a>
                    <a href="mailto:ktlint@gmail.com" className="hover:text-teal-400">Email</a>
                </div>
                <p className="text-sm">
                    © {new Date().getFullYear()} Keren Lint. Built with Next.js & Tailwind.
                </p>
            </div>
        </footer>
    );
}
