import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase, Sparkles } from "lucide-react";

const experiences = [
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Software Engineer",
    duration: "Aug 2024 – Present",
    icon: Briefcase,
    points: [
      "Built AI-powered natural language query assistant using GPT-4, Claude APIs, and LangChain",
      "Achieved 95% query resolution accuracy serving 200+ active users",
      "Reduced debugging cycle time by 40% through intelligent log analysis tooling",
      "Developed production RAG pipeline using FAISS and embeddings (60% relevance lift)",
      "Worked across Azure cloud, CI/CD, REST APIs, and async background processing",
      "Owned production support, root-cause analysis, and on-call escalations",
      "Delivered features consistently across Agile sprints with zero SLA breaches",
    ],
    tech: ["GPT-4", "Claude", "LangChain", "FAISS", "Azure", "Python", "REST"],
  },
  {
    company: "IEEE Bombay Section",
    role: "Artificial Intelligence Intern",
    duration: "Sept 2023 – Mar 2024",
    icon: Sparkles,
    points: [
      "Built a GPT-powered FAQ chatbot used across member onboarding",
      "Designed API integrations and handled cloud deployment",
      "Improved onboarding workflow efficiency by 30%",
    ],
    tech: ["GPT", "Python", "APIs", "Cloud Deployment"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've shipped"
      subtitle="Production AI systems, cloud platforms, and product engineering."
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-violet-500/60 via-blue-500/30 to-transparent sm:left-1/2" />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative mb-12 pl-12 sm:pl-0"
          >
            <div className="absolute left-0 top-2 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/40 ring-4 ring-background sm:left-1/2 sm:-translate-x-1/2">
              <exp.icon size={16} />
            </div>

            <div
              className={`sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"}`}
            >
              <div className="glass group rounded-2xl p-6 transition hover:bg-white/[0.07]">
                <div className="text-xs font-medium uppercase tracking-widest text-violet-300">
                  {exp.duration}
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold">{exp.role}</h3>
                <div className="text-sm text-white/60">{exp.company}</div>
                <ul className={`mt-4 space-y-2 text-sm text-white/70 ${i % 2 === 0 ? "sm:text-right" : ""}`}>
                  {exp.points.map((p, j) => (
                    <li key={j} className="flex gap-2 sm:items-start">
                      {i % 2 === 0 ? (
                        <>
                          <span className="hidden flex-1 sm:block">{p}</span>
                          <span className="mt-1.5 hidden h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400 sm:block" />
                          <span className="sm:hidden mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                          <span className="sm:hidden">{p}</span>
                        </>
                      ) : (
                        <>
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                          <span>{p}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                <div className={`mt-4 flex flex-wrap gap-1.5 ${i % 2 === 0 ? "sm:justify-end" : ""}`}>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
