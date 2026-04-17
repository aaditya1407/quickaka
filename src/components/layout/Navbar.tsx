import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import { Menu, X } from "lucide-react";
import CustomButton from "../ui/CustomButton";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "About", to: "/about" },
  { label: "Partner", to: "/partner" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}
        `}
    >
      <Container>
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link to="/">
            <div className="flex">
              <img
                src="/mainLogo.webp"
                alt="QuicKaka"
                className={`w-30 md:w-32 transition-all duration-300 mt-2`}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-sm font-light transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:bg-accent after:transition-all after:duration-300 ${
                  location.pathname === link.to
                    ? scrolled
                      ? "text-primary after:w-full"
                      : "text-white after:w-full"
                    : scrolled
                      ? "text-gray-600 hover:text-primary after:w-0 hover:after:w-full"
                      : "text-white/80 hover:text-white after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className={`hidden md:inline-flex`}
            >
              <CustomButton className="px-5 py-2.5 rounded-xl text-sm">
                Book a Service
              </CustomButton>
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-primary hover:bg-gray-100"
                  : "text-white hover:bg-white/15"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className={`md:hidden py-4 space-y-1 border-t ${
              scrolled
                ? "bg-white/95 backdrop-blur-md border-gray-100"
                : "bg-primary/90 backdrop-blur-md border-white/10"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`block px-4 py-2.5 text-sm font-medium rounded-lg mx-2 transition-colors ${
                  scrolled
                    ? location.pathname === link.to
                      ? "text-primary bg-gray-50"
                      : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    : location.pathname === link.to
                      ? "text-white bg-white/15"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Link
                to="/contact"
                className="block w-full text-center bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-accent-dark transition-colors"
              >
                Book a Service
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
