import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";
import { categories } from "../data/services";
import * as LucideIcons from "lucide-react";
import type React from "react";
import { ArrowRight, Layers } from "lucide-react";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative overflow-hidden h-[60vh]">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&h=600&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-primary/60" />
          <div className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-20">
            <Container>
              <div className="max-w-3xl">
                <Layers size={40} className="text-accent mb-4" />
                <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                  Our Services
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mt-2 leading-tight">
                  37+ Services, <span className="text-accent">One Platform.</span>
                </h1>
                <p className="mt-4 text-white/70 text-lg max-w-xl leading-relaxed">
                  Everything your Bhopal home needs — from plumbing to
                  photography, legal advice to elder care — all under one roof.
                </p>
              </div>
            </Container>
          </div>
        </section>

        {/* Categories List */}
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
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
