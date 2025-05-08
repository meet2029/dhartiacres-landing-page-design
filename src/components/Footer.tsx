
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-dhartiacres-dark to-black text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/f7e751d7-92b0-438a-b23c-403433aeed1f.png" 
                alt="Dhartiacres Logo" 
                className="h-12 mr-2" 
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted real estate partner in Ahmedabad. We help you find your dream property with personalized service and expert market knowledge.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-dhartiacres-blue hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-dhartiacres-blue hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-dhartiacres-blue hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-dhartiacres-blue hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-dhartiacres-blue pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-dhartiacres-blue transition-colors flex items-center">
                  <span className="w-1 h-1 bg-dhartiacres-blue rounded-full mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-dhartiacres-blue transition-colors flex items-center">
                  <span className="w-1 h-1 bg-dhartiacres-blue rounded-full mr-2"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#properties" className="text-gray-300 hover:text-dhartiacres-blue transition-colors flex items-center">
                  <span className="w-1 h-1 bg-dhartiacres-blue rounded-full mr-2"></span>
                  Properties
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-dhartiacres-blue transition-colors flex items-center">
                  <span className="w-1 h-1 bg-dhartiacres-blue rounded-full mr-2"></span>
                  Contact
                </a>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-4 mt-8 text-white border-b border-dhartiacres-blue pb-2">Our Store</h3>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/1a262358-d5b8-4bd8-a9dd-b6e26bab5f86.png" 
                alt="Dhartiacres Office" 
                className="w-full h-32 object-cover rounded-lg transition-transform hover:scale-105 duration-300" 
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-dhartiacres-blue pb-2">Contact Info</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <MapPin className="mr-3 text-dhartiacres-blue shrink-0 mt-1" size={18} />
                <span>Kraft 7, 606, SG Highway, Gota, Ahmedabad, Gujarat 382481</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-dhartiacres-blue shrink-0" size={18} />
                <a href="tel:9227008484" className="hover:text-dhartiacres-blue transition-colors">+91 92270 08484</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-dhartiacres-blue shrink-0" size={18} />
                <a href="mailto:info@dhartiacres.com" className="hover:text-dhartiacres-blue transition-colors">info@dhartiacres.com</a>
              </li>
            </ul>
            
            <div className="mt-6 bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-dhartiacres-blue mb-2">Business Hours</h4>
              <p className="text-sm text-gray-400 mb-1">Monday - Saturday: 9:30 AM - 7:30 PM</p>
              <p className="text-sm text-gray-400">Sunday: By appointment only</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {year} Dhartiacres. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
