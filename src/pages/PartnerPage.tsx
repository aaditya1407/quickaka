import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SEO from "../components/layout/SEO";
import PartnerHero from "../components/partner/PartnerHero";
import WhyPartner from "../components/partner/WhyPartner";
import HowItWorksPartner from "../components/partner/HowItWorksPartner";
import PartnerForm from "../components/partner/PartnerForm";

const PartnerPage = () => {
  return (
    <>
      <SEO
        title="Partner With Us"
        description="Join QuicKaka as a service professional in Bhopal. Get consistent work, fair payments, skill training, and the pride of being part of a trusted brand."
        keywords="partner with QuicKaka, join QuicKaka Bhopal, service professional jobs, plumber jobs Bhopal, electrician jobs, freelance home services, work with QuicKaka"
        path="/partner"
      />
      <Navbar />
      <main>
        <PartnerHero />
        <WhyPartner />
        <HowItWorksPartner />
        <PartnerForm />
      </main>
      <Footer />
    </>
  );
};

export default PartnerPage;
