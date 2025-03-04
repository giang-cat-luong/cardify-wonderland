
import { Filter } from "lucide-react";
import { useState, useRef } from "react";
import FilterSidebar from "./FilterSidebar";
import useClickOutside from "../hooks/useClickOutside";

interface FilterButtonProps {
  className?: string;
}

const FilterButton = ({ className = "" }: FilterButtonProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div ref={buttonRef}>
      <button
        className={`flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50 ${className}`}
        onClick={toggleFilter}
      >
        <Filter className="h-4 w-4" />
        <span>Filter</span>
      </button>

      <FilterSidebar 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
      />
    </div>
  );
};

export default FilterButton;
