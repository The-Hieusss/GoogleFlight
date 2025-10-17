import { useState, useEffect } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "..//components/ui/accordion";

import { Bed, Circle, Earth, MonitorPlay, PlaneLanding, PlaneTakeoff, Plug, Wifi, Search, Sparkles } from "lucide-react";

interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  class: string;
  availableSeats: number;
  departureAirport: string;
  arrivalAirport: string;
}

interface FlightSearchParam {
  departure: string;
  arrival: string;
}

function FlightSearch({ departure, arrival }: FlightSearchParam){
  const [flights, setFlights] = useState<Flight[]>([]);
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch("/src/assets/flights.json");
        const data = await response.json();
        setFlights(data.flights);
      } catch (error) {
        console.error("Error fetching flights:", error);
      }
    };

    fetchFlights();
  }, []);

  useEffect(() => {
    if (departure && arrival) {
      const results = flights.filter(
        (flight) =>
          flight.departure.toLowerCase().includes(departure.toLowerCase()) &&
          flight.arrival.toLowerCase().includes(arrival.toLowerCase())
      );
      setFilteredFlights(results);
    }
  }, [departure, arrival, flights]);

  return (
    <div className="flight-result w-full space-y-4">
      {filteredFlights.length > 0 ? (
        <Accordion type="single" collapsible className="space-y-4">
          {filteredFlights.map((flight, index) => {

            const departureDate = new Date(flight.departureTime);
            const arrivalDate = new Date(flight.arrivalTime);

            const differenceInMilliseconds =
              arrivalDate.getTime() - departureDate.getTime();
            const differenceInMinutes = Math.floor(
              differenceInMilliseconds / (1000 * 60)
            );
            const hours = Math.floor(differenceInMinutes / 60);
            const minutes = differenceInMinutes % 60;

            return (
              <AccordionItem
                key={flight.id}
                value={`flight-${flight.id}`}
                className="bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="flex justify-between items-center px-4 sm:px-6 py-5 text-left hover:no-underline hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-200">
                  {/* Flight Summary */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full items-center">
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-900 text-sm sm:text-base">{flight.airline}</span>
                      <span className="text-xs text-gray-500">{flight.flightNumber}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm sm:text-base text-gray-700 font-medium">
                        {hours}h {minutes}m
                      </span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        {flight.class}
                      </span>
                    </div>
                    <div className="flex flex-col items-end col-span-2 sm:col-span-1">
                      <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        ${flight.price}
                      </span>
                      <span className="text-xs text-gray-500">{flight.availableSeats} seats left</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-4 sm:px-6 pb-6 pt-2">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Flight Times */}
                      <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 space-y-4">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Circle className="w-4 h-4 text-blue-600" />
                          Flight Details
                        </h4>

                        <div className="flex gap-3 items-start">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <PlaneTakeoff className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-lg font-bold text-gray-900">
                              {departureDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                            <p className="text-sm text-gray-600 font-medium">{flight.departureAirport}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              {departureDate.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pl-5 py-2">
                          <div className="h-12 w-px bg-gradient-to-b from-blue-300 to-purple-300"></div>
                          <div className="flex flex-col text-xs text-gray-600">
                            <span className="font-medium">{hours}h {minutes}m</span>
                            <span>Non-stop</span>
                          </div>
                        </div>

                        <div className="flex gap-3 items-start">
                          <div className="p-2 bg-purple-100 rounded-lg">
                            <PlaneLanding className="w-5 h-5 text-purple-600" />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-lg font-bold text-gray-900">
                              {arrivalDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                            <p className="text-sm text-gray-600 font-medium">{flight.arrivalAirport}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              {arrivalDate.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
                            </p>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-blue-200">
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">{flight.airline}</span> • {flight.class} • Airbus A320
                          </p>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-purple-600" />
                          Amenities & Info
                        </h4>
                        <div className="space-y-3">
                          <div className="flex gap-3 items-center p-2 bg-white/60 rounded-lg">
                            <div className="p-1.5 bg-green-100 rounded-md">
                              <Bed className="w-4 h-4 text-green-600" />
                            </div>
                            <p className="text-sm text-gray-700 font-medium">Above average legroom</p>
                          </div>

                          <div className="flex gap-3 items-center p-2 bg-white/60 rounded-lg">
                            <div className="p-1.5 bg-blue-100 rounded-md">
                              <Wifi className="w-4 h-4 text-blue-600" />
                            </div>
                            <p className="text-sm text-gray-700 font-medium">Free Wi-Fi</p>
                          </div>

                          <div className="flex gap-3 items-center p-2 bg-white/60 rounded-lg">
                            <div className="p-1.5 bg-yellow-100 rounded-md">
                              <Plug className="w-4 h-4 text-yellow-600" />
                            </div>
                            <p className="text-sm text-gray-700 font-medium">In-seat power & USB</p>
                          </div>

                          <div className="flex gap-3 items-center p-2 bg-white/60 rounded-lg">
                            <div className="p-1.5 bg-purple-100 rounded-md">
                              <MonitorPlay className="w-4 h-4 text-purple-600" />
                            </div>
                            <p className="text-sm text-gray-700 font-medium">Live TV</p>
                          </div>

                          <div className="flex gap-3 items-center p-2 bg-white/60 rounded-lg">
                            <div className="p-1.5 bg-emerald-100 rounded-md">
                              <Earth className="w-4 h-4 text-emerald-600" />
                            </div>
                            <div className="flex flex-col">
                              <p className="text-sm text-gray-700 font-medium">288 kg CO2e</p>
                              <p className="text-xs text-gray-500">Carbon emissions</p>
                            </div>
                          </div>
                        </div>

                        <button className="w-full mt-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
                          Select Flight
                        </button>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      ) : (
        <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-lg text-gray-600 font-medium">No flights found for the selected route.</p>
            <p className="text-sm text-gray-500">Try adjusting your search criteria</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
