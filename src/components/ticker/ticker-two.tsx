"use client";

import {
  femalePerson1,
  femalePerson2,
  femalePerson3,
  femalePerson4,
  malePerson1,
  malePerson2,
  malePerson3,
  malePerson4,
} from "@/assets/card_image";
import Image, { ImageProps } from "next/image";

import { motion } from "framer-motion";
import Chip from "../ui/Chip";

const photos = {
  column1: [
    femalePerson1,
    femalePerson3,
    malePerson1,
    femalePerson2,
    malePerson2,
    femalePerson4,
  ],
  column2: [
    malePerson3,
    malePerson4,
    femalePerson2,
    femalePerson3,
    femalePerson4,
    malePerson1,
  ],
};

const TickerTwo = () => {
  const DURATION = 20;

  return (
    <>
      <Chip cid="2" />
      <section className="my-20 mx-4 md:mx-10 overflow-hidden h-dvh [mask-image:linear-gradient(to_bottom,transparent,black_5%,black_95%,transparent)]">
        <div className="flex justify-center items-center">
          <motion.div
            className="flex flex-col gap-2 md:gap-4 pr-2 md:pr-4"
            style={{
              translateY: "0%",
            }}
            animate={{
              translateY: "-50%",
            }}
            transition={{
              duration: DURATION,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...photos.column1, ...photos.column1].map((photo, index) => (
              <Card
                key={index}
                photo={{
                  alt: `Card Image ${index}`,
                  ...photo,
                }}
              />
            ))}
          </motion.div>
          <motion.div
            style={{
              translateY: "-50%",
            }}
            animate={{
              translateY: "0%",
            }}
            transition={{
              duration: DURATION,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-col gap-2 md:gap-4 pr-2 md:pr-4"
          >
            {[...photos.column2, ...photos.column2].map((photo, index) => (
              <Card
                key={index}
                photo={{
                  alt: `Card Image ${index}`,
                  ...photo,
                }}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

const Card = ({ photo }: { photo: ImageProps }) => {
  return (
    <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-white border-2 rounded-xl overflow-hidden">
      <Image
        src={photo.src}
        alt="Card Image"
        width={photo.width}
        height={photo.height}
        className="object-cover"
      />
    </div>
  );
};

export default TickerTwo;
