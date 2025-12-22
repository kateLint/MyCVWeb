import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Blog } from "@/components/sections/Blog";
import { ChatWidget } from "@/components/sections/ChatWidget";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-white">
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Blog />
      <ChatWidget />
    </main>
  );
}
