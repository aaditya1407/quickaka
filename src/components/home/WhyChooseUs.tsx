import { whyChooseUs } from "../../data/services";
import * as LucideIcons from "lucide-react";
import type React from "react";
import FeatureGridSection from "../ui/FeatureGridSection";

const WhyChooseUs = () => {
  const features = whyChooseUs.map((feature) => {
    const IconComponent = (
      LucideIcons as unknown as Record<
        string,
        React.ComponentType<{ size?: number; className?: string }>
      >
    )[feature.icon];

    return {
      icon: IconComponent ? (
        <IconComponent size={22} className="text-accent" />
      ) : null,
      title: feature.title,
      description: feature.description,
    };
  });

  return (
    <FeatureGridSection
      badge="Why Choose QuicKaka"
      heading="The Quality You Expect,"
      headingAccent="The Service You Deserve"
      subtitle="We go above and beyond so that managing your home feels effortless — not like a second job."
      features={features}
    />
  );
};

export default WhyChooseUs;
