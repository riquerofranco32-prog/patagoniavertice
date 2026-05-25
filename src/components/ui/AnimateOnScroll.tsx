"use client";

import { motion, Variants } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: d, ease },
  }),
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (d: number) => ({
    opacity: 1,
    transition: { duration: 0.7, delay: d, ease: "easeOut" },
  }),
};

const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -56 },
  visible: (d: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.75, delay: d, ease },
  }),
};

const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 56 },
  visible: (d: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.75, delay: d, ease },
  }),
};

const viewport = { once: true, margin: "-60px" } as const;

export function FadeUp({ children, className, delay = 0 }: Props) {
  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, className, delay = 0 }: Props) {
  return (
    <motion.div
      className={className}
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

export function SlideInLeft({ children, className, delay = 0 }: Props) {
  return (
    <motion.div
      className={className}
      variants={slideLeftVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

export function SlideInRight({ children, className, delay = 0 }: Props) {
  return (
    <motion.div
      className={className}
      variants={slideRightVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}
