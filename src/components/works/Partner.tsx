import { ArrowRight, Handshake } from "lucide-react";
import Container from "../layout/Container";
import { Link } from "react-router-dom";

const Partner = () => {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Handshake size={36} className="text-accent mx-auto mb-4" />
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-3">
            Become a QuicKaka Partner
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-6 leading-relaxed">
            Are you a skilled professional in Bhopal looking for more customers?
            Join the QuicKaka family for consistent work, fair pay, and
            community pride.
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
  );
};

export default Partner;
