import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";

function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black relative">
      <div className="glass-card p-10 max-w-md text-center animate-fade-in relative z-10">
        {/* Avatar Illustration */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-gray-800">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
              alt="Lost avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-7xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Oops! Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Looks like you’re lost in the waves 🌊. Don’t worry, we’ll bring you back home.
        </p>

        <Link
          to="/"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          <Home className="mr-2 h-5 w-5" />
          Return Home
        </Link>
      </div>

      {/* Decorative Waves */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden z-0">
        <svg
          className="absolute bottom-0 w-full h-24 fill-blue-200 dark:fill-gray-800"
          preserveAspectRatio="none"
          viewBox="0 0 1440 74"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
            className="animate-wave opacity-50"
          />
          <path
            d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
            className="animate-wave opacity-100 [animation-delay:-4s]"
          />
        </svg>
      </div>
    </div>
  );
}

export default NotFound;
