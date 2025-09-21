import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  // Fetch random Indian people from Unsplash API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=indian+people&count=5&client_id=Y50V0KV9AE4GqhTQbTixreXB1fciFRnMgwcvviaSJbM`
        );
        const data = await response.json();

        if (Array.isArray(data)) {
          const updated = data.map((item, i) => ({
            id: i,
            name: item.user.name || "Guest User",
            location: item.user.location || "India",
            avatar: item.urls.small,
            content:
              [
                "Amazing hospitality! The staff made sure our stay was comfortable.",
                "Loved the beach view and food. Perfect for families!",
                "Super clean apartments and great yoga sessions.",
                "Best holiday ever with spa and luxury dining!",
                "Very peaceful and relaxing stay with live music nights.",
              ][i % 5], // rotate feedback texts
            rating: Math.floor(Math.random() * 2) + 4, // random 4 or 5 star
          }));

          setTestimonials(updated);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Guests Say</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Real experiences shared by our Indian guests.
        </p>

        {testimonials.length > 0 && (
          <div className="relative bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 transition-all">
            <div className="flex flex-col items-center">
              <img
                src={testimonials[activeIndex].avatar}
                alt={testimonials[activeIndex].name}
                className="w-20 h-20 rounded-full border-2 border-primary mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold">
                {testimonials[activeIndex].name}
              </h4>
              <p className="text-sm text-gray-500">
                {testimonials[activeIndex].location}
              </p>
              <div className="flex my-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonials[activeIndex].rating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-400"
                    }`}
                  />
                ))}
              </div>
              <blockquote className="italic text-gray-600 dark:text-gray-300">
                "{testimonials[activeIndex].content}"
              </blockquote>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default TestimonialsSection;
