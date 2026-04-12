import { useRef, type ReactNode } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Container from "./Container";

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

type Stat = { value: string; label: string };

interface PageHeroProps {
  /** image url */
  image: string;
  /** Small icon rendered inside the badge (Lucide element) */
  icon: ReactNode;
  /** Uppercase label next to the icon badge */
  badgeLabel: string;
  /** First line of the title (white text) */
  titleLine1: string;
  /** Second line = accent-colored text */
  titleLine2: string;
  /** Paragraph below the title */
  subtitle: string;
  /** Optional stats row */
  stats?: Stat[];
  /** Optional extra content (e.g. a CTA button) rendered below stats */
  children?: ReactNode;
  /** object-position for the background image (default "center top") */
  imagePosition?: string;
}

const PageHero = ({
  image,
  icon,
  badgeLabel,
  titleLine1,
  titleLine2,
  subtitle,
  stats,
  children,
  imagePosition = "center top",
}: PageHeroProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });


  // this is used for parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.8]);

  const line1Chars = titleLine1.split("");
  const line2Chars = titleLine2.split("");

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-[70vh] flex items-end"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={image}
          alt=""
          className="w-full h-[130%] object-cover"
          style={{ objectPosition: imagePosition }}
        />
      </motion.div>

      {/* Dynamic overlay */}
      <motion.div
        className="absolute inset-0 bg-primary"
        style={{ opacity: overlayOpacity }}
      />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-linear-to-t from-white to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-32 w-full">
        <Container>
          {/* Icon badge */}
          <motion.div
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6"
          >
            {icon}
            <span className="text-white/90 text-xs font-semibold uppercase tracking-[0.15em]">
              {badgeLabel}
            </span>
          </motion.div>

          {/* Animated title — character by character */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight overflow-hidden">
            {/* Line 1 — white */}
            <span className="block">
              {line1Chars.map((char, i) => (
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
            {/* Line 2 — accent */}
            <span className="block mt-1">
              {line2Chars.map((char, i) => (
                <motion.span
                  key={`s-${i}`}
                  custom={line1Chars.length + i}
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
            {subtitle}
          </motion.p>

          {/* Stats row */}
          {stats && stats.length > 0 && (
            <motion.div
              custom={1.5}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-10 flex flex-wrap gap-8"
            >
              {stats.map((stat) => (
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
          )}

          {/* Extra content (CTA buttons etc.) */}
          {children && (
            <motion.div
              custom={1.8}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </Container>
      </div>
    </section>
  );
};

export default PageHero;
