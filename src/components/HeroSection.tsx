
const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Find Your Perfect Property
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Premium properties in prime locations across Ahmedabad
        </p>
        <a 
          href="#properties" 
          className="btn-primary inline-block animate-fade-in" 
          style={{ animationDelay: '0.6s' }}
        >
          Find Your Dream Home
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
