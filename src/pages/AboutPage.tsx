import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SEO from "../components/layout/SEO";
import AboutHero from "../components/about/AboutHero";
import AboutContent from "../components/about/AboutContent";
import SocialHeart from "../components/about/SocialHeart";
import Mission from "../components/about/Mission";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="QuicKaka is Bhopal's trusted home services platform by GS Enterprises. We connect verified professionals with households — making home management effortless."
        keywords="about QuicKaka, GS Enterprises Bhopal, home services company, trusted home services, Bhopal local services, service professionals Bhopal, QuicKaka mission"
        path="/about"
      />
      <Navbar />
      <main>
        <AboutHero />
        <AboutContent />
        <SocialHeart />
        <Mission />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
