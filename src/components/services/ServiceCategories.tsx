import * as LucideIcons from "lucide-react";
import type React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../layout/Container";
import { categories } from "../../data/services";

const ServiceCategories = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="space-y-12">
          {categories.map((cat, index) => {
            const IconComponent = (
              LucideIcons as unknown as Record<
                string,
                React.ComponentType<{
                  size?: number;
                  className?: string;
                }>
              >
            )[cat.icon];

            return (
              <div
                key={cat.id}
                className="bg-surface rounded-2xl p-8 border border-border hover:border-accent/20 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon + Header */}
                  <div className="flex items-start gap-4 md:w-1/3">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${cat.color}15` }}
                    >
                      {IconComponent && (
                        <IconComponent
                          size={26}
                          className={`text-[${cat.color}]`}
                        />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-accent/60 uppercase tracking-widest">
                        Category {String.fromCharCode(65 + index)}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-primary mt-0.5">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="md:w-2/3">
                    <div className="flex flex-wrap gap-2">
                      {cat.services.map((service) => (
                        <span
                          key={service}
                          className="inline-flex items-center px-4 py-2 rounded-xl bg-white border border-border text-sm text-gray-700 font-medium hover:border-accent/30 hover:shadow-sm transition-all cursor-pointer"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-4">
            Can't find what you're looking for?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-accent/20"
          >
            Contact Us <ArrowRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ServiceCategories;
