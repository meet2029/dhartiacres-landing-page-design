
import PropertyCard from "./PropertyCard";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80",
      title: "Modern Luxury Villa",
      location: "Bodakdev, Ahmedabad",
      price: "₹2.5 Cr",
      bedrooms: 4,
      bathrooms: 3,
      area: "3200 sq.ft"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80",
      title: "Riverside Apartment",
      location: "Sabarmati, Ahmedabad",
      price: "₹85 Lac",
      bedrooms: 3,
      bathrooms: 2,
      area: "1800 sq.ft"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80",
      title: "Premium Office Space",
      location: "Prahlad Nagar, Ahmedabad",
      price: "₹1.8 Cr",
      bedrooms: 0,
      bathrooms: 2,
      area: "2500 sq.ft"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80",
      title: "Urban High-Rise",
      location: "SG Highway, Ahmedabad",
      price: "₹1.2 Cr",
      bedrooms: 3,
      bathrooms: 2,
      area: "2100 sq.ft"
    }
  ];

  return (
    <section id="properties">
      <div className="container text-center">
        <h2 className="section-title">Featured Properties</h2>
        <p className="section-subtitle">Explore our selection of premium properties</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              id={property.id}
              image={property.image}
              title={property.title}
              location={property.location}
              price={property.price}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              area={property.area}
            />
          ))}
        </div>
        
        <div className="mt-12">
          <a href="#contact" className="btn-primary">
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
