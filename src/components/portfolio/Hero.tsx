import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, Sparkles, Brain, Cloud, Code2 } from "lucide-react";
import { Particles } from "./Particles";

const roles = [
  "Software Engineer",
  "AI Engineer",
  "Frontend Developer",
  "Cloud Builder",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[i];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1400);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setI((i + 1) % roles.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="text-gradient">
      {text}
      <span className="caret ml-1 inline-block h-7 w-[3px] -mb-1 bg-violet-400 sm:h-10" />
    </span>
  );
}

function FloatingIcon({
  icon: Icon,
  className,
  delay = 0,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6 }}
      className={`absolute hidden lg:flex glass h-14 w-14 items-center justify-center rounded-2xl text-violet-300 animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <Icon size={22} />
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="absolute inset-0 gradient-mesh" />
      <Particles />

      <FloatingIcon icon={Brain} className="left-[8%] top-[22%]" delay={0.2} />
      <FloatingIcon icon={Cloud} className="right-[10%] top-[18%]" delay={0.5} />
      <FloatingIcon icon={Code2} className="left-[12%] bottom-[18%]" delay={0.8} />
      <FloatingIcon icon={Sparkles} className="right-[8%] bottom-[22%]" delay={1.1} />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-4 md:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-violet-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            Snehali <br />
            <span className="text-gradient animate-gradient">Pandit</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 font-display text-2xl font-semibold sm:text-3xl md:text-4xl min-h-[2.5rem]"
          >
            <Typewriter />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-xl text-base text-white/70 sm:text-lg"
          >
            Building intelligent AI-powered systems, scalable cloud solutions, and beautiful user
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:scale-[1.02] hover:shadow-violet-500/50"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/Snehali_Pandit_Resume.pdf"
              download
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:bg-white/5"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-6 text-xs text-white/50"
          >
            <div><span className="text-white font-semibold">2+</span> years experience</div>
            <div><span className="text-white font-semibold">10+</span> production features</div>
            <div><span className="text-white font-semibold">3</span> cloud platforms</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto"
        >
          <div className="relative h-72 w-72 sm:h-80 sm:w-80">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-violet-500 via-blue-500 to-fuchsia-500 opacity-50 blur-2xl animate-pulse-glow" />
            <div className="glow-border glow-shadow relative h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-violet-900/40 to-blue-900/40">
              <div className="grid h-full w-full place-items-center font-display text-7xl font-bold text-gradient">
                SP
              </div>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full border border-dashed border-white/15"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
