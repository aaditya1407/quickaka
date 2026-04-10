import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import type React from "react";
import Container from "../layout/Container";
import { categories } from "../../data/services";
import CustomButton from "../ui/CustomButton";

/* ─── shared easing ─── */
const ease = [0.22, 1, 0.36, 1] as const;

/* ─── animation variants ─── */
const panelVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease,
    },
  }),
};

const expandVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.5, ease },
  },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.6, ease },
  },
};

const serviceTagVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: 0.1 + i * 0.04,
      ease,
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

/* ─── component ─── */
const ServiceCategories = () => {
  const [openId, setOpenId] = useState<string | null>(
    categories[0]?.id ?? null,
  );
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white relative">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      <Container>
        {/* ─── Section Header ─── */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
            Browse Categories
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mt-3">
            Everything You Need,{" "}
            <span className="text-accent">Under One Roof</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto leading-relaxed">
            Select a category to explore our full range of verified services
            available across Bhopal.
          </p>
        </motion.div>

        {/* ─── Accordion Panels ─── */}
        <div className="max-w-4xl mx-auto space-y-3">
          {categories.map((cat, index) => {
            const isOpen = openId === cat.id;
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
                variants={panelVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`group rounded-2xl border transition-all duration-500 overflow-hidden ${
                  isOpen
                    ? "border-accent/20 shadow-lg shadow-accent/5 bg-white"
                    : "border-border bg-surface hover:border-accent/10 hover:bg-white"
                }`}
              >
                {/* ─── Panel Header (clickable) ─── */}
                <button
                  onClick={() => toggle(cat.id)}
                  className="w-full flex items-center gap-4 md:gap-6 p-5 md:p-6 text-left cursor-pointer transition-all duration-300"
                >
                  {/* Index number */}
                  <span className="font-heading text-xl md:text-2xl font-extrabold text-primary/15 select-none shrink-0 w-8 transition-colors duration-300 group-hover:text-primary/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                      isOpen ? "scale-110" : ""
                    }`}
                    style={{ backgroundColor: `${cat.color}12` }}
                  >
                    {IconComponent && (
                      <IconComponent
                        size={22}
                        className="transition-colors duration-300"
                        style={{ color: cat.color }}
                      />
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-base md:text-lg font-bold text-primary truncate">
                      {cat.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 mt-0.5 truncate">
                      {cat.tagline} · {cat.stat} services
                    </p>
                  </div>

                  {/* Accent gradient line (visible on open) */}
                  <div
                    className={`hidden md:block h-[2px] w-12 rounded-full transition-all duration-700 origin-left ${
                      isOpen ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{
                      background: `linear-gradient(90deg, ${cat.color}, transparent)`,
                    }}
                  />

                  {/* Expand toggle */}
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500 ${
                      isOpen
                        ? "bg-accent/10 text-accent"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {/* ─── Expanded Panel ─── */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      variants={expandVariants}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-6 md:pb-7">
                        {/* Divider */}
                        <div className="border-t border-border mb-6" />

                        <div className="flex flex-col md:flex-row gap-6">
                          {/* Image */}
                          <div className="md:w-2/5 rounded-xl overflow-hidden relative">
                            <img
                              src={cat.image}
                              alt={cat.title}
                              className="w-full h-48 md:h-full object-cover rounded-xl"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent rounded-xl" />
                            <div className="absolute bottom-3 left-3">
                              <span
                                className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold text-white backdrop-blur-sm border border-white/15"
                                style={{ backgroundColor: `${cat.color}50` }}
                              >
                                {cat.stat} services available
                              </span>
                            </div>
                          </div>

                          {/* Service Tags */}
                          <div className="md:w-3/5">
                            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                              {cat.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {cat.services.map((service, si) => (
                                <motion.span
                                  key={service}
                                  custom={si}
                                  variants={serviceTagVariants}
                                  initial="hidden"
                                  animate="visible"
                                  className="inline-flex items-center px-4 py-2.5 rounded-xl bg-surface border border-border text-sm text-gray-700 font-medium hover:border-accent/30 hover:shadow-sm hover:bg-white transition-all duration-300 cursor-pointer"
                                >
                                  {service}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ─── Bottom CTA ─── */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease }}
        >
          <p className="text-gray-400 mb-5 text-sm">
            Can't find what you're looking for?
          </p>
          <Link to="/contact">
            <CustomButton
              size="lg"
              className="flex items-center gap-2 mx-auto group/cta"
            >
              Contact Us
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover/cta:translate-x-2"
              />
            </CustomButton>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServiceCategories;
