import { Luggage } from "lucide-react";
import { Globe } from "lucide-react";
import { Plane } from "lucide-react";
import { Bed } from "lucide-react";
import { House } from "lucide-react";



function TopNavOptions() {
  return (
    <div className="flex gap-5">
      <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-black rounded-full border border-gray-500 hover:bg-gray">
        
        <Luggage />
        <span>Travel</span>
        
      </button>

      <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-black rounded-full border border-gray-500 hover:bg-gray">
        <Globe />
        <span>Explore</span>
      </button>

      <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-black rounded-full border border-gray-500 hover:bg-gray">
        <Plane />
        <span>Flights</span>
      </button>

      <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-black rounded-full border border-gray-500 hover:bg-gray">
        <Bed />
        <span>Hotels</span>
      </button>

      <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-black rounded-full border border-gray-500 hover:bg-gray">
        <House />
        <span>Vacation rentals</span>
      </button>
    </div>
  );
}
export default TopNavOptions;
