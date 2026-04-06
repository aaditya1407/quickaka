import Container from "../components/layout/Container";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const TermsPage = () => {
  return (
    <>
      <Navbar />
      <main className="h-screen">
        {/* Hero Banner */}
        <section className="relative overflow-hidden h-[60vh]">
          <img
            src="https://images.unsplash.com/photo-1672380135241-c024f7fbfa13?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/60" />
          <div className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-20">
            <Container>
              <div className="max-w-3xl">
                <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                 TERMS & CONDITIONS
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mt-2 leading-tight">
                  Clear, Fair & <span className="text-accent">Transparent</span>
                </h1>
                <p className="mt-4 text-white/70 text-lg max-w-xl leading-relaxed">
                  These terms define how we operate, protect your data, and ensure a secure and trustworthy experience for every service you book.
                </p>
              </div>
            </Container>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TermsPage;
