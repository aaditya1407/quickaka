import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SEO from "../components/layout/SEO";
import HeroBanner from "../components/services/ServiceHero";
import ServiceCategories from "../components/services/ServiceCategories";

const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Our Services"
        description="Browse 37+ verified home services in Bhopal — home maintenance, construction, cleaning, personal care, legal, events, transport & more. Affordable rates, trusted professionals."
        keywords="home services Bhopal, plumbing services, electrical repair, house cleaning, AC service Bhopal, painting contractor, pest control, carpenter Bhopal, home repair services, beautician at home"
        path="/services"
      />
      <Navbar />
      <main>
        <HeroBanner />
        <ServiceCategories />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
