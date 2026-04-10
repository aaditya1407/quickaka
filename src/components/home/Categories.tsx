import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import type React from "react";
import Container from "../layout/Container";
import { categories } from "../../data/services";

/* ─── shared easing ─── */
const ease = [0.22, 1, 0.36, 1] as const;

/* ─── animation variants ─── */
const sectionHeader = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease,
    },
  }),
};

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, ease },
  },
};

const Categories = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      {/* Subtle decorative dots */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <Container>
        {/* ─── Section Header ─── */}
        <motion.div
          className="text-center mb-16 md:mb-20 relative"
          variants={sectionHeader}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-accent text-sm font-semibold uppercase tracking-[0.2em]"
          >
            What We Offer
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mt-3 leading-tight"
          >
            37+ <span className="text-accent">Services,</span> One Platform
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-gray-500 max-w-lg mx-auto leading-relaxed"
          >
            Everything your Bhopal home needs — from repairs and cleaning to
            events and legal support — all under one roof.
          </motion.p>

          {/* Animated accent line */}
          <motion.div
            variants={lineReveal}
            className="mt-6 mx-auto h-[3px] w-16 bg-accent origin-left rounded-full"
          />
        </motion.div>

        {/* ─── Cards Grid ─── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {categories.map((cat, index) => {
            const IconComponent = (
              LucideIcons as unknown as Record<
                string,
                React.ComponentType<{
                  size?: number;
                  className?: string;
                  style?: React.CSSProperties;
                }>
              >
            )[cat.icon];

            return (
              <motion.div
                key={cat.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ minHeight: "340px" }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Multi-layer gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/20 transition-all duration-500 group-hover:from-black/95 group-hover:via-black/60" />
                </div>

                {/* Content Layer */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-7">
                  {/* Top — Index + Icon */}
                  <div className="flex items-start justify-between">
                    <span className="font-heading text-5xl font-extrabold text-white/10 leading-none select-none group-hover:text-white/20 transition-colors duration-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:border-white/20"
                      style={{ backgroundColor: `${cat.color}25` }}
                    >
                      {IconComponent && (
                        <IconComponent
                          size={22}
                          className="transition-colors duration-300"
                          style={{ color: cat.color }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Bottom — Info */}
                  <div>
                    {/* Tagline */}
                    <span className="text-accent text-xs font-bold uppercase tracking-[0.15em] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {cat.tagline}
                    </span>

                    {/* Title */}
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white mt-1 leading-snug">
                      {cat.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-sm mt-2 leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>

                    {/* Service Pills + CTA */}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white border border-white/15 backdrop-blur-sm"
                          style={{ backgroundColor: `${cat.color}30` }}
                        >
                          {cat.stat} services
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                        Explore
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className="mt-4 h-[2px] rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                      style={{
                        background: `linear-gradient(90deg, ${cat.color}, transparent)`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ─── Bottom CTA ─── */}
        <motion.div
          className="text-center mt-14 md:mt-18"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8, ease }}
        >
          <Link
            to="/services"
            className="group/cta inline-flex items-center gap-3 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-2xl text-sm font-bold transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
          >
            Explore All Services
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover/cta:translate-x-1"
            />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default Categories;
