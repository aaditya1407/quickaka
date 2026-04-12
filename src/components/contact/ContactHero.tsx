import { MessageSquare } from "lucide-react";
import PageHero from "../layout/PageHero";

const ContactHero = () => {
  return (
    <PageHero
      image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=900&fit=crop"
      icon={<MessageSquare size={16} className="text-accent" />}
      badgeLabel="Contact Us"
      titleLine1="We'd Love to"
      titleLine2="Hear From You."
      subtitle="Have a question, need help, or want to partner with us? Reach out and we'll respond promptly."
    />
  );
};

export default ContactHero;
