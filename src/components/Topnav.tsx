import { useState } from "react";
import TopNavOptions from "./TopNavOption";
import { Menu, X, Sun, Grid3x3, ChevronDown, User } from "lucide-react";

function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Left Section - Logo & Navigation */}
          <div className="flex items-center space-x-4 md:space-x-8">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>

            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                className="w-8 h-8 md:w-10 md:h-10"
                src="/Google.png"
                alt="Google Logo"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <TopNavOptions />
            </div>
          </div>

          {/* Right Section - Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            {/* Weather Icon */}
            <button className="hidden sm:flex p-2 md:p-2.5 rounded-full hover:bg-gray-100 transition-all duration-200 group">
              <Sun className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-yellow-500 transition-colors" />
            </button>

            {/* Apps Grid */}
            <button className="p-2 md:p-2.5 rounded-full hover:bg-gray-100 transition-all duration-200 group">
              <Grid3x3 className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </button>

            {/* Profile */}
            <div className="relative group">
              <button className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100 transition-all duration-200">
                <div className="relative">
                  <User className="w-7 h-7 md:w-8 md:h-8 text-gray-600" />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <ChevronDown className="hidden md:block w-4 h-4 text-gray-500 group-hover:text-gray-700 transition-colors" />
              </button>

              {/* Profile Dropdown (placeholder) */}
              <div className="hidden group-hover:block absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-semibold text-gray-900">My Account</p>
                  <p className="text-xs text-gray-500 mt-0.5">user@example.com</p>
                </div>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">Sign out</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 border-t border-gray-200">
            <TopNavOptions />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default TopNav;
