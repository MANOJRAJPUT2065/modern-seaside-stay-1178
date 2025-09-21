import React, { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext"; // relative import

// simple HTML select, shadcn ke Select ki zarurat nahi hai
const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
];

function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4" />
      <select
        value={language}
        onChange={handleChange}
        className="bg-transparent border rounded px-2 py-1 focus:outline-none"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
