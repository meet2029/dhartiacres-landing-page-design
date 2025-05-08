
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent>
          <CarouselItem>
            <div 
              className="min-h-screen flex items-center" 
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/lovable-uploads/4a807a4f-9add-4764-b825-0011d4fbd81d.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="container text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Find Your Dream Home with Dhartiacres
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  Premium properties in prime locations across Ahmedabad
                </p>
                <a 
                  href="#contact" 
                  className="btn-primary inline-block animate-fade-in" 
                  style={{ animationDelay: '0.6s' }}
                >
                  Schedule a Free Consultation
                </a>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div 
              className="min-h-screen flex items-center" 
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/lovable-uploads/b28d86b9-ab1e-4c43-bb67-b1ab0469959c.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="container text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Luxury Properties for Modern Living
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  Expert guidance for your real estate investments
                </p>
                <a 
                  href="#contact" 
                  className="btn-primary inline-block animate-fade-in" 
                  style={{ animationDelay: '0.6s' }}
                >
                  Schedule a Free Consultation
                </a>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div 
              className="min-h-screen flex items-center" 
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/lovable-uploads/6e1082c1-39c3-4381-b836-ba307994479c.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="container text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Premium Living Spaces
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  Discover your next home with Dhartiacres
                </p>
                <a 
                  href="#contact" 
                  className="btn-primary inline-block animate-fade-in" 
                  style={{ animationDelay: '0.6s' }}
                >
                  Schedule a Free Consultation
                </a>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default HeroSection;
