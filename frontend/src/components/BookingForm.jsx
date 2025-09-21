import React, { useState } from "react";
import { Check, CalendarIcon, Users } from "lucide-react";
import { format } from "date-fns";
import { useLanguage } from "../contexts/LanguageContext"; // relative import

function BookingForm() {
  const { t } = useLanguage();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", { startDate, endDate, adults, children });
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-6"
    >
      <h3 className="text-2xl font-bold text-center mb-6">
        {t.bookingForm.title}
      </h3>

      {/* Dates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Check-in */}
        <div className="space-y-2">
          <label htmlFor="check-in" className="block text-sm font-medium">
            {t.bookingForm.checkIn}
          </label>
          <div className="flex items-center border rounded px-3 py-2 bg-gray-50 dark:bg-gray-700">
            <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
            <input
              id="check-in"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="bg-transparent flex-1 outline-none"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
        </div>

        {/* Check-out */}
        <div className="space-y-2">
          <label htmlFor="check-out" className="block text-sm font-medium">
            {t.bookingForm.checkOut}
          </label>
          <div className="flex items-center border rounded px-3 py-2 bg-gray-50 dark:bg-gray-700">
            <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
            <input
              id="check-out"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="bg-transparent flex-1 outline-none"
              min={startDate || new Date().toISOString().split("T")[0]}
            />
          </div>
        </div>
      </div>

      {/* Guests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Adults */}
        <div className="space-y-2">
          <label htmlFor="adults" className="block text-sm font-medium">
            {t.bookingForm.adults}
          </label>
          <select
            id="adults"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className="w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-700"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? t.bookingForm.adult : t.bookingForm.adults}
              </option>
            ))}
          </select>
        </div>

        {/* Children */}
        <div className="space-y-2">
          <label htmlFor="children" className="block text-sm font-medium">
            {t.bookingForm.children}
          </label>
          <select
            id="children"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            className="w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-700"
          >
            {[0, 1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? t.bookingForm.child : t.bookingForm.children}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex justify-center items-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
      >
        {submitted ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            {t.bookingForm.bookingConfirmed}
          </>
        ) : (
          <>
            <Users className="mr-2 h-4 w-4" />
            {t.bookingForm.checkAvailability}
          </>
        )}
      </button>
    </form>
  );
}

export default BookingForm;
