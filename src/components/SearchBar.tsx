import { useState } from "react";
import {
  ArrowLeftRight,
  Users,
  CircleDot,
  Search,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { DatePickerDepart, DatePickerReturn } from "./DatePicker";
import { Input } from "./ui/input";
import FlightSearch from "./FlightSearch";
import { theme, inputConfigs, cn } from "@/lib/theme";

function SearchBar() {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [passengers, setPassengers] = useState("1");

  const handleExploreClick = () => {
    if (departure && arrival) {
      setSearchTriggered(true);
    }
  };

  const handleSwapLocations = () => {
    const temp = departure;
    setDeparture(arrival);
    setArrival(temp);
  };

  return (
    <div className="w-full max-w-6xl px-2 sm:px-4">
      <div className={theme.layout.centered}>
        {/* Main Search Card */}
        <div className={cn("w-full", theme.components.card.glass, theme.spacing.card, theme.shadow["2xl"], "hover:shadow-3xl", theme.transition.normal)}>
          <div className={theme.spacing.element}>
            {/* Trip Options Row */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="group relative flex-1">
                <Select>
                  <SelectTrigger className={cn(
                    "w-full h-12 flex items-center gap-3 px-5",
                    theme.components.input.gradient,
                    inputConfigs.tripType.gradient,
                    inputConfigs.tripType.hoverGradient,
                    "text-gray-800",
                    theme.radius.md,
                    "border-2",
                    inputConfigs.tripType.borderColor,
                    inputConfigs.tripType.hoverBorderColor,
                    theme.transition.fast,
                    "font-medium"
                  )}>
                    <ArrowLeftRight className={cn("w-5 h-5", inputConfigs.tripType.iconColor)} />
                    <SelectValue placeholder="Round trip" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="round-trip">Round trip</SelectItem>
                    <SelectItem value="one-way">One way</SelectItem>
                    <SelectItem value="multi-city">Multi-city</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="group relative flex-1">
                <div className={cn(
                  "w-full h-12 flex items-center gap-3 px-5",
                  theme.components.input.gradient,
                  inputConfigs.passengers.gradient,
                  inputConfigs.passengers.hoverGradient,
                  "text-gray-800",
                  theme.radius.md,
                  "border-2",
                  inputConfigs.passengers.borderColor,
                  inputConfigs.passengers.hoverBorderColor,
                  theme.transition.fast
                )}>
                  <Users className={cn("w-5 h-5 flex-shrink-0", inputConfigs.passengers.iconColor)} />
                  <Input
                    type="number"
                    min="1"
                    max="9"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="h-8 bg-transparent focus:outline-none focus:border-none focus-visible:ring-0 border-none font-medium text-gray-800"
                  />
                  <span className={cn(theme.typography.body.small, "text-gray-600 font-medium")}>
                    {parseInt(passengers) === 1 ? "Passenger" : "Passengers"}
                  </span>
                </div>
              </div>

              <div className="group relative flex-1">
                <Select>
                  <SelectTrigger className={cn(
                    "w-full h-12 flex items-center gap-3 px-5",
                    theme.components.input.gradient,
                    inputConfigs.class.gradient,
                    inputConfigs.class.hoverGradient,
                    "text-gray-800",
                    theme.radius.md,
                    "border-2",
                    inputConfigs.class.borderColor,
                    inputConfigs.class.hoverBorderColor,
                    theme.transition.fast,
                    "font-medium"
                  )}>
                    <Sparkles className={cn("w-5 h-5", inputConfigs.class.iconColor)} />
                    <SelectValue placeholder="Economy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="premium-economy">Premium Economy</SelectItem>
                    <SelectItem value="business">Business Class</SelectItem>
                    <SelectItem value="first">First Class</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Departure/Arrival Section */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Location Inputs */}
              <div className="flex flex-col sm:flex-row items-center gap-3 flex-1">
                {/* Departure Input */}
                <div className="relative w-full group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative flex items-center w-full px-5 py-4 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-400 rounded-2xl transition-all duration-200 shadow-sm hover:shadow-md">
                    <CircleDot className="w-5 h-5 text-blue-600 flex-shrink-0 mr-3" />
                    <div className="flex flex-col flex-1">
                      <label className="text-xs text-gray-500 font-medium mb-1">From</label>
                      <Input
                        type="text"
                        placeholder="Phoenix"
                        value={departure}
                        onChange={(e) => setDeparture(e.target.value)}
                        className="h-6 bg-transparent focus:outline-none focus:border-none focus-visible:ring-0 border-none p-0 text-gray-900 font-semibold text-lg placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Swap Button */}
                <button
                  onClick={handleSwapLocations}
                  className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10"
                  aria-label="Swap locations"
                >
                  <ArrowLeftRight className="w-5 h-5" />
                </button>

                {/* Arrival Input */}
                <div className="relative w-full group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative flex items-center w-full px-5 py-4 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-purple-400 rounded-2xl transition-all duration-200 shadow-sm hover:shadow-md">
                    <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mr-3" />
                    <div className="flex flex-col flex-1">
                      <label className="text-xs text-gray-500 font-medium mb-1">To</label>
                      <Input
                        type="text"
                        placeholder="Anywhere"
                        value={arrival}
                        onChange={(e) => setArrival(e.target.value)}
                        className="h-6 bg-transparent focus:outline-none focus:border-none focus-visible:ring-0 border-none p-0 text-gray-900 font-semibold text-lg placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Date Pickers */}
              <div className="flex justify-center lg:justify-end">
                <div className="flex flex-col sm:flex-row border-2 border-gray-200 hover:border-indigo-400 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-200 w-full lg:w-auto">
                  <div className="flex items-center justify-center px-4 py-3 border-b sm:border-b-0 sm:border-r border-gray-200 hover:bg-gray-50 transition-colors">
                    <DatePickerDepart />
                  </div>
                  <div className="flex items-center justify-center px-4 py-3 hover:bg-gray-50 transition-colors">
                    <DatePickerReturn />
                  </div>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-center justify-center pt-2">
              <button
                onClick={handleExploreClick}
                disabled={!departure || !arrival}
                className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-2xl shadow-lg hover:shadow-xl disabled:shadow-none transition-all duration-200 font-semibold text-lg disabled:cursor-not-allowed hover:scale-105 disabled:hover:scale-100"
              >
                <Search className="w-6 h-6 group-hover:rotate-12 transition-transform duration-200" />
                <span>Search Flights</span>
                <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      {searchTriggered && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-2 mb-6 px-2">
            <h3 className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Available Flights
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>
          <FlightSearch departure={departure} arrival={arrival} />
        </div>
      )}
    </div>
  );
}

export default SearchBar;


