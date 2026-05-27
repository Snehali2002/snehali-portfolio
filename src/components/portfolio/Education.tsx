import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic foundation">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass mx-auto max-w-3xl rounded-3xl p-8"
      >
        <div className="flex items-start gap-5">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-blue-500/30 text-violet-200 ring-1 ring-white/10">
            <GraduationCap size={26} />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-semibold">
                MCT's Rajiv Gandhi Institute of Technology
              </h3>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                CGPA 8.34 / 10
              </span>
            </div>
            <p className="mt-2 text-sm text-white/70">
              Bachelor of Engineering in Electronics & Telecommunication Engineering
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
