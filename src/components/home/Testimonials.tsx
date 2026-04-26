import { motion } from "framer-motion";
import Container from "../layout/Container";
import { RiStarSFill } from "@remixicon/react";

/* ─── shared easing ─── */
const ease = [0.22, 1, 0.36, 1] as const;

/* ─── header animation variants ─── */
const sectionHeader = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.4 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, ease },
  },
};

/* ─── testimonials data ─── */
const testimonials = [
  {
    name: "Priya Sharma",
    quote:
      '"Booked a deep cleaning service before Diwali. The team was professional, punctual, and thorough. My house looked brand new! Highly recommend QuicKaka."',
    service: "Home Cleaning • Arera Colony, Bhopal",
    stars: 5,
  },
  {
    name: "Rajesh Verma",
    quote:
      '"Had an urgent electrical issue late evening. The electrician arrived within an hour and fixed everything. Great service at affordable rates — truly the local hero!"',
    service: "Electrician • MP Nagar, Bhopal",
    stars: 5,
  },
  {
    name: "Anita Jain",
    quote:
      '"Needed a mehndi artist last minute for my sister\'s wedding. QuicKaka connected me with an amazing artist same day. Absolutely delighted with the experience!"',
    service: "Mehndi Artist • Kolar Road, Bhopal",
    stars: 5,
  },
  {
    name: "Suresh Patel",
    quote:
      '"AC broke down in peak summer. QuicKaka sent a technician within 2 hours. Professional work, fair pricing. This is exactly what Bhopal needed!"',
    service: "AC Repair • Hoshangabad Road, Bhopal",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <Container>
        {/* Header */}
        <motion.div
          className="text-center mb-12 relative"
          variants={sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-200px" }}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-accent text-sm font-semibold uppercase tracking-[0.2em]"
          >
            Testimonials
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl md:text-4xl font-extrabold text-primary mt-2"
          >
            What Bhopal Says About Us
          </motion.h2>

          <motion.div
            variants={lineReveal}
            className="mt-6 mx-auto h-[3px] w-16 bg-accent origin-left rounded-full"
          />
        </motion.div>

        {/* FIXED RESPONSIVE WRAPPER */}
        <div className="flex flex-wrap items-center justify-center gap-12 mt-10 w-full">
          {testimonials.map((t, index) => {
            const cardDelay = index * 0.2;
            const starBaseDelay = 0.8 + cardDelay;

            return (
              <div
                key={t.name}
                className="w-full sm:w-[48%] lg:w-1/3 overflow-hidden"
              >
                <motion.div
                  className="text-center"
                  initial={{ y: 80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                    delay: cardDelay,
                  }}
                >
                  {/* stars */}
                  <div className="flex gap-0.5 mb-6 justify-center">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: starBaseDelay + i * 0.1,
                          ease: "easeOut",
                        }}
                      >
                        <RiStarSFill size={18} />
                      </motion.span>
                    ))}
                  </div>

                  {/* ONLY FIXED THIS */}
                  <p className="lg:text-sm sm:text-base leading-5">{t.quote}</p>

                  <p className="font-semibold font-heading mt-3 text-primary/80">
                    {t.name}
                  </p>

                  <p className="text-sm text-gray-600">{t.service}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
