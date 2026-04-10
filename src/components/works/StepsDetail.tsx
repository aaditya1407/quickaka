import { ArrowRight, Search, ThumbsUp, UserCheck } from "lucide-react";
import Container from "../layout/Container";
import { Link } from "react-router-dom";
import CustomButton from "../ui/CustomButton";

const StepsDetail = () => {
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

  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start">
              {/* Number + Line */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <step.icon size={24} className="text-accent" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px h-16 bg-border mt-3" />
                )}
              </div>

              {/* Content */}
              <div className="pt-1">
                <span className="text-xs font-bold text-accent/60 uppercase tracking-widest">
                  Step {step.number}
                </span>
                <h3 className="font-heading text-2xl font-bold text-primary mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/services">
            <CustomButton size="lg" className="flex items-center gap-2 mx-auto group/cta">
              Browse Services{" "}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover/cta:translate-x-2"
              />
            </CustomButton>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default StepsDetail;
