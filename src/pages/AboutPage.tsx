import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AboutHero from "../components/about/AboutHero";
import AboutContent from "../components/about/AboutContent";
import SocialHeart from "../components/about/SocialHeart";
import Mission from "../components/about/Mission";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <AboutHero />
        {/* About Content */}
        <AboutContent />
        {/* Social Heart */}
        <SocialHeart />
        {/* Mission & Vision */}
        <Mission />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
