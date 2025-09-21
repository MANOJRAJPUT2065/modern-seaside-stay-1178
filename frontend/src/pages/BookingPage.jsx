import React, { useEffect, useState } from "react";
import { format, addDays, differenceInDays } from "date-fns";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CalendarIcon, Check, ChevronRight, CreditCard } from "lucide-react";

// Sample apartments data
const apartmentsData = [
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

function BookingPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 7));
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    paymentMethod: "credit-card",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    specialRequests: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nightsCount = startDate && endDate ? differenceInDays(endDate, startDate) : 0;
  const totalPrice = selectedApartment ? selectedApartment.price * nightsCount : 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", {
      apartment: selectedApartment,
      dates: { startDate, endDate },
      guests: { adults, children },
      customerInfo: formData,
    });

    setIsBookingConfirmed(true);

    setTimeout(() => {
      setCurrentStep(1);
      setSelectedApartment(null);
      setStartDate(new Date());
      setEndDate(addDays(new Date(), 7));
      setAdults("2");
      setChildren("0");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zipCode: "",
        country: "",
        paymentMethod: "credit-card",
        cardName: "",
        cardNumber: "",
        cardExpiry: "",
        cardCvc: "",
        specialRequests: "",
      });
      setIsBookingConfirmed(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-r from-blue-100 to-white text-center">
          <h1 className="text-4xl font-bold mb-4">Book Your Stay</h1>
          <p className="text-gray-600">Complete your reservation in a few simple steps.</p>
        </section>

        {/* Step 1: Choose Room */}
        {currentStep === 1 && (
          <section className="container mx-auto py-8">
            <h2 className="text-xl font-semibold mb-4">Select Your Accommodation</h2>
            <div className="space-y-6">
              {apartmentsData.map((apt) => (
                <div
                  key={apt.id}
                  className={`border rounded-xl overflow-hidden flex flex-col md:flex-row ${
                    selectedApartment?.id === apt.id
                      ? "border-blue-600 shadow-md"
                      : "hover:border-blue-400"
                  }`}
                >
                  <img src={apt.image} alt={apt.name} className="md:w-1/3 h-48 object-cover" />
                  <div className="p-6 flex-1">
                    <h3 className="text-lg font-semibold mb-2">{apt.name}</h3>
                    <p className="text-gray-600 mb-4">{apt.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">${apt.price}/night</span>
                      <button
                        className={`px-4 py-2 rounded ${
                          selectedApartment?.id === apt.id
                            ? "bg-blue-600 text-white"
                            : "border border-gray-400"
                        }`}
                        onClick={() => setSelectedApartment(apt)}
                      >
                        {selectedApartment?.id === apt.id ? "Selected" : "Select"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-8">
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded"
                disabled={!selectedApartment}
                onClick={() => setCurrentStep(2)}
              >
                Continue <ChevronRight className="inline ml-2 h-4 w-4" />
              </button>
            </div>
          </section>
        )}

        {/* Step 2: Guest Details */}
        {currentStep === 2 && (
          <section className="container mx-auto py-8">
            <h2 className="text-xl font-semibold mb-4">Guest Information</h2>
            <form className="space-y-4">
              <input
                className="w-full border p-2 rounded"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <input
                className="w-full border p-2 rounded"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <input
                className="w-full border p-2 rounded"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                className="w-full border p-2 rounded"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <textarea
                className="w-full border p-2 rounded"
                placeholder="Special Requests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
              />
            </form>

            <div className="flex justify-between mt-6">
              <button
                className="px-4 py-2 border rounded"
                onClick={() => setCurrentStep(1)}
              >
                Back
              </button>
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded"
                onClick={() => setCurrentStep(3)}
              >
                Review & Confirm <ChevronRight className="inline ml-2 h-4 w-4" />
              </button>
            </div>
          </section>
        )}

        {/* Step 3: Confirmation */}
        {currentStep === 3 && (
          <section className="container mx-auto py-8 text-center">
            {!isBookingConfirmed ? (
              <>
                <h2 className="text-2xl font-bold mb-4">Review Booking Details</h2>
                {selectedApartment && (
                  <div className="mb-6">
                    <img
                      src={selectedApartment.image}
                      alt={selectedApartment.name}
                      className="w-full h-48 object-cover rounded"
                    />
                    <h3 className="font-semibold mt-2">{selectedApartment.name}</h3>
                    <p>{nightsCount} nights - Total: ${totalPrice}</p>
                  </div>
                )}
                <button
                  className="px-6 py-2 bg-blue-600 text-white rounded"
                  onClick={handleSubmitBooking}
                >
                  Confirm Booking <Check className="inline ml-2 h-4 w-4" />
                </button>
              </>
            ) : (
              <div className="p-6 border rounded bg-green-50">
                <Check className="h-10 w-10 text-green-600 mx-auto mb-4" />
                <h2 className="text-xl font-bold mb-2">Booking Confirmed!</h2>
                <p className="mb-4">
                  A confirmation email has been sent to {formData.email}.
                </p>
                <Link
                  to="/"
                  className="px-6 py-2 bg-blue-600 text-white rounded inline-block"
                >
                  Return to Homepage
                </Link>
              </div>
            )}
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default BookingPage;
