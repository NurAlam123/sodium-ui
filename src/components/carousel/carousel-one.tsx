"use client";

import * as logo from "@/assets/language-logos";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import Chip from "../ui/Chip";

const LOGOS = [
  logo.Cpp,
  logo.Python,
  logo.JavaScript,
  logo.TypeScript,
  logo.Gleam,
  logo.Rust,
];

const CarouselOne = () => {
  const [current, setCurrent] = useState(1);

  const maxItem = LOGOS.length;

  const angle = 360 / maxItem;

  const goRight = () => {
    if (current >= maxItem) return;
    setCurrent(current + 1);
  };

  const goLeft = () => {
    if (current <= 1) return;
    setCurrent(current - 1);
  };

  return (
    <div>
      <Chip cid="1" />
      <div className="h-screen relative size-full rounded-lg">
        <div className="absolute h-1/2 w-full bottom-8 bg-white z-10" />
        <div className="size-[40rem] relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full border-2">
          {LOGOS.map((Item, i) => (
            <div
              key={i}
              className="absolute h-1/2 -ml-[1.4rem] origin-bottom top-0 left-1/2"
              style={{
                transform: "translate(-14px, -42px)",
                rotate: `${angle * i + angle * (current - 1)}deg`,
                transition: "rotate 1s ease-out",
              }}
            >
              <div
                className="relative size-[9rem] -top-[2.3rem] p-4 -translate-x-1/2 bg-white ml-[2.3rem] border rounded-lg"
                style={{
                  rotate: `-${angle * i + angle * (current - 1)}deg`,
                  transition: "rotate 1s ease-out",
                }}
              >
                <Item className="size-full" />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex gap-2 z-10">
          <button
            className={clsx(
              "text-white py-2 px-4 bg-black rounded-xl hover:bg-black/80 transition",
              current <= 1 && "cursor-not-allowed disabled:bg-neutral-500",
            )}
            onClick={goLeft}
            disabled={current <= 1}
          >
            <ArrowLeft />
          </button>
          <button
            className={clsx(
              "text-white py-2 px-4 bg-black rounded-xl hover:bg-black/80 transition",
              current >= maxItem &&
                "cursor-not-allowed disabled:bg-neutral-500",
            )}
            onClick={goRight}
            disabled={current >= maxItem}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselOne;
