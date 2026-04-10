import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PartnerHero from "../components/partner/PartnerHero";
import WhyPartner from "../components/partner/WhyPartner";
import HowItWorksPartner from "../components/partner/HowItWorksPartner";

const PartnerPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <PartnerHero />
        <WhyPartner />
        <HowItWorksPartner />
      </main>
      <Footer />
    </>
  );
};

export default PartnerPage;
