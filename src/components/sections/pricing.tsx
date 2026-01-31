"use client";

import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export function Pricing() {
  const ref = useRef(null);

  return (
    <Section
      id="pricing"
      title="Pricing"
      subtitle="simple pricing"
      className="container px-10"
      ref={ref}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
        className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto py-10"
      >
        {siteConfig.pricing.map((plan, index) => (
          <motion.div
            key={plan.name}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-muted/60 p-6 rounded-3xl grid grid-rows-[auto_auto_1fr_auto]"
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <div className="text-4xl font-bold text-primary mb-2">
              {plan.price}
              <span className="text-sm font-normal text-muted-foreground">
                /{plan.period}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {plan.description}
            </p>

            <div className="space-y-3 mb-6">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center">
                  <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link
              href={plan.href}
              className={buttonVariants({
                variant: "default",
                size: "sm",
                className: "rounded-full text-white",
              })}
            >
              Get Started
              <ChevronRightIcon className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
