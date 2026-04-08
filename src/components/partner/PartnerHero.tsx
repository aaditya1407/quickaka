import { ArrowRight, Handshake } from "lucide-react";
import Container from "../layout/Container";
import { Link } from "react-router-dom";

const PartnerHero = () => {
  return (
    <section className="relative overflow-hidden h-[60vh] md:h-[70vh]">
      <img
        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=600&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-primary/60" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-20">
        <Container>
          <div className="max-w-3xl">
            <Handshake size={40} className="text-accent mb-4" />
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Partner With Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mt-2 leading-tight">
              Grow Your Business{" "}
              <span className="text-accent">with Respect.</span>
            </h1>
            <p className="mt-4 text-white/70 text-lg max-w-xl leading-relaxed">
              Are you a skilled plumber, electrician, tutor, or beautician in
              Bhopal looking for more customers? Join the QuicKaka family.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-colors duration-200 shadow-lg shadow-accent/30 mt-6"
            >
              Apply Now <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default PartnerHero;
