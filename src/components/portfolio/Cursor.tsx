import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;
  return (
    <div
      className="pointer-events-none fixed z-[100] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 mix-blend-screen transition-transform duration-100 ease-out"
      style={{
        left: pos.x,
        top: pos.y,
        background:
          "radial-gradient(circle, rgba(167,139,250,0.35) 0%, rgba(96,165,250,0.15) 30%, transparent 70%)",
      }}
    />
  );
}
