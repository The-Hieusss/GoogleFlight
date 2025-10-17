// Centralized Design System for Google Flights

export const theme = {
  // Color Palette
  colors: {
    primary: {
      main: "from-blue-600 to-indigo-600",
      light: "from-blue-50 to-indigo-50",
      dark: "from-blue-900 to-indigo-900",
      gradient: "bg-gradient-to-r from-blue-600 to-indigo-600",
      text: "text-blue-600",
      bg: "bg-blue-600",
      border: "border-blue-300",
      hover: "hover:border-blue-400",
    },
    secondary: {
      main: "from-purple-600 to-pink-600",
      light: "from-purple-50 to-pink-50",
      gradient: "bg-gradient-to-r from-purple-600 to-pink-600",
      text: "text-purple-600",
      bg: "bg-purple-600",
      border: "border-purple-300",
      hover: "hover:border-purple-400",
    },
    accent: {
      amber: {
        main: "from-amber-600 to-orange-600",
        light: "from-amber-50 to-orange-50",
        gradient: "bg-gradient-to-br from-amber-500 to-orange-500",
        text: "text-amber-600",
      },
      cyan: {
        main: "from-cyan-400 to-blue-400",
        light: "from-blue-50 to-cyan-50",
        gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
        text: "text-cyan-600",
      },
    },
    hero: {
      gradient: "from-blue-400 via-cyan-400 to-purple-400",
      overlay: "from-blue-900/40 via-indigo-900/50 to-purple-900/60",
    },
  },

  // Typography
  typography: {
    hero: {
      title: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold",
      subtitle: "text-lg md:text-xl lg:text-2xl font-medium",
    },
    heading: {
      h1: "text-3xl md:text-4xl lg:text-5xl font-bold",
      h2: "text-2xl md:text-3xl lg:text-4xl font-bold",
      h3: "text-xl md:text-2xl font-bold",
      h4: "text-lg md:text-xl font-semibold",
    },
    body: {
      large: "text-base md:text-lg",
      regular: "text-sm md:text-base",
      small: "text-xs md:text-sm",
    },
  },

  // Spacing
  spacing: {
    section: "py-16 md:py-24",
    container: "px-4 sm:px-6 lg:px-8",
    card: "p-6 md:p-8",
    element: "space-y-4 md:space-y-6",
  },

  // Border Radius
  radius: {
    sm: "rounded-lg",
    md: "rounded-xl",
    lg: "rounded-2xl",
    xl: "rounded-3xl",
    full: "rounded-full",
  },

  // Shadows
  shadow: {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    hover: "hover:shadow-xl",
  },

  // Transitions
  transition: {
    fast: "transition-all duration-200",
    normal: "transition-all duration-300",
    slow: "transition-all duration-500",
    colors: "transition-colors duration-200",
    transform: "transition-transform duration-200",
  },

  // Effects
  effects: {
    blur: {
      sm: "backdrop-blur-sm",
      md: "backdrop-blur-md",
      lg: "backdrop-blur-lg",
    },
    hover: {
      scale: "hover:scale-105",
      lift: "hover:-translate-y-2",
      scaleIcon: "group-hover:scale-110",
      glow: "hover:shadow-2xl",
    },
    glass: "bg-white/95 backdrop-blur-sm",
    gradient: {
      overlay: "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300",
    },
  },

  // Components
  components: {
    button: {
      primary: "px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105",
      secondary: "px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold border-2 border-blue-200 hover:border-blue-400 transition-all duration-200",
      disabled: "disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none",
    },
    card: {
      base: "bg-white rounded-2xl shadow-lg border-2 border-gray-200",
      hover: "hover:border-blue-300 hover:shadow-xl transition-all duration-300",
      glass: "bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl border border-gray-100",
    },
    input: {
      base: "px-5 py-4 bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-2xl transition-all duration-200 shadow-sm hover:shadow-md",
      hover: "hover:border-blue-400",
      focus: "focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
      gradient: "bg-gradient-to-br border-2 shadow-sm",
    },
    badge: {
      blue: "px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold",
      purple: "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold",
      amber: "px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold",
    },
    iconBox: {
      blue: "w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
      purple: "w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
      indigo: "w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
      amber: "w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
    },
  },

  // Animation Presets
  animations: {
    fadeIn: "animate-in fade-in duration-1000",
    slideUp: "animate-in fade-in slide-in-from-bottom-8 duration-1000",
    slideUpDelay: "animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300",
    pulse: "animate-pulse",
    bounce: "animate-bounce",
  },

  // Layout
  layout: {
    maxWidth: "max-w-7xl mx-auto",
    centered: "flex flex-col items-center justify-center",
    grid: {
      features: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8",
      cards: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6",
    },
  },
};

