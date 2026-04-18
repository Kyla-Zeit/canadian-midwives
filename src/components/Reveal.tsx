import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type RevealVariant = "fade" | "fadeUp" | "softScale" | "slideLeft" | "slideRight";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  variant?: RevealVariant;
  duration?: number;
}

const getRevealVariants = (variant: RevealVariant, y = 24, duration = 1.1): Variants => {
  switch (variant) {
    case "fade":
      return {
        hidden: { opacity: 0 },
        visible: (custom: number) => ({
          opacity: 1,
          transition: {
            duration,
            delay: custom,
            ease: [0.22, 1, 0.36, 1],
          },
        }),
      };

    case "softScale":
      return {
        hidden: { opacity: 0, y: 18, scale: 0.985 },
        visible: (custom: number) => ({
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration,
            delay: custom,
            ease: [0.22, 1, 0.36, 1],
          },
        }),
      };

    case "slideLeft":
      return {
        hidden: { opacity: 0, x: 36 },
        visible: (custom: number) => ({
          opacity: 1,
          x: 0,
          transition: {
            duration,
            delay: custom,
            ease: [0.22, 1, 0.36, 1],
          },
        }),
      };

    case "slideRight":
      return {
        hidden: { opacity: 0, x: -36 },
        visible: (custom: number) => ({
          opacity: 1,
          x: 0,
          transition: {
            duration,
            delay: custom,
            ease: [0.22, 1, 0.36, 1],
          },
        }),
      };

    case "fadeUp":
    default:
      return {
        hidden: { opacity: 0, y },
        visible: (custom: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay: custom,
            ease: [0.22, 1, 0.36, 1],
          },
        }),
      };
  }
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
  variant = "fadeUp",
  duration = 1.1,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      custom={delay}
      variants={getRevealVariants(variant, y, duration)}
    >
      {children}
    </motion.div>
  );
}

export function RevealStagger({
  children,
  className,
  stagger = 0.16,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 28,
  variant = "fadeUp",
  duration = 1.05,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  variant?: RevealVariant;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={getRevealVariants(variant, y, duration)}
    >
      {children}
    </motion.div>
  );
}