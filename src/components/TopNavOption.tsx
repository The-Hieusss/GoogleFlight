import { Luggage, Globe, Plane, Bed, House } from "lucide-react";

const navItems = [
  { icon: Luggage, label: "Travel", active: false },
  { icon: Globe, label: "Explore", active: false },
  { icon: Plane, label: "Flights", active: true },
  { icon: Bed, label: "Hotels", active: false },
  { icon: House, label: "Vacation rentals", active: false },
];

function TopNavOptions() {
  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.label}
            className={`
              group relative flex items-center space-x-2 lg:space-x-2 px-4 lg:px-5 py-2.5 lg:py-2
              rounded-full lg:rounded-lg text-sm lg:text-base font-medium
              transition-all duration-200 ease-in-out
              ${
                item.active
                  ? "bg-blue-50 text-blue-700 shadow-sm"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }
            `}
          >
            <Icon className={`
              w-5 h-5 transition-transform duration-200 group-hover:scale-110
              ${item.active ? "text-blue-600" : "text-gray-600 group-hover:text-gray-900"}
            `} />
            <span className="lg:inline">{item.label}</span>

            {/* Active indicator */}
            {item.active && (
              <div className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-blue-600 rounded-full"></div>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default TopNavOptions;
