
import { useState } from "react";
import { Bed, Bath, Grid3X3, List, MapPin, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import { Link } from "react-router-dom";

// This would come from your API/database in a real application
const allProperties = [
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
  },
  {
    id: 5,
    image: "/lovable-uploads/8171bc2d-65a5-4a13-b8fd-d73bb5834ea6.png",
    title: "Nirman Heights",
    location: "Bodakdev, Ahmedabad",
    price: "₹95 Lac",
    bedrooms: 3,
    bathrooms: 3,
    area: "3, 4 BHK"
  },
  {
    id: 6,
    image: "/lovable-uploads/4464d0cc-28fd-4be4-b6e8-5d2be30f7b24.png",
    title: "Festive Gardens",
    location: "Satellite, Ahmedabad",
    price: "₹1.2 Cr",
    bedrooms: 4,
    bathrooms: 3,
    area: "4 BHK Luxury Apartments"
  },
  {
    id: 7,
    image: "/lovable-uploads/a670a608-e088-4556-be2e-d610ee2af801.png",
    title: "Atlantis Heights",
    location: "Prahladnagar, Ahmedabad",
    price: "₹85 Lac",
    bedrooms: 3,
    bathrooms: 2,
    area: "3 BHK"
  },
  {
    id: 8,
    image: "/lovable-uploads/56e0dad2-1182-4a6c-ba60-aa8419e467ae.png",
    title: "Ansh Elegance",
    location: "SG Highway, Ahmedabad",
    price: "₹1.5 Cr",
    bedrooms: 4,
    bathrooms: 3,
    area: "4 BHK Penthouse"
  }
];

const AllProperties = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;
  
  // Calculate pagination
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = allProperties.slice(indexOfFirstProperty, indexOfLastProperty);
  const totalPages = Math.ceil(allProperties.length / propertiesPerPage);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Link to="/" className="inline-flex items-center text-gray-600 hover:text-dhartiacres-blue mb-4">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Home
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-dhartiacres-dark">All Properties</h1>
              <p className="text-gray-600 mt-2">Explore our collection of premium properties in Ahmedabad</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                variant={viewMode === "grid" ? "default" : "outline"} 
                size="sm" 
                onClick={() => setViewMode("grid")}
                className="w-10 h-10 p-2"
              >
                <Grid3X3 className="h-5 w-5" />
              </Button>
              <Button 
                variant={viewMode === "list" ? "default" : "outline"} 
                size="sm" 
                onClick={() => setViewMode("list")}
                className="w-10 h-10 p-2"
              >
                <List className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Filters - can be expanded in the future */}
          <Card className="p-4 mb-8 flex flex-wrap gap-4 items-center">
            <div className="font-medium">Filter By:</div>
            <Button variant="outline" className="rounded-full">
              Price Range
            </Button>
            <Button variant="outline" className="rounded-full">
              Location
            </Button>
            <Button variant="outline" className="rounded-full">
              Property Type
            </Button>
            <Button variant="outline" className="rounded-full">
              Bedrooms
            </Button>
            <div className="ml-auto">
              <Button>Apply Filters</Button>
            </div>
          </Card>
          
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProperties.map((property) => (
                <div key={property.id} className="property-card">
                  <div className="relative">
                    <Link to={`/property/${property.id}`}>
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-64 object-cover transition-transform hover:scale-105 duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-dhartiacres-blue text-white px-3 py-1 rounded-md font-medium">
                        {property.price}
                      </div>
                    </Link>
                  </div>
                  <div className="p-6">
                    <Link to={`/property/${property.id}`} className="hover:text-dhartiacres-blue transition-colors">
                      <h3 className="text-xl font-bold text-dhartiacres-dark mb-2">{property.title}</h3>
                    </Link>
                    <p className="text-gray-600 mb-4 flex items-center">
                      <MapPin className="h-5 w-5 mr-1 text-dhartiacres-blue" />
                      {property.location}
                    </p>
                    
                    <div className="flex justify-between text-sm border-t border-gray-200 pt-4 mt-4 text-gray-700">
                      {property.bedrooms > 0 && (
                        <div className="flex items-center">
                          <Bed className="h-5 w-5 mr-1 text-dhartiacres-blue" />
                          {property.bedrooms} Beds
                        </div>
                      )}
                      <div className="flex items-center">
                        <Bath className="h-5 w-5 mr-1 text-dhartiacres-blue" />
                        {property.bathrooms} Baths
                      </div>
                      <div className="flex items-center">
                        <Grid3X3 className="h-5 w-5 mr-1 text-dhartiacres-blue" />
                        {property.area}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Link 
                        to={`/property/${property.id}`}
                        className="inline-block bg-dhartiacres-blue text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {currentProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative">
                      <Link to={`/property/${property.id}`}>
                        <img
                          src={property.image}
                          alt={property.title}
                          className="w-full h-full object-cover min-h-[200px]"
                        />
                        <div className="absolute top-4 right-4 bg-dhartiacres-blue text-white px-3 py-1 rounded-md font-medium">
                          {property.price}
                        </div>
                      </Link>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <Link to={`/property/${property.id}`} className="hover:text-dhartiacres-blue transition-colors">
                        <h3 className="text-xl font-bold text-dhartiacres-dark mb-2">{property.title}</h3>
                      </Link>
                      <p className="text-gray-600 mb-4 flex items-center">
                        <MapPin className="h-5 w-5 mr-1 text-dhartiacres-blue" />
                        {property.location}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-gray-700">
                        {property.bedrooms > 0 && (
                          <div className="flex items-center">
                            <Bed className="h-5 w-5 mr-1 text-dhartiacres-blue" />
                            {property.bedrooms} Beds
                          </div>
                        )}
                        <div className="flex items-center">
                          <Bath className="h-5 w-5 mr-1 text-dhartiacres-blue" />
                          {property.bathrooms} Baths
                        </div>
                        <div className="flex items-center">
                          <Grid3X3 className="h-5 w-5 mr-1 text-dhartiacres-blue" />
                          {property.area}
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <Link 
                          to={`/property/${property.id}`}
                          className="inline-block bg-dhartiacres-blue text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
          
          {/* Pagination */}
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                  </PaginationItem>
                )}
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink 
                      isActive={page === currentPage}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllProperties;
