export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <div className="font-display text-sm text-white/60">
          Designed & Developed by{" "}
          <span className="text-gradient font-semibold">Snehali Pandit</span>
        </div>
        <div className="mt-2 text-xs text-white/35">
          © {new Date().getFullYear()} · Crafted with care
        </div>
      </div>
    </footer>
  );
}
