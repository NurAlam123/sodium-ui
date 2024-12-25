"use client";

import {
  Ableton,
  Amplitude,
  Anthropic,
  Arcteryx,
  Brex,
  Cloudflare,
  Figma,
  Liner,
  Loom,
  Lvmh,
  Pinecone,
  Puma,
  Remarkable,
  Shopify,
  Skims,
  Sonos,
} from "@/assets/logo-ticker";
import {
  motion,
  Transition,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Title from "../ui/Title";

const DURATION = 20;
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

const LogoTickerSanity = () => {
  // Check for media query changes -> from react-responsive
  const [isDesktop, setIsDesktop] = useState(false);

  const desktop = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);
  // ----
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const rtl = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const ltr = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <>
      <Title title="Logo_Ticker" />
      <section
        className="h-svh md:h-[150vh] flex justify-center overflow-hidden"
        ref={containerRef}
      >
        <div className="flex flex-col md:grid md:grid-cols-2 justify-center items-center gap-8 overflow-hidden md:overflow-visible">
          <div className="flex gap-8 md:grid md:grid-rows-2 md:gap-10 items-center justify-start *:items-center w-full">
            {isDesktop ? (
              <>
                <motion.div
                  style={{
                    opacity,
                    translateX: rtl,
                  }}
                  className="hidden md:grid md:grid-cols-4 items-center gap-8 pr-8"
                >
                  <Ableton />
                  <Figma />
                  <Cloudflare />
                  <Puma />
                </motion.div>
                <motion.div
                  style={{
                    opacity,
                    translateX: ltr,
                  }}
                  className="hidden md:grid grid-cols-4 items-center gap-8 pr-8"
                >
                  <Lvmh />
                  <Liner />
                  <Arcteryx />
                  <Skims />
                </motion.div>
              </>
            ) : (
              <motion.div
                variants={mobileAnimationLTR}
                animate="scroll"
                className="flex gap-8 pr-8"
                style={{
                  opacity: 1,
                  translateX: "-50%",
                }}
              >
                <Ableton />
                <Figma />
                <Cloudflare />
                <Puma />
                <Lvmh />
                <Liner />
                <Arcteryx />
                <Skims />
                <Ableton />
                <Figma />
                <Cloudflare />
                <Puma />
                <Lvmh />
                <Liner />
                <Arcteryx />
                <Skims />
              </motion.div>
            )}
          </div>
          <div className="flex gap-8 md:grid md:grid-rows-2 md:gap-10 items-center justify-start *:items-center w-full">
            {isDesktop ? (
              <>
                <motion.div
                  style={{
                    opacity,
                    translateX: rtl,
                  }}
                  className="hidden md:grid grid-cols-4 items-center gap-8"
                >
                  <Amplitude />
                  <Anthropic />
                  <Brex />
                  <Shopify />
                </motion.div>
                <motion.div
                  style={{
                    opacity,
                    translateX: ltr,
                  }}
                  className="flex md:grid grid-cols-4 items-center gap-8"
                >
                  <Loom />
                  <Sonos />
                  <Remarkable />
                  <Pinecone />
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  variants={mobileAnimationRTL}
                  animate="scroll"
                  className="flex gap-8 pr-8"
                  style={{
                    translateX: "0%",
                    opacity: 1,
                  }}
                >
                  <Amplitude />
                  <Anthropic />
                  <Brex />
                  <Shopify />
                  <Loom />
                  <Sonos />
                  <Remarkable />
                  <Pinecone />
                  <Amplitude />
                  <Anthropic />
                  <Brex />
                  <Shopify />
                  <Loom />
                  <Sonos />
                  <Remarkable />
                  <Pinecone />
                </motion.div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoTickerSanity;
