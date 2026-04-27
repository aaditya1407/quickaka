import Navbar from "../components/layout/Navbar";
import SEO from "../components/layout/SEO";
import Hero from "../components/home/Hero";
import TrustBadges from "../components/home/TrustBadges";
import Categories from "../components/home/Categories";
import HowItWorks from "../components/home/HowItWorks";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";
import CustomButton from "../components/ui/CustomButton";
import Container from "../components/layout/Container";

const ease = [0.22, 1, 0.36, 1] as const;

const HomePage = () => {
  return (
    <>
      <SEO
        title="Home"
        description="QuicKaka — Bhopal's most trusted home services platform. 37+ verified services including plumbing, electrical, cleaning, painting, AC repair & more. Book a professional in minutes."
        keywords="QuicKaka, home services Bhopal, plumber Bhopal, electrician Bhopal, cleaning services Bhopal, AC repair, painting services, pest control, home maintenance Bhopal, trusted home services"
        path="/"
      />
      <Navbar />
      <main className="relative">
        <section className="relative overflow-hidden bg-white min-h-screen flex flex-col justify-center">
          {/* subtle background (optional) */}
          <div className="absolute inset-0 ">
            <img
              src="/background.webp"
              alt=""
              className="w-full h-full object-cover blur-sm"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-b from-primary/50 via-primary/30 to-primary/50" />

          <Container>
            <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* LEFT CONTENT */}
                <div className="text-center lg:text-left">
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
                  {/* Heading */}
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#0B1F3A]"
                  >
                    Your City, Your Service,{" "}
                    <span className="text-orange-500">One Tap Away.</span>
                  </motion.h1>
                  {/* Subtext */}
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6, ease }}
                    className="mt-5 text-lg text-gray-800 max-w-xl mx-auto lg:mx-0"
                  >
                    Reliable household & professional support for the people of
                    Bhopal.
                  </motion.p>
                  {/* Search Bar */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, ease }}
                    className="mt-8 flex items-center bg-white shadow-lg rounded-full overflow-hidden max-w-lg mx-auto lg:mx-0"
                  >
                    <div className="pl-4 text-gray-400">
                      <Search size={20} />
                    </div>

                    <input
                      type="text"
                      placeholder="What service do you need?"
                      className="flex-1 px-4 py-3  outline-none text-sm"
                    />

                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-medium transition-all duration-300 cursor-pointer">
                      Search
                    </button>
                  </motion.div>
                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, ease }}
                    className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start"
                  >
                    <Link to="/services">
                      <CustomButton className="rounded-full">
                        Explore Services
                      </CustomButton>
                    </Link>

                    <Link to="/partner">
                      <CustomButton variant="outline" className="rounded-full">
                        Become a Partner
                      </CustomButton>
                    </Link>
                  </motion.div>
                </div>

                {/* RIGHT ILLUSTRATION */}
                <div className="flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease }}
                    className="flex justify-center lg:justify-end"
                  >
                    <motion.img
                      src="/mainLogo.webp"
                      alt="Worker"
                      className="w-[80%] max-w-md"
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-medium">
                Scroll
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown size={18} className="text-white/30" />
              </motion.div>
            </motion.div>
          </Container>
        </section>

        <TrustBadges />
        <Categories />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
