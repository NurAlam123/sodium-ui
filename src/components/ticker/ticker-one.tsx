"use client";

import * as logo from "@/assets/logo-ticker";
import {
  motion,
  MotionValue,
  Transition,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Chip from "../ui/Chip";

const DURATION = 20;

const TickerOne = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end end"],
  });

  return (
    <>
      <Chip cid="1" />
      <section
        className="h-svh md:h-[150vh] md:flex justify-center items-center overflow-hidden px-2"
        ref={containerRef}
      >
        <div className="h-full md:grid md:grid-cols-2 justify-center items-center flex flex-col gap-8">
          <Rows scrollYProgress={scrollYProgress} />
        </div>
      </section>
    </>
  );
};

const Rows: React.FC<{ scrollYProgress: MotionValue }> = ({
  scrollYProgress,
}) => {
  // Check for media query changes -> from react-responsive
  const [isDesktop, setIsDesktop] = useState(false);

  const desktop = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);
  // ----

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const rtl = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const ltr = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <>
      <FirstRow isDesktop={isDesktop} opacity={opacity} rtl={rtl} ltr={ltr} />
      <SecondRow isDesktop={isDesktop} opacity={opacity} rtl={rtl} ltr={ltr} />
    </>
  );
};

const Row: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="gap-8 md:grid md:grid-rows-2 md:gap-10 md:items-center md:justify-start *:items-center w-full">
      {children}
    </div>
  );
};

// --- Rows ---
type RowProps = {
  isDesktop: boolean;
  ltr: MotionValue;
  rtl: MotionValue;
  opacity: MotionValue;
};

// Animation Variants
const transition: Transition = {
  duration: DURATION,
  ease: "linear",
  repeat: Infinity,
};
const mobileAnimationLTR: Variants = {
  scroll: {
    translateX: "0%",
    transition,
  },
};

const mobileAnimationRTL: Variants = {
  scroll: {
    translateX: "-50%",
    transition,
  },
};

const FirstRow: React.FC<RowProps> = ({ isDesktop, ltr, opacity, rtl }) => {
  return (
    <Row>
      {isDesktop ? (
        <>
          <motion.div
            style={{
              opacity,
              translateX: rtl,
            }}
            className="hidden md:grid md:grid-cols-4 items-center gap-8 pr-8"
          >
            <logo.Ableton />
            <logo.Figma />
            <logo.Cloudflare />
            <logo.Puma />
          </motion.div>
          <motion.div
            style={{
              opacity,
              translateX: ltr,
            }}
            className="hidden md:grid grid-cols-4 items-center gap-8 pr-8"
          >
            <logo.Lvmh />
            <logo.Liner />
            <logo.Arcteryx />
            <logo.Skims />
          </motion.div>
        </>
      ) : (
        <motion.div
          variants={mobileAnimationLTR}
          animate="scroll"
          className="flex w-fit"
          style={{
            opacity: 1,
            translateX: "-50%",
          }}
        >
          {[1, 2].map((i) => (
            <span key={i} className="flex gap-8 items-end pr-8">
              <logo.Ableton />
              <logo.Figma />
              <logo.Cloudflare />
              <logo.Puma />
              <logo.Lvmh />
              <logo.Liner />
              <logo.Arcteryx />
              <logo.Skims />
            </span>
          ))}
        </motion.div>
      )}
    </Row>
  );
};

const SecondRow: React.FC<RowProps> = ({ isDesktop, opacity, rtl, ltr }) => {
  return (
    <Row>
      {isDesktop ? (
        <>
          <motion.div
            style={{
              opacity,
              translateX: rtl,
            }}
            className="hidden md:grid grid-cols-4 items-center gap-8"
          >
            <logo.Amplitude />
            <logo.Anthropic />
            <logo.Brex />
            <logo.Shopify />
          </motion.div>
          <motion.div
            style={{
              opacity,
              translateX: ltr,
            }}
            className="flex md:grid grid-cols-4 items-center gap-8"
          >
            <logo.Loom />
            <logo.Sonos />
            <logo.Remarkable />
            <logo.Pinecone />
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            variants={mobileAnimationRTL}
            animate="scroll"
            className="flex w-fit"
            style={{
              translateX: "0%",
              opacity: 1,
            }}
          >
            {[1, 2].map((i) => (
              <span key={i} className="flex gap-8 pl-8 items-end">
                <logo.Amplitude />
                <logo.Anthropic />
                <logo.Brex />
                <logo.Shopify />
                <logo.Loom />
                <logo.Sonos />
                <logo.Remarkable />
                <logo.Pinecone />
              </span>
            ))}
          </motion.div>
        </>
      )}
    </Row>
  );
};

export default TickerOne;
