import { motion } from "framer-motion";
import { Section } from "./Section";
import { Brain, Cloud, Zap, Layers, Bug, Users } from "lucide-react";

const points = [
  { icon: Brain, title: "AI Systems", text: "2+ years building production-grade AI with LangChain, LangGraph, RAG, and Generative AI." },
  { icon: Cloud, title: "Cloud Native", text: "Hands-on experience across Azure, AWS, and GCP — REST APIs, CI/CD, async workloads." },
  { icon: Layers, title: "Full-Stack", text: "Strong frontend & full-stack chops with React, TypeScript, and modern web tooling." },
  { icon: Zap, title: "Automation", text: "Passionate about AI automation, scalable systems, and beautiful user experiences." },
  { icon: Bug, title: "Problem Solver", text: "Quick learner with sharp debugging instincts and root-cause-first thinking." },
  { icon: Users, title: "Agile / Scrum", text: "Delivering consistently across sprints with cross-functional product teams." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering with intent"
      subtitle="Software Engineer crafting intelligent products at the intersection of AI, cloud, and clean interfaces."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:bg-white/[0.07]"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/20 blur-2xl transition group-hover:scale-150" />
            <div className="relative">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 text-violet-300 ring-1 ring-white/10">
                <p.icon size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{p.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
