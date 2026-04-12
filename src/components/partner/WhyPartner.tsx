import {
  Clock,
  GraduationCap,
  Users,
  CheckCircle,
  IndianRupee,
  Shield,
} from "lucide-react";
import FeatureGridSection from "../ui/FeatureGridSection";

const benefits = [
  {
    icon: <Clock size={22} className="text-accent" />,
    title: "Be Your Own Boss",
    description:
      "Choose your hours and work in the neighborhoods you prefer. Full flexibility, full control.",
  },
  {
    icon: <GraduationCap size={22} className="text-accent" />,
    title: "Skill Enhancement",
    description:
      "Access training workshops through our association with Tulsi Adarsh Shiksha Samiti.",
  },
  {
    icon: <Users size={22} className="text-accent" />,
    title: "Supportive Community",
    description:
      "We value our partners as the backbone of our business. You grow, we grow.",
  },
  {
    icon: <IndianRupee size={22} className="text-accent" />,
    title: "Fair Payment",
    description:
      "Transparent and timely payments with no hidden deductions. You earn what you deserve.",
  },
  {
    icon: <Shield size={22} className="text-accent" />,
    title: "Brand Association",
    description:
      "Carry the pride of being part of a socially responsible, trusted brand in Bhopal.",
  },
  {
    icon: <CheckCircle size={22} className="text-accent" />,
    title: "Consistent Work",
    description:
      "Stop worrying about finding customers. We bring a steady flow of service requests to you.",
  },
];

const WhyPartner = () => {
  return (
    <FeatureGridSection
      badge="Benefits"
      heading="Why Join QuicKaka?"
      subtitle="We provide you with consistent work, fair payment structures, and the pride of being associated with a socially responsible brand."
      features={benefits}
    />
  );
};

export default WhyPartner;
