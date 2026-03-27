import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import HowItWorks from "../components/home/HowItWorks";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
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
