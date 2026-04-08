import { Heart } from "lucide-react";
import Container from "../layout/Container";

const SocialHeart = () => {
  return (
    <section className="py-12 md:py-16 bg-accent/5">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Heart size={32} className="text-accent mx-auto mb-4" />
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-primary mb-3">
            Our Social Heart
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are proud to be associated with{" "}
            <strong>Tulsi Adarsh Shiksha Samiti</strong>. This partnership
            ensures that our growth contributes to social welfare, helping us
            integrate skilled workforce development with community education and
            support.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default SocialHeart;
