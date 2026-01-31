"use client";

import { Section } from "@/components/section";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { motion } from "framer-motion";

export function Features() {
  const services = siteConfig.features;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <Section
      id="features"
      title="Features"
      subtitle="Powerful features"
      className="max-w-screen-lg mx-auto container px-10"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map(({ name, description, icon: Icon }, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="rounded-lg overflow-hidden bg-card p-6 flex flex-col items-center text-center"
          >
            <div className="flex flex-col items-center gap-y-4 mb-4">
              <div className="bg-gradient-to-b from-primary to-primary/80 p-2 rounded-lg text-white">
                {Icon}
              </div>
              <h2 className="text-xl font-semibold text-card-foreground">
                {name}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
            <Link
              href="/get-started"
              className="text-sm text-primary hover:underline"
            >
              Learn more &gt;
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
