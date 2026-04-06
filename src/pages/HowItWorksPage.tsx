import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";
import {
  Search,
  UserCheck,
  ThumbsUp,
  ArrowRight,
  Handshake,
  Lightbulb,
} from "lucide-react";

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

const HowItWorksPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative overflow-hidden h-[60vh]">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=600&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-primary/60" />
          <div className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-20">
            <Container>
              <div className="max-w-3xl">
                <Lightbulb size={40} className="text-accent mb-4" />
                <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                  How It Works
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mt-2 leading-tight">
                  Easy as <span className="text-accent">1, 2, 3.</span>
                </h1>
                <p className="mt-4 text-white/70 text-lg max-w-xl leading-relaxed">
                  See how a busy Bhopal resident can get professional help in just
                  three simple steps.
                </p>
              </div>
            </Container>
          </div>
        </section>

        {/* Steps Detail */}
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
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-accent/20"
              >
                Browse Services <ArrowRight size={14} />
              </Link>
            </div>
          </Container>
        </section>

        {/* Partner Preview */}
        <section className="py-16 md:py-20 bg-surface">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Handshake size={36} className="text-accent mx-auto mb-4" />
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-3">
                Become a QuicKaka Partner
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto mb-6 leading-relaxed">
                Are you a skilled professional in Bhopal looking for more
                customers? Join the QuicKaka family for consistent work, fair pay,
                and community pride.
              </p>
              <Link
                to="/partner"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-colors"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HowItWorksPage;
