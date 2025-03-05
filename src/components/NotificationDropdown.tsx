
import { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

interface NotificationDropdownProps {
  className?: string;
}

const NotificationDropdown = ({ className = "" }: NotificationDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Use our custom hook to close the dropdown when clicking outside
  useClickOutside(dropdownRef, () => setIsOpen(false), isOpen);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* Bell icon button */}
      <button
        className="p-2 hover:bg-blue-800 rounded-full transition-colors"
        onClick={toggleDropdown}
        aria-label="Notifications"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-5 h-5 text-white" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      </button>

      {/* Notification dropdown */}
      <div
        className={`absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 border border-gray-200 transition-all duration-200 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="py-3 px-4 border-b border-gray-200">
          <h3 className="text-gray-800 font-medium">การแจ้งเตือน</h3>
        </div>
        <div className="py-2">
          {/* You can map through notifications here */}
          <div className="py-8 flex flex-col items-center justify-center text-gray-500">
            <p className="text-sm">ไม่มีการแจ้งเตือนใหม่</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;
