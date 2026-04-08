import { Lightbulb } from "lucide-react";
import Container from "../layout/Container";

const WorksHero = () => {
  return (
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
  );
};

export default WorksHero;
