import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Layers, ChevronDown } from "lucide-react";
import Container from "../layout/Container";

const ease = [0.22, 1, 0.36, 1] as const;

const charVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4 + i * 0.025,
      ease,
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease },
  }),
};

const ServiceHero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.8]);

  const titleChars = "37+ Services,".split("");
  const subtitleChars = "One Platform.".split("");

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-[70vh] flex items-end"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&h=900&fit=crop"
          alt=""
          className="w-full h-[130%] object-cover object-top"
        />
      </motion.div>

      {/* Dynamic overlay */}
      <motion.div
        className="absolute inset-0 bg-primary"
        style={{ opacity: overlayOpacity }}
      />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent z-10" />

      {/* Content */}
      <div className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-32 w-full">
        <Container>
          <div className="max-w-4xl">
            {/* Icon badge */}
            <motion.div
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6"
            >
              <Layers size={16} className="text-accent" />
              <span className="text-white/90 text-xs font-semibold uppercase tracking-[0.15em]">
                Our Services
              </span>
            </motion.div>

            {/* Animated title — character by character */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight overflow-hidden">
              {/* Line 1 */}
              <span className="block">
                {titleChars.map((char, i) => (
                  <motion.span
                    key={`t-${i}`}
                    custom={i}
                    variants={charVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="inline-block text-white"
                    style={{ whiteSpace: char === " " ? "pre" : undefined }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              {/* Line 2 */}
              <span className="block mt-1">
                {subtitleChars.map((char, i) => (
                  <motion.span
                    key={`s-${i}`}
                    custom={titleChars.length + i}
                    variants={charVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="inline-block text-accent"
                    style={{ whiteSpace: char === " " ? "pre" : undefined }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              custom={1.2}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-6 text-white/65 text-lg md:text-xl max-w-xl leading-relaxed"
            >
              Everything your Bhopal home needs — from plumbing to photography,
              legal advice to elder care — all under one roof.
            </motion.p>

            {/* Animated stats row */}
            <motion.div
              custom={1.5}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-10 flex flex-wrap gap-8"
            >
              {[
                { value: "37+", label: "Services" },
                { value: "6", label: "Categories" },
                { value: "<2h", label: "Response" },
              ].map((stat) => (
                <div key={stat.label} className="text-left">
                  <p className="font-heading text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-white/40 text-xs uppercase tracking-[0.15em] mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceHero;
