
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Dhartiacres helped us find our dream home in Ahmedabad. Their knowledge of the local market is exceptional.",
      author: "Raj Patel",
      position: "Homeowner"
    },
    {
      id: 2,
      quote: "Deep's transparent approach to real estate deals made the entire process stress-free. Highly recommend their services.",
      author: "Meera Shah",
      position: "Property Investor"
    },
    {
      id: 3,
      quote: "The team at Dhartiacres went above and beyond to help us secure our commercial property at the best price.",
      author: "Anand Desai",
      position: "Business Owner"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container text-center">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">Testimonials from our satisfied customers</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all flex flex-col"
            >
              <div className="mb-4 text-dhartiacres-blue flex justify-center">
                <Quote className="w-10 h-10" />
              </div>
              <p className="text-gray-700 mb-6 flex-grow italic">"{testimonial.quote}"</p>
              <div>
                <h4 className="font-bold text-dhartiacres-dark">{testimonial.author}</h4>
                <p className="text-gray-600 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
