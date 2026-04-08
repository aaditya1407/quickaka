import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroBanner from "../components/services/ServiceHero";
import ServiceCategories from "../components/services/ServiceCategories";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <HeroBanner />
        {/* Categories List */}
        <ServiceCategories />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
