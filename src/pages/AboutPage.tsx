import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";
import {
  Target,
  Eye,
  ShieldCheck,
  Accessibility,
  Users,
  MapPin,
  Heart,
  ArrowRight,
} from "lucide-react";

const goals = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "To ensure every service provider is vetted and trained for excellence.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    text: "To offer a seamless booking experience for everything from a haircut to property management.",
  },
  {
    icon: Users,
    title: "Community Impact",
    text: "To uplift our service partners through fair wages and our association with Tulsi Adarsh Shiksha Samiti.",
  },
  {
    icon: MapPin,
    title: "Hyper-Local Focus",
    text: "To master the specific needs of Bhopal residents before expanding our footprint.",
  },
];

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative overflow-hidden h-[60vh]">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=600&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-primary/60" />
          <div className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-20">
            <Container>
              <div className="max-w-3xl">
                <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                  About Us
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mt-2 leading-tight">
                  Your Home, <span className="text-accent">Our Mission.</span>
                </h1>
                <p className="mt-4 text-white/70 text-lg max-w-xl leading-relaxed">
                  We bridge the gap between skilled professionals and households in
                  Bhopal — so managing your home never feels like a second job.
                </p>
              </div>
            </Container>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl font-extrabold text-primary mb-4">
                  About QuicKaka
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At QuicKaka, we believe that managing a home shouldn't feel
                  like a second job. Whether it's a leaky tap, an urgent nursing
                  requirement for an elderly parent, or a last-minute mehndi
                  artist, we bridge the gap between skilled professionals and
                  households in Bhopal.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We aren't just a service aggregator; we are a community-first
                  platform. Born out of a desire to simplify urban living,
                  QuicKaka brings over 35+ essential services — ranging from
                  technical repairs and construction to personal care and legal
                  support — directly to your doorstep.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
                >
                  Explore All Services <ArrowRight size={14} />
                </Link>
              </div>
              <div className="flex justify-center">
                <img
                  src="/mainLogo.png"
                  alt="QuicKaka mascot"
                  className="w-72 md:w-96 drop-shadow-lg"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Social Heart */}
        <section className="py-12 md:py-16 bg-accent/5">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Heart size={32} className="text-accent mx-auto mb-4" />
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-primary mb-3">
                Our Social Heart
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We are proud to be associated with{" "}
                <strong>Tulsi Adarsh Shiksha Samiti</strong>. This partnership
                ensures that our growth contributes to social welfare, helping us
                integrate skilled workforce development with community education
                and support.
              </p>
            </div>
          </Container>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="text-center mb-14">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                What Drives Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mt-2">
                Mission, Vision & Goals
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-14">
              {/* Mission */}
              <div className="bg-surface rounded-2xl p-8 border border-border">
                <Target size={28} className="text-accent mb-3" />
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To provide Bhopal's residents with instant access to verified,
                  high-quality, and affordable household services while
                  empowering local professionals with consistent livelihood
                  opportunities.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-surface rounded-2xl p-8 border border-border">
                <Eye size={28} className="text-accent mb-3" />
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To become the most trusted "Kaka" (helper) in every Indian
                  household — starting with Bhopal — by setting the gold standard
                  for reliability, speed, and service diversity.
                </p>
              </div>
            </div>

            {/* Goals */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {goals.map((goal, i) => (
                <div
                  key={i}
                  className="text-center p-5 rounded-2xl hover:bg-surface transition-colors"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                    <goal.icon size={22} className="text-accent" />
                  </div>
                  <h4 className="font-heading font-bold text-primary text-sm mb-1">
                    {goal.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {goal.text}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
