import { Link } from "react-router-dom";
import Container from "../layout/Container";
import { ArrowRight, Handshake } from "lucide-react";
import CustomButton from "../ui/CustomButton";

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
            <Link to="/services">
              <CustomButton className="flex items-center gap-2 mt-6 group/cta">
                Explore Services{" "}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover/cta:translate-x-2"
                />
              </CustomButton>
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
            <Link to="/partner">
              <CustomButton
                variant="outline"
                className="flex items-center gap-2 mt-6 group/cta"
              >
                Learn More{" "}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover/cta:translate-x-2"
                />
              </CustomButton>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
