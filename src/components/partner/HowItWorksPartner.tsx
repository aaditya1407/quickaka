import Container from "../layout/Container";

const data = [
  {
    step: "01",
    title: "Apply Online",
    desc: "Fill out a simple application form with your skills and experience.",
  },
  {
    step: "02",
    title: "Verification & Training",
    desc: "We verify your background and provide onboarding training to meet our quality standards.",
  },
  {
    step: "03",
    title: "Start Earning",
    desc: "Get matched with service requests in your area and start building your client base.",
  },
];

const HowItWorksPartner = () => {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-extrabold text-primary">
              How to Get Started
            </h2>
          </div>

          <div className="space-y-8">
            {data.map((item, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center font-heading font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <div className="pt-0.5">
                  <h3 className="font-heading text-lg font-bold text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksPartner;
