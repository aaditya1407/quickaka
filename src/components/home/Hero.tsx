import { Link } from "react-router-dom";
import Container from "../layout/Container";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import CustomButton from "../ui/CustomButton";

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
        <div className="z-10 relative flex flex-col items-center text-center pt-24 pb-12">
          {/* Title Logo */}
          <motion.img
            src="/title.png"
            alt="QuicKaka"
            className="w-[65%] sm:w-[70%] object-cover drop-shadow-2xl absolute -top-15"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Heading */}
          <motion.h1
            className="font-heading text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight max-w-3xl mt-15 md:mt-20"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Your City, Your Service,{" "}
            <span className="text-accent">One Tap Away.</span>
          </motion.h1>

          {/* Subtext — more breathing room */}
          <motion.p
            className="mt-6 text-white/80 text-base md:text-lg max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Reliable household & professional support for the people of Bhopal.
            <br />
            <span className="text-accent font-bold italic text-base mt-2 inline-block">
              Har kaam, ek naam.
            </span>
          </motion.p>

          {/* Search Bar — more top margin */}
          <motion.div
            className="mt-10 flex items-center w-full max-w-lg bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
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
            className="mt-7 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/services">
              <CustomButton>Explore Services</CustomButton>
            </Link>

            <Link to="/partner">
              <CustomButton variant="outline">Become a Partner</CustomButton>
            </Link>
          </motion.div>

          {/* Tag — bottom tagline */}
          <motion.span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white/90 text-sm font-semibold backdrop-blur-sm border border-white/10 mt-12"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Bhopal ka apna helper
          </motion.span>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
