
import { useParams } from "react-router-dom";
import { ArrowLeft, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// This would come from your API/database in a real application
const propertyData = {
  "1": {
    id: 1,
    title: "Modern Luxury Villa",
    description: "Experience luxury living in this stunning modern villa located in one of Ahmedabad's most prestigious neighborhoods. This architect-designed home features spacious living areas with high ceilings, premium finishes throughout, and a private garden with swimming pool.",
    location: "Bodakdev, Ahmedabad",
    price: "₹2.5 Cr",
    bedrooms: 4,
    bathrooms: 3,
    area: "3200 sq.ft",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80",
    amenities: ["Swimming Pool", "Garden", "Smart Home", "Security System", "Double Garage", "Home Theatre"],
    nearbyPlaces: ["International School", "Shopping Mall", "Hospital", "Park"],
    yearBuilt: "2022",
    propertyType: "Villa",
    images: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80"
    ]
  },
  "2": {
    id: 2,
    title: "Riverside Apartment",
    description: "This elegant apartment offers stunning views of the Sabarmati River. Featuring contemporary design with premium finishes, this home includes an open floor plan with floor-to-ceiling windows, allowing plenty of natural light and panoramic views of the city.",
    location: "Sabarmati, Ahmedabad",
    price: "₹85 Lac",
    bedrooms: 3,
    bathrooms: 2,
    area: "1800 sq.ft",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80",
    amenities: ["River View", "Modern Kitchen", "Gym", "24/7 Security", "Covered Parking", "Children's Play Area"],
    nearbyPlaces: ["Riverfront Park", "Metro Station", "School", "Restaurant"],
    yearBuilt: "2021",
    propertyType: "Apartment",
    images: [
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80"
    ]
  },
  "3": {
    id: 3,
    title: "Premium Office Space",
    description: "Premium commercial office space in the heart of Ahmedabad's business district. This property features an open-concept design, high-end finishes, and state-of-the-art facilities. Perfect for businesses looking for a prestigious address with excellent connectivity.",
    location: "Prahlad Nagar, Ahmedabad",
    price: "₹1.8 Cr",
    bedrooms: 0,
    bathrooms: 2,
    area: "2500 sq.ft",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80",
    amenities: ["Conference Room", "Reception Area", "Pantry", "High-speed Internet", "Backup Power", "Elevator Access"],
    nearbyPlaces: ["Corporate Park", "5-star Hotel", "Airport (15 min)", "Shopping Complex"],
    yearBuilt: "2019",
    propertyType: "Commercial",
    images: [
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537726235470-8504e3beef77?auto=format&fit=crop&q=80"
    ]
  },
  "4": {
    id: 4,
    title: "Urban High-Rise",
    description: "Contemporary living in this stunning high-rise apartment with spectacular views of the city skyline. This well-designed space offers modern amenities and is perfect for professionals seeking a convenient urban lifestyle close to major employment hubs.",
    location: "SG Highway, Ahmedabad",
    price: "₹1.2 Cr",
    bedrooms: 3,
    bathrooms: 2,
    area: "2100 sq.ft",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80",
    amenities: ["Clubhouse", "Swimming Pool", "Fitness Center", "Party Hall", "Landscaped Gardens", "Children's Play Area"],
    nearbyPlaces: ["IT Park", "Mall", "Hospital", "Educational Institutions"],
    yearBuilt: "2020",
    propertyType: "Apartment",
    images: [
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80"
    ]
  }
};

