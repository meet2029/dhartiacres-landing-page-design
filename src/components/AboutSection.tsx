
const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50">
      <div className="container text-center">
        <h2 className="section-title">About Dhartiacres</h2>
        <p className="section-subtitle">Your trusted partner in real estate</p>
        
        <div className="flex flex-col md:flex-row items-center gap-8 mt-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80" 
              alt="Modern Office Building" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-bold mb-4 text-dhartiacres-blue">Our Story</h3>
            <p className="text-gray-700 mb-4">
              Founded by Deep Patel, Dhartiacres has established itself as a premier real estate brokerage 
              firm located in the heart of Ahmedabad. We specialize in residential and commercial properties, 
              offering comprehensive property solutions tailored to our clients' needs.
            </p>
            <p className="text-gray-700 mb-4">
              With years of experience in the local market, we have developed a deep understanding of 
              Ahmedabad's real estate landscape, enabling us to provide insightful guidance and unparalleled service 
              to buyers, sellers, and investors alike.
            </p>
            <p className="text-gray-700">
              At Dhartiacres, we're committed to transparency, integrity, and excellence in every transaction, 
              ensuring that our clients make informed decisions and achieve their real estate goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
