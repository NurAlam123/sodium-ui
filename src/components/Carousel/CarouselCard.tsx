"use client";

import {
  femalePerson1,
  femalePerson2,
  femalePerson3,
  femalePerson4,
  malePerson1,
} from "@/assets/card_image";
import Image, { StaticImageData } from "next/image";
import Title from "../ui/Title";

import { AnimatePresence, motion } from "framer-motion";

const images = [
  femalePerson1,
  femalePerson2,
  femalePerson3,
  femalePerson4,
  malePerson1,
];

const CarouselCard = () => {
  return (
    <>
      <Title title="Image_Carousel_Card" />
      <section className="m-4 relative justify-center items-center border-2 rounded-lg flex h-screen md:mx-8 gap-4">
        <AnimatePresence initial={false}>
          {images.map((image, index) => (
            <Card key={index} index={index} src={image} />
          ))}
        </AnimatePresence>
      </section>
    </>
  );
};

const Card = ({ index, src }: { index: number; src: StaticImageData }) => {
  const translateX = index * 25;
  const rotate = index * 2;
  const scale = 1 - index * 0.04;
  return (
    <motion.div
      key={index}
      style={{
        translate: `${translateX}px`,
        rotate: `${rotate}deg`,
        scale: `${scale}`,
        zIndex: -index,
      }}
      className="absolute"
    >
      <Image
        src={src.src}
        alt={`Person ${index}`}
        width={720}
        height={720}
        className="rounded-xl object-cover aspect-square"
        draggable={false}
      />
    </motion.div>
  );
};
export default CarouselCard;
