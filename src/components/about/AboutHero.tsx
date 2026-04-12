import { Info } from "lucide-react";
import PageHero from "../layout/PageHero";

const AboutHero = () => {
  return (
    <PageHero
      image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop"
      icon={<Info size={16} className="text-accent" />}
      badgeLabel="About Us"
      titleLine1="Your Home,"
      titleLine2="Our Mission."
      subtitle="We bridge the gap between skilled professionals and households in Bhopal — so managing your home never feels like a second job."
    />
  );
};

export default AboutHero;
