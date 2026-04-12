import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../layout/Container";
import { categories } from "../../data/services";
import CustomButton from "../ui/CustomButton";

/* ─── shared easing ─── */
const ease = [0.22, 1, 0.36, 1] as const;

/* ─── animation variants ─── */
const sectionHeader = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.4 },
  },
};

const panelVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease,
    },
  }),
};

const expandVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.4, ease },
      opacity: { duration: 0.25 },
    },
  },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.5, ease },
      opacity: { duration: 0.4, delay: 0.1 },
    },
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
      delay: 0.15 + i * 0.035,
      ease,
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, ease },
  },
};

/* ─── component ─── */
const ServiceCategories = () => {
  const [openId, setOpenId] = useState<string | null>(
    categories[0]?.id ?? null,
  );

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const toggle = (id: string) => {
    setOpenId(id);
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white relative">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      <Container>
        {/* ─── Section Header ─── */}
        <motion.div
          className="text-center mb-14 md:mb-18"
          variants={sectionHeader}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span
            variants={fadeUp}
            className="text-accent text-sm font-semibold uppercase tracking-[0.2em]"
          >
            Browse Categories
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mt-3"
          >
            Everything You Need,{" "}
            <span className="text-accent">Under One Roof</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-gray-500 max-w-lg mx-auto leading-relaxed"
          >
            Select a category to explore our full range of verified services
            available across Bhopal.
          </motion.p>
          {/* Animated accent line */}
          <motion.div
            variants={lineReveal}
            className="mt-5 mx-auto h-[3px] w-14 bg-accent origin-center rounded-full"
          />
        </motion.div>

        {/* ─── Accordion Panels ─── */}
        <div className="space-y-4">
          {categories.map((cat, index) => {
            const isOpen = openId === cat.id;

            return (
              <motion.div
                key={cat.id}
                custom={index}
                variants={panelVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`relative rounded-2xl border transition-all duration-500 overflow-hidden ${
                  isOpen
                    ? "border-accent/25 shadow-xl shadow-accent/8 bg-white"
                    : "border-border bg-surface/60 hover:border-accent/15 hover:bg-white hover:shadow-md"
                }`}
              >
                {/* Top accent line when open */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-[3px] bg-accent transition-all duration-700`}
                  animate={{ opacity: isOpen ? 1 : 0, scaleX: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease, delay: 0.2 }}
                />

                {/* ─── Panel Header (clickable) ─── */}
                <button
                  onClick={() => toggle(cat.id)}
                  className="relative z-10 w-full flex items-center gap-4 md:gap-5 p-5 md:p-6 text-left cursor-pointer transition-all duration-300"
                >
                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`font-heading text-base md:text-lg font-bold truncate transition-colors duration-300 ${
                        isOpen ? "text-primary" : "text-primary/80"
                      }`}
                    >
                      {cat.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 mt-0.5 flex items-center gap-2">
                      <span className="truncate">{cat.tagline}</span>
                      <span className="hidden sm:inline text-gray-300">·</span>
                      <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase text-accent bg-accent/10">
                        {cat.stat} services
                      </span>
                    </p>
                  </div>

                  {/* Expand toggle */}
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                      isOpen
                        ? "bg-accent text-white shadow-md shadow-accent/25"
                        : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                    }`}
                  >
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease }}
                    >
                      {isOpen ? (
                        <Minus size={16} strokeWidth={2.5} />
                      ) : (
                        <Plus size={16} strokeWidth={2.5} />
                      )}
                    </motion.div>
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
                      <div className="px-5 md:px-6 pb-6 md:pb-8">
                        {/* Divider */}
                        <div className="border-t border-border/60 mb-6" />

                        <div className="flex flex-col md:flex-row gap-6">
                          {/* Image */}
                          <div className="md:w-2/5 rounded-2xl overflow-hidden relative group/img">
                            <img
                              src={cat.image}
                              alt={cat.title}
                              className="w-full h-52 md:h-64 object-cover rounded-2xl transition-transform duration-700 group-hover/img:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent rounded-2xl" />
                            {/* Floating badge on image */}
                            <div className="absolute bottom-4 left-4 right-4">
                              <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-accent/80 backdrop-blur-md border border-white/20">
                                {cat.stat} services available
                              </span>
                            </div>
                          </div>

                          {/* Service Tags */}
                          <div className="md:w-3/5">
                            <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                              {cat.description}
                            </p>

                            <div className="flex flex-wrap gap-2.5">
                              {cat.services.map((service, si) => (
                                <motion.span
                                  key={service}
                                  custom={si}
                                  variants={serviceTagVariants}
                                  initial="hidden"
                                  animate="visible"
                                  className="inline-flex items-center px-4 py-2.5 rounded-xl bg-surface border border-border text-sm text-gray-700 font-medium hover:border-accent/30 hover:shadow-md hover:bg-white transition-all duration-300 cursor-pointer"
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
