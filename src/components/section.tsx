"use client";

import { easeInOutCubic } from "@/lib/animation";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { forwardRef, useEffect, useRef } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    { id, title, subtitle, description, children, className, align },
    forwardedRef,
  ) => {
    const internalRef = useRef<HTMLElement | null>(null);

    const sectionId = title ? title.toLowerCase().replace(/\s+/g, "-") : id;
    const alignmentClass =
      align === "left"
        ? "text-left"
        : align === "right"
          ? "text-right"
          : "text-center";

    const pathname = usePathname();
    const finalId = id || sectionId;

    useEffect(() => {
      if (!finalId || pathname !== "/") return;

      // Skip URL updates for 1 second after page load to prevent "jumping" issues
      const isInitialLanded =
        typeof window !== "undefined" && window.location.hash !== "";
      let skipUpdate = isInitialLanded;

      const timer = setTimeout(() => {
        skipUpdate = false;
      }, 1000);

      const observer = new IntersectionObserver(
        (entries) => {
          if (skipUpdate) return;

          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const targetHash = finalId === "hero" ? "" : `#${finalId}`;
              if (window.location.hash !== targetHash) {
                const newUrl =
                  targetHash === ""
                    ? window.location.pathname
                    : `${window.location.pathname}${targetHash}`;
                window.history.replaceState(null, "", newUrl);
              }
            }
          });
        },
        {
          rootMargin: "-30% 0px -60% 0px",
          threshold: 0,
        },
      );

      const currentElement = internalRef.current;
      if (currentElement) {
        observer.observe(currentElement);
      }

      return () => {
        clearTimeout(timer);
        if (currentElement) {
          observer.unobserve(currentElement);
        }
      };
    }, [finalId, pathname]);

    const { scrollYProgress } = useScroll({
      target: internalRef,
      offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [0, 0, 1], {
      ease: easeInOutCubic,
    });
    const y = useTransform(scrollYProgress, [0, 0.05, 0.1], [30, 30, 0], {
      ease: easeInOutCubic,
    });

    return (
      <section
        id={id || sectionId}
        ref={(node) => {
          internalRef.current = node;
          if (typeof forwardedRef === "function") {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
        }}
        className="relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: easeInOutCubic }}
          className={cn("sm:py-20 py-12", className)}
        >
          {(title || subtitle || description) && (
            <div className={cn(alignmentClass, "space-y-4 pb-10 mx-auto")}>
              {title && (
                <motion.h2 className="text-sm text-primary text-balance font-mono font-semibold tracking-wider uppercase">
                  {title}
                </motion.h2>
              )}

              {subtitle && (
                <motion.h3
                  className={cn(
                    "mt-4 max-w-lg text-5xl text-balance font-bold sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tighter text-foreground lowercase",
                    align === "right"
                      ? "ml-auto"
                      : align === "left"
                        ? "mr-auto"
                        : "mx-auto",
                  )}
                >
                  {subtitle}
                </motion.h3>
              )}
              {description && (
                <motion.p
                  className={cn(
                    "mt-6 text-lg leading-8 text-muted-foreground text-balance max-w-2xl",
                    align === "right"
                      ? "ml-auto"
                      : align === "left"
                        ? "mr-auto"
                        : "mx-auto",
                  )}
                >
                  {description}
                </motion.p>
              )}
            </div>
          )}
          {children}
        </motion.div>
      </section>
    );
  },
);

Section.displayName = "Section";

export { Section };
