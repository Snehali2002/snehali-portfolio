import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { Mail, Linkedin, Github, Copy, Check, Download, Send, CheckCircle2 } from "lucide-react";

const EMAIL = "snehali.pandit22@gmail.com";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 3500);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something great"
      subtitle="Open to opportunities, collaborations, and interesting AI problems."
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong relative rounded-3xl p-7"
        >
          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium uppercase tracking-widest text-white/60">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-violet-400/60 focus:bg-white/[0.08] focus:ring-2 focus:ring-violet-500/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-widest text-white/60">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-violet-400/60 focus:bg-white/[0.08] focus:ring-2 focus:ring-violet-500/20"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-widest text-white/60">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-violet-400/60 focus:bg-white/[0.08] focus:ring-2 focus:ring-violet-500/20"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:scale-[1.01] hover:shadow-violet-500/50"
            >
              <Send size={16} /> Send Message
            </button>
          </div>

          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200"
              >
                <CheckCircle2 size={16} /> Opening your email client...
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="glass rounded-3xl p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-violet-300">
              Direct email
            </div>
            <div className="mt-3 flex items-center justify-between gap-3">
              <span className="truncate text-sm text-white/85">{EMAIL}</span>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/85 transition hover:border-white/40 hover:bg-white/5"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          <a
            href="/Snehali_Pandit_Resume.pdf"
            download
            className="glass group flex items-center justify-between rounded-3xl p-6 transition hover:bg-white/[0.07]"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-violet-300">
                Resume
              </div>
              <div className="mt-1 text-sm text-white/85">Download my full CV (PDF)</div>
            </div>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/30 transition group-hover:scale-105">
              <Download size={18} />
            </span>
          </a>

          <div className="grid grid-cols-3 gap-3">
            {[
              { href: "https://www.linkedin.com/in/snehali-pandit/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/Snehali2002", icon: Github, label: "GitHub" },
              { href: `mailto:${EMAIL}`, icon: Mail, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="glass group flex flex-col items-center justify-center gap-2 rounded-2xl p-4 text-white/80 transition hover:-translate-y-0.5 hover:bg-white/[0.07] hover:text-white"
              >
                <s.icon size={20} className="text-violet-300 transition group-hover:scale-110" />
                <span className="text-xs font-medium">{s.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}


