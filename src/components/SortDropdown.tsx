
import { useState, useRef } from "react";
import { ArrowUpDown } from "lucide-react";
import useClickOutside from "../hooks/useClickOutside";

interface SortDropdownProps {
  className?: string;
}

const SortDropdown = ({ className = "" }: SortDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("recommend");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Use our custom hook instead of the inline useEffect
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const sortOptions = [
    { value: "recommend", label: "recommend" },
    { value: "highReview", label: "High review score" },
    { value: "sellAlot", label: "Sell a lot" },
    { value: "priceLowToHigh", label: "Price (low to high)" },
    { value: "priceHighToLow", label: "Price (high to low)" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(`Sort by: ${value}`);
    // Here you would add the logic to actually sort the data
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50"
        onClick={toggleDropdown}
      >
        <ArrowUpDown className="h-4 w-4" />
        <span>Sort by</span>
      </button>

      {/* Dropdown menu */}
      <div
        className={`absolute left-0 mt-2 w-44 bg-white rounded-md shadow-lg z-50 border border-gray-200 transition-all duration-200 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="py-1">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              className={`block w-full text-left px-4 py-2 text-sm ${
                selectedOption === option.value
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => handleOptionSelect(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortDropdown;
