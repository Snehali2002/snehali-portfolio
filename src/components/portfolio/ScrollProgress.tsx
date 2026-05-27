import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed left-0 top-0 z-[90] h-[3px] w-full bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-500"
    />
  );
}
