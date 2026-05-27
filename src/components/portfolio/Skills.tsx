import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code2, Layout, Brain, Cloud, Cpu } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "C/C++"],
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    icon: Brain,
    title: "AI & LLMs",
    skills: [
      "LangChain",
      "LangGraph",
      "OpenAI API",
      "Claude API",
      "RAG Pipelines",
      "Prompt Engineering",
      "FAISS",
      "Embeddings",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["Azure", "AWS", "GCP", "GitHub Actions", "CI/CD", "Linux", "REST APIs"],
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    skills: ["TensorFlow", "Scikit-learn", "NLP", "Computer Vision"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="My technical toolkit"
      subtitle="From low-level engineering to production AI pipelines."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:translate-y-[-2px] hover:bg-white/[0.07]"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/10 blur-3xl transition group-hover:scale-150" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 text-violet-300 ring-1 ring-white/10">
                  <g.icon size={18} />
                </div>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/85 transition hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
