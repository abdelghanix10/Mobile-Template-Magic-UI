/* eslint-disable @next/next/no-img-element */
"use client";

import { Section } from "@/components/section";
import { easeInOutCubic } from "@/lib/animation";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function BentoGrid() {
  const ref = useRef(null);

  return (
    <Section
      id="bento"
      title="Benefits"
      subtitle="It does a lot of things"
      className="mx-auto max-w-screen-md px-10"
      ref={ref}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {siteConfig.bento.map((bentoItem, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: easeInOutCubic }}
            className={cn(
              "bg-muted p-4 sm:p-6 !pb-0 rounded-3xl grid grid-rows-1",
              bentoItem.fullWidth && "md:col-span-2",
            )}
          >
            <div className="flex flex-col">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">
                {bentoItem.title}
              </h2>
              <p className="text-sm sm:text-base text-foreground mb-4">
                {bentoItem.content}
              </p>
            </div>
            <div
              className={cn(
                "flex justify-center",
                bentoItem.fullWidth && "sm:space-x-4",
              )}
            >
              <img
                src={bentoItem.imageSrc}
                alt={bentoItem.imageAlt}
                className="w-full h-64 sm:h-96 rounded-xl object-cover object-top"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
