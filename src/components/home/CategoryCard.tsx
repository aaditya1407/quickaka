import * as LucideIcons from "lucide-react";
import type React from "react";

type Props = {
  title: string;
  description: string;
  services: string[];
  icon: string;
  color: string;
};

const CategoryCard = ({ title, description, services, icon, color }: Props) => {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>>)[icon];

  return (
    <div className="group bg-white rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 cursor-pointer">
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundColor: `${color}12` }}
      >
        {IconComponent && (
          <IconComponent size={22} className="transition-colors duration-300" style={{ color }} />
        )}
      </div>

      {/* Title */}
      <h3 className="font-heading text-lg font-bold text-primary mb-1">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-3 leading-relaxed">
        {description}
      </p>

      {/* Service Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {services.slice(0, 3).map((service) => (
          <span
            key={service}
            className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium"
          >
            {service}
          </span>
        ))}
        {services.length > 3 && (
          <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 font-medium">
            +{services.length - 3} more
          </span>
        )}
      </div>

      {/* CTA */}
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all duration-300">
        Explore
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  );
};

export default CategoryCard;