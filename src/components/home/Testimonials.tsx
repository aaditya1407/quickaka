import { useState } from "react";
import Container from "../layout/Container";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../../data/services";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const testimonial = testimonials[current];

  return (
    <section className="py-16 md:py-20 bg-surface">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mt-2">
            What Bhopal Says About Us
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-border shadow-sm relative">
            {/* Quote icon */}
            <Quote
              size={40}
              className="text-accent/10 absolute top-6 right-8"
            />

            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-amber-400 fill-amber-400"
                />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-heading font-bold text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-400">
                  {testimonial.service} • {testimonial.location}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={16} className="text-gray-500" />
                </button>
                <button
                  onClick={next}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={16} className="text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? "bg-accent w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
