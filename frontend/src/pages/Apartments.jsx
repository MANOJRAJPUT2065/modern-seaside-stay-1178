import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApartmentCard from "../components/ApartmentCard";

// Sample apartments data
const allApartments = [
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
    features: [
      "Wi-Fi",
      "Kitchen",
      "Bathroom",
      "Air Conditioning",
      "TV",
      "Balcony",
    ],
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
    features: [
      "Wi-Fi",
      "Kitchen",
      "Bathroom",
      "Air Conditioning",
      "TV",
      "Washing Machine",
    ],
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
  {
    id: "4",
    name: "Luxury Penthouse Suite",
    description:
      "Exclusive top-floor suite with expansive terrace and panoramic sea views.",
    price: 350,
    capacity: 4,
    size: 90,
    image:
      "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?w=800&h=600&fit=crop",
    location: "Beachfront",
    features: [
      "Wi-Fi",
      "Full Kitchen",
      "2 Bathrooms",
      "Air Conditioning",
      "TV",
      "Terrace",
      "Jacuzzi",
    ],
  },
  {
    id: "5",
    name: "Classic Double Room",
    description:
      "Comfortable hotel room with modern amenities and partial sea views.",
    price: 120,
    capacity: 2,
    size: 28,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
    location: "Hotel building",
    features: ["Wi-Fi", "Bathroom", "Air Conditioning", "TV", "Mini Fridge"],
  },
  {
    id: "6",
    name: "Garden View Apartment",
    description:
      "Peaceful apartment surrounded by lush gardens, just a short walk from the beach.",
    price: 160,
    capacity: 3,
    size: 55,
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop",
    location: "Garden area",
    features: [
      "Wi-Fi",
      "Kitchen",
      "Bathroom",
      "Air Conditioning",
      "TV",
      "Terrace",
    ],
  },
];

function Apartments() {
  const [filteredApartments, setFilteredApartments] = useState(allApartments);
  const [capacityFilter, setCapacityFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [priceRange, setPriceRange] = useState([100, 350]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter logic
  useEffect(() => {
    let result = allApartments;

    if (capacityFilter !== "all") {
      const capacity = parseInt(capacityFilter);
      result = result.filter((apt) => apt.capacity >= capacity);
    }

    if (locationFilter !== "all") {
      result = result.filter((apt) => apt.location === locationFilter);
    }

    result = result.filter(
      (apt) => apt.price >= priceRange[0] && apt.price <= priceRange[1]
    );

    setFilteredApartments(result);
  }, [capacityFilter, locationFilter, priceRange]);

  const locations = ["all", ...new Set(allApartments.map((apt) => apt.location))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Header */}
        <section className="relative py-20 bg-gradient-to-r from-blue-100 to-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Our Apartments</h1>
            <p className="text-gray-600">
              Choose from a variety of accommodations to fit your needs.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Capacity */}
            <div>
              <label className="block text-sm font-medium mb-2">Guests</label>
              <select
                value={capacityFilter}
                onChange={(e) => setCapacityFilter(e.target.value)}
                className="w-full border rounded p-2"
              >
                <option value="all">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full border rounded p-2"
              >
                <option value="all">All</option>
                {locations
                  .filter((loc) => loc !== "all")
                  .map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <input
                type="range"
                min="100"
                max="350"
                step="10"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([parseInt(e.target.value), priceRange[1]])
                }
              />
              <input
                type="range"
                min="100"
                max="350"
                step="10"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
              />
            </div>
          </div>

          <div className="container mx-auto flex justify-between items-center mt-6">
            <p className="text-gray-600">
              Showing {filteredApartments.length} of {allApartments.length}{" "}
              accommodations
            </p>
            <button
              onClick={() => {
                setCapacityFilter("all");
                setLocationFilter("all");
                setPriceRange([100, 350]);
              }}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Reset Filters
            </button>
          </div>
        </section>

        {/* Apartments Grid */}
        <section className="py-12">
          <div className="container mx-auto">
            {filteredApartments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredApartments.map((apartment) => (
                  <ApartmentCard key={apartment.id} apartment={apartment} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters.
                </p>
                <button
                  onClick={() => {
                    setCapacityFilter("all");
                    setLocationFilter("all");
                    setPriceRange([100, 350]);
                  }}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Apartments;
