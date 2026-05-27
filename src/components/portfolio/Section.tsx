import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="glass mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-violet-200">
            {eyebrow}
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {title.split(" ").map((w, i) =>
              i === title.split(" ").length - 1 ? (
                <span key={i} className="text-gradient"> {w}</span>
              ) : (
                <span key={i}>{i === 0 ? "" : " "}{w}</span>
              )
            )}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
