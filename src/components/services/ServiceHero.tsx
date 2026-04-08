import { Layers } from "lucide-react";
import Container from "../layout/Container";

const ServiceHero = () => {
  return (
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
              Everything your Bhopal home needs — from plumbing to photography,
              legal advice to elder care — all under one roof.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ServiceHero;
