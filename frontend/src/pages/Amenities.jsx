import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Dumbbell,
  Utensils,
  Wine,
  Coffee,
  Clock,
  Car,
  Plane,
  MapPin,
  Waves,
  Users,
  Music,
  BookOpen,
  Heart,
  Activity,
} from "lucide-react";

function Amenities() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // 👉 Direct Unsplash API access key (public)
  const ACCESS_KEY = "Y50V0KV9AE4GqhTQbTixreXB1fciFRnMgwcvviaSJbM";

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchImages = async () => {
      try {
        const res = await fetch(
          `https://api.unsplash.com/search/photos?query=beach+resort+hotel&per_page=12&orientation=landscape&client_id=${ACCESS_KEY}`
        );
        const data = await res.json();
        setImages(data.results || []);
      } catch (err) {
        console.error("Error fetching images:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const getIcon = (categoryName, index) => {
    const icons = {
      wellness: [<Heart key={0} />, <Dumbbell key={1} />, <Activity key={2} />, <Heart key={3} />],
      dining: [<Utensils key={0} />, <Coffee key={1} />, <Wine key={2} />, <Clock key={3} />],
      services: [<Clock key={0} />, <Plane key={1} />, <Car key={2} />, <MapPin key={3} />],
      entertainment: [<Waves key={0} />, <Users key={1} />, <Music key={2} />, <BookOpen key={3} />],
    };

    return icons[categoryName]?.[index] || <Coffee />;
  };

  const t = {
    amenitiesPage: {
      title: "Our Amenities",
      subtitle: "Experience comfort and luxury",
      description: "We provide world-class amenities to make your stay memorable.",
      categories: {
        wellness: {
          title: "Wellness",
          description: "Stay healthy and relaxed.",
          items: [
            { title: "Spa", description: "Relaxing spa treatments" },
            { title: "Gym", description: "Fully equipped gym" },
            { title: "Yoga", description: "Morning yoga sessions" },
            { title: "Massage", description: "Professional massage services" },
          ],
        },
        dining: {
          title: "Dining",
          description: "Enjoy delicious food and drinks.",
          items: [
            { title: "Restaurant", description: "Fine dining experience" },
            { title: "Cafe", description: "Coffee and light snacks" },
            { title: "Bar", description: "Refreshing drinks" },
            { title: "24/7 Dining", description: "Meals anytime" },
          ],
        },
        services: {
          title: "Services",
          description: "Convenience at your fingertips.",
          items: [
            { title: "Room Service", description: "Quick service anytime" },
            { title: "Airport Pickup", description: "Easy transfers" },
            { title: "Car Rental", description: "Explore freely" },
            { title: "Tour Guide", description: "Discover local gems" },
          ],
        },
        entertainment: {
          title: "Entertainment",
          description: "Fun activities for all.",
          items: [
            { title: "Pool", description: "Relax and swim" },
            { title: "Events", description: "Social gatherings" },
            { title: "Live Music", description: "Evening shows" },
            { title: "Library", description: "Books for all ages" },
          ],
        },
      },
    },
    gallery: { title: "Gallery", subtitle: "Explore our spaces" },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-r from-blue-100 to-white">
          <div className="container mx-auto text-center pt-20">
            <span className="text-sm text-primary font-medium uppercase tracking-wider">
              MareSereno
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              {t.amenitiesPage.title}
            </h1>
            <p className="text-gray-600">{t.amenitiesPage.subtitle}</p>
          </div>
        </section>

        {/* Description */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <p className="text-lg text-gray-600">{t.amenitiesPage.description}</p>
          </div>
        </section>

        {/* Categories */}
        {Object.keys(t.amenitiesPage.categories).map((category, i) => {
          const categoryData = t.amenitiesPage.categories[category];
          return (
            <section key={category} className={`py-16 ${i % 2 === 0 ? "bg-gray-50" : ""}`}>
              <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl font-bold mb-4">{categoryData.title}</h2>
                  <p className="text-gray-600">{categoryData.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {categoryData.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-xl bg-white shadow flex flex-col items-center text-center"
                    >
                      <div className="mb-4 p-3 rounded-full bg-blue-100 text-blue-600">
                        {getIcon(category, idx)}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Gallery */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.gallery.title}</h2>
              <p className="text-gray-600">{t.gallery.subtitle}</p>
            </div>

            {loading ? (
              <p className="text-center text-gray-500">Loading images...</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img) => (
                  <div
                    key={img.id}
                    className="aspect-square rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform"
                  >
                    <img
                      src={img.urls.regular}
                      alt={img.alt_description || "Amenity"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Amenities;
