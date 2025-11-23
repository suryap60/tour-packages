"use client";
import { useState, useMemo } from "react";
// import { TourFilters } from "./components/TourFilters";
import { Plane } from "lucide-react";
import { TourPackage, TourPackageCard } from "@/components/sections/packages/TourPackageCard";
import Navbar from "@/components/layout/NavbarTwo";
import Image from "next/image";

const tourPackages: TourPackage[] = [
  {
    id: "1",
    title: "Tropical Paradise Escape",
    destination: "Maldives",
    duration: "7 Days",
    price: 2499,
    rating: 4.9,
    reviews: 234,
    image: "/assets/imgs/package/package.png",
    groupSize: "2-8 people",
    featured: true,
    highlights: [
      "Luxury beach resort accommodation",
      "Snorkeling and diving excursions",
      "Private island tours",
      "All meals included"
    ]
  },
  {
    id: "2",
    title: "Romantic Paris Experience",
    destination: "France",
    duration: "5 Days",
    price: 1899,
    rating: 4.8,
    reviews: 456,
    image: "/assets/imgs/package/package.png",
    groupSize: "2-6 people",
    featured: true,
    highlights: [
      "Eiffel Tower skip-the-line access",
      "Seine River cruise",
      "Louvre Museum guided tour",
      "Wine tasting in Montmartre"
    ]
  },
  {
    id: "3",
    title: "Tokyo Cultural Adventure",
    destination: "Japan",
    duration: "10 Days",
    price: 3299,
    rating: 4.9,
    reviews: 312,
    image: "/assets/imgs/package/package.png",
    groupSize: "4-12 people",
    highlights: [
      "Traditional tea ceremony",
      "Mount Fuji day trip",
      "Tsukiji fish market tour",
      "Kyoto temple visits"
    ]
  },
  {
    id: "4",
    title: "Alpine Mountain Retreat",
    destination: "Switzerland",
    duration: "6 Days",
    price: 2799,
    rating: 4.7,
    reviews: 189,
    image: "/assets/imgs/package/package.png",
    groupSize: "2-10 people",
    highlights: [
      "Jungfrau railway experience",
      "Swiss chocolate factory visit",
      "Mountain hiking trails",
      "Luxury alpine lodge stay"
    ]
  },
  {
    id: "5",
    title: "Santorini Sunset Tour",
    destination: "Greece",
    duration: "4 Days",
    price: 1599,
    rating: 4.9,
    reviews: 523,
    image: "/assets/imgs/package/package.png",
    groupSize: "2-8 people",
    featured: true,
    highlights: [
      "Sunset dinner in Oia",
      "Caldera boat cruise",
      "Wine tasting tour",
      "Traditional Greek cooking class"
    ]
  },
  {
    id: "6",
    title: "Dubai Luxury Experience",
    destination: "UAE",
    duration: "5 Days",
    price: 2299,
    rating: 4.8,
    reviews: 267,
    image: "/assets/imgs/package/package.png",
    groupSize: "2-6 people",
    highlights: [
      "Burj Khalifa observation deck",
      "Desert safari with BBQ dinner",
      "Dubai Marina cruise",
      "Gold souk shopping tour"
    ]
  }
];

export default function Packages() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const filteredTours = useMemo(() => {
    return tourPackages.filter((tour) => {
      const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tour.destination.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDestination = selectedDestination === "all" || tour.destination === selectedDestination;
      const matchesPrice = tour.price >= priceRange[0] && tour.price <= priceRange[1];

      return matchesSearch && matchesDestination && matchesPrice;
    });
  }, [searchQuery, selectedDestination, priceRange]);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedDestination("all");
    setPriceRange([0, 10000]);
  };

  const navigationItems = [
    { label: "Home", href: "/", active: true },
    { label: "Tours", href: "/package", active: false },
    { label: "About", href: "about", active: false },
    { label: "Login", href: "login", active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar navigationItems={navigationItems} />
      <div className="relative w-full h-[60vh] overflow-hidden bg-white">

        {/* Background Image */}
        <Image
          className="absolute inset-0 w-full h-500 object-cover"
          alt="Background image"
          src="/assets/imgs/banner/beach.jpg"
          width={1440}
          height={500}
          priority
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Hero Section (aligned at bottom) */}
        <section className="absolute bottom-0 left-0 z-10 flex flex-col justify-end container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pb-10 sm:pb-16 md:pb-24 lg:pb-32">
          <h2 className="font-semibold text-white text-2xl sm:text-3xl md:text-4xl">
            Tour Packages
          </h2>
          <p className="text-white mt-2">
            Explore our curated selection of {filteredTours.length} amazing destinations around the world
          </p>
        </section>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-10">


        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredTours.length} {filteredTours.length === 1 ? 'package' : 'packages'}
          </p>
        </div>

        {/* Tour Grid */}
        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour) => (
              <TourPackageCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 mb-4">No tours found matching your criteria</p>
            <button
              onClick={handleReset}
              className="text-blue-600 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
