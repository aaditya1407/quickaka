import { Link } from "react-router-dom";
import Container from "../layout/Container";
import { ArrowRight, Handshake } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
      <Container>
        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
          {/* Left — Book a Service */}
          <div className="text-center md:text-left">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Ready to Get Things Done?
            </h2>
            <p className="mt-4 text-blue-200/70 text-base md:text-lg max-w-md">
              Join thousands of happy Bhopal residents who trust QuicKaka for
              reliable, affordable services.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-colors duration-200 shadow-lg shadow-accent/30 mt-6"
            >
              Explore Services
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right — Partner CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center md:text-left">
            <Handshake size={32} className="text-accent mb-3" />
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              Become a QuicKaka Partner
            </h3>
            <p className="text-blue-200/60 text-sm mb-5 leading-relaxed">
              Are you a skilled professional in Bhopal? Join the QuicKaka family
              for consistent work, fair pay, and community pride.
            </p>
            <Link
              to="/partner"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 border border-white/20"
            >
              Learn More
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
