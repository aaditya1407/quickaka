import { ArrowRight, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../layout/PageHero";
import CustomButton from "../ui/CustomButton";

const PartnerHero = () => {
  return (
    <PageHero
      image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=900&fit=crop"
      icon={<Handshake size={16} className="text-accent" />}
      badgeLabel="Partner With Us"
      titleLine1="Grow Your Business"
      titleLine2="with Respect."
      subtitle="Are you a skilled plumber, electrician, tutor, or beautician in Bhopal looking for more customers? Join the QuicKaka family."
    >
      <Link to="/contact">
        <CustomButton className="flex items-center gap-2 group/cta">
          Apply Now{" "}
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover/cta:translate-x-2"
          />
        </CustomButton>
      </Link>
    </PageHero>
  );
};

export default PartnerHero;
