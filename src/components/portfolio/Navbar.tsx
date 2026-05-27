import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const y = window.scrollY + 120;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(s.id);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass-strong shadow-lg" : ""
          }`}
        >
          <button onClick={() => go("home")} className="group flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 font-bold text-white shadow-lg shadow-violet-500/30">
              SP
            </div>
            <span className="hidden font-display text-sm font-semibold tracking-wide sm:block">
              Snehali Pandit
            </span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={`relative rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  active === s.id
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {active === s.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{s.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => go("contact")}
            className="hidden rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:shadow-violet-500/50 md:block"
          >
            Let's Talk
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong mt-2 rounded-2xl p-3 md:hidden"
          >
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={`block w-full rounded-lg px-3 py-2 text-left text-sm ${
                  active === s.id ? "bg-white/10 text-white" : "text-white/70"
                }`}
              >
                {s.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
