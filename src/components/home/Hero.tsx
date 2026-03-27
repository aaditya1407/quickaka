import { Link } from "react-router-dom";
import Container from "../layout/Container";
import { Search, CheckCircle, Clock, Shield, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  { icon: CheckCircle, label: "Verified Professionals" },
  { icon: Clock, label: "Quick Response" },
  { icon: Shield, label: "37+ Services" },
  { icon: MapPin, label: "Bhopal Centric" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* background image */}
      <img
        src="/background.png"
        className="w-full h-full object-cover absolute inset-0"
        alt=""
      />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-primary/70 via-primary/30 to-primary/70" />

      {/* main content */}
      <Container>
        <div className="z-10 relative flex flex-col items-center text-center pt-20 pb-8">
          {/* Title Logo — top of hero, naturally in flow */}
          <motion.img
            src="/title.png"
            alt="QuicKaka"
            className="w-48 md:w-64 lg:w-80 object-cover mb-8 drop-shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Tag */}
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-semibold mb-6 backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Bhopal ka apna helper
          </motion.span>

          {/* Heading */}
          <motion.h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-3xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Your City, Your Service,{" "}
            <span className="text-accent">One Tap Away.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mt-5 text-white/80 text-base md:text-lg max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Reliable household & professional support for the people of Bhopal.
            <br />
            <span className="text-accent/90 font-bold italic text-base mt-1 inline-block">
              Har kaam, ek naam.
            </span>
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className="mt-8 flex items-center w-full max-w-lg bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="flex items-center gap-3 px-5 flex-1">
              <Search size={18} className="text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="What service do you need?"
                className="w-full py-3.5 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
              />
            </div>
            <button className="bg-accent hover:bg-accent-dark text-white px-6 py-3.5 text-sm font-semibold transition-colors duration-200 shrink-0 cursor-pointer">
              Search
            </button>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/services"
              className="bg-accent hover:bg-accent-dark text-white px-7 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 shadow-lg shadow-accent/30"
            >
              Explore Services
            </Link>
            <Link
              to="/partner"
              className="bg-white/15 hover:bg-white/25 text-white px-7 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 backdrop-blur-sm border border-white/20"
            >
              Become a Partner
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-white/70"
              >
                <badge.icon size={16} className="text-accent" />
                <span className="text-xs md:text-sm font-medium">
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
