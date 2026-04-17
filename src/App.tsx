import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PartnerPage from "./pages/PartnerPage";
import TermsPage from "./pages/TermsPage";
import Lenis from "lenis";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // smoothness (lower = faster)
      smoothWheel: true,
    });

    // Expose globally so ScrollToTop (and other components) can use
    // lenis.scrollTo() instead of the native window.scrollTo().
    (window as any).__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        pauseOnHover
        theme="light"
      />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
