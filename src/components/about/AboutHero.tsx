import { Info } from "lucide-react";
import Container from "../layout/Container";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden h-[60vh]">
      <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=600&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-20">
        <Container>
          <div className="max-w-3xl">
            <Info size={40} className="text-accent mb-4" />
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mt-2 leading-tight">
              Your Home, <span className="text-accent">Our Mission.</span>
            </h1>
            <p className="mt-4 text-white/70 text-lg max-w-xl leading-relaxed">
              We bridge the gap between skilled professionals and households in
              Bhopal — so managing your home never feels like a second job.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default AboutHero;
