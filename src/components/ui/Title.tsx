"use client";

import clsx from "clsx";
import { useRef } from "react";
import { animate, motion } from "framer-motion";
import { Copy, Link as LinkIcon } from "lucide-react";
import toast from "react-hot-toast";

type TitleProps = {
  title: string;
  className?: string;
};

const Title = ({ title, className }: TitleProps) => {
  const url = `/ui#${title}`;

  const ref = useRef<HTMLSpanElement>(null);

  const showIcon = () => {
    if (!ref.current) return;
    animate(ref.current, { display: "block", opacity: 1 }, { delay: 0.3 });
  };

  const hideIcon = () => {
    if (!ref.current) return;
    animate(ref.current, { display: "none", opacity: 0 }, { delay: 0.01 });
  };

  const copyToCilpboard = () => {
    const host = window.location.host;
    navigator.clipboard.writeText(`${host}${url}`);
    toast("Copied!", {
      icon: <Copy />,
    });
  };

  return (
    <motion.h1
      id={title}
      onHoverStart={showIcon}
      onHoverEnd={hideIcon}
      className={clsx(
        "text-xl md:text-3xl font-medium text-zinc-700 my-6 text-center bg-zinc-50 w-fit mx-auto px-6 py-4 rounded-xl flex gap-2 items-center relative border",
        className,
      )}
      style={{
        paddingLeft: 24,
        paddingRight: 24,
      }}
      transition={{
        duration: 0.6,
        mass: 0.2,
        ease: "easeInOut",
      }}
      whileHover={{
        paddingLeft: 56,
      }}
    >
      <motion.span
        ref={ref}
        className="md:absolute md:left-0 md:translate-x-5 md:hidden cursor-pointer"
        onClick={copyToCilpboard}
      >
        <LinkIcon />
      </motion.span>
      &lt; {title} /&gt;
    </motion.h1>
  );
};

export default Title;
