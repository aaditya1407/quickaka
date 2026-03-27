import Container from "../layout/Container";
import { whyChooseUs } from "../../data/services";
import * as LucideIcons from "lucide-react";
import type React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Why choose QuicKaka
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mt-2">
            The Quality You Expect,
            <br className="hidden sm:block" /> The Service You Deserve
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            We go above and beyond so that managing your home feels effortless —
            not like a second job.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {whyChooseUs.map((feature, index) => {
            const IconComponent = (
              LucideIcons as unknown as Record<
                string,
                React.ComponentType<{ size?: number; className?: string }>
              >
            )[feature.icon];

            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl border border-transparent hover:border-border hover:bg-surface transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  {IconComponent && (
                    <IconComponent size={20} className="text-accent" />
                  )}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary text-base mb-0.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
