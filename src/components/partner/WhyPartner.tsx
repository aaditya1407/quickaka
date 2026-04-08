import Container from "../layout/Container";
import {
  Clock,
  GraduationCap,
  Users,
  CheckCircle,
  IndianRupee,
  Shield,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Be Your Own Boss",
    description:
      "Choose your hours and work in the neighborhoods you prefer. Full flexibility, full control.",
  },
  {
    icon: GraduationCap,
    title: "Skill Enhancement",
    description:
      "Access training workshops through our association with Tulsi Adarsh Shiksha Samiti.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description:
      "We value our partners as the backbone of our business. You grow, we grow.",
  },
  {
    icon: IndianRupee,
    title: "Fair Payment",
    description:
      "Transparent and timely payments with no hidden deductions. You earn what you deserve.",
  },
  {
    icon: Shield,
    title: "Brand Association",
    description:
      "Carry the pride of being part of a socially responsible, trusted brand in Bhopal.",
  },
  {
    icon: CheckCircle,
    title: "Consistent Work",
    description:
      "Stop worrying about finding customers. We bring a steady flow of service requests to you.",
  },
];

const WhyPartner = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Benefits
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mt-2">
            Why Join QuicKaka?
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            We provide you with consistent work, fair payment structures, and
            the pride of being associated with a socially responsible brand.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-2xl border border-transparent hover:border-border hover:bg-surface transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <benefit.icon size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-primary text-base mb-0.5">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyPartner;
