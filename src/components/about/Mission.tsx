import {
  Accessibility,
  Eye,
  MapPin,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import Container from "../layout/Container";

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

const Mission = () => {
  return (
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
              high-quality, and affordable household services while empowering
              local professionals with consistent livelihood opportunities.
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
  );
};

export default Mission;
