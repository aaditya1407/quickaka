import { motion } from "framer-motion";
import type { ReactNode } from "react";
import FeatureCard from "./FeatureCard";
import SectionHeader from "./SectionHeader";

interface Props {
  badge: string;
  heading: string;
  headingAccent?: string;
  subtitle?: string;
  features: { icon: ReactNode; title: string; description: string }[];
  columns?: 2 | 3;
  bgClass?: string;
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const FeatureGridSection = ({
  badge,
  heading,
  headingAccent,
  subtitle,
  features,
  columns = 3,
  bgClass = "bg-white",
}: Props) => {
  const gridCols =
    columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className={`py-20 md:py-28 ${bgClass} relative`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader
          badge={badge}
          heading={heading}
          headingAccent={headingAccent}
          subtitle={subtitle}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px", amount: 0.3 }}
          className={`grid ${gridCols} gap-5 lg:gap-6 max-w-5xl mx-auto`}
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGridSection;
