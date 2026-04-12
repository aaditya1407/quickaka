import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <motion.div
    variants={fadeUp}
    className="group relative p-6 rounded-2xl border border-border bg-white hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 overflow-hidden"
  >
    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>

    <h3 className="font-heading font-bold text-primary text-base mb-1.5">
      {title}
    </h3>

    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>

    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
  </motion.div>
);

export default FeatureCard;
