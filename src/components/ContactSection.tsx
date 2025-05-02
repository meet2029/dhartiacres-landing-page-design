
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setName("");
      setPhone("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-white">
      <div className="container">
        <h2 className="section-title text-center">Contact Us</h2>
        <p className="section-subtitle text-center">Get in touch with our team</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-dhartiacres-dark">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-dhartiacres-blue bg-opacity-10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-dhartiacres-blue" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Our Office</h4>
                  <p className="text-gray-600">
                    Kraft 7, 606, Sarkhej - Gandhinagar Hwy, Gota, Ahmedabad, Gujarat 382481
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-dhartiacres-blue bg-opacity-10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-dhartiacres-blue" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <a href="tel:9227008484" className="text-gray-600 hover:text-dhartiacres-blue transition-colors">
                    +91 92270 08484
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-dhartiacres-blue bg-opacity-10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-dhartiacres-blue" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a href="mailto:info@dhartiacres.com" className="text-gray-600 hover:text-dhartiacres-blue transition-colors">
                    info@dhartiacres.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5631926964136!2d72.5290882!3d23.0793591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b267130ad21%3A0x91ce8336f8302b11!2sKraft%207!5e0!3m2!1sen!2sin!4v1665995532049!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dhartiacres Office Location"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-dhartiacres-dark">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full"
                  placeholder="Your phone number"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full min-h-[150px]"
                  placeholder="What property are you looking for?"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-dhartiacres-blue hover:bg-opacity-90 text-white font-semibold py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
