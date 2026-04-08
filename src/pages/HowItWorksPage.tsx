import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WorksHero from "../components/works/WorksHero";
import StepsDetail from "../components/works/StepsDetail";
import Partner from "../components/works/Partner";

const HowItWorksPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <WorksHero />
        {/* Steps Detail */}
        <StepsDetail />
        {/* Partner Preview */}
        <Partner />
      </main>
      <Footer />
    </>
  );
};

export default HowItWorksPage;
