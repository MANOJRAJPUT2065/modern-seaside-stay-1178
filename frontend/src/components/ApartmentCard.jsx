import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Maximize, MapPin, Bath, Coffee, Wifi } from "lucide-react";
// import { Button } from "@/components/ui/button";

/**
 * @typedef {Object} ApartmentProps
 * @property {string} id - Unique identifier for the apartment
 * @property {string} name - Name of the apartment
 * @property {string} description - Description of the apartment
 * @property {number} price - Price per night
 * @property {number} capacity - Number of guests the apartment can accommodate
 * @property {number} size - Size of the apartment in square meters
 * @property {string} image - URL of the apartment image
 * @property {string} location - Location of the apartment
 * @property {string[]} features - Array of apartment features
 */

/**
 * @param {Object} props - Component props
 * @param {ApartmentProps} props.apartment - Apartment data object
 */
function ApartmentCard({ apartment }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl bg-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden h-64">
        <img
          src={apartment.image}
          alt={apartment.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-6">
          <div>
            <h3 className="text-white text-xl font-bold mb-1">{apartment.name}</h3>
            <div className="flex items-center text-white/80 text-sm mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{apartment.location}</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>{apartment.capacity} Guests</span>
              </div>
              <div className="flex items-center">
                <Maximize className="h-4 w-4 mr-1" />
                <span>{apartment.size} m²</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-6 space-y-4">
        <p className="text-muted-foreground line-clamp-2">{apartment.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {apartment.features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full"
            >
              {feature === "Bathroom" && <Bath className="h-3.5 w-3.5 mr-1" />}
              {feature === "Kitchen" && <Coffee className="h-3.5 w-3.5 mr-1" />}
              {feature === "Wi-Fi" && <Wifi className="h-3.5 w-3.5 mr-1" />}
              <span>{feature}</span>
            </div>
          ))}
          {apartment.features.length > 3 && (
            <div className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
              +{apartment.features.length - 3} more
            </div>
          )}
        </div>

        {/* Price + CTA */}
        <div className="flex items-end justify-between pt-2">
          <div>
            <span className="text-xl font-bold">${apartment.price}</span>
            <span className="text-muted-foreground text-sm"> / night</span>
          </div>
          <Link 
            to={`/apartments/${apartment.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 inline-block text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ApartmentCard;

