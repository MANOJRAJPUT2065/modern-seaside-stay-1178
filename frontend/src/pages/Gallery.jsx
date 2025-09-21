import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { X } from "lucide-react";

// Sample gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop", alt: "Beachfront view", category: "exterior" },
  { id: 2, src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop", alt: "Luxury suite interior", category: "rooms" },
  { id: 3, src: "https://images.unsplash.com/photo-1584132905271-512c958d674a?w=800&h=600&fit=crop", alt: "Swimming pool", category: "amenities" },
  { id: 4, src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&h=600&fit=crop", alt: "Premium apartment", category: "rooms" },
  { id: 5, src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&h=600&fit=crop", alt: "Beach sunset", category: "exterior" },
  { id: 6, src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop", alt: "Dining area", category: "amenities" },
  { id: 7, src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop", alt: "Bathroom", category: "rooms" },
  { id: 8, src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop", alt: "Beach pathway", category: "exterior" },
  { id: 9, src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop", alt: "Restaurant", category: "amenities" },
  { id: 10, src: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=600&fit=crop", alt: "Bedroom", category: "rooms" },
  { id: 11, src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop", alt: "Beach umbrellas", category: "exterior" },
  { id: 12, src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop", alt: "Spa", category: "amenities" },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter images
  const filterGallery = (category) => {
    setActiveFilter(category);
    if (category === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter((img) => img.category === category));
    }
  };

  // Navigate lightbox
  const navigateGallery = (direction) => {
    if (selectedImage === null) return;

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(filteredImages[newIndex].id);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") setSelectedImage(null);
      else if (e.key === "ArrowLeft") navigateGallery("prev");
      else if (e.key === "ArrowRight") navigateGallery("next");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Header */}
        <section className="py-20 bg-gradient-to-r from-blue-100 to-white text-center">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-gray-600 text-lg">Explore our resort and its beautiful surroundings.</p>
        </section>

        {/* Filters */}
        <section className="py-8 container mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["all", "exterior", "rooms", "amenities"].map((category) => (
              <button
                key={category}
                onClick={() => filterGallery(category)}
                className={`px-6 py-2 rounded-full transition ${
                  activeFilter === category
                    ? "bg-blue-600 text-white shadow"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer group"
                onClick={() => setSelectedImage(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <p className="text-white">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev button */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/20"
              onClick={() => navigateGallery("prev")}
            >
              ‹
            </button>

            <div className="max-w-5xl max-h-[80vh] overflow-hidden">
              {filteredImages.find((img) => img.id === selectedImage) && (
                <img
                  src={filteredImages.find((img) => img.id === selectedImage)?.src}
                  alt={filteredImages.find((img) => img.id === selectedImage)?.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              )}
            </div>

            {/* Next button */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/20"
              onClick={() => navigateGallery("next")}
            >
              ›
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Gallery;

