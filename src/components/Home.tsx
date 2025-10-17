import SearchBar from "./SearchBar";
import TopNav from "./Topnav";
import { Plane, Globe, Shield, Sparkles, TrendingDown, Clock, Award,  Star, ArrowRight, CheckCircle, User } from "lucide-react";
import { theme, featureCards, cn } from "../lib/theme";

function Home() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Travel Blogger",
      content: "Found amazing deals to Europe. Saved over $400 on my last trip!",
      rating: 5,
      avatar: "/api/placeholder/48/48"
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Business Traveler",
      content: "Super easy to use. Love the price alerts feature.",
      rating: 5,
      avatar: "/api/placeholder/48/48"
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Adventure Seeker",
      content: "Best flight search engine I've used. Highly recommended!",
      rating: 5,
      avatar: "/api/placeholder/48/48"
    }
  ];

  const popularDestinations = [
    { city: "Paris", country: "France", price: "from $299", image: "/countries/Paris.avif" },
    { city: "Tokyo", country: "Japan", price: "from $599", image: "/countries/tokyo.jpg" },
    { city: "New York", country: "USA", price: "from $199", image: "/countries/new-york.webp" },
    { city: "London", country: "UK", price: "from $349", image: "/countries/london.webp" },
    { city: "Bali", country: "Indonesia", price: "from $449", image: "/countries/bali.jpg" },
    { city: "Barcelona", country: "Spain", price: "from $279", image: "/countries/barca.jpg" }
  ];

  const benefits = [
    "No hidden fees or charges",
    "24/7 customer support",
    "Price match guarantee",
    "Flexible booking options",
    "Instant confirmation",
    "Mobile check-in available"
  ];

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <TopNav />

      {/* Hero Section */}
      <main className="flex-1">
        {/* Hero with Background */}
        <div className="relative w-full min-h-[90vh] flex flex-col justify-center items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-[url('/cover.gif')] bg-cover bg-center">
            <div className="absolute inset-0 backdrop-blur-[2px]"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center w-full max-w-7xl px-4 py-8 md:py-12">
            {/* Hero Text */}
            <div className={cn("text-center mb-8 md:mb-12 space-y-4", theme.animations.slideUp)}>
              {/* Badge */}
              <div className={cn("inline-flex items-center gap-2 px-4 py-2", theme.effects.glass, theme.radius.full, theme.shadow.lg, "mb-4")}>
                <Sparkles className="w-4 h-4 text-yellow-500" />
                <span className={cn("text-sm font-semibold", theme.colors.primary.gradient, "bg-clip-text text-transparent")}>
                  Find Your Perfect Flight
                </span>
              </div>

              {/* Main Title */}
              <h1 className={cn(theme.typography.hero.title, "text-white drop-shadow-2xl leading-tight")}>
                Discover the World
                <br />
                <span className={cn("bg-gradient-to-r", theme.colors.hero.gradient, "bg-clip-text text-transparent")}>
                  One Flight at a Time
                </span>
              </h1>

              {/* Subtitle */}
              <p className={cn(theme.typography.hero.subtitle, "text-white/90 max-w-2xl mx-auto drop-shadow-lg")}>
                Compare thousands of flights and find the best deals for your next adventure
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-6">
                <div className="flex items-center gap-2 text-black/90 bg-white/50 p-2 rounded">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm md:text-base font-semibold">500+ Destinations</span>
                </div>
                <div className="flex items-center gap-2 text-black/90 bg-white/50 p-2 rounded">
                  <Plane className="w-5 h-5 text-blue-400" />
                  <span className="text-sm md:text-base font-semibold">100+ Airlines</span>
                </div>
                <div className="flex items-center gap-2 text-black/90 bg-white/50 p-2 rounded">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span className="text-sm md:text-base font-semibold">Trusted by Millions</span>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className={cn("w-full", theme.animations.slideUpDelay)}>
              <SearchBar />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-2 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Popular Destinations Section */}
        <section className={cn("w-full bg-gray-50", theme.spacing.section, theme.spacing.container)}>
          <div className={theme.layout.maxWidth}>
            <div className="text-center mb-12">
              <h2 className={cn(theme.typography.heading.h1, theme.colors.primary.gradient, "bg-clip-text text-transparent mb-4")}>
                Popular Destinations
              </h2>
              <p className={cn(theme.typography.body.large, "text-gray-600 max-w-2xl mx-auto")}>
                Explore trending destinations with great flight deals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularDestinations.map((destination, index) => (
                <div
                  key={index}
                  className={cn(
                    "group relative bg-white rounded-xl overflow-hidden",
                    theme.shadow.hover,
                    theme.transition.normal,
                    theme.effects.hover.lift,
                    "cursor-pointer"
                  )}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.city}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-montserrat text-white ">{destination.city}</h3>
                      <p className="text-white/80">{destination.country}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">{destination.price}</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={cn("w-full bg-white", theme.spacing.section, theme.spacing.container)}>
          <div className={theme.layout.maxWidth}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className={cn(theme.typography.heading.h1, theme.colors.primary.gradient, "bg-clip-text text-transparent mb-4")}>
                Why Choose Us?
              </h2>
              <p className={cn(theme.typography.body.large, "text-gray-600 max-w-2xl mx-auto")}>
                We make flight booking simple, fast, and affordable
              </p>
            </div>

            <div className={theme.layout.grid.features}>
              {featureCards.map((card) => {
                const iconMap = { TrendingDown, Clock, Shield, Award };
                const IconComponent = iconMap[card.icon as keyof typeof iconMap];
                return (
                  <div
                    key={card.id}
                    className={cn(
                      "group relative bg-gradient-to-br",
                      card.gradient,
                      theme.radius.lg,
                      theme.spacing.card,
                      theme.shadow.hover,
                      theme.transition.normal,
                      theme.effects.hover.lift,
                      "border-2",
                      card.borderColor,
                      card.hoverBorderColor
                    )}
                  >
                    <div className={cn(theme.effects.gradient.overlay, "bg-gradient-to-br", card.overlayGradient, theme.radius.lg)}></div>
                    <div className="relative">
                      <div className={cn("w-14 h-14 bg-gradient-to-br", card.iconGradient, "rounded-xl flex items-center justify-center mb-4", theme.effects.hover.scaleIcon, theme.transition.transform)}>
                        {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
                      </div>
                      <h3 className={cn(theme.typography.heading.h4, "text-gray-900 mb-2")}>{card.title}</h3>
                      <p className={cn(theme.typography.body.small, "text-gray-600")}>{card.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={cn("w-full bg-gradient-to-br from-blue-50 to-indigo-50", theme.spacing.section, theme.spacing.container)}>
          <div className={theme.layout.maxWidth}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className={cn(theme.typography.heading.h1, "text-gray-900 mb-6")}>
                  Everything You Need for the Perfect Trip
                </h2>
                <p className={cn(theme.typography.body.large, "text-gray-600 mb-8")}>
                  We provide comprehensive flight booking services with features designed to make your travel experience seamless and enjoyable.
                </p>
                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Plane className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Flight Confirmed</h3>
                      <p className="text-gray-500 text-sm">Your booking is secure</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">New York → Paris</span>
                      <span className="font-bold text-blue-600">$299</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Departure</span>
                      <span className="font-semibold">Dec 15, 2025</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-600">Saved</span>
                      <span className="font-bold text-green-600">$150</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={cn("w-full bg-white", theme.spacing.section, theme.spacing.container)}>
          <div className={theme.layout.maxWidth}>
            <div className="text-center mb-12">
              <h2 className={cn(theme.typography.heading.h1, theme.colors.primary.gradient, "bg-clip-text text-transparent mb-4")}>
                What Our Travelers Say
              </h2>
              <p className={cn(theme.typography.body.large, "text-gray-600 max-w-2xl mx-auto")}>
                Join millions of satisfied customers who trust us with their travel plans
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={cn(
                    "bg-gray-50 p-6 rounded-xl",
                    theme.shadow.hover,
                    theme.transition.normal,
                    theme.effects.hover.lift
                  )}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <User className="w-6 h-6 text-gray-700" />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={cn("w-full relative overflow-hidden", theme.spacing.section, theme.spacing.container)}>
          <div className="absolute inset-0 bg-[url('/cover.gif')] bg-cover bg-center opacity-10"></div>
          <div className={cn("absolute inset-0 ", theme.colors.hero.overlay)}></div>

          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className={cn(theme.typography.heading.h1, "text-white mb-6")}>
              Ready to Take Off?
            </h2>
            <p className={cn(theme.typography.body.large, "text-black/90 mb-8 max-w-2xl mx-auto")}>
              Start your journey today and discover amazing flight deals to destinations worldwide
            </p>
            <button className={cn(
              "group px-8 py-4 bg-white inline-flex items-center gap-3",
              theme.colors.primary.text,
              theme.radius.lg,
              "font-bold text-lg",
              theme.shadow["2xl"],
              theme.effects.hover.glow,
              theme.transition.normal,
              theme.effects.hover.scale
            )}>
              <span>Start Searching</span>
              <Plane className={cn("w-5 h-5 group-hover:translate-x-1", theme.transition.transform)} />
            </button>
          </div>
        </section>
      </main>

    </div>
  );
}

export default Home;
