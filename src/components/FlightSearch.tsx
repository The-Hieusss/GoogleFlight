import { useState, useEffect } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "..//components/ui/accordion";

import { Bed, Circle, Earth, MonitorPlay, PlaneLanding, PlaneTakeoff, Plug, Wifi } from "lucide-react";

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
    <div className="flight-result bg-white rounded-xl px-5 border sm:w-[85vw]">
      {filteredFlights.length > 0 ? (
        <Accordion type="single" collapsible>
          {filteredFlights.map((flight) => {
           
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
              <AccordionItem key={flight.id} value={`flight-${flight.id}`}>
                <AccordionTrigger className="flex justify-between items-center font-montserrat px-4 py-w text-left">
                  {/* Only showing airline and flight number before expanding */}
                  <div className="flex w-[75vw] h-auto text-2xl border-b justify-around">
                    <span>{flight.airline}</span>
                    <span>{flight.flightNumber}</span>
                    <span>
                      {hours}hr {minutes}min
                    </span>
                    <span>${flight.price}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flight font-montserrat p-4 flex justify-around ">
                    <div className="flex-col ">

                      <div className="flex gap-2">
                        <PlaneTakeoff/>
                        <p className="text-lg">{departureDate.toLocaleTimeString()} - {flight.departureAirport}</p>
                      </div>

                      <Circle className="w-2 m-1"/>
                      <Circle className="w-2 m-1"/>

                      <div className="flex gap-2">
                        <PlaneLanding/>
                        <p className="text-lg">{arrivalDate.toLocaleTimeString()} - {flight.arrivalAirport}</p>
                      </div>

                      <div className="flex pt-2">

                        <p>{flight.airline} - {flight.class} - Airbus A320</p>

                      </div>
                    </div>

                    <div className="flex flex-col ">
                      <div className="flex gap-2">
                        <Bed className="pb-1 " />
                        <p>Above average legroom</p>
                      </div>

                      <div className="flex gap-2">
                        <Wifi className="pb-1" />
                        <p>Free Wi-Fi</p>
                      </div>

                      <div className="flex gap-2">
                        <Plug className="pb-1" />
                        <p>In-seat power & USB outlets</p>
                      </div>

                      <div className="flex gap-2">
                        <MonitorPlay className="pb-1" />
                        <p>Live TV</p>
                      </div>

                      <div className="flex gap-2 ">
                        <Earth className="pb-1" />
                        <p>Emissions estimate: 288 kg CO2e</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      ) : (
        <p>No flights found for the selected route.</p>
      )}
    </div>
  );
};

export default FlightSearch;
