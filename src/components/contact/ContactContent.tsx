import Container from "../layout/Container";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import CustomButton from "../ui/CustomButton";

const ContactContent = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="md:col-span-3">
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-border text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Service Needed
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-border text-sm text-gray-500 outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all bg-white">
                  <option value="">Select a service category</option>
                  <option>Home Maintenance & Repair</option>
                  <option>Construction & Interior Works</option>
                  <option>Home Help & Personal Care</option>
                  <option>Professional & Legal Support</option>
                  <option>Events & Lifestyle</option>
                  <option>Transport & Auto</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you need..."
                  className="w-full px-4 py-3 rounded-xl border border-border text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all resize-none"
                />
              </div>
              <CustomButton
                type="submit"
                className="flex items-center gap-2 group/cta"
              >
                Send Message{" "}
                <Send
                  size={16}
                  className="transition-transform duration-300 group-hover/cta:translate-x-2"
                />
              </CustomButton>
            </form>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary text-sm">
                    Address
                  </h4>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Bhopal, Madhya Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary text-sm">
                    Email
                  </h4>
                  <a
                    href="mailto:sales@gsenterprise.org.in"
                    className="text-sm text-gray-500 hover:text-accent transition-colors mt-0.5 block"
                  >
                    sales@gsenterprise.org.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary text-sm">
                    Phone
                  </h4>
                  <a
                    href="tel:+916263228873"
                    className="text-sm text-gray-500 hover:text-accent transition-colors mt-0.5 block"
                  >
                    +91 6263228873
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary text-sm">
                    Working Hours
                  </h4>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Mon – Sat, 10:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Unsplash image */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-border">
              <img
                src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=600&h=300&fit=crop"
                alt="Customer support"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactContent;