// Utility function to combine theme classes
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(" ");
};

// Feature card configuration
export const featureCards = [
  {
    id: "best-prices",
    icon: "TrendingDown",
    title: "Best Prices",
    description: "Compare prices from hundreds of airlines to find the cheapest flights",
    gradient: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-100",
    hoverBorderColor: "hover:border-blue-300",
    iconGradient: "from-blue-500 to-cyan-500",
    overlayGradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "fast-booking",
    icon: "Clock",
    title: "Fast Booking",
    description: "Book your flight in minutes with our streamlined checkout process",
    gradient: "from-purple-50 to-pink-50",
    borderColor: "border-purple-100",
    hoverBorderColor: "hover:border-purple-300",
    iconGradient: "from-purple-500 to-pink-500",
    overlayGradient: "from-purple-500 to-pink-500",
  },
  {
    id: "secure-safe",
    icon: "Shield",
    title: "Secure & Safe",
    description: "Your data is protected with enterprise-grade security encryption",
    gradient: "from-indigo-50 to-blue-50",
    borderColor: "border-indigo-100",
    hoverBorderColor: "hover:border-indigo-300",
    iconGradient: "from-indigo-500 to-blue-500",
    overlayGradient: "from-indigo-500 to-blue-500",
  },
  {
    id: "24-7-support",
    icon: "Award",
    title: "24/7 Support",
    description: "Our customer service team is always here to help you",
    gradient: "from-amber-50 to-orange-50",
    borderColor: "border-amber-100",
    hoverBorderColor: "hover:border-amber-300",
    iconGradient: "from-amber-500 to-orange-500",
    overlayGradient: "from-amber-500 to-orange-500",
  },
];

// Input field configurations
export const inputConfigs = {
  tripType: {
    gradient: "from-blue-50 to-indigo-50",
    hoverGradient: "hover:from-blue-100 hover:to-indigo-100",
    borderColor: "border-blue-200",
    hoverBorderColor: "hover:border-blue-400",
    iconColor: "text-blue-600",
  },
  passengers: {
    gradient: "from-purple-50 to-pink-50",
    hoverGradient: "hover:from-purple-100 hover:to-pink-100",
    borderColor: "border-purple-200",
    hoverBorderColor: "hover:border-purple-400",
    iconColor: "text-purple-600",
  },
  class: {
    gradient: "from-amber-50 to-orange-50",
    hoverGradient: "hover:from-amber-100 hover:to-orange-100",
    borderColor: "border-amber-200",
    hoverBorderColor: "hover:border-amber-400",
    iconColor: "text-amber-600",
  },
  departure: {
    borderColor: "border-gray-200",
    hoverBorderColor: "hover:border-blue-400",
    iconColor: "text-blue-600",
    glowColor: "from-blue-400 to-cyan-400",
  },
  arrival: {
    borderColor: "border-gray-200",
    hoverBorderColor: "hover:border-purple-400",
    iconColor: "text-purple-600",
    glowColor: "from-purple-400 to-pink-400",
  },
};

export default theme;
