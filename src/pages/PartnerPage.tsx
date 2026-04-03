import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";
import {
  Handshake,
  Clock,
  GraduationCap,
  Users,
  ArrowRight,
  CheckCircle,
  IndianRupee,
  Shield,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Be Your Own Boss",
    description:
      "Choose your hours and work in the neighborhoods you prefer. Full flexibility, full control.",
  },
  {
    icon: GraduationCap,
    title: "Skill Enhancement",
    description:
      "Access training workshops through our association with Tulsi Adarsh Shiksha Samiti.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description:
      "We value our partners as the backbone of our business. You grow, we grow.",
  },
  {
    icon: IndianRupee,
    title: "Fair Payment",
    description:
      "Transparent and timely payments with no hidden deductions. You earn what you deserve.",
  },
  {
    icon: Shield,
    title: "Brand Association",
    description:
      "Carry the pride of being part of a socially responsible, trusted brand in Bhopal.",
  },
  {
    icon: CheckCircle,
    title: "Consistent Work",
    description:
      "Stop worrying about finding customers. We bring a steady flow of service requests to you.",
  },
];

const PartnerPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative overflow-hidden h-[60vh] md:h-[70vh]">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=600&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-primary/60" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-20">
            <Container>
              <div className="max-w-3xl">
                <Handshake size={40} className="text-accent mb-4" />
                <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                  Partner With Us
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mt-2 leading-tight">
                  Grow Your Business{" "}
                  <span className="text-accent">with Respect.</span>
                </h1>
                <p className="mt-4 text-white/70 text-lg max-w-xl leading-relaxed">
                  Are you a skilled plumber, electrician, tutor, or beautician in
                  Bhopal looking for more customers? Join the QuicKaka family.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-colors duration-200 shadow-lg shadow-accent/30 mt-6"
                >
                  Apply Now <ArrowRight size={14} />
                </Link>
              </div>
            </Container>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="text-center mb-12">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                Benefits
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mt-2">
                Why Join QuicKaka?
              </h2>
              <p className="mt-3 text-gray-500 max-w-lg mx-auto">
                We provide you with consistent work, fair payment structures, and
                the pride of being associated with a socially responsible brand.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-transparent hover:border-border hover:bg-surface transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <benefit.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary text-base mb-0.5">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* How It Works for Partners */}
        <section className="py-16 md:py-20 bg-surface">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-extrabold text-primary">
                  How to Get Started
                </h2>
              </div>

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Apply Online",
                    desc: "Fill out a simple application form with your skills and experience.",
                  },
                  {
                    step: "02",
                    title: "Verification & Training",
                    desc: "We verify your background and provide onboarding training to meet our quality standards.",
                  },
                  {
                    step: "03",
                    title: "Start Earning",
                    desc: "Get matched with service requests in your area and start building your client base.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center font-heading font-bold text-sm shrink-0">
                      {item.step}
                    </div>
                    <div className="pt-0.5">
                      <h3 className="font-heading text-lg font-bold text-primary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-accent/20"
                >
                  Apply to Partner <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PartnerPage;
