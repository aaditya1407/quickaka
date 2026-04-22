import { Link } from "react-router-dom";
import Container from "./Container";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const serviceLinks = [
  { label: "Home Maintenance & Repair", to: "/services" },
  { label: "Construction & Interior", to: "/services" },
  { label: "Home Help & Personal Care", to: "/services" },
  { label: "Professional & Legal", to: "/services" },
  { label: "Events & Lifestyle", to: "/services" },
  { label: "Transport & Auto", to: "/services" },
];

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Become a Partner", to: "/partner" },
  { label: "Contact Us", to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <Container>
        <div className="py-14 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1 w-[70%]">
              <Link to="/">
                <img
                  src="/mainLogo.webp"
                  alt="QuicKaka"
                  className="h-24 mb-4"
                  loading="lazy"
                />
              </Link>
              <p className="text-blue-200/60 text-sm leading-relaxed mb-3">
                Bhopal ka apna helper. Simplified home & personal services
                at your doorstep.
              </p>
              <p className="text-blue-200/40 text-xs mb-5">
                Associated with Tulsi Adarsh Shiksha Samiti
              </p>
              {/* Social */}
              <div className="flex gap-3">
                {["Facebook", "Instagram", "YouTube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-colors duration-200"
                    aria-label={social}
                  >
                    <span className="text-xs font-bold">
                      {social.charAt(0)}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white/80 mb-4">
                Services
              </h4>
              <ul className="space-y-2.5">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-blue-200/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white/80 mb-4">
                Company
              </h4>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-blue-200/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white/80 mb-4">
                Get in Touch
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="text-accent mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-blue-200/60">
                    Bhopal, Madhya Pradesh, India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-accent shrink-0" />
                  <a
                    href="mailto:sales@gsenterprise.org.in"
                    className="text-sm text-blue-200/60 hover:text-white transition-colors"
                  >
                    sales@gsenterprise.org.in
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-accent shrink-0" />
                  <a
                    href="tel:+916263228873"
                    className="text-sm text-blue-200/60 hover:text-white transition-colors"
                  >
                    +91 6263228873
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={16} className="text-accent shrink-0" />
                  <span className="text-sm text-blue-200/60">
                    Mon – Sun, 9am – 8pm
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-blue-200/40">
            © {new Date().getFullYear()} QuicKaka. All rights reserved.
          </p>
          <p className="text-xs text-blue-200/40">
            <Link to="/terms" className="text-xs text-blue-200/40 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </p>
          <p className="text-xs text-blue-200/40">
            Made with ❤️ in Bhopal
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
