import Container from "../layout/Container";
import { Search, UserCheck, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Select Your Service",
    description:
      "Browse our 37+ categories — from home repairs to personal wellness — and pick exactly what you need.",
  },
  {
    icon: UserCheck,
    number: "02",
    title: "Get a Pro Assigned",
    description:
      "We match you with the best-rated professional in your neighborhood who specializes in that specific task.",
  },
  {
    icon: ThumbsUp,
    number: "03",
    title: "Sit Back & Relax",
    description:
      'Our "Kaka" arrives on time, completes the job with high-quality standards, and ensures your home is left clean and functional.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <Container>
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Simple & Easy
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mt-2">
            How It Works
          </h2>
          <p className="mt-3 text-gray-500 max-w-md mx-auto">
            Getting professional help for your Bhopal home has never been easier.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-border" />
              )}

              {/* Icon circle */}
              <div className="relative z-10 w-20 h-20 mx-auto rounded-2xl bg-white shadow-md shadow-gray-100 border border-border flex items-center justify-center mb-5 group-hover:border-accent/30 group-hover:shadow-lg transition-all duration-300">
                <step.icon size={28} className="text-accent" />
              </div>

              {/* Number */}
              <span className="text-xs font-bold text-accent/60 tracking-widest">
                STEP {step.number}
              </span>

              {/* Title */}
              <h3 className="font-heading text-lg font-bold text-primary mt-1 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed max-w-[260px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
