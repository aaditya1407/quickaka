import { Lightbulb } from "lucide-react";
import PageHero from "../layout/PageHero";

const WorksHero = () => {
  return (
    <PageHero
      image="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=900&fit=crop"
      icon={<Lightbulb size={16} className="text-accent" />}
      badgeLabel="How It Works"
      titleLine1="Easy as"
      titleLine2="1, 2, 3."
      subtitle="See how a busy Bhopal resident can get professional help in just three simple steps."
      stats={[
        { value: "3", label: "Steps" },
        { value: "<5m", label: "To Book" },
        { value: "100%", label: "Verified" },
      ]}
    />
  );
};

export default WorksHero;
