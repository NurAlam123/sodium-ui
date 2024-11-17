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
} from "@/assets/logo-scroller";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const LogoScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const rtl = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const ltr = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section className="h-[150vh] flex justify-center" ref={containerRef}>
      <div className="grid grid-cols-2 items-center gap-14">
        <div className="grid grid-rows-2 gap-10 items-center justify-start *:items-center">
          <motion.div
            style={{
              opacity,
              translateX: rtl,
            }}
            className="grid grid-cols-4 items-center gap-8"
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
            className="grid grid-cols-4 items-center gap-8"
          >
            <Lvmh />
            <Liner />
            <Arcteryx />
            <Skims />
          </motion.div>
        </div>
        <motion.div className="grid grid-rows-2 items-center gap-10">
          <motion.div
            style={{
              opacity,
              translateX: rtl,
            }}
            className="grid grid-cols-4 items-center gap-8"
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
            className="grid grid-cols-4 items-center gap-8"
          >
            <Loom />
            <Sonos />
            <Remarkable />
            <Pinecone />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogoScroll;
