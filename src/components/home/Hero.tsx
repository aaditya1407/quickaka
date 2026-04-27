import { Link } from "react-router-dom";
import Container from "../layout/Container";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import CustomButton from "../ui/CustomButton";

const ease = [0.22, 1, 0.36, 1] as const;

const charVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4 + i * 0.025,
      ease,
    },
  }),
};

const Hero = () => {
  const titleLine1 = "Your City";
  const titleLine2 = "Your Service";
  const titleLine3 = "One Tap Away";

  const line1Chars = titleLine1.split("");
  const line2Chars = titleLine2.split("");
  const line3Chars = titleLine3.split("");

  return (
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
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white/90 text-sm font-semibold backdrop-blur-sm border border-white/10 mt-12 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Bhopal ka apna helper
              </motion.span>

              {/* Heading */}
              <div className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading leading-tighter overflow-hidden">
                {/* <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease }}
                  className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading leading-tighter text-[#0B1F3A] overflow-hidden"
                >
                  Your City <br /> Your Service <br />
                  <span className="text-orange-500">One Tap Away</span>
                </motion.h1> */}

                {/* Line 1 */}
                <span className="block">
                  {line1Chars.map((char, i) => (
                    <motion.span
                      key={`t-${i}`}
                      custom={i}
                      variants={charVariants}
                      initial="hidden"
                      animate={"visible"}
                      className="inline-block text-[#0B1F3A]"
                      style={{ whiteSpace: char === " " ? "pre" : undefined }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>

                {/* Line 2 */}
                <span className="block mt-1">
                  {line2Chars.map((char, i) => (
                    <motion.span
                      key={`s-${i}`}
                      custom={line1Chars.length + i}
                      variants={charVariants}
                      initial="hidden"
                      animate={"visible"}
                      className="inline-block text-[#0B1F3A]"
                      style={{ whiteSpace: char === " " ? "pre" : undefined }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>

                {/* Line 3 */}
                <span className="block mt-1">
                  {line3Chars.map((char, i) => (
                    <motion.span
                      key={`s-${i}`}
                      custom={line1Chars.length + line2Chars.length + i}
                      variants={charVariants}
                      initial="hidden"
                      animate={"visible"}
                      className="inline-block text-orange-500"
                      style={{ whiteSpace: char === " " ? "pre" : undefined }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
              </div>

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
              {/* <motion.div
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
              </motion.div> */}

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
                  className="w-full max-w-md"
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
  );
};

export default Hero;
