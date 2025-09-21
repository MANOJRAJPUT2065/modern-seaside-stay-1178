import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import BookingForm from "../components/BookingForm";
import TestimonialsSection from "../components/TestimonialsSection";
import ApartmentCard from "../components/ApartmentCard";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Utensils, Waves, LifeBuoy, MapPin, Coffee } from "lucide-react";

// Sample featured apartments
const featuredApartments = [
  {
    id: "1",
    name: "Deluxe Sea View Suite",
    description:
      "Luxurious suite with panoramic sea views, modern amenities, and a private balcony.",
    price: 180,
    capacity: 2,
    size: 45,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    location: "Beachfront",
    features: ["Wi-Fi", "Kitchen", "Bathroom", "Air Conditioning", "TV", "Balcony"],
  },
  {
    id: "2",
    name: "Premium Family Apartment",
    description:
      "Spacious apartment ideal for families, with full kitchen and stunning coastal views.",
    price: 250,
    capacity: 4,
    size: 75,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    location: "Second row",
    features: ["Wi-Fi", "Kitchen", "Bathroom", "Air Conditioning", "TV", "Washing Machine"],
  },
  {
    id: "3",
    name: "Executive Beach Studio",
    description:
      "Elegant studio with direct beach access, modern design, and premium finishes.",
    price: 150,
    capacity: 2,
    size: 35,
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop",
    location: "Beachfront",
    features: ["Wi-Fi", "Kitchenette", "Bathroom", "Air Conditioning", "TV"],
  },
];

function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Static features
  const features = [
    { icon: <Waves className="h-8 w-8 text-blue-600" />, title: "Beachfront Access", description: "Enjoy direct access to pristine beaches." },
    { icon: <LifeBuoy className="h-8 w-8 text-blue-600" />, title: "Swimming Pools", description: "Relax in our luxurious pools." },
    { icon: <Utensils className="h-8 w-8 text-blue-600" />, title: "Restaurant", description: "Dine at our world-class restaurant." },
    { icon: <Wifi className="h-8 w-8 text-blue-600" />, title: "Free Wi-Fi", description: "Stay connected with high-speed internet." },
    { icon: <Coffee className="h-8 w-8 text-blue-600" />, title: "Bar & Café", description: "Unwind with drinks and snacks." },
    { icon: <MapPin className="h-8 w-8 text-blue-600" />, title: "Great Location", description: "Located in the heart of Costa Bella." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Welcome Section */}
        <section id="welcome" className="py-20 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm text-blue-600 font-medium uppercase">Welcome</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Experience Luxury by the Sea
              </h2>
              <p className="text-gray-600 mb-6">
                Our resort offers breathtaking views, top-notch amenities, and a
                tranquil environment.
              </p>
              <p className="text-gray-600 mb-8">
                Perfect for couples, families, or solo travelers seeking relaxation.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Images */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop"
                  alt="Seaside view"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-2/3 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=400&h=300&fit=crop"
                  alt="Luxury apartment interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-1/2 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop"
                  alt="Pool view"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-100 to-white">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm text-blue-600 font-medium uppercase">Book Now</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Plan Your Perfect Stay
              </h2>
              <p className="text-gray-600 mb-6">
                Reserve your room in just a few clicks and enjoy exclusive benefits.
              </p>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-600" /> Best price guarantee
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-600" /> Free cancellation
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-600" /> No hidden fees
                </li>
              </ul>
            </div>
            <BookingForm />
          </div>
        </section>

        {/* Featured Apartments */}
        <section className="py-20 container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm text-blue-600 font-medium uppercase">Featured</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Featured Apartments
            </h2>
            <p className="text-gray-600">
              Explore our most popular and highly-rated apartments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredApartments.map((apartment) => (
              <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/apartments"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto text-center max-w-3xl mb-12">
            <span className="text-sm text-blue-600 font-medium uppercase">
              Amenities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Resort Amenities</h2>
            <p className="text-gray-600">
              Everything you need for a comfortable and memorable stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow flex flex-col items-center text-center"
              >
                <div className="mb-4 p-3 rounded-full bg-blue-100">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-blue-50 text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Your Seaside Escape?
            </h2>
            <p className="text-gray-600 mb-8">
              Book now and enjoy the best rates and services at MareSereno Resort.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700"
            >
              Book Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Index;
