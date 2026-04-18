import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SEO from "../components/layout/SEO";
import ContactHero from "../components/contact/ContactHero";
import ContactContent from "../components/contact/ContactContent";

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with QuicKaka — Bhopal's trusted home services platform. Have a question, need support, or want to partner with us? We're here to help."
        keywords="contact QuicKaka, QuicKaka Bhopal phone, home services support, customer service Bhopal, QuicKaka helpline, book a service Bhopal"
        path="/contact"
      />
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
