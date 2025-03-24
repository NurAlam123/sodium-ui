"use client";

import {
  femalePerson1,
  femalePerson2,
  femalePerson3,
  femalePerson4,
  malePerson2,
} from "@/assets/card_image";
import { StaticImageData } from "next/image";
import Title from "../ui/Title";

import {
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useState } from "react";
import WIP from "../ui/WIP";

const images = [
  femalePerson1,
  femalePerson2,
  femalePerson3,
  femalePerson4,
  malePerson2,
];

// Props Types
type CardPropsType = {
  progress: MotionValue;
  direction: number;
  index: number;
  src: StaticImageData;
};

const CarouselTwo = () => {
  const progress = useMotionValue(0);
  const progressStep = useTransform(progress, (latest) => Math.floor(latest));
  const [direction, setDirection] = useState(1);

  useMotionValueEvent(progress, "change", (latest) => {
    const previous = progressStep.getPrevious();
    if (!previous) return;
    setDirection(previous > latest ? -1 : 1);
  });

  useMotionValueEvent(progress, "change", (latest) => {
    if (latest % 1 === 0) setDirection(1);
  });

  const nextCard = () => {
    const current = progress.get();
    if (current >= images.length) return;
    progress.set(current + 1);
  };

  const prevCard = () => {
    const current = progress.get();
    if (current <= 0) return;
    progress.set(current - 1);
  };

  return (
    <>
      <Title title="Image_Carousel_Card" />
      <WIP />
      <section className="m-4 relative justify-center items-center border-2 rounded-lg flex h-screen md:mx-8 gap-4 overflow-hidden snap-y snap-mandatory *:snap-center *:place-items-center">
        {images.map((image, index) => (
          <Card
            key={index}
            progress={progress}
            direction={direction}
            index={index}
            src={image}
          />
        ))}
      </section>
      <div className="flex justify-center font-bold text-lg gap-6 my-4">
        <button onClick={prevCard}>&lt;</button>
        <button onClick={nextCard}>&gt;</button>
      </div>
    </>
  );
};

// ==== CARD ==== //
const Card = ({ index, src, direction, progress }: CardPropsType) => {
  const distanceFromFront = useTransform(progress, (latest) => latest - index);
  const distanceFromFrontABS = useTransform(distanceFromFront, (latest) =>
    Math.abs(latest),
  );

  const [isFirst, setIsFirst] = useState(distanceFromFrontABS.get() < 0.5);

  useMotionValueEvent(distanceFromFront, "change", (latest) => {
    const previous = distanceFromFront.getPrevious();
    if (!previous) return;

    if (latest * previous <= 0) setIsFirst(true);
    if (Math.abs(latest) >= 1) setIsFirst(false);
  });

  const scale = useTransform(
    distanceFromFrontABS,
    [0, 0.5, 1],
    isFirst ? [1, 0.95, 1] : [1, 1, 1],
  );

  const x = useTransform(
    distanceFromFront,
    [-1, -0.5, 0, 0.5, 1],
    isFirst
      ? ["12%", "77%", "0%", "-77%", "-12%"]
      : ["12%", "5%", "0%", "-5%", "-12%"],
    {
      clamp: false,
    },
  );

  const z = useTransform(distanceFromFrontABS, [0, 1], [0, -100], {
    clamp: false,
  });
  const rotateZ = useTransform(distanceFromFrontABS, [0, 1], [0, 3.5], {
    clamp: false,
  });

  const rotateY = useTransform(
    progress,
    [-1, -0.5, 0, 0.5, 1],
    isFirst ? [0, 20, 0, -20, 0] : [0, 45, 0, -45, 0],
  );

  const zIndex = useTransform(
    distanceFromFront,
    [-2, -1, 0, 0.7, 2],
    [-2, -1, 0, 0, -2],
    { clamp: false },
  );

  return (
    <motion.div
      key={index}
      style={{
        scale,
        rotateZ,
        rotateY,
        zIndex,
        x,
        z,
        transformPerspective: 1000,
      }}
      className="absolute rounded-xl w-96 h-96 border bg-fuchsia-400/50"
    >
      <span className="absolute right-0 text-black font-bold">
        {progress.get()}
      </span>
      {/*<Image
        src={src.src}
        alt={`Person ${index}`}
        width={720}
        height={720}
        className="rounded-xl object-cover aspect-square"
        draggable={false}
      />*/}
    </motion.div>
  );
};
export default CarouselTwo;
