"use client";

import {
  project1,
  project10,
  project11,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
} from "@/assets/project-grid";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = {
  column1: [project1, project2, project3, project4, project5, project11],
  column2: [project7, project11, project8, project10, project5, project6],
  column3: [project3, project2, project9, project4, project8, project1],
  column4: [project9, project5, project7, project2, project11, project10],
};

const ProjectGrid = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end end"],
  });

  const yDown = useTransform(scrollYProgress, [0, 1], [64, -64]);
  const smoothYDown = useSpring(yDown, {
    stiffness: 20,
    mass: 0.5,
  });
  const yUp = useTransform(scrollYProgress, [0, 1], [-64, 64]);
  const smoothYUp = useSpring(yUp, {
    stiffness: 20,
    mass: 0.5,
  });
  const skewX = useTransform(scrollYProgress, [0, 1], [-12, 0]);
  const smoothSkewX = useSpring(skewX, {
    mass: 0.8,
    stiffness: 10,
  });

  return (
    <section
      ref={containerRef}
      className="flex items-center justify-center lg:p-16 overflow-hidden"
    >
      <motion.div
        style={{
          skewX: smoothSkewX,
        }}
        className="grid grid-cols-4 gap-4 px-8 py-32 justify-center items-center will-change-transform"
      >
        <motion.div
          className="*:w-40 *:h-40 md:*:w-80 md:*:h-80 *:object-cover *:rounded-xl space-y-4 hover:*:scale-105 hover:*:shadow-black/20 hover:*:shadow-lg hover:*:-translate-y-[10px] *:cursor-pointer *:transition transition will-change-transform"
          style={{
            translateY: smoothYDown,
          }}
        >
          {projects.column1.map((project, index) => (
            <Image
              key={index}
              src={project.src}
              width={project.width}
              height={project.height}
              alt={`Column 1, Project ${index}`}
            />
          ))}
        </motion.div>
        <motion.div
          className="*:w-40 *:h-40 md:*:w-80 md:*:h-80 *:object-cover *:rounded-xl space-y-4 -translate-y-16 hover:*:scale-105 hover:*:shadow-black/20 hover:*:shadow-lg hover:*:-translate-y-[10px] *:cursor-pointer *:transition transition will-change-transform"
          style={{
            translateY: smoothYUp,
          }}
        >
          {projects.column2.map((project, index) => (
            <Image
              key={index}
              src={project.src}
              width={project.width}
              height={project.height}
              alt={`Column 2, Project ${index}`}
            />
          ))}
        </motion.div>
        <motion.div
          className="*:w-40 *:h-40 md:*:w-80 md:*:h-80 *:object-cover *:rounded-xl space-y-4 translate-y-16 hover:*:scale-105 hover:*:shadow-black/20 hover:*:shadow-lg hover:*:-translate-y-[10px] *:cursor-pointer *:transition transition will-change-transform"
          style={{
            translateY: smoothYDown,
          }}
        >
          {projects.column3.map((project, index) => (
            <Image
              key={index}
              src={project.src}
              width={project.width}
              height={project.height}
              alt={`Column 3, Project ${index}`}
            />
          ))}
        </motion.div>
        <motion.div
          className="*:w-40 *:h-40 md:*:w-80 md:*:h-80 *:object-cover *:rounded-xl space-y-4 -translate-y-16 hover:*:scale-105 hover:*:shadow-black/20 hover:*:shadow-lg hover:*:-translate-y-[10px] *:cursor-pointer *:transition transition will-change-transform"
          style={{
            translateY: smoothYUp,
          }}
        >
          {projects.column4.map((project, index) => (
            <Image
              key={index}
              src={project.src}
              width={project.width}
              height={project.height}
              alt={`Column 4, Project ${index}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectGrid;
