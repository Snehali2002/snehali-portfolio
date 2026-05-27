import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { CursorGlow } from "@/components/portfolio/Cursor";
import { Loader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Snehali Pandit — AI & Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Snehali Pandit — Software Engineer and AI Engineer building intelligent AI systems, scalable cloud solutions, and beautiful user experiences.",
      },
      { name: "keywords", content: "Snehali Pandit, AI Engineer, Software Engineer, LangChain, RAG, React, Portfolio" },
      { property: "og:title", content: "Snehali Pandit — AI & Software Engineer" },
      {
        property: "og:description",
        content:
          "Building intelligent AI-powered systems, scalable cloud solutions, and beautiful user experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Loader />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <div className="pointer-events-none fixed inset-0 -z-10 gradient-mesh opacity-60" />
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <h1 className="sr-only">Snehali Pandit — AI & Software Engineer Portfolio</h1>

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
