
import { Filter } from "lucide-react";
import { useState } from "react";
import FilterSidebar from "./FilterSidebar";

interface FilterButtonProps {
  className?: string;
}

const FilterButton = ({ className = "" }: FilterButtonProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <button
        className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 ${className}`}
        onClick={toggleFilter}
      >
        <Filter className="h-5 w-5" />
        <span>Filter</span>
      </button>

      <FilterSidebar 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
      />
    </>
  );
};

export default FilterButton;
