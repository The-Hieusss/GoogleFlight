import TopNavOptions from "./TopNavOption";
import { AlignJustify } from "lucide-react";
import { Sun } from "lucide-react";
import { Grip } from "lucide-react";

function TopNav() {
  return (
    <header className="flex flex-wrap justify-between items-center p-4 border-b border-gray-300 bg-gray-50 w-[100vw]">
      <div className="flex items-center space-x-4">
        <AlignJustify />
        <span className="text-3xl font-semibold">Google</span>
        <TopNavOptions />
      </div>
      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        {/* Weather and Temperature */}
        <div className="flex items-center">
          <Sun />
        </div>
        <div className="flex items-center">
          <Grip />
        </div>
        {/* Location Dropdown */}
        <div className="relative inline-block">
          <img
            className="w-12 h-12 rounded-full border-4 border-t-red-500 border-l-yellow-500 border-b-green border-r-blue-500"
            src="/profilepic.jpg"
            alt="Profile Image"
          />
          <span className="absolute inset-0 rounded-full border-2 border-gradient-to-tr from-green-400 via-yellow-400 to-red-400"></span>
        </div>
      </div>
    </header>
  );
}

export default TopNav;
