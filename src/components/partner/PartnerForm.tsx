import Container from "../layout/Container";
import { Send } from "lucide-react";
import CustomButton from "../ui/CustomButton";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

const PartnerForm = () => {
  const formRef = useRef<HTMLDivElement>(null);

  // On mount: if URL has #partner-form (navigated from another page), scroll to form
  useEffect(() => {
    if (window.location.hash === "#partner-form") {
      const timer = setTimeout(() => {
        const el = formRef.current;
        if (!el) return;
        const lenis = (window as any).__lenis;
        if (lenis) {
          lenis.scrollTo(el, { offset: -80 });
        } else {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 400);
      return () => clearTimeout(timer);
    }
  }, []); // runs only once on mount

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // basic validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Please fill all the fields");
      return;
    }

    let toastId: string | number = "";
    try {
      setLoading(true);

      const formUrl = import.meta.env.VITE_PARTNER_GOOGLE_FORM_URL;
      const ENTRY_NAME = import.meta.env.VITE_PARTNER_GOOGLE_FORM_ENTRY_NAME;
      const ENTRY_PHONE = import.meta.env.VITE_PARTNER_GOOGLE_FORM_ENTRY_PHONE;
      const ENTRY_MESSAGE = import.meta.env
        .VITE_PARTNER_GOOGLE_FORM_ENTRY_MESSAGE;

      toastId = toast.loading("Sending message...");

      if (!formUrl || !ENTRY_NAME || !ENTRY_PHONE || !ENTRY_MESSAGE) {
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
    <section
      id="partner-form"
      ref={formRef}
      className="py-16 md:py-20 bg-white"
    >
      <Container>
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold text-primary mb-3">
              Become a Partner Today
            </h2>
            <p className="text-gray-500">
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-6">
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
                  className="w-full px-4 py-3 rounded-xl border border-border text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all bg-white"
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
                  className="w-full px-4 py-3 rounded-xl border border-border text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all bg-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Message (Tell us about your skills)
              </label>
              <textarea
                rows={4}
                placeholder="I am a plumber with 5 years of experience..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-border text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all resize-none bg-white"
              />
            </div>
            <CustomButton
              type="submit"
              className="flex items-center justify-center w-full gap-2 group/cta py-4"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Application"}
              <Send
                size={18}
                className="transition-transform duration-300 group-hover/cta:translate-x-2"
              />
            </CustomButton>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default PartnerForm;
