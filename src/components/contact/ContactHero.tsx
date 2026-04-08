import { MessageSquare } from "lucide-react";
import Container from "../layout/Container";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden h-[60vh]">
      <img
        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=600&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-primary/40" />
      <div className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-20">
        <Container>
          <div className="max-w-3xl">
            <MessageSquare size={40} className="text-accent mb-4" />
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mt-2 leading-tight">
              We'd Love to <span className="text-accent">Hear From You.</span>
            </h1>
            <p className="mt-4 text-white/70 text-lg max-w-xl leading-relaxed">
              Have a question, need help, or want to partner with us? Reach out
              and we'll respond promptly.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ContactHero;