const PropertyDetail = () => {
  const { id = "1" } = useParams();
  const property = propertyData[id as keyof typeof propertyData];
  
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container py-12 text-center">
          <h1 className="text-3xl font-bold">Property not found</h1>
          <Button className="mt-4" asChild>
            <a href="/">Return to Home</a>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Breadcrumb & Back Button */}
        <div className="container mt-8">
          <Button variant="ghost" className="mb-4" asChild>
            <a href="/">
              <ArrowLeft className="mr-2" />
              Back to Home
            </a>
          </Button>
        </div>
        
        {/* Property Hero */}
        <div className="container mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Image */}
            <div className="lg:col-span-2 rounded-lg overflow-hidden h-[500px]">
              <img 
                src={property.images[0]} 
                alt={property.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Side Images */}
            <div className="grid grid-cols-1 gap-4 h-[500px]">
              {property.images.slice(1, 3).map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden h-[240px]">
                  <img 
                    src={image} 
                    alt={`${property.title} view ${index + 2}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Property Details */}
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Details */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-dhartiacres-dark mb-2">
                      {property.title}
                    </h1>
                    <p className="text-lg flex items-center text-dhartiacres-blue mb-4">
                      <MapPin className="h-5 w-5 mr-1" />
                      {property.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl md:text-3xl font-bold text-dhartiacres-blue">
                      {property.price}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center mt-4 space-x-8 border-t border-b border-gray-200 py-4">
                  {property.bedrooms > 0 && (
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-dhartiacres-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>{property.bedrooms} Beds</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-dhartiacres-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    <span>{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-dhartiacres-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                    <span>{property.area}</span>
                  </div>
                </div>
              </div>

              {/* Tabs for property information */}
              <Tabs defaultValue="description" className="mt-8">
                <TabsList className="w-full grid grid-cols-4 mb-4">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>
                
                <TabsContent value="description" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Property Description</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {property.description}
                        </p>
                        
                        <div className="mt-6 grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-dhartiacres-blue">Property Type</h4>
                            <p>{property.propertyType}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-dhartiacres-blue">Year Built</h4>
                            <p>{property.yearBuilt}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="features" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Property Features</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
                          {property.amenities.map((amenity, index) => (
                            <div key={index} className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-dhartiacres-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="location" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Location & Nearby Places</h3>
                        <div className="h-64 mb-6 bg-gray-200 rounded-lg flex items-center justify-center">
                          <p className="text-gray-500">Map View Coming Soon</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-dhartiacres-blue mb-2">Nearby Places</h4>
                          <div className="grid grid-cols-2 gap-y-2">
                            {property.nearbyPlaces.map((place, index) => (
                              <div key={index} className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2 text-dhartiacres-blue" />
                                <span>{place}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="gallery" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-4">Property Gallery</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {property.images.map((image, index) => (
                          <div key={index} className="rounded-lg overflow-hidden h-48">
                            <img 
                              src={image} 
                              alt={`${property.title} - Image ${index + 1}`} 
                              className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card className="sticky top-4">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Interested in this property?</h3>
                  <p className="text-gray-600 mb-4">
                    Fill the form below and our agent will contact you soon
                  </p>
                  
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-dhartiacres-blue"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-dhartiacres-blue"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-dhartiacres-blue"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-dhartiacres-blue"
                        placeholder="I'm interested in this property..."
                      ></textarea>
                    </div>
                    
                    <Button className="w-full">Contact Agent</Button>
                  </form>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center text-dhartiacres-blue mb-3">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="font-medium">Quick Response Guaranteed</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Our agents typically respond within 2 hours during business hours.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Similar Properties */}
          <div className="my-16">
            <h2 className="text-2xl font-bold mb-6">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.values(propertyData)
                .filter(p => p.id !== property.id && p.propertyType === property.propertyType)
                .slice(0, 3)
                .map(similarProperty => (
                  <div key={similarProperty.id} className="property-card">
                    <div className="relative">
                      <img
                        src={similarProperty.image}
                        alt={similarProperty.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-dhartiacres-blue text-white px-3 py-1 rounded-md font-medium">
                        {similarProperty.price}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-dhartiacres-dark mb-2">{similarProperty.title}</h3>
                      <p className="text-gray-600 mb-4 flex items-center">
                        <MapPin className="h-5 w-5 mr-1 text-dhartiacres-blue" />
                        {similarProperty.location}
                      </p>
                      
                      <div className="flex justify-between text-sm border-t border-gray-200 pt-4 mt-4 text-gray-700">
                        {similarProperty.bedrooms > 0 && (
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-dhartiacres-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            {similarProperty.bedrooms} Beds
                          </div>
                        )}
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-dhartiacres-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                          </svg>
                          {similarProperty.bathrooms} Baths
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-dhartiacres-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                          </svg>
                          {similarProperty.area}
                        </div>
                      </div>

                      <div className="mt-4">
                        <Button asChild>
                          <a href={`/property/${similarProperty.id}`}>View Details</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
