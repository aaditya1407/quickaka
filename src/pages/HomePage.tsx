import Navbar from "../components/layout/Navbar";
import SEO from "../components/layout/SEO";
import Hero from "../components/home/Hero";
import TrustBadges from "../components/home/TrustBadges";
import Categories from "../components/home/Categories";
import HowItWorks from "../components/home/HowItWorks";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";


const HomePage = () => {
  return (
    <>
      <SEO
        title="Home"
        description="QuicKaka — Bhopal's most trusted home services platform. 37+ verified services including plumbing, electrical, cleaning, painting, AC repair & more. Book a professional in minutes."
        keywords="QuicKaka, home services Bhopal, plumber Bhopal, electrician Bhopal, cleaning services Bhopal, AC repair, painting services, pest control, home maintenance Bhopal, trusted home services"
        path="/"
      />
      <Navbar />
      <main className="relative">
        <Hero />
        <TrustBadges />
        <Categories />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
