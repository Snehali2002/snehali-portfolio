import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "./Section";

const stats = [
  { value: 95, suffix: "%", label: "Query Resolution Accuracy" },
  { value: 60, suffix: "%", label: "Improved RAG Relevance" },
  { value: 40, suffix: "%", label: "Reduced Latency" },
  { value: 100, suffix: "%", label: "SLA Compliance" },
  { value: 10, suffix: "+", label: "Consecutive Sprint Deliveries" },
  { value: 200, suffix: "+", label: "Users Served by AI Assistant" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Numbers that matter"
      subtitle="Measurable impact across production AI products."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:bg-white/[0.07]"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500/30 to-blue-500/20 blur-2xl transition group-hover:scale-150" />
            <div className="relative">
              <div className="font-display text-5xl font-bold text-gradient">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-white/70">{s.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
