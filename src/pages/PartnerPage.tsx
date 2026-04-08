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
        {/* Hero Banner */}
        <PartnerHero />

        {/* Why Partner */}
        <WhyPartner />

        {/* How It Works for Partners */}
        <HowItWorksPartner />
      </main>
      <Footer />
    </>
  );
};

export default PartnerPage;
