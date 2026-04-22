import { Layers } from "lucide-react";
import PageHero from "../layout/PageHero";

const ServiceHero = () => {
  return (
    <PageHero
      image="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&h=900&fit=crop"
      icon={<Layers size={16} className="text-accent" />}
      badgeLabel="Our Services"
      titleLine1="40+ Services,"
      titleLine2="One Platform."
      subtitle="Everything your Bhopal home needs — from plumbing to photography, legal advice to elder care — all under one roof."
      stats={[
        { value: "40+", label: "Services" },
        { value: "7", label: "Categories" },
        { value: "<2h", label: "Response" },
      ]}
    />
  );
};

export default ServiceHero;
