import { motion } from "framer-motion";
import { useSpotlight } from "../lib/useSpotlight.js";

const fadeUp = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" }
};

export function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function HoverCard({ children, className = "" }) {
  const ref = useSpotlight();

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
      className={"card-glow " + className}
    >
      {children}
    </motion.div>
  );
}
