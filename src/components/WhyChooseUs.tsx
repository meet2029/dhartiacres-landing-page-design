
import { Building, Check, MapPin } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      id: 1,
      icon: <Check className="w-10 h-10 text-dhartiacres-blue" />,
      title: "Trusted Broker",
      description: "With years of experience and a track record of successful deals, we've earned the trust of our clients through integrity and professionalism."
    },
    {
      id: 2,
      icon: <MapPin className="w-10 h-10 text-dhartiacres-blue" />,
      title: "Prime Locations",
      description: "We specialize in properties located in the most desirable and high-growth areas of Ahmedabad, ensuring excellent investment potential."
    },
    {
      id: 3,
      icon: <Building className="w-10 h-10 text-dhartiacres-blue" />,
      title: "Transparent Deals",
      description: "We believe in complete transparency throughout the buying and selling process, with no hidden fees or unexpected surprises."
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container text-center">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">We're committed to providing exceptional service</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="mb-6 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-dhartiacres-dark">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
