
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-dhartiacres-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-2xl font-bold text-dhartiacres-blue mb-4">
              Dharti<span className="text-white">acres</span>
            </h1>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted real estate partner in Ahmedabad. We help you find your dream property with personalized service and expert market knowledge.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-dhartiacres-blue transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-dhartiacres-blue transition-colors" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" className="text-white hover:text-dhartiacres-blue transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="text-white hover:text-dhartiacres-blue transition-colors" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-dhartiacres-blue transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-dhartiacres-blue transition-colors">About Us</a>
              </li>
              <li>
                <a href="#properties" className="text-gray-300 hover:text-dhartiacres-blue transition-colors">Properties</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-dhartiacres-blue transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Kraft 7, 606, SG Highway, Gota, Ahmedabad, Gujarat 382481</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:9227008484" className="hover:text-dhartiacres-blue transition-colors">+91 92270 08484</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <a href="mailto:info@dhartiacres.com" className="hover:text-dhartiacres-blue transition-colors">info@dhartiacres.com</a>
              </li>
            </ul>
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
