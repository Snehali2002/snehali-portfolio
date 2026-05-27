import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink, X, ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  github?: string;
  demo?: string;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "PromptGuard",
    tagline: "Prompt Injection Detection Tool",
    description:
      "A two-layer cybersecurity pipeline that detects prompt injection attacks using a TF-IDF + Logistic Regression classifier for fast screening, escalating suspicious inputs to Anthropic Claude API for structured threat analysis.",
    tech: ["Python", "scikit-learn", "Anthropic Claude API", "Streamlit", "TF-IDF", "Logistic Regression"],
    features: [
      "TF-IDF + Logistic Regression classifier with 92% accuracy",
      "LLM escalation for structured threat analysis (attack type, risk level, indicators)",
      "Decision-gate architecture reducing API costs by ~70%",
      "Trained on deepset/prompt-injections public dataset",
      "Streamlit dashboard with JSON audit logging and session history",
    ],
    github: "#",
    demo: "#",
    gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
  },
  {
    title: "SmartInspect AI",
    tagline: "Quality Report Automation",
    description:
      "Industrial AI quality reporting system with a 5-stage agentic workflow for defect detection, root-cause analysis, and automated PDF generation.",
    tech: ["Python", "LangGraph", "OpenAI", "Streamlit", "FAISS", "SQL"],
    features: [
      "Reduced processing time by 35%",
      "Reduced issue-identification effort by 30%",
      "RAG pipeline with prompt engineering",
      "Ethical AI guardrails baked in",
      "Automated PDF report generation",
    ],
    github: "#",
    demo: "#",
    gradient: "from-violet-500/30 via-fuchsia-500/20 to-blue-500/30",
  },
  {
    title: "FoodHub",
    tagline: "Full Stack Food Ordering Platform",
    description:
      "Production-grade food ordering platform with secure auth, payments, and a delightful discovery experience.",
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "REST APIs", "Stripe", "JWT"],
    features: [
      "JWT-based authentication",
      "Stripe payment integration",
      "Restaurant discovery via live APIs",
      "100% unit test coverage",
      "Optimized with lazy loading & code-splitting",
    ],
    github: "#",
    demo: "#",
    gradient: "from-blue-500/30 via-cyan-500/20 to-violet-500/30",
  },
];

function ProjectCard({ p, onOpen }: { p: Project; onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="glass group relative overflow-hidden rounded-3xl p-1"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-40 transition group-hover:opacity-70`} />
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-violet-400 via-blue-400 to-fuchsia-400 opacity-30 blur" />
      </div>

      <div className="relative rounded-[22px] bg-background/85 p-7 backdrop-blur-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-violet-300">
              {p.tagline}
            </div>
            <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{p.title}</h3>
          </div>
          <button
            onClick={onOpen}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-white/70 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
            aria-label="Open details"
          >
            <ArrowUpRight size={18} className="transition group-hover:rotate-45" />
          </button>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-white/70">{p.description}</p>

        <ul className="mt-5 space-y-1.5">
          {p.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-white/75">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-blue-400" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-white/85"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/85 transition hover:border-white/40 hover:bg-white/5"
          >
            <Github size={14} /> GitHub
          </a>
          <a
            href={p.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-violet-500/30 transition hover:shadow-violet-500/50"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
          <button
            onClick={onOpen}
            className="ml-auto text-xs font-medium text-violet-300 hover:text-violet-200"
          >
            View details →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      subtitle="A few products I'm proud of — from agentic AI workflows to full-stack platforms."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} onOpen={() => setActive(p)} />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[120] grid place-items-center bg-black/70 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong relative w-full max-w-2xl overflow-hidden rounded-3xl p-8"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <X size={16} />
              </button>
              <div className="text-xs font-semibold uppercase tracking-widest text-violet-300">
                {active.tagline}
              </div>
              <h3 className="mt-2 font-display text-3xl font-bold">{active.title}</h3>
              <p className="mt-4 text-white/75">{active.description}</p>
              <h4 className="mt-6 text-sm font-semibold uppercase tracking-widest text-white/60">
                Highlights
              </h4>
              <ul className="mt-3 space-y-2">
                {active.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-white/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {active.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-white/85"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
