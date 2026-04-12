import { motion } from "framer-motion";

interface Props {
  badge: string;
  heading: string;
  headingAccent?: string;
  subtitle?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, ease },
  },
};

const SectionHeader = ({ badge, heading, headingAccent, subtitle }: Props) => (
  <motion.div
    className="text-center mb-14 md:mb-16"
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px", amount: 0.4 }}
  >
    <motion.span
      variants={fadeUp}
      className="text-accent text-sm uppercase tracking-[0.2em] font-semibold"
    >
      {badge}
    </motion.span>

    <motion.h2
      variants={fadeUp}
      className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mt-3 leading-tight"
    >
      {heading}
      {headingAccent && <span className="text-accent"> {headingAccent}</span>}
    </motion.h2>

    {subtitle && (
      <motion.p
        variants={fadeUp}
        className="mt-4 text-gray-500 max-w-lg mx-auto leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}

    <motion.div
      variants={lineReveal}
      className="mt-6 mx-auto h-[3px] w-16 bg-accent rounded-full"
    />
  </motion.div>
);

export default SectionHeader;
