import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ContactHero from "../components/contact/ContactHero";
import ContactContent from "../components/contact/ContactContent";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactContent />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
