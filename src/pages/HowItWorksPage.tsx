import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SEO from "../components/layout/SEO";
import WorksHero from "../components/works/WorksHero";
import StepsDetail from "../components/works/StepsDetail";
import Partner from "../components/works/Partner";

const HowItWorksPage = () => {
  return (
    <>
      <SEO
        title="How It Works"
        description="Book a trusted home service professional in Bhopal in 3 easy steps — select your service, get a verified pro assigned, and sit back while we handle the rest."
        keywords="how to book home service Bhopal, QuicKaka booking, home service process, book plumber online, book electrician Bhopal, easy home repair booking"
        path="/how-it-works"
      />
      <Navbar />
      <main>
        <WorksHero />
        <StepsDetail />
        <Partner />
      </main>
      <Footer />
    </>
  );
};

export default HowItWorksPage;
