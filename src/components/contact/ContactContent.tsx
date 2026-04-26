import Container from "../layout/Container";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import CustomButton from "../ui/CustomButton";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // basic validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.service ||
      !formData.message
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    let toastId: string | number = "";
    try {
      setLoading(true);

      const formUrl = import.meta.env.VITE_GOOGLE_FORM_URL;
      const ENTRY_NAME = import.meta.env.VITE_GOOGLE_FORM_ENTRY_NAME;
      const ENTRY_PHONE = import.meta.env.VITE_GOOGLE_FORM_ENTRY_PHONE;
      const ENTRY_EMAIL = import.meta.env.VITE_GOOGLE_FORM_ENTRY_EMAIL;
      const ENTRY_SERVICE = import.meta.env.VITE_GOOGLE_FORM_ENTRY_SERVICE;
      const ENTRY_MESSAGE = import.meta.env.VITE_GOOGLE_FORM_ENTRY_MESSAGE;

      toastId = toast.loading("Sending message...");

      if (
        !formUrl ||
        !ENTRY_NAME ||
        !ENTRY_EMAIL ||
        !ENTRY_PHONE ||
        !ENTRY_SERVICE ||
        !ENTRY_MESSAGE
      ) {
        toast.update(toastId, {
          render: "Configuration error. Please try again later.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        return;
      }

      const googleFormData = new URLSearchParams();
      googleFormData.append(ENTRY_NAME, formData.name);
      googleFormData.append(ENTRY_PHONE, formData.phone);
      googleFormData.append(ENTRY_EMAIL, formData.email);
      googleFormData.append(ENTRY_SERVICE, formData.service);
      googleFormData.append(ENTRY_MESSAGE, formData.message);

      await fetch(formUrl, {
        method: "POST",
        body: googleFormData,
        mode: "no-cors",
      });

      toast.update(toastId, {
        render: "Message sent successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      toast.update(toastId, {
        render: "Failed to send message. Please try again later.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="md:col-span-3">
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
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
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
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
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-border text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Service Needed
                </label>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-border text-sm text-gray-500 outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all bg-white"
                >
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
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-border text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all resize-none"
                />
              </div>
              <CustomButton
                type="submit"
                className="flex items-center gap-2 group/cta"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
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
                    Mon – Sun, 9:00 AM – 8:00 PM
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
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactContent;
