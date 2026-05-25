"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

type AnimateOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (custom: { duration: number; delay: number }) => ({
    opacity: 1,
    y: 0,
    transition: { duration: custom.duration, delay: custom.delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { duration: number; delay: number }) => ({
    opacity: 1,
    transition: { duration: custom.duration, delay: custom.delay, ease: "easeOut" },
  }),
};

const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: (custom: { duration: number; delay: number }) => ({
    opacity: 1,
    x: 0,
    transition: { duration: custom.duration, delay: custom.delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: (custom: { duration: number; delay: number }) => ({
    opacity: 1,
    x: 0,
    transition: { duration: custom.duration, delay: custom.delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function AnimateBase({
  children,
  className,
  delay = 0,
  duration = 0.7,
  once = true,
  variants,
}: AnimateOnScrollProps & { variants: Variants }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp(props: AnimateOnScrollProps) {
  return <AnimateBase {...props} variants={fadeUpVariants} />;
}

export function FadeIn(props: AnimateOnScrollProps) {
  return <AnimateBase {...props} variants={fadeInVariants} />;
}

export function SlideInLeft(props: AnimateOnScrollProps) {
  return <AnimateBase {...props} variants={slideLeftVariants} />;
}

export function SlideInRight(props: AnimateOnScrollProps) {
  return <AnimateBase {...props} variants={slideRightVariants} />;
}
