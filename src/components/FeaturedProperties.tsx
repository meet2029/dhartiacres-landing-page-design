
import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: "/lovable-uploads/8171bc2d-65a5-4a13-b8fd-d73bb5834ea6.png",
      title: "Nirman Sahwas",
      location: "Zundal - Adalaj highway",
      price: "₹75 Lac",
      bedrooms: 3,
      bathrooms: 2,
      area: "2, 2.5, 3 BHK"
    },
    {
      id: 2,
      image: "/lovable-uploads/4464d0cc-28fd-4be4-b6e8-5d2be30f7b24.png",
      title: "Festive O2",
      location: "New science city, Gota",
      price: "₹80 Lac",
      bedrooms: 3,
      bathrooms: 2,
      area: "3BHK Furnished Flats"
    },
    {
      id: 3,
      image: "/lovable-uploads/a670a608-e088-4556-be2e-d610ee2af801.png",
      title: "Atlantis Wave",
      location: "Zundal",
      price: "₹60 Lac",
      bedrooms: 2,
      bathrooms: 2,
      area: "2, 3 BHK"
    },
    {
      id: 4,
      image: "/lovable-uploads/56e0dad2-1182-4a6c-ba60-aa8419e467ae.png",
      title: "Ansh Aradhya Lakeview",
      location: "Vaishnodevi, Khoraj",
      price: "₹55 Lac",
      bedrooms: 2,
      bathrooms: 2,
      area: "2 BHK"
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
          <Link 
            to="/properties" 
            className="btn-primary"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
