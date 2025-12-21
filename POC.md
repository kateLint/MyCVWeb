# Role & Objective
You are a Principal Frontend Architect and Creative Technologist. Your task is to build a complete, production-ready portfolio website for **Keren (Katya) Lint**.

**The Goal:** Successfully rebrand a Senior Android Architect (10+ years exp) into an Applied Machine Learning Engineer. The site must be a "Hybrid" showcase—proving she can build high-performance mobile apps *and* sophisticated AI models.

# Tech Stack & Infrastructure
- **Framework:** Next.js 14+ (App Router, Server Components).
- **Styling:** Tailwind CSS (Mobile-first, Dark Mode default).
- **Animation:** Framer Motion (Complex orchestrations, layout shared elements).
- **Icons:** Lucide React.
- **Server:** Next.js internal API routes (for handling mock data and simulations).

# Design System: "The Neural Glass"
- **Vibe:** "Zviel.com" meets "OpenAI". High-end, dark, mysterious but clean.
- **Palette:** Deep Slate (`bg-slate-950`), Neon Teal accents (`text-teal-400`), Glassmorphism panels (backdrop-blur, white/10 opacity).
- **Typography:** `Inter` or `Geist Sans` (Clean, technical).
- **Micro-interactions:** Every hover, click, and scroll must have feedback.

---

# 1. Content Data (The Source of Truth)
*Use this exact data. Do not use Lorem Ipsum.*

**Profile:**
- Name: Keren (Katya) Lint
- Headline: Senior Mobile Architect & Applied Machine Learning Engineer
- Tagline: "Bridging the gap between Edge Engineering and Generative AI."
- Location: Israel
- Contact: ktlint@gmail.com | GitHub: kateLint

**Experience (Timeline Data):**
1. **Bank Hapoalim (2018-Present):** Senior Android Dev. Led "Wonder" & Capital Market apps. Integrated HuggingFace models on-device. Managed Scrum teams.
2. **Amgine (2015-2018):** Android Developer. Built End-to-End travel solutions with complex Reactive UI.
3. **Diwip (2013-2015):** Android Game Lead. Built game engines using LibGDX (Gaming Physics experience).

**Projects (The "Hybrid" Showcase):**
1. **RAG GenAI Assistant:** Python/LangChain pipeline integrating local data with GPT. Optimized prompt engineering.
2. **Mobile Vision Engine:** Hybrid Android app running quantized classification models (TFLite) via JNI.
3. **Semantic Search Core:** BERT-based text analysis and embedding search using NumPy/Pandas.

---

# 2. Page Structure & Component Architecture

## A. The Hero Section (First Impression)
- **Visual:** A "Neural Network" background (canvas/particles) where nodes slowly drift and connect.
- **Content:** Big bold headline.
- **Interaction:** A "Download CV" button that triggers a confetti explosion (canvas) on click.

## B. The "Code Morph" (The Bridge)
*A visual demonstration of Hybrid skills.*
- **Component:** A code block window.
- **Feature:** A toggle switch: "Training Mode" (Python) <-> "Inference Mode" (Kotlin).
- **Animation:** When toggled, use `Framer Motion layoutId` to smoothly morph the syntax colors and text positions from PyTorch code to Android TFLite code.

## C. "Ask My Resume" (Chat Interface)
- **Component:** Fixed bottom-right chat bubble.
- **Behavior:** A mock RAG chat.
- **Pre-filled Prompts:** "Tell me about your time at Bank Hapoalim", "Do you know Python?".
- **Logic:** On click, simulate a "Thinking..." state, then type out the answer based on the CV data provided above.

## D. Blog & GitHub Section
- **GitHub:** Fetch pinned repos using the GitHub API (or mock response). Show star counts.
- **Blog:** A grid of cards: "Optimizing BERT for Android", "From MVVM to RAG".

---

# 3. Implementation Steps for the AI

1.  **Scaffold:** Initialize Next.js app with Tailwind and Lucide.
2.  **Global Layout:** Create the Navbar (glassmorphism) and Footer.
3.  **Hero:** Build the Particle Background and Hero text.
4.  **Experience:** Build the vertical interactive timeline.
5.  **Projects:** Build the featured projects grid.
6.  **The "Wow" Module:**
    * Build the Code Morph component.
7.  **Blog & GitHub:** Implement the blog section and GitHub integration.
8.  **Chatbot:** Implement the "Ask My Resume" widget.
9.  **Polish:** Apply global framer-motion page transitions (fade/slide up).

# Output Requirement
Generate the full file structure and code. Prioritize the **visuals** and **animations** to make it look expensive and fun.