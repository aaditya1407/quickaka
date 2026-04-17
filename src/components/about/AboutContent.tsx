import { Link } from "react-router-dom";
import Container from "../layout/Container";
import { ArrowRight } from "lucide-react";

const AboutContent = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl font-extrabold text-primary mb-4">
              About QuicKaka
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At QuicKaka, we believe that managing a home shouldn't feel like a
              second job. Whether it's a leaky tap, an urgent nursing
              requirement for an elderly parent, or a last-minute mehndi artist,
              we bridge the gap between skilled professionals and households in
              Bhopal.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We aren't just a service aggregator; we are a community-first
              platform. Born out of a desire to simplify urban living, QuicKaka
              brings over 35+ essential services — ranging from technical
              repairs and construction to personal care and legal support —
              directly to your doorstep.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
            >
              Explore All Services <ArrowRight size={14} />
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/mainLogo.webp"
              alt="QuicKaka mascot"
              className="w-72 md:w-96 drop-shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutContent;
