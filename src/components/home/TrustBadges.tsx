import Container from "../layout/Container";
import {
  ShieldCheck,
  Timer,
  SquaresFour,
  MapPinArea,
} from "@phosphor-icons/react";

const badges = [
  {
    icon: ShieldCheck,
    label: "Verified Professionals",
    stat: "100%",
    description: "Background-checked & trained experts",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Timer,
    label: "Quick Response",
    stat: "< 2hrs",
    description: "Average arrival time across Bhopal",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: SquaresFour,
    label: "37+ Services",
    stat: "37+",
    description: "Categories covering every home need",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: MapPinArea,
    label: "Bhopal Centric",
    stat: "100%",
    description: "Hyper-local, built for this city",
    gradient: "from-rose-500 to-pink-600",
  },
];

const TrustBadges = () => {
  return (
    <section className="py-16 md:py-20 bg-surface relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <Container>
        {/* Header */}
        <div className="text-center mb-14 relative z-10">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Trusted & Reliable
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mt-2">
            Built For You
          </h2>
          <p className="mt-3 text-gray-500 max-w-md mx-auto text-sm">
            Numbers that speak louder than words — here's why Bhopal trusts us.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center relative z-10">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="group relative p-6 transition-all duration-500 flex flex-col items-center justify-center"
            >
              {/* Hover gradient glow */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${badge.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-2xl`}
              />

              {/* Icon — Phosphor duotone, big and beautiful */}
              <div
                className={`w-14 h-14 rounded-2xl bg-linear-to-br ${badge.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-500`}
              >
                <badge.icon size={28} weight="duotone" color="#fff" />
              </div>

              {/* Stat number */}
              <p className="font-heading text-3xl font-extrabold text-primary mb-1 tracking-tight">
                {badge.stat}
              </p>

              {/* Label */}
              <h3 className="font-heading font-bold text-primary text-sm mb-1">
                {badge.label}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-400 leading-relaxed">
                {badge.description}
              </p>

              {/* bottom line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[3px] bg-linear-to-r ${badge.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              />
              {/* top line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r ${badge.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right`}
              />
              {/* left line */}
              <div
                className={`absolute left-0 top-0 bottom-0 h-full w-[3px] bg-linear-to-r ${badge.gradient} scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top`}
              />
              {/* right line */}
              <div
                className={`absolute right-0 top-0 bottom-0 h-full w-[3px] bg-linear-to-r ${badge.gradient} scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom`}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustBadges;
