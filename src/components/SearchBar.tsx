import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  User,
  Circle,
  Search,
  MapPin,
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { DatePickerDepart, DatePickerReturn } from "./DatePicker";
import { Input } from "./ui/input";
import FlightSearch from "./FlightSearch";

function SearchBar() {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false);

  const handleExploreClick = () => {
    if (departure && arrival) {
      setSearchTriggered(true);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center pb-8 ">
        <div className="w-[85vw] h-[32vh] bg-white shadow-lg rounded-2xl ">
          <div className="flex flex-col">
            <div className="flex gap-5 pb-3 pt-2 px-2">
              <Select>
                <SelectTrigger className="w-[180px] flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-2xl border-red">
                  <div className="flex flex-col items-center -space-y-1">
                    <ArrowRight />
                    <ArrowLeft />
                  </div>
                  <SelectValue placeholder="Round trip" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="round-trip">Round trip</SelectItem>
                  <SelectItem value="one-way">One way</SelectItem>
                  <SelectItem value="multi-city">Multi-city</SelectItem>
                </SelectContent>
              </Select>

              <div className="w-[180px] flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-2xl border">
                <div className="flex flex-col items-center space-x-1">
                  <User />
                </div>
                <span>
                  <Input
                    type="text"
                    placeholder="1"
                    className="h-1 bg-transparent focus:outline-none focus:border-none focus-visible:ring-0 border-none ml-2"
                  />
                </span>
              </div>

              <Select>
                <SelectTrigger className="w-[180px] flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-2xl border-red">
                  <SelectValue placeholder="Economy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="economy">Economy</SelectItem>
                  <SelectItem value="premium-economy">Premium economy</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="first">First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-between pt-3 sm:flex-col sm: gap-y-2  md:flex-row ">
              <div className="flex items-center justify-center space-x-0 px-4 gap-2 ">
                <div className="flex items-center justify-between w-64 px-4 py-4 bg-white text-gray-600 border border-gray-300 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <Circle />
                    <Input
                      type="text"
                      placeholder="Phoenix"
                      value={departure}
                      onChange={(e) => setDeparture(e.target.value)}
                      className="h-1 bg-transparent focus:outline-none focus:border-none focus-visible:ring-0 border-none ml-2"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center bg-white rounded-full -mx-4">
                  <ArrowRight />
                  <ArrowLeft />
                </div>

                <div className="flex items-center justify-between w-64 px-4 py-4 bg-white text-gray-600 border border-gray-300 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <MapPin />
                    <Input
                      type="text"
                      placeholder="Anywhere"
                      value={arrival}
                      onChange={(e) => setArrival(e.target.value)}
                      className="h-1 bg-transparent focus:outline-none focus:border-none focus-visible:ring-0 border-none ml-2"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end px-12 sm:justify-center">
                <div className="flex border">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white text-gray-600 border-r rounded-lg ">
                    <DatePickerDepart />
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white text-gray-600 rounded-lg ">
                    <DatePickerReturn />
                  </div>
                </div>
              </div>

            </div>

            <div className="flex items-center justify-center md:pt-14 relative sm:pt-1  ">
              <button
                onClick={handleExploreClick}
                className="flex items-center space-x-2 md:px-6 md:py-4 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 sm:py-2 sm:px-4 "
              >
                <Search />
                <span>Explore</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <h3 className="font-montserrat font-semibold">Available Flights</h3>
      {/* Due to limited information, only destinations are the main parameter */}
      {searchTriggered && <FlightSearch departure={departure} arrival={arrival} />}
    </div>
  );
}

export default SearchBar;


